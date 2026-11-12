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

    for path in sorted(root.rglob("*.nrrd")):
        relative = path.relative_to(root).as_posix()
        if relative.endswith(".seg.nrrd"):
            masks[relative.removesuffix(".seg.nrrd")] = path
        else:
            scans[relative.removesuffix(".nrrd")] = path

    missing = scans.keys() ^ masks.keys()
    if missing:
        raise ValueError(f"Unpaired AVT Files: {', '.join(missing)}")
    
    if not scans:
        raise ValueError(f"No AVT scan/mask pairs found under {root}")

    return [Case(key, scans[key], masks[key]) for key in scans.keys()]

def read_nrrd(path: Path) -> tuple[np.ndarray, np.ndarray]:
    values, header = nrrd.read(str(path), index_order='F')
    directions = np.asarray(header["space directions"], dtype=float)

    if values.ndim == 4 and directions.shape == (4, 3):
        layer_axes = np.flatnonzero(~np.isfinite(directions).any(axis=1))
        if path.name.endswith(".seg.nrrd") and len(layer_axes) == 1:
            layer_axis = int(layer_axes[0])
            values = np.any(values != 0, axis=layer_axis)
            directions = np.delete(directions, layer_axis, axis=0)

    if values.ndim != 3 or directions.shape != (3, 3):
        raise ValueError(f"{path}: expected three spatial axes")
    
    if not np.isfinite(directions).all() or np.linalg.matrix_rank(directions) != 3:
        raise ValueError(f"{path}: invalid directions")
    
    space = str(header.get("space", "")).lower()
    if space in ("left-posterior-superior", "lps"):
        to_ras = np.diag([-1, -1, 1])
    elif space in ("right-anterior-superior", "ras"):
        to_ras = np.eye(3)
    else:
        raise ValueError(f"{path}: unknown space {space}")
    
    origin = np.asarray(header["space origin"], dtype=float)
    if origin.shape != (3,) or not np.isfinite(origin).all():
        raise ValueError(f"{path}: invalid spatial origin")

    affine = np.eye(4)
    affine[:3, :3] = to_ras @ directions.T
    affine[:3, 3] = to_ras @ origin
    return values, affine