"""Inspect original AVT CT intensity units before changing HU corrections.

Run from the repository root with PYTHONPATH=$PWD/src.
This script reads raw NRRD scans and annotations only: it does not
retrain models, alter checkpoints, or access test-set cases.
"""

from __future__ import annotations

import gc
import json
from pathlib import Path

import numpy as np

from vessel_seg.data import discover_cases, read_nrrd

TARGETS = ["Rider/R15/R15", "KiTS/K2/K2", "Dongyang/D16/D16"]
OFFSETS = {"Rider": -1024.0, "KiTS": -1024.0, "Dongyang": 0.0}
OUTPUT = Path("runs/repro_corrected/diagnostic_multiplane/hu_sanity_check.json")


def q(values):
    return [round(float(v), 3) for v in np.quantile(values, [0.1, 0.5, 0.9])]


def run():
    cases = {case.case_id: case for case in discover_cases(Path("data/raw"))}
    results = []
    rng = np.random.default_rng(2026)

    for case_id in TARGETS:
        print(f"\n=== {case_id} ===", flush=True)
        case = cases[case_id]
        scan, scan_affine = read_nrrd(case.scan)
        label, label_affine = read_nrrd(case.mask)
        same_grid = bool(
            scan.shape == label.shape
            and np.allclose(scan_affine, label_affine, rtol=0.0, atol=1e-4)
        )
        cohort = case_id.split("/")[0]
        offset = OFFSETS[cohort]
        print("Raw scan shape:", scan.shape)
        print("Raw scan and annotation share grid:", same_grid)
        print("Current cohort HU offset:", offset)

        sample_count = min(150000, scan.size)
        sample_indices = rng.integers(0, scan.size, size=sample_count)
        scan_sample = np.asarray(scan.ravel()[sample_indices], dtype=np.float32)
        result = {
            "case_id": case_id,
            "raw_scan_shape": list(scan.shape),
            "raw_scan_mask_grid_match": same_grid,
            "currently_applied_offset": offset,
            "sampled_raw_scan_quantiles_10_50_90": q(scan_sample),
            "fraction_sample_at_or_below_minus_200_after_offset": round(
                float(np.mean(scan_sample + offset <= -200)), 4
            ),
        }
        print("Raw CT sample 10/50/90 percentiles:", result["sampled_raw_scan_quantiles_10_50_90"])
        print(
            "Fraction of raw scan sample clipped at HU -200 after current offset:",
            result["fraction_sample_at_or_below_minus_200_after_offset"],
        )

        if same_grid:
            vessel = np.asarray(scan[label != 0], dtype=np.float32)
            if vessel.size:
                raw_q = q(vessel)
                shifted_q = [round(x + offset, 3) for x in raw_q]
                norm = np.clip((vessel + offset + 200) / 800, 0, 1)
                result.update({
                    "annotated_voxel_count_native": int(vessel.size),
                    "raw_annotated_vessel_quantiles_10_50_90": raw_q,
                    "shifted_vessel_quantiles_10_50_90_hu_assuming_offset": shifted_q,
                    "current_normalized_vessel_quantiles_10_50_90": q(norm),
                    "fraction_annotated_vessel_below_window_after_offset": round(
                        float(np.mean(vessel + offset <= -200)), 4
                    ),
                })
                print("Raw reference-vessel CT 10/50/90 percentiles:", raw_q)
                print("After current offset (HU assumption):", shifted_q)
                print("After clipping/scaling to [0, 1]:", result["current_normalized_vessel_quantiles_10_50_90"])
                print("Fraction of labeled vessel below display/training HU window:",
                      result["fraction_annotated_vessel_below_window_after_offset"])
            else:
                print("WARNING: no annotated vessel voxels on native grid")
        else:
            print("Scan/mask grids differ: skipping native label intensity comparison. Do not index them as if aligned.")
        results.append(result)
        del scan, scan_affine, label, label_affine, scan_sample
        gc.collect()

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT.write_text(json.dumps({"note": "Diagnostic only; not proof of HU calibration.", "cases": results}, indent=2))
    print("\nSaved:", OUTPUT)
    print("IMPORTANT: Do not change preprocessing based on these numbers alone; verify raw CT scaling and acquisition metadata first.")


if __name__ == "__main__":
    run()
