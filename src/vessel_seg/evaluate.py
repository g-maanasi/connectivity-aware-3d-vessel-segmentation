# Dice - Overlap between predicted vessels and ground truth
# clDice - How well vessel centerlines are perserved, are they connected correctly?
# Recall - Proption of true vessel voxels detected, how many actual vessels did the model find?
# HD95 - 95th percentile boundary distance between predicted and ground truth vessel voxels, how accurate are the vessel boundaries?

import argparse
import csv
import json
from pathlib import Path

import matplotlib.pyplot as plt
import numpy as np
import torch
from monai.inferers import sliding_window_inference

from .data import discover_cases, load_case
from .metrics import METRICS, bootstrap_ci, compute_metrics
from .model import build_model
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

    # Do not mix a short validation check with the final results.
    output = Path("runs/evaluation") / (args.split + ("_smoke" if args.max_cases else ""))
    output.mkdir(parents=True, exist_ok=True)

    models = {}
    spacings = []
    for mode in args.modes:
        checkpoint_path = Path("runs/full") / mode / "best.pt"
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
            scores = compute_metrics(pred, truth, spacing)
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

    if set(args.modes) == {"baseline", "connectivity"}:
        by_mode = {mode: {r["case_id"]: r for r in rows if r["mode"] == mode}
                   for mode in args.modes}
        paired = []
        for metric in METRICS:
            differences = [by_mode["connectivity"][c][metric] -
                           by_mode["baseline"][c][metric] for c in case_ids]
            mean, low, high, n = bootstrap_ci(differences)
            paired.append({"metric": metric, "connectivity_minus_baseline": mean,
                           "ci_low": low, "ci_high": high, "valid_pairs": n})
        write_csv(output / "paired_difference.csv", paired)

    print(f"Saved CSV metrics and comparison.png to {output}")
    print("HD95 is undefined (NaN) when only one mask is empty; check valid_cases.")


def main():
    parser = argparse.ArgumentParser(description="Evaluate AVT 3D vessel segmentation")
    parser.add_argument("--split", choices=["val", "test"], default="val")
    parser.add_argument("--modes", nargs="+", choices=["baseline", "connectivity"],
                        default=["baseline", "connectivity"])
    parser.add_argument("--max-cases", type=int, default=0,
                        help="First N validation scans for a quick check; 0 = all")
    parser.add_argument("--device", choices=["auto", "cpu", "cuda", "mps"], default="auto")
    parser.add_argument("--hu-offset", type=float, default=0.0,
                        help="Use the same intensity offset as training")
    args = parser.parse_args()
    if args.max_cases < 0:
        parser.error("--max-cases must be nonnegative")
    evaluate(args)

