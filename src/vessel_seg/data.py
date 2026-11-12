# src/vessel_seg/data.py
# A loader and preprocessing code for the AVT dataset. Turns a raw CT angiography scan and
# its vessel annotation into two aligned 3D arrays for the training of a segmentation model.

import argparse
from dataclasses import dataclass
from pathlib import Path
import nrrd
import numpy as np
from scipy.ndimage import affine_transform

@dataclass(frozen=True)
class Case:
    case_id: str
    scan: Path
    mask: Path

@dataclass(frozen=True)
class Volume:
    image: np.ndarray
    mask: np.ndarray
    affine: np.ndarray

def discover_cases(root: Path) -> list[Case]:
    """Pair files in each cohort directory by their shared filename stem."""
    scans = {}
    masks = {}

    for path in sorted(root.glob("**/*.nrrd")):
        relative = path.relative_to(root).as_posix()
        if relative.endswith(".seg.nrrd"):
            masks[relative.replace(".seg.nrrd", ".nrrd")] = path
        elif relative.endswith(".nrrd"):
            scans[relative] = path

    return [Case(case_id=stem, scan=scans[stem], mask=masks[stem]) for stem in scans.keys() & masks.keys()]