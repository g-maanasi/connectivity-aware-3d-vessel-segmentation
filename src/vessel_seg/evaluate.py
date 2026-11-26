# Dice - Overlap between predicted vessels and ground truth
# clDice - How well vessel centerlines are perserved, are they connected correctly?
# Recall - Proption of true vessel voxels detected, how many actual vessels did the model find?
# HD95 - 95th percentile boundary distance between predicted and ground truth vessel voxels, how accurate are the vessel boundaries?

import argparse
import csv
import json
import time
from pathlib import Path

import matplotlib.pyplot as plt
import numpy as np
import torch
from monai.inferers import sliding_window_inference

from .data import discover_cases, load_case
from .metrics import METRICS, bootstrap_ci, compute_metrics
from .model import build_model
from .postprocess import keep_largest_components
from .train import get_device


def write_csv(path, rows):
    """Write rows with matching keys to a CSV file."""
    with path.open("w", newline="") as file:
        writer = csv.DictWriter(file, fieldnames=list(rows[0]))
        writer.writeheader()
        writer.writerows(rows)

def load_model(path, mode, device):
    """Restore a U-Net and its training voxel spacing."""
    checkpoint = torch.load(path, map_location="cpu", weights_only=True)
    if checkpoint["mode"] != mode:
        raise ValueError(f"Wrong checkpoint mode in {path}")
    if checkpoint.get("patch_size", 96) != 96:
        raise ValueError("Expected training patches of size 96")
    model = build_model().to(device)
    model.load_state_dict(checkpoint["model_state_dict"])
    return model.eval(), float(checkpoint["spacing_mm"])


def predict(model, image, device):
    """Stitch 96³ predictions into a full-volume binary vessel mask."""
    scan = torch.from_numpy(np.ascontiguousarray(image[None, None], dtype=np.float32))
    with torch.inference_mode():
        logits = sliding_window_inference(
            scan, (96, 96, 96), 1, model,
            overlap=0.25, sw_device=device, device=torch.device("cpu"),
        )
        return logits.argmax(dim=1)[0].numpy().astype(bool)


def save_comparison(path, image, truth, predictions):
    """Save a CT slice, ground truth, and both model predictions side by side."""
    slice_index = int(np.argmax(truth.sum(axis=(1, 2))))
    panels = [("CT", None), ("Ground truth", truth)]
    panels += [(mode.capitalize(), mask) for mode, mask in predictions.items()]
    fig, axes = plt.subplots(1, len(panels), figsize=(4 * len(panels), 4))
    for ax, (name, mask) in zip(axes, panels):
        ax.imshow(image[slice_index], cmap="gray", vmin=0, vmax=1)
        if mask is not None:
            overlay = np.ma.masked_where(~mask[slice_index], mask[slice_index])
            ax.imshow(overlay, cmap="autumn", alpha=0.45, vmin=0, vmax=1)
        ax.set_title(name)
        ax.axis("off")
    fig.tight_layout()
    fig.savefig(path, dpi=130)
    plt.close(fig)


def evaluate(args):
    """Run full-volume inference and summarize metrics per scan."""
    device = get_device(args.device)
    cases = {case.case_id: case for case in discover_cases(Path("data/raw"))}
    with Path("configs/splits.json").open() as file:
        splits = json.load(file)
    all_ids = splits["train"] + splits["val"] + splits["test"]
    if len(all_ids) != len(set(all_ids)) or set(all_ids) != set(cases):
        raise ValueError("Saved train/val/test splits do not match the AVT dataset")
    case_ids = splits[args.split][:args.max_cases or None]
    if not case_ids:
        raise ValueError("No scans selected for evaluation")

    # Do not mix a short validation check or post-processed runs with the final results.
    suffix = ("_smoke" if args.max_cases else "") + (f"_lcc{args.keep_largest}" if args.keep_largest else "")
    output = Path(args.output_root) / (args.split + suffix)
    output.mkdir(parents=True, exist_ok=True)

    # Per-mode checkpoint overrides, e.g. --checkpoint baseline=runs/repro_corrected/full/baseline/best.pt
    overrides = dict(spec.split("=", 1) for spec in args.checkpoint)

    models = {}
    spacings = []
    for mode in args.modes:
        checkpoint_path = Path(overrides.get(mode, Path(args.checkpoint_dir) / mode / "best.pt"))
        model, spacing = load_model(checkpoint_path, mode, device)
        models[mode] = model
        spacings.append(spacing)
    if len(set(spacings)) != 1:
        raise ValueError("Models were trained with different voxel spacing")

    rows = []
    for i, case_id in enumerate(case_ids, 1):
        print(f"[{i}/{len(case_ids)}] {case_id}", flush=True)
        volume = load_case(cases[case_id], spacing_mm=spacings[0], hu_offset=args.hu_offset)
        truth = volume.mask.astype(bool)
        spacing = np.linalg.norm(volume.affine[:3, :3], axis=0)
        previews = {}

        for mode, model in models.items():
            pred = predict(model, volume.image, device)
            if args.keep_largest:
                pred = keep_largest_components(pred, args.keep_largest)
            scores = compute_metrics(pred, truth, spacing)
            
            # Calculate the proportion of predicted vessels that are correct
            true_positive = np.count_nonzero(pred & truth)

            precision = true_positive / max(np.count_nonzero(pred), 1)

            print(f"  {mode} precision: {precision:.4f}")
            print(
                "  Predicted / actual vessel volume:",
                round(np.count_nonzero(pred) / max(np.count_nonzero(truth), 1), 2)
            )

            
            rows.append({"case_id": case_id, "mode": mode, **scores})
            print(f"  {mode}: " + ", ".join(f"{k}={v:.4f}" for k, v in scores.items()), flush=True)
            if i == 1:
                previews[mode] = pred

        # One same-case comparison figure for the report.
        if i == 1:
            save_comparison(output / "comparison.png", volume.image, truth, previews)

    write_csv(output / "per_case_metrics.csv", rows)

    summary = []
    for mode in args.modes:
        selected = [r for r in rows if r["mode"] == mode]
        for metric in METRICS:
            mean, low, high, n = bootstrap_ci([r[metric] for r in selected])
            summary.append({"mode": mode, "metric": metric, "mean": mean,
                            "ci_low": low, "ci_high": high, "valid_cases": n})
    write_csv(output / "summary.csv", summary)

    # Per-cohort breakdown: the AVT set mixes three acquisition cohorts
    # (Dongyang, KiTS, Rider) with different scanners and intensity quirks,
    # so report each separately to expose cohort-specific failures.
    cohorts = sorted({r["case_id"].split("/")[0] for r in rows})
    if len(cohorts) > 1:
        by_cohort = []
        for cohort in cohorts:
            for mode in args.modes:
                selected = [r for r in rows
                            if r["mode"] == mode and r["case_id"].startswith(cohort + "/")]
                for metric in METRICS:
                    mean, low, high, n = bootstrap_ci([r[metric] for r in selected])
                    by_cohort.append({"cohort": cohort, "mode": mode, "metric": metric,
                                      "mean": mean, "ci_low": low, "ci_high": high,
                                      "valid_cases": n})
        write_csv(output / "summary_by_cohort.csv", by_cohort)

    if set(args.modes) == {"baseline", "combined"}:
        from scipy.stats import wilcoxon

        by_mode = {mode: {r["case_id"]: r for r in rows if r["mode"] == mode}
                   for mode in args.modes}
        paired = []
        for metric in METRICS:
            differences = [by_mode["combined"][c][metric] -
                           by_mode["baseline"][c][metric] for c in case_ids]
            mean, low, high, n = bootstrap_ci(differences)
            # Wilcoxon signed-rank: nonparametric paired test alongside the
            # bootstrap CI. NaN pairs (undefined metrics) are excluded.
            finite = [d for d in differences if np.isfinite(d)]
            try:
                p_value = float(wilcoxon(finite).pvalue) if len(finite) >= 5 else float("nan")
            except ValueError:  # e.g. all differences are zero
                p_value = float("nan")
            paired.append({"metric": metric, "combined_minus_baseline": mean,
                           "ci_low": low, "ci_high": high, "valid_pairs": n,
                           "wilcoxon_p": p_value})
        write_csv(output / "paired_difference.csv", paired)

    # Record exactly how these numbers were produced.
    run_info = {k: str(v) if isinstance(v, Path) else v for k, v in vars(args).items()}
    run_info["checkpoints"] = {
        mode: str(overrides.get(mode, Path(args.checkpoint_dir) / mode / "best.pt"))
        for mode in args.modes
    }
    run_info["case_ids"] = case_ids
    run_info["timestamp"] = time.strftime("%Y-%m-%dT%H:%M:%S")
    with (output / "run_info.json").open("w") as file:
        json.dump(run_info, file, indent=2)

    print(f"Saved CSV metrics and comparison.png to {output}")
    print("HD95 is undefined (NaN) when only one mask is empty; check valid_cases.")


def main():
    parser = argparse.ArgumentParser(description="Evaluate AVT 3D vessel segmentation")
    parser.add_argument("--split", choices=["val", "test"], default="val")
    parser.add_argument("--modes", nargs="+", choices=["baseline", "connectivity", "combined"],
                        default=["baseline", "connectivity"])
    parser.add_argument("--max-cases", type=int, default=0,
                        help="First N validation scans for a quick check; 0 = all")
    parser.add_argument("--device", choices=["auto", "cpu", "cuda", "mps"], default="auto")
    parser.add_argument("--hu-offset", type=float, default=None,
                        help="Use the same intensity offset as training")
    parser.add_argument("--checkpoint-dir", default="runs/hu_corrected/full",
                        help="Directory holding <mode>/best.pt checkpoints")
    parser.add_argument("--checkpoint", action="append", default=[], metavar="MODE=PATH",
                        help="Override one mode's checkpoint, e.g. baseline=runs/repro_corrected/full/baseline/best.pt")
    parser.add_argument("--output-root", default="runs/evaluation",
                        help="Where to write per-split result folders")
    parser.add_argument("--keep-largest", type=int, default=0, metavar="K",
                        help="Keep only the K largest connected components of each prediction "
                             "(0 = off). Results are written to a separate _lccK folder.")
    args = parser.parse_args()
    if args.max_cases < 0:
        parser.error("--max-cases must be nonnegative")
    if args.keep_largest < 0:
        parser.error("--keep-largest must be nonnegative")
    for spec in args.checkpoint:
        if "=" not in spec:
            parser.error(f"--checkpoint needs MODE=PATH, got {spec!r}")
    evaluate(args)

if __name__ == "__main__":
    main()

