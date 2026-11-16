"""Create a synthetic demo case so the viewer works before any model is trained.

Builds a vessel-tree phantom (one trunk + branches), then fakes two predictions:
  * baseline.nii.gz      — the tree with gaps cut into it (disconnected pieces)
  * connectivity.nii.gz  — the tree slightly dilated/eroded but connected

Writes runs/demo/synthetic/{scan,ground_truth,baseline,connectivity}.nii.gz.

Run:  python app/make_demo_case.py
"""

from pathlib import Path

import nibabel as nib
import numpy as np
from scipy.ndimage import binary_dilation, gaussian_filter

SHAPE = (160, 160, 160)
SPACING = (1.0, 1.0, 1.0)
OUT_DIR = Path(__file__).resolve().parents[1] / "runs" / "demo" / "synthetic"


def draw_tube(mask: np.ndarray, start, end, radius: float) -> None:
    """Rasterize a straight tube between two points."""
    start, end = np.asarray(start, float), np.asarray(end, float)
    steps = int(np.linalg.norm(end - start) * 2) + 1
    rr = int(np.ceil(radius))
    ball = np.ones((2 * rr + 1,) * 3, bool)
    grid = np.indices(ball.shape) - rr
    ball &= (grid ** 2).sum(axis=0) <= radius ** 2
    for t in np.linspace(0, 1, steps):
        c = np.round(start + t * (end - start)).astype(int)
        lo = np.maximum(c - rr, 0)
        hi = np.minimum(c + rr + 1, mask.shape)
        b_lo = lo - (c - rr)
        b_hi = b_lo + (hi - lo)
        mask[lo[0]:hi[0], lo[1]:hi[1], lo[2]:hi[2]] |= \
            ball[b_lo[0]:b_hi[0], b_lo[1]:b_hi[1], b_lo[2]:b_hi[2]]


def vessel_tree() -> np.ndarray:
    """Aorta-like trunk with branching vessels of decreasing radius."""
    rng = np.random.default_rng(5787)
    mask = np.zeros(SHAPE, bool)
    trunk_top, trunk_bottom = (80, 85, 150), (80, 75, 15)
    draw_tube(mask, trunk_bottom, trunk_top, radius=7)

    for i in range(8):
        t = (i + 1) / 9
        origin = np.round(np.asarray(trunk_bottom) * (1 - t)
                          + np.asarray(trunk_top) * t).astype(int)
        direction = rng.normal(size=3)
        direction[2] = abs(direction[2]) * 0.3
        direction /= np.linalg.norm(direction)
        branch_end = origin + direction * rng.uniform(30, 55)
        draw_tube(mask, origin, branch_end, radius=rng.uniform(2.0, 3.5))
        # second-order twig
        twig_dir = rng.normal(size=3)
        twig_dir /= np.linalg.norm(twig_dir)
        draw_tube(mask, branch_end, branch_end + twig_dir * rng.uniform(12, 22),
                  radius=1.5)
    return mask


def fake_baseline(truth: np.ndarray) -> np.ndarray:
    """Cut gaps into thin vessels: good Dice, broken connectivity."""
    rng = np.random.default_rng(1)
    pred = truth.copy()
    thin = truth & ~binary_dilation(~truth, iterations=3)  # core of thick vessels
    fragile = truth & ~thin                                # thin-vessel voxels
    coords = np.argwhere(fragile)
    for _ in range(26):
        center = coords[rng.integers(len(coords))]
        lo = np.maximum(center - 4, 0)
        hi = np.minimum(center + 5, truth.shape)
        pred[lo[0]:hi[0], lo[1]:hi[1], lo[2]:hi[2]] = False
    return pred


def fake_connectivity(truth: np.ndarray) -> np.ndarray:
    """Slight boundary noise but no gaps: connectivity preserved."""
    noise = gaussian_filter(np.random.default_rng(2).normal(size=SHAPE), 2)
    noise /= noise.std()  # keep thresholds meaningful after smoothing
    pred = truth.copy()
    pred |= binary_dilation(truth) & (noise > 0.8)
    pred &= ~((truth & ~binary_dilation(~truth)) & (noise < -1.2)) | truth
    return pred


def save(name: str, data: np.ndarray) -> None:
    affine = np.diag([*SPACING, 1.0])
    nib.save(nib.Nifti1Image(data.astype(np.float32), affine), OUT_DIR / name)
    print(f"wrote {OUT_DIR / name}")


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    truth = vessel_tree()

    rng = np.random.default_rng(0)
    scan = gaussian_filter(rng.normal(0.25, 0.05, SHAPE).astype(np.float32), 1)
    scan[truth] = 0.85
    scan = np.clip(gaussian_filter(scan, 0.8), 0, 1)

    save("scan.nii.gz", scan)
    save("ground_truth.nii.gz", truth)
    save("baseline.nii.gz", fake_baseline(truth))
    save("connectivity.nii.gz", fake_connectivity(truth))
    print("Demo case ready — run: streamlit run app/streamlit_app.py")


if __name__ == "__main__":
    main()
