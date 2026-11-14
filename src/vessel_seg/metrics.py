"""Evaluation metrics for binary 3D vessel segmentation."""

import numpy as np
from scipy.ndimage import binary_erosion, distance_transform_edt
from skimage.morphology import skeletonize

METRICS = ("dice", "cldice", "recall", "hd95_mm")

def crop_to_vessels(pred, truth):
    """Calculations to the area containing vessels."""
    occupied = pred | truth
    slices = []
    for axis in range(3):
        other_axes = tuple(i for i in range(3) if i != axis)
        indices = np.flatnonzero(occupied.any(axis=other_axes))
        start = max(0, int(indices[0]) - 1)
        stop = min(pred.shape[axis], int(indices[-1]) + 2)
        slices.append(slice(start, stop))
    region = tuple(slices)
    return pred[region], truth[region]

def cldice_score(pred, truth):
    """Compare 3D vessel centerlines with the corresponding vessel masks."""
    if np.array_equal(pred, truth):
        return 1.0
    if not pred.any() or not truth.any():
        return 0.0

    p_skel = skeletonize(pred, method="lee")
    t_skel = skeletonize(truth, method="lee")
    p_count, t_count = np.count_nonzero(p_skel), np.count_nonzero(t_skel)
    if p_count == 0 or t_count == 0:
        # Some 3D shapes produce an empty thinning result.
        # Report an undefined metric rather than a misleading zero.
        return float("nan")

    precision = np.count_nonzero(p_skel & truth) / p_count
    sensitivity = np.count_nonzero(t_skel & pred) / t_count
    return 2 * precision * sensitivity / (precision + sensitivity) if precision + sensitivity else 0.0

def hd95_score(pred, truth, spacing):
    """Symmetric 95th-percentile surface distance in millimeters."""
    if np.array_equal(pred, truth):
        return 0.0
    if not pred.any() or not truth.any():
        return float("nan")  # Undefined if one surface is missing.

    p_surface = pred & ~binary_erosion(pred)
    t_surface = truth & ~binary_erosion(truth)
    to_true = distance_transform_edt(~t_surface, sampling=spacing)[p_surface]
    to_pred = distance_transform_edt(~p_surface, sampling=spacing)[t_surface]
    return float(max(np.percentile(to_true, 95), np.percentile(to_pred, 95)))

def compute_metrics(pred, truth, spacing):
    """Return four full-volume metrics for a single AVT case."""
    pred, truth = np.asarray(pred, bool), np.asarray(truth, bool)
    spacing = np.asarray(spacing, float)
    if pred.ndim != 3 or pred.shape != truth.shape:
        raise ValueError("Prediction and mask must have the same 3D shape")
    if spacing.shape != (3,) or not np.isfinite(spacing).all() or (spacing <= 0).any():
        raise ValueError("Spacing must contain three positive finite values")

    p, t = np.count_nonzero(pred), np.count_nonzero(truth)
    overlap = np.count_nonzero(pred & truth)
    dice = 2 * overlap / (p + t) if p + t else 1.0
    recall = overlap / t if t else float("nan")
    if p + t:
        pred, truth = crop_to_vessels(pred, truth)
    return {
        "dice": float(dice),
        "cldice": float(cldice_score(pred, truth)),
        "recall": float(recall),
        "hd95_mm": float(hd95_score(pred, truth, spacing)),
    }

def bootstrap_ci(values, seed=42, samples=2000):
    """Mean, 95% bootstrap CI, and number of finite case-level values."""
    values = np.asarray(values, float)
    values = values[np.isfinite(values)]
    n = len(values)
    if n == 0:
        return (float("nan"),) * 3 + (0,)
    mean = float(values.mean())
    if n == 1:
        return mean, float("nan"), float("nan"), 1
    rng = np.random.default_rng(seed)
    draws = rng.choice(values, size=(samples, n), replace=True).mean(axis=1)
    low, high = np.percentile(draws, [2.5, 97.5])
    return mean, float(low), float(high), n