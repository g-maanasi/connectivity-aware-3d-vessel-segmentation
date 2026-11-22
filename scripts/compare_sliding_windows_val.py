"""Reproducible AVT validation-only sliding-window overlap/blending comparison.

Never uses test scans, changes training files, or overwrites original evaluation.
Example pilot:
  PYTHONPATH="$PWD/src" python -u scripts/compare_sliding_windows_val.py \
      --case Rider/R15/R15 --modes combined \
      --overlaps 0.25 0.50 --blends constant \
      --device mps --output runs/repro_corrected/window_pilot_constant
"""

import argparse
import csv
import gc
import hashlib
import json
import math
import time
from pathlib import Path

import monai
import numpy as np
import torch
from monai.inferers import sliding_window_inference

from vessel_seg.data import discover_cases, load_case
from vessel_seg.evaluate import load_model
from vessel_seg.metrics import bootstrap_ci, compute_metrics
from vessel_seg.train import get_device

CHECKPOINTS = {
    "baseline": Path("runs/repro_corrected/full/baseline/best.pt"),
    "combined": Path("runs/hu_corrected/full/combined/best.pt"),
}
FIELDS = [
    "case_id", "mode", "overlap", "blend", "threshold", "dice", "cldice",
    "recall", "precision", "hd95_mm", "predicted_to_true_volume",
    "inference_seconds", "valid_prediction_voxels", "reference_voxels",
]
METRICS = [
    "dice", "cldice", "recall", "precision", "hd95_mm",
    "predicted_to_true_volume", "inference_seconds",
]


def sha256(path):
    h = hashlib.sha256()
    with path.open("rb") as f:
        for piece in iter(lambda: f.read(1024 * 1024), b""):
            h.update(piece)
    return h.hexdigest()


def estimate_window_count(shape, overlap, roi_size=96):
    step = max(int(roi_size * (1 - overlap)), 1)
    return math.prod(max(math.ceil(max(n - roi_size, 0) / step) + 1, 1) for n in shape)


def write_summary(rows, output, modes, overlaps, blends):
    summaries = []
    for mode in modes:
        for overlap in overlaps:
            for blend in blends:
                selected = [r for r in rows
                            if r["mode"] == mode and r["overlap"] == f"{overlap:.2f}"
                            and r["blend"] == blend]
                if not selected:
                    continue
                record = {"mode": mode, "overlap": f"{overlap:.2f}", "blend": blend,
                          "cases": len({r["case_id"] for r in selected})}
                for metric in METRICS:
                    mean, low, high, valid_n = bootstrap_ci([float(r[metric]) for r in selected])
                    record[metric] = mean
                    record[f"{metric}_ci_low"] = low
                    record[f"{metric}_ci_high"] = high
                    record[f"{metric}_valid_cases"] = valid_n
                summaries.append(record)

    if summaries:
        with (output / "summary.csv").open("w", newline="") as f:
            writer = csv.DictWriter(f, fieldnames=list(summaries[0]))
            writer.writeheader()
            writer.writerows(summaries)

        print("\n=== VALIDATION COMPARISON (per-case means) ===", flush=True)
        print("Model     Overlap  Blend     N   Dice  clDice  Recall  Prec  HD95mm  VolRatio  Infer(s)")
        for row in summaries:
            print(f"{row['mode']:<9} {row['overlap']:<8} {row['blend']:<9} "
                  f"{row['cases']:>2} {row['dice']:.3f}  {row['cldice']:.3f}   "
                  f"{row['recall']:.3f}  {row['precision']:.3f}   "
                  f"{row['hd95_mm']:.1f}    {row['predicted_to_true_volume']:.2f}     "
                  f"{row['inference_seconds']:.1f}", flush=True)
        print("Confidence intervals and valid-case counts are saved in summary.csv")


def main():
    p = argparse.ArgumentParser(description="Validation-only sliding window overlap + blending experiment")
    p.add_argument("--case", default="Rider/R15/R15", help="Exact validation ID or 'all' (8 cases)")
    p.add_argument("--modes", nargs="+", choices=tuple(CHECKPOINTS), default=["combined"])
    p.add_argument("--overlaps", nargs="+", type=float, default=[0.25, 0.50])
    p.add_argument("--blends", nargs="+", choices=["constant", "gaussian"], default=["constant"])
    p.add_argument("--device", choices=["mps", "cuda", "cpu", "auto"], default="mps")
    p.add_argument("--output", type=Path, required=True)
    args = p.parse_args()

    if len(args.modes) != len(set(args.modes)):
        p.error("Do not repeat a model")
    if any(not (0 <= x < 1) for x in args.overlaps):
        p.error("Each overlap must be between 0 and 1 (exclusive of 1)")
    if len(args.overlaps) != len(set(args.overlaps)) or len(args.blends) != len(set(args.blends)):
        p.error("Do not repeat overlap or blending entries")
    if any(x >= 0.75 for x in args.overlaps):
        print("WARNING: >=75% overlap may require dramatically more inference windows")

    splits = json.loads(Path("configs/splits.json").read_text())
    val_ids = splits["val"]
    assert not (set(val_ids) & set(splits["test"])), "Validation/test leakage"
    case_ids = val_ids if args.case == "all" else [args.case]
    if not set(case_ids).issubset(set(val_ids)):
        p.error("Only validation cases are permitted. Use --case all or an exact validation ID")

    case_by_id = {c.case_id: c for c in discover_cases(Path("data/raw"))}
    missing = [case_id for case_id in case_ids if case_id not in case_by_id]
    if missing:
        raise FileNotFoundError(f"Missing validation scans: {missing}")
    for mode in args.modes:
        if not CHECKPOINTS[mode].is_file():
            raise FileNotFoundError(CHECKPOINTS[mode])

    signature = {
        "validation_case_ids": case_ids,
        "modes": args.modes,
        "overlaps": args.overlaps,
        "blends": args.blends,
        "threshold": 0.5,
        "checkpoints": {
            mode: {"path": str(CHECKPOINTS[mode]), "sha256": sha256(CHECKPOINTS[mode])}
            for mode in args.modes
        },
        "preprocessing": "automatic cohort HU offsets; 1 mm spacing",
        "inference": "MONAI sliding_window_inference; 96^3 ROI; sw_batch_size=1; argmax",
        "monai_version": monai.__version__,
        "torch_version": torch.__version__,
    }
    args.output.mkdir(parents=True, exist_ok=True)
    info_path = args.output / "run_info.json"
    csv_path = args.output / "per_case_metrics.csv"
    if info_path.exists():
        if json.loads(info_path.read_text()) != signature:
            raise RuntimeError("Output settings/checkpoint hashes do not match. Use a NEW output directory")
    else:
        if csv_path.exists():
            raise RuntimeError("Existing CSV without provenance file; use a NEW output directory")
        info_path.write_text(json.dumps(signature, indent=2))

    needs_header = not csv_path.exists() or csv_path.stat().st_size == 0
    previous = []
    if csv_path.exists():
        with csv_path.open(newline="") as f:
            previous = list(csv.DictReader(f))
    completed = {(r["case_id"], r["mode"], r["overlap"], r["blend"]) for r in previous}

    device = get_device(args.device)
    models = {}
    spacings = []
    for mode in args.modes:
        models[mode], spacing = load_model(CHECKPOINTS[mode], mode, device)
        spacings.append(spacing)
    if len(set(spacings)) != 1:
        raise ValueError("Model checkpoints use different voxel spacings")

    with csv_path.open("a", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=FIELDS)
        if needs_header:
            writer.writeheader()
            f.flush()

        for case_id in case_ids:
            print(f"\nCASE {case_id}", flush=True)
            volume = load_case(case_by_id[case_id], spacing_mm=spacings[0], hu_offset=None)
            image = volume.image
            truth = volume.mask.astype(bool)
            spacing = np.linalg.norm(volume.affine[:3, :3], axis=0)
            reference_count = np.count_nonzero(truth)
            scan = torch.from_numpy(np.ascontiguousarray(image[None, None], dtype=np.float32))
            for mode in args.modes:
                for overlap in args.overlaps:
                    for blend in args.blends:
                        key = (case_id, mode, f"{overlap:.2f}", blend)
                        if key in completed:
                            print(f"  {mode} {overlap:.2f} {blend}: already done", flush=True)
                            continue
                        windows = estimate_window_count(image.shape, overlap)
                        print(f"  {mode:8s} overlap={overlap:.2f} blend={blend:8s} "
                              f"~{windows} windows; running...", flush=True)
                        start = time.perf_counter()
                        with torch.inference_mode():
                            logits = sliding_window_inference(
                                scan, roi_size=(96, 96, 96), sw_batch_size=1,
                                predictor=models[mode], overlap=overlap,
                                mode=blend, sw_device=device, device=torch.device("cpu"),
                            )
                            pred = logits.argmax(dim=1)[0].numpy().astype(bool)
                        elapsed = time.perf_counter() - start
                        del logits
                        count = np.count_nonzero(pred)
                        tp = np.count_nonzero(pred & truth)
                        scores = compute_metrics(pred, truth, spacing)
                        row = {
                            "case_id": case_id, "mode": mode, "overlap": f"{overlap:.2f}",
                            "blend": blend, "threshold": "0.50", **scores,
                            "precision": float(tp / count) if count else 0.0,
                            "predicted_to_true_volume": float(count / reference_count),
                            "inference_seconds": round(elapsed, 2),
                            "valid_prediction_voxels": int(count),
                            "reference_voxels": int(reference_count),
                        }
                        writer.writerow(row)
                        f.flush()
                        completed.add(key)
                        print(f"    Dice={scores['dice']:.4f} clDice={scores['cldice']:.4f} "
                              f"Recall={scores['recall']:.4f} Precision={row['precision']:.4f} "
                              f"HD95={scores['hd95_mm']:.2f}mm inference={elapsed:.1f}s", flush=True)
                        del pred
                        gc.collect()
            del scan, volume, image, truth
            gc.collect()

    with csv_path.open(newline="") as f:
        rows = list(csv.DictReader(f))
    expected = len(case_ids) * len(args.modes) * len(args.overlaps) * len(args.blends)
    if len(rows) != expected:
        raise RuntimeError(f"Expected {expected} result rows, got {len(rows)}; check for interrupted runs")
    write_summary(rows, args.output, args.modes, args.overlaps, args.blends)
    print(f"\nSaved to {args.output}", flush=True)


if __name__ == "__main__":
    main()
