"""Post-processing for predicted vessel masks."""

import numpy as np
from scipy.ndimage import label

# 26-connectivity: diagonal voxel contact keeps a thin vessel in one piece.
_STRUCTURE = np.ones((3, 3, 3), bool)


def keep_largest_components(mask: np.ndarray, k: int = 1) -> np.ndarray:
    """Keep only the k largest connected components of a binary mask.

    The aortic vessel tree is one connected structure, so stray false-positive
    islands far from it inflate HD95 and crush precision. Dropping everything
    but the largest component(s) removes them without touching true vessels.
    """
    mask = np.asarray(mask, bool)
    if k <= 0 or not mask.any():
        return mask
    labels, count = label(mask, structure=_STRUCTURE)
    if count <= k:
        return mask
    sizes = np.bincount(labels.ravel())
    sizes[0] = 0  # background is not a component
    keep = np.argsort(sizes)[::-1][:k]
    return np.isin(labels, keep)
