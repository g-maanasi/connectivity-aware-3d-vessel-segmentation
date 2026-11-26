#!/usr/bin/env python3
"""Validation-only multi-plane error-map diagnostic for AVT vessel segmentation.

Run from repository root with PYTHONPATH=$PWD/src.
This script reads saved checkpoints, runs inference, and saves new PNG and JSON reports.
It does not retrain, edit checkpoints, or evaluate the held-out test split.
"""

from __future__ import annotations

import argparse
import json
from pathlib import Path

import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import Patch
import numpy as np

from vessel_seg.data import discover_cases, load_case, read_nrrd
from vessel_seg.evaluate import load_model, predict
from vessel_seg.train import get_device

DEFAULT_CASES = ["Rider/R15/R15"]
CHECKPOINTS = {
    "baseline": Path("runs/repro_corrected/full/baseline/best.pt"),
    "combined": Path("runs/hu_corrected/full/combined/best.pt"),
}
COLORS = {
    "tp": (0.18, 0.86, 0.47, 0.78),
    "fp": (0.98, 0.38, 0.38, 0.78),
    "fn": (0.38, 0.61, 0.99, 0.87),
    "truth": (1.00, 0.69, 0.22, 0.84),
}


def indices_to_inspect(mask: np.ndarray) -> list[tuple[int, int, str]]:
    # Three separated positions through axis 0, plus the densest truth slice on each other axis.
    z_counts = mask.sum(axis=(1, 2), dtype=np.int64)
    occupied = np.flatnonzero(z_counts)
    if occupied.size == 0:
        raise ValueError("Empty ground-truth mask")
    # Weighted quantiles capture the vessel along the volume, not just its longest region.
    cumulative = np.cumsum(z_counts[occupied])
    quantiles = [0.20, 0.50, 0.80]
    selected = [int(occupied[np.searchsorted(cumulative, q * cumulative[-1])]) for q in quantiles]
    result = [(0, idx, f"Axis 0: vessel {int(q*100)}% position") for idx, q in zip(selected, quantiles)]
    for axis in (1, 2):
        other_axes = tuple(i for i in range(3) if i != axis)
        idx = int(np.argmax(mask.sum(axis=other_axes)))
        result.append((axis, idx, f"Axis {axis}: densest truth slice"))
    return result


def get_slice(a: np.ndarray, axis: int, index: int) -> np.ndarray:
    return np.take(a, index, axis=axis)


def overlay(ct: np.ndarray, truth: np.ndarray, prediction: np.ndarray | None):
    rgba = np.zeros((*ct.shape, 4), dtype=np.float32)
    if prediction is None:
        rgba[truth] = COLORS["truth"]
    else:
        rgba[truth & prediction] = COLORS["tp"]
        rgba[(~truth) & prediction] = COLORS["fp"]
        rgba[truth & (~prediction)] = COLORS["fn"]
    return rgba


def save_multiplane(case_id, image, truth, predictions, path):
    cuts = indices_to_inspect(truth)
    fig, axes = plt.subplots(3, len(cuts), figsize=(23, 12), facecolor="#f7f9fc")
    rows = [("Ground truth", None), ("Baseline errors", predictions["baseline"]),
            ("Combined errors", predictions["combined"])]
    for j, (axis, idx, title) in enumerate(cuts):
        ct_slice = get_slice(image, axis, idx)
        gt_slice = get_slice(truth, axis, idx)
        for i, (rowname, pred_vol) in enumerate(rows):
            ax = axes[i, j]
            ax.imshow(ct_slice, cmap="gray", vmin=0.0, vmax=1.0, interpolation="nearest")
            pred_slice = None if pred_vol is None else get_slice(pred_vol, axis, idx)
            ax.imshow(overlay(ct_slice, gt_slice, pred_slice), interpolation="nearest")
            if i == 0:
                ax.set_title(f"{title}\nslice #{idx}", fontsize=11, fontweight="medium")
            if j == 0:
                ax.set_ylabel(rowname, fontsize=13, fontweight="bold", labelpad=12)
            ax.set_xticks([])
            ax.set_yticks([])
    fig.suptitle(f"Validation case: {case_id} — five views of the same 3D volume", fontsize=19, fontweight="bold")
    fig.legend(handles=[
        Patch(facecolor=COLORS["truth"], label="Reference vessel (top row)"),
        Patch(facecolor=COLORS["tp"], label="Correct vessel (TP)"),
        Patch(facecolor=COLORS["fp"], label="Extra predicted vessel (FP)"),
        Patch(facecolor=COLORS["fn"], label="Missed vessel (FN)"),
    ], loc="lower center", ncol=4, bbox_to_anchor=(0.5, 0.012), fontsize=11)
    fig.tight_layout(rect=(0.018, 0.06, 1, 0.95), w_pad=1.1, h_pad=1.6)
    fig.savefig(path, dpi=135, bbox_inches="tight")
    plt.close(fig)


def measures(truth: np.ndarray, pred: np.ndarray) -> dict:
    t = int(np.count_nonzero(truth))
    p = int(np.count_nonzero(pred))
    tp = int(np.count_nonzero(truth & pred))
    fp = p - tp
    fn = t - tp
    return {
        "reference_voxels": t,
        "prediction_voxels": p,
        "true_positive_voxels": tp,
        "false_positive_voxels": fp,
        "false_negative_voxels": fn,
        "precision": tp / p if p else None,
        "recall": tp / t if t else None,
        "dice": 2 * tp / (p + t) if p + t else None,
        "predicted_to_reference_volume_ratio": p / t if t else None,
    }


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--case", action="append", dest="cases", help="Validation case ID; may be repeated")
    parser.add_argument("--device", choices=["auto", "cpu", "cuda", "mps"], default="auto")
    parser.add_argument("--output", type=Path, default=Path("runs/repro_corrected/diagnostic_multiplane"))
    args = parser.parse_args()

    root = Path.cwd()
    with (root / "configs/splits.json").open() as f:
        splits = json.load(f)
    allowed = set(splits["val"])
    targets = args.cases or DEFAULT_CASES
    invalid = [x for x in targets if x not in allowed]
    if invalid:
        parser.error(f"Only validation cases are allowed. Invalid: {invalid}")
    if len(targets) != len(set(targets)):
        parser.error("Duplicate case IDs supplied")
    if not all((root / file).exists() for file in CHECKPOINTS.values()):
        missing = [str(p) for p in CHECKPOINTS.values() if not (root / p).exists()]
        parser.error(f"Missing checkpoint(s): {missing}")

    device = get_device(args.device)
    print(f"Device: {device}", flush=True)
    models, spacings = {}, []
    for mode, checkpoint in CHECKPOINTS.items():
        model, spacing = load_model(checkpoint, mode, device)
        models[mode] = model
        spacings.append(spacing)
    if not np.allclose(spacings, spacings[0]):
        raise RuntimeError(f"Checkpoint spacing mismatch: {spacings}")
    print(f"Shared voxel spacing: {spacings[0]} mm", flush=True)
    catalog = {case.case_id: case for case in discover_cases(root / "data/raw")}
    args.output.mkdir(parents=True, exist_ok=True)

    for case_id in targets:
        if case_id not in catalog:
            raise RuntimeError(f"Missing scan from data/raw: {case_id}")
        case = catalog[case_id]
        print(f"\nAnalyzing {case_id}", flush=True)
        raw_scan, scan_affine = read_nrrd(case.scan)
        raw_mask, mask_affine = read_nrrd(case.mask)
        metadata = {
            "case_id": case_id,
            "scan_shape_raw": list(raw_scan.shape),
            "mask_shape_raw": list(raw_mask.shape),
            "scan_spacing_mm_raw": np.linalg.norm(scan_affine[:3,:3], axis=0).tolist(),
            "mask_spacing_mm_raw": np.linalg.norm(mask_affine[:3,:3], axis=0).tolist(),
            "scan_mask_affines_match_before_resampling": bool(np.allclose(scan_affine, mask_affine, atol=1e-3)),
            "raw_scan_intensity_quantiles_1_50_99": np.percentile(raw_scan, [1, 50, 99]).tolist(),
            "warning": "A raw scan/mask affine difference may be expected; load_case resamples the reference onto the scan grid.",
        }
        del raw_scan, raw_mask
        volume = load_case(case, spacing_mm=float(spacings[0]), hu_offset=None)
        truth = volume.mask.astype(bool)
        print(f"  Aligned shape: {volume.image.shape} | reference voxels: {truth.sum():,}", flush=True)
        metadata["aligned_shape"] = list(volume.image.shape)
        metadata["normalized_ct_reference_intensity_quantiles_10_50_90"] = np.percentile(
            volume.image[truth], [10,50,90]
        ).tolist()
        preds = {}
        for mode, model in models.items():
            print(f"  Predicting with {mode}...", flush=True)
            preds[mode] = predict(model, volume.image, device)
            metadata[mode] = measures(truth, preds[mode])
            s = metadata[mode]
            print(f"    Dice={s['dice']:.4f} Precision={s['precision']:.4f} Recall={s['recall']:.4f} "
                  f"Volume ratio={s['predicted_to_reference_volume_ratio']:.2f}x", flush=True)
        stem = case_id.replace("/", "_").replace(" ", "_")
        png = args.output / f"{stem}_multiplane.png"
        info = args.output / f"{stem}_diagnostics.json"
        save_multiplane(case_id, volume.image, truth, preds, png)
        info.write_text(json.dumps(metadata, indent=2) + "\n")
        print(f"  Saved: {png}", flush=True)
        print(f"  Saved: {info}", flush=True)
    print("\nDiagnostic complete. No checkpoint was changed; no test scan was used.", flush=True)


if __name__ == "__main__":
    main()
