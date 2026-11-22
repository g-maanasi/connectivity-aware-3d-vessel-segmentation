"""Validation-only threshold sweep for AVT segmentation (no retraining)."""
import argparse
import csv
import hashlib
import json
from pathlib import Path

import numpy as np
import torch
from monai.inferers import sliding_window_inference

from vessel_seg.data import discover_cases, load_case
from vessel_seg.evaluate import load_model
from vessel_seg.metrics import bootstrap_ci, compute_metrics
from vessel_seg.train import get_device

THRESHOLDS = (0.20, 0.35, 0.50, 0.65, 0.80)
CHECKPOINTS = {
    "baseline": Path("runs/repro_corrected/full/baseline/best.pt"),
    "combined": Path("runs/hu_corrected/full/combined/best.pt"),
}
FIELDS = (
    "case_id", "mode", "threshold", "dice", "cldice", "recall",
    "precision", "hd95_mm", "predicted_to_true_volume",
)
METRICS = FIELDS[3:]


def sha256(path):
    h = hashlib.sha256()
    with path.open("rb") as f:
        for chunk in iter(lambda: f.read(1024 * 1024), b""):
            h.update(chunk)
    return h.hexdigest()


def save_summary(rows, output):
    summary = []
    for mode in CHECKPOINTS:
        for t in THRESHOLDS:
            group = [r for r in rows if r["mode"] == mode and float(r["threshold"]) == t]
            for metric in METRICS:
                mean, low, high, count = bootstrap_ci([float(r[metric]) for r in group])
                summary.append({
                    "mode": mode, "threshold": f"{t:.2f}", "metric": metric,
                    "mean": mean, "ci_low": low, "ci_high": high,
                    "valid_cases": count,
                })
    with (output / "summary.csv").open("w", newline="") as f:
        w = csv.DictWriter(f, fieldnames=list(summary[0]))
        w.writeheader()
        w.writerows(summary)

    print("\n=== VALIDATION MEANS (per-scan averages) ===")
    print("Model       Thres  Dice   clDice Recall Precis HD95mm  VolRatio")
    for mode in CHECKPOINTS:
        for t in THRESHOLDS:
            data = {r["metric"]: r["mean"] for r in summary
                    if r["mode"] == mode and float(r["threshold"]) == t}
            print(f"{mode:<11} {t:.2f}  {data['dice']:5.3f}  "
                  f"{data['cldice']:5.3f}  {data['recall']:5.3f}  "
                  f"{data['precision']:5.3f}  {data['hd95_mm']:6.1f}  "
                  f"{data['predicted_to_true_volume']:6.2f}")
    print(f"\nSaved results in: {output}")
    print("Check summary.csv for per-metric 95% bootstrap intervals and valid_cases.")


def main():
    parser = argparse.ArgumentParser(description="AVT validation threshold sweep")
    parser.add_argument("--max-cases", type=int, default=0,
                        help="Use 1 for a quick smoke test, 0 for all 8 validation scans")
    parser.add_argument("--output", required=True, type=Path)
    parser.add_argument("--device", default="mps", choices=["mps", "cuda", "cpu", "auto"])
    args = parser.parse_args()
    if args.max_cases < 0:
        parser.error("--max-cases must be >= 0")

    splits = json.loads(Path("configs/splits.json").read_text())
    assert not (set(splits["val"]) & set(splits["test"])), "Validation/test overlap!"
    all_val_ids = splits["val"]
    assert len(all_val_ids) == 8, "Expected eight validation scans"
    val_ids = all_val_ids[:args.max_cases or None]
    case_by_id = {c.case_id: c for c in discover_cases(Path("data/raw"))}
    if any(cid not in case_by_id for cid in val_ids):
        raise RuntimeError("Missing validation scan files")
    for path in CHECKPOINTS.values():
        if not path.is_file():
            raise FileNotFoundError(path)

    # Refuse to mix results from different checkpoints or scan subsets.
    signature = {
        "validation_case_ids": val_ids,
        "thresholds": list(THRESHOLDS),
        "checkpoints": {mode: {"path": str(path), "sha256": sha256(path)}
                        for mode, path in CHECKPOINTS.items()},
        "preprocessing": "automatic cohort HU offsets; 1 mm target spacing",
        "inference": "MONAI 96^3 sliding-window; 25% overlap; two-logit softmax",
    }
    args.output.mkdir(parents=True, exist_ok=True)
    info_path = args.output / "run_info.json"
    if info_path.exists():
        if json.loads(info_path.read_text()) != signature:
            raise RuntimeError("Existing output was made with different settings. Use a NEW --output folder.")
    else:
        if (args.output / "per_case_metrics.csv").exists():
            raise RuntimeError("Output CSV already exists without run_info.json; use a new folder")
        info_path.write_text(json.dumps(signature, indent=2))

    csv_path = args.output / "per_case_metrics.csv"
    needs_header = not csv_path.exists() or csv_path.stat().st_size == 0
    previous = []
    if not needs_header:
        with csv_path.open(newline="") as f:
            previous = list(csv.DictReader(f))
    finished = {(r["case_id"], r["mode"], r["threshold"]) for r in previous}

    device = get_device(args.device)
    models, spacings = {}, []
    for mode, path in CHECKPOINTS.items():
        models[mode], spacing = load_model(path, mode, device)
        spacings.append(spacing)
    if len(set(spacings)) != 1:
        raise ValueError("Models use different voxel spacing")

    with csv_path.open("a", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=FIELDS)
        if needs_header:
            writer.writeheader()
            f.flush()

        for i, case_id in enumerate(val_ids, 1):
            print(f"\n[{i}/{len(val_ids)}] {case_id}", flush=True)
            volume = load_case(case_by_id[case_id], spacing_mm=spacings[0], hu_offset=None)
            image = volume.image
            truth = volume.mask.astype(bool)
            spacing = np.linalg.norm(volume.affine[:3, :3], axis=0)
            true_count = np.count_nonzero(truth)

            for mode, model in models.items():
                pending = [t for t in THRESHOLDS
                           if (case_id, mode, f"{t:.2f}") not in finished]
                if not pending:
                    print(f"  {mode}: already completed", flush=True)
                    continue

                # ONE inference pass produces probabilities for ALL thresholds.
                scan = torch.from_numpy(np.ascontiguousarray(image[None, None], dtype=np.float32))
                with torch.inference_mode():
                    logits = sliding_window_inference(
                        scan, (96, 96, 96), 1, model,
                        overlap=0.25, sw_device=device, device=torch.device("cpu"),
                    )
                    probabilities = torch.softmax(logits, dim=1)[0, 1].numpy().copy()
                del scan, logits

                for t in pending:
                    pred = probabilities > t  # At 0.50, matches two-class argmax.
                    scores = compute_metrics(pred, truth, spacing)
                    count = np.count_nonzero(pred)
                    tp = np.count_nonzero(pred & truth)
                    row = {
                        "case_id": case_id, "mode": mode, "threshold": f"{t:.2f}",
                        **scores,
                        "precision": tp / count if count else 0.0,
                        "predicted_to_true_volume": count / true_count,
                    }
                    writer.writerow(row)
                    f.flush()  # Results survive an interrupted long sweep.
                    finished.add((case_id, mode, f"{t:.2f}"))
                    print(f"  {mode:8s} t={t:.2f} | Dice={scores['dice']:.3f} "
                          f"clDice={scores['cldice']:.3f} "
                          f"Recall={scores['recall']:.3f} "
                          f"Precision={row['precision']:.3f} "
                          f"HD95={scores['hd95_mm']:.1f} mm", flush=True)
                del probabilities
            del volume, image, truth

    with csv_path.open(newline="") as f:
        rows = list(csv.DictReader(f))
    expected = len(val_ids) * len(CHECKPOINTS) * len(THRESHOLDS)
    if len(rows) != expected:
        raise RuntimeError(f"Expected {expected} rows; found {len(rows)}. Please inspect CSV.")
    save_summary(rows, args.output)


if __name__ == "__main__":
    main()
