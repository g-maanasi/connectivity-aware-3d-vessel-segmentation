# Check raw CT intensity values across the three AVT cohorts

from pathlib import Path
import numpy as np

from vessel_seg.data import discover_cases, read_nrrd, load_case

cases = discover_cases(Path("data/raw"))

for cohort in ["Dongyang", "KiTS", "Rider"]:
    # Select one scan from each cohort
    case = next(
        c for c in cases
        if c.case_id.split("/")[0] == cohort
    )

    image, _ = read_nrrd(case.scan)

    # Sample voxels to avoid processing the whole array
    sample = image[::8, ::8, ::8]

    volume = load_case(case)
    vessel_values = volume.image[volume.mask != 0]

    print(f"\n{cohort}: {case.case_id}")
    print("Normalized range:", volume.image.min(), volume.image.max())
    print("Vessel percentiles:", np.percentile(vessel_values, [5, 50, 95]))
    print("Vessel voxels clipped at 1:",
          round(100 * np.mean(vessel_values >= 0.999), 2), "%")


    print(f"\n{cohort}: {case.case_id}")
    print("Minimum:", sample.min())
    print("Median:", np.median(sample))
    print("Maximum:", sample.max())
    print("1st percentile:", np.percentile(sample, 1))
    print("99th percentile:", np.percentile(sample, 99))
