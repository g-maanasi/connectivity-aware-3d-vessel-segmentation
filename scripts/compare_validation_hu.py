#!/usr/bin/env python3
"""Read-only, scan-level comparison of native annotated-vessel intensities.

Uses ONLY case IDs in configs/splits.json -> val. Reads raw AVT NRRD scan/mask
pairs using the project's vessel_seg.data.read_nrrd. It does not train, perform
inference, change preprocessing, or access held-out test cases.

From the repository root:
  PYTHONPATH="$PWD/src" python -u scripts/compare_validation_hu.py

Output:
  runs/repro_corrected/hu_validation/annotated_vessel_intensities.csv
  runs/repro_corrected/hu_validation/annotated_vessel_intensities.png
"""

from __future__ import annotations

import csv
import gc
import json
from pathlib import Path

import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import numpy as np

from vessel_seg.data import discover_cases, read_nrrd

OFFSETS = {"Dongyang": 0.0, "KiTS": -1024.0, "Rider": -1024.0}
OUTPUT = Path("runs/repro_corrected/hu_validation")


def main():
    with Path("configs/splits.json").open() as f:
        splits = json.load(f)
    selected = splits["val"]
    assert len(selected) == 8 and len(selected) == len(set(selected)), "Expected eight unique validation cases"
    assert not set(selected).intersection(splits["test"]), "Test split overlaps validation!"

    cases = {c.case_id: c for c in discover_cases(Path("data/raw"))}
    OUTPUT.mkdir(parents=True, exist_ok=True)
    results = []

    for i, case_id in enumerate(selected, 1):
        case = cases[case_id]
        cohort = case_id.split("/")[0]
        offset = OFFSETS[cohort]
        print(f"[{i}/{len(selected)}] {case_id}", flush=True)

        scan, scan_affine = read_nrrd(case.scan)
        mask, mask_affine = read_nrrd(case.mask)
        aligned = (scan.shape == mask.shape and
                   np.allclose(scan_affine, mask_affine, atol=1e-4, rtol=0))
        if not aligned:
            raise ValueError(f"Native scan/mask grids differ for {case_id}; do not index as if aligned")

        # Only the annotated vessel voxel intensities are analyzed. Native scan
        # background/padding voxels do not distort these distributions.
        vessel_raw = np.asarray(scan[mask != 0], dtype=np.float32)
        vessel_raw = vessel_raw[np.isfinite(vessel_raw)]
        if vessel_raw.size == 0:
            raise ValueError(f"No finite annotated-vessel values for {case_id}")
        corrected = vessel_raw + offset
        p10, p50, p90 = np.percentile(corrected, [10, 50, 90])
        spacing = np.linalg.norm(scan_affine[:3, :3], axis=0)
        row = {
            "case_id": case_id,
            "cohort": cohort,
            "offset_assumed": offset,
            "vessel_voxels_native": int(vessel_raw.size),
            "raw_vessel_median": round(float(np.median(vessel_raw)), 3),
            "corrected_vessel_p10": round(float(p10), 3),
            "corrected_vessel_median": round(float(p50), 3),
            "corrected_vessel_p90": round(float(p90), 3),
            "normalized_vessel_median": round(float(np.clip((p50 + 200) / 800, 0, 1)), 4),
            "fraction_vessel_below_100_hu": round(float(np.mean(corrected < 100)), 4),
            "fraction_vessel_above_200_hu": round(float(np.mean(corrected > 200)), 4),
            "native_spacing_mm": ",".join(f"{s:.3f}" for s in spacing),
        }
        results.append(row)
        print(f"    corrected annotated vessel p10/median/p90: {p10:.1f}/{p50:.1f}/{p90:.1f} assumed HU")
        print(f"    fraction <100: {row['fraction_vessel_below_100_hu']:.1%} | >200: {row['fraction_vessel_above_200_hu']:.1%}", flush=True)
        del scan, scan_affine, mask, mask_affine, vessel_raw, corrected
        gc.collect()

    csv_path = OUTPUT / "annotated_vessel_intensities.csv"
    with csv_path.open("w", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=results[0].keys())
        writer.writeheader()
        writer.writerows(results)

    # Horizontal interval plot: median and 10th--90th percentile for each scan.
    fig, ax = plt.subplots(figsize=(11.5, 5.7))
    palette = {"Dongyang": "#4778c6", "KiTS": "#119c9d", "Rider": "#8e71b5"}
    for j, row in enumerate(results):
        med = row["corrected_vessel_median"]
        p10 = row["corrected_vessel_p10"]
        p90 = row["corrected_vessel_p90"]
        color = palette[row["cohort"]]
        ax.plot([p10, p90], [j, j], color=color, linewidth=5, alpha=.72, solid_capstyle="round")
        ax.scatter([med], [j], color=color, s=95, edgecolors="white", linewidths=1.5, zorder=3)
    ax.set_yticks(range(len(results)), [r["case_id"].replace("/" + r["case_id"].split("/")[-1], "") for r in results])
    ax.invert_yaxis()
    ax.set_xlabel("Annotated-vessel intensity after current cohort offset (assumed HU)")
    ax.set_title("Validation cases: annotated-vessel intensity distribution\nDots = median; lines = 10th–90th percentile")
    ax.grid(axis="x", alpha=.25)
    ax.axvline(100, linestyle="--", linewidth=1, alpha=.45, color="gray")
    fig.tight_layout()
    png_path = OUTPUT / "annotated_vessel_intensities.png"
    fig.savefig(png_path, dpi=170)
    plt.close(fig)
    print(f"\nCSV: {csv_path}\nPlot: {png_path}", flush=True)
    print("This does NOT validate the HU offsets; check acquisition/NRRD metadata before altering preprocessing.", flush=True)


if __name__ == "__main__":
    main()
