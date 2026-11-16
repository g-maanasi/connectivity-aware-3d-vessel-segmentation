"""Frontend for connectivity-aware 3D vessel segmentation.

Browse cases under runs/demo/<case_id>/, compare the baseline and the
connectivity-aware U-Net against the ground truth on orthogonal CTA slices,
inspect per-case metrics (Dice, clDice, recall, HD95), and view the vessel
trees in 3D.

Expected layout per case (all NIfTI, same voxel grid as the scan):
    runs/demo/<case_id>/scan.nii.gz
    runs/demo/<case_id>/ground_truth.nii.gz   (optional)
    runs/demo/<case_id>/baseline.nii.gz       (optional)
    runs/demo/<case_id>/connectivity.nii.gz   (optional)

Run with:  streamlit run app/streamlit_app.py
"""

from __future__ import annotations

import sys
import tempfile
from pathlib import Path

import nibabel as nib
import numpy as np
import pandas as pd
import streamlit as st

REPO_ROOT = Path(__file__).resolve().parents[1]
DEMO_DIR = REPO_ROOT / "runs" / "demo"
sys.path.insert(0, str(REPO_ROOT / "src"))
# make_demo_case.py may live next to this file or at the repo root
sys.path.insert(0, str(REPO_ROOT))
sys.path.insert(0, str(Path(__file__).resolve().parent))

from vessel_seg.metrics import compute_metrics  # noqa: E402

MODELS = (
    ("Baseline U-Net", "baseline.nii.gz", (251, 146, 60)),     # orange
    ("Connectivity-aware U-Net", "connectivity.nii.gz", (167, 139, 250)),  # violet
)
TRUTH_FILE = ("Ground truth", "ground_truth.nii.gz", (45, 212, 191))  # teal
PLANES = {"Axial": 2, "Coronal": 1, "Sagittal": 0}
ERROR_COLORS = {
    "True positive": (74, 222, 128),   # green  – predicted vessel, is vessel
    "False positive": (248, 113, 113), # red    – predicted vessel, not vessel
    "False negative": (96, 165, 250),  # blue   – missed vessel
}
METRIC_LABELS = {
    "dice": "Dice ↑",
    "cldice": "clDice ↑",
    "recall": "Recall ↑",
    "hd95_mm": "HD95 (mm) ↓",
}


# --------------------------------------------------------------------------- #
# Loading
# --------------------------------------------------------------------------- #
@st.cache_data(max_entries=8, show_spinner=False)
def load_volume(path: str, modified_at: int) -> tuple[np.ndarray, np.ndarray]:
    """Load a NIfTI volume in canonical (RAS) orientation."""
    volume = nib.as_closest_canonical(nib.load(path))
    if len(volume.shape) != 3:
        raise ValueError(f"{Path(path).name} must contain a 3D volume.")
    return volume.get_fdata(dtype=np.float32), volume.affine


def voxel_spacing(affine: np.ndarray) -> tuple[float, float, float]:
    """Voxel edge lengths in millimeters, one per axis."""
    return tuple(float(x) for x in np.sqrt((affine[:3, :3] ** 2).sum(axis=0)))


def load_mask(case_dir: Path, filename: str, scan_shape, scan_affine):
    """Return a boolean mask aligned to the scan, or (None, reason)."""
    path = case_dir / filename
    if not path.is_file():
        return None, "not exported yet"
    try:
        mask, affine = load_volume(str(path), path.stat().st_mtime_ns)
    except (OSError, ValueError, nib.filebasedimages.ImageFileError) as error:
        return None, f"unreadable ({error})"
    if mask.shape != scan_shape or not np.allclose(affine, scan_affine, atol=1e-3, rtol=0):
        return None, "different voxel grid than the scan"
    return mask > 0.5, None


def discover_cases() -> dict[str, Path]:
    if not DEMO_DIR.is_dir():
        return {}
    return {
        path.parent.relative_to(DEMO_DIR).as_posix(): path.parent
        for path in sorted(DEMO_DIR.rglob("scan.nii.gz"))
    }


# --------------------------------------------------------------------------- #
# 2D rendering
# --------------------------------------------------------------------------- #
def take_slice(volume: np.ndarray, axis: int, index: int) -> np.ndarray:
    return np.take(volume, index, axis=axis)


def to_display(slice_2d: np.ndarray, window: tuple[float, float]) -> np.ndarray:
    """Windowed grayscale slice as uint8 RGB, radiology orientation."""
    low, high = window
    gray = np.clip((slice_2d - low) / max(high - low, 1e-6), 0, 1) * 255
    return np.rot90(np.repeat(gray[..., None], 3, axis=-1))


def blend(rgb: np.ndarray, region: np.ndarray, color, opacity: float) -> None:
    rgb[region] = (1 - opacity) * rgb[region] + opacity * np.asarray(color, dtype=float)


def render_overlay(ct, mask, color, window, opacity):
    rgb = to_display(ct, window)
    if mask is not None:
        blend(rgb, np.rot90(mask), color, opacity)
    return rgb.astype(np.uint8)


def render_errors(ct, pred, truth, window, opacity):
    rgb = to_display(ct, window)
    p, t = np.rot90(pred), np.rot90(truth)
    blend(rgb, p & t, ERROR_COLORS["True positive"], opacity)
    blend(rgb, p & ~t, ERROR_COLORS["False positive"], opacity)
    blend(rgb, ~p & t, ERROR_COLORS["False negative"], opacity)
    return rgb.astype(np.uint8)


# --------------------------------------------------------------------------- #
# Metrics + 3D
# --------------------------------------------------------------------------- #
@st.cache_data(max_entries=16, show_spinner=False)
def cached_metrics(pred_path: str, truth_path: str, pred_mtime: int, truth_mtime: int,
                   spacing: tuple[float, float, float]) -> dict:
    pred, _ = load_volume(pred_path, pred_mtime)
    truth, _ = load_volume(truth_path, truth_mtime)
    return compute_metrics(pred > 0.5, truth > 0.5, spacing)


@st.cache_data(max_entries=8, show_spinner=False)
def mask_mesh(path: str, modified_at: int, spacing: tuple[float, float, float],
              max_voxels: int = 2_500_000):
    """Marching-cubes mesh (verts in mm, faces) of a binary mask, downsampled for speed."""
    from skimage.measure import marching_cubes

    mask, _ = load_volume(path, modified_at)
    mask = mask > 0.5
    if not mask.any():
        return None
    step = 1
    while mask[::step, ::step, ::step].size > max_voxels:
        step += 1
    small = mask[::step, ::step, ::step].astype(np.float32)
    sp = tuple(s * step for s in spacing)
    try:
        verts, faces, _, _ = marching_cubes(small, level=0.5, spacing=sp)
    except (ValueError, RuntimeError):
        return None
    return verts, faces


def plot_meshes(meshes: list[tuple[str, tuple, tuple[int, int, int]]]):
    import plotly.graph_objects as go

    figure = go.Figure()
    for name, (verts, faces), color in meshes:
        figure.add_trace(go.Mesh3d(
            x=verts[:, 0], y=verts[:, 1], z=verts[:, 2],
            i=faces[:, 0], j=faces[:, 1], k=faces[:, 2],
            color=f"rgb{color}", opacity=0.55, name=name, showlegend=True,
        ))
    figure.update_layout(
        height=640, margin=dict(l=0, r=0, t=10, b=0),
        scene=dict(aspectmode="data",
                   xaxis_title="x (mm)", yaxis_title="y (mm)", zaxis_title="z (mm)"),
        legend=dict(orientation="h", yanchor="bottom", y=1.0),
    )
    return figure


# --------------------------------------------------------------------------- #
# Upload support
# --------------------------------------------------------------------------- #
def save_uploads(uploads) -> Path | None:
    """Persist uploaded NIfTI files as an ad-hoc case; return its directory."""
    named = {}
    for item in uploads:
        stem = item.name.lower()
        for _, filename, _ in (TRUTH_FILE, *MODELS):
            if stem.startswith(filename.split(".")[0]):
                named[filename] = item
        if stem.startswith("scan"):
            named["scan.nii.gz"] = item
    if "scan.nii.gz" not in named:
        return None
    case_dir = Path(tempfile.mkdtemp(prefix="vessel_case_"))
    for filename, item in named.items():
        (case_dir / filename).write_bytes(item.getvalue())
    return case_dir


# --------------------------------------------------------------------------- #
# App
# --------------------------------------------------------------------------- #
def main() -> None:
    st.set_page_config(page_title="Vessel Segmentation Viewer", layout="wide", page_icon="🩸")
    st.title("Connectivity-aware 3D vessel segmentation")
    st.caption("Baseline (Dice+CE) vs connectivity-aware (Dice+clDice) U-Net on AVT CTA scans.")

    # ---------------- case selection ----------------
    cases = discover_cases()
    st.sidebar.header("Case")
    source = st.sidebar.radio("Source", ["Demo cases", "Upload files"],
                              horizontal=True, label_visibility="collapsed")

    if source == "Upload files":
        uploads = st.sidebar.file_uploader(
            "NIfTI files — names must start with scan / ground_truth / baseline / connectivity",
            type=["gz", "nii"], accept_multiple_files=True,
        )
        case_dir = save_uploads(uploads) if uploads else None
        case_id = "uploaded case"
        if uploads and case_dir is None:
            st.sidebar.error("Include a file named scan.nii.gz.")
        if case_dir is None:
            st.info("Upload at least `scan.nii.gz` (plus any masks) to open the viewer.")
            st.stop()
    else:
        if not cases:
            with st.spinner("No cases found — generating a synthetic demo case…"):
                import make_demo_case
                make_demo_case.OUT_DIR = DEMO_DIR / "synthetic"
                make_demo_case.main()
            cases = discover_cases()
        if not cases:
            st.info(
                "No demo cases found. Add `runs/demo/<case_id>/scan.nii.gz` "
                "(plus mask files) or switch to **Upload files** in the sidebar."
            )
            st.stop()
        case_id = st.sidebar.selectbox("Case", list(cases))
        case_dir = cases[case_id]

    scan_path = case_dir / "scan.nii.gz"
    try:
        with st.spinner("Loading CTA…"):
            scan, scan_affine = load_volume(str(scan_path), scan_path.stat().st_mtime_ns)
    except (OSError, ValueError, nib.filebasedimages.ImageFileError) as error:
        st.error(f"Could not open the CTA: {error}")
        st.stop()
    spacing = voxel_spacing(scan_affine)

    truth, truth_issue = load_mask(case_dir, TRUTH_FILE[1], scan.shape, scan_affine)
    masks: dict[str, np.ndarray] = {}
    issues: dict[str, str] = {}
    for title, filename, _ in MODELS:
        mask, issue = load_mask(case_dir, filename, scan.shape, scan_affine)
        if mask is not None:
            masks[title] = mask
        else:
            issues[title] = issue

    # ---------------- display controls ----------------
    st.sidebar.header("Display")
    plane_name = st.sidebar.radio("Plane", list(PLANES), horizontal=True)
    axis = PLANES[plane_name]
    n_slices = scan.shape[axis]

    slice_key = f"slice:{case_id}:{plane_name}"
    if st.sidebar.button("Jump to densest vessel slice",
                         disabled=truth is None, use_container_width=True):
        other = tuple(i for i in range(3) if i != axis)
        st.session_state[slice_key] = int(np.argmax(truth.sum(axis=other))) + 1
    slice_number = st.sidebar.slider(
        plane_name + " slice", 1, max(n_slices, 2),
        st.session_state.get(slice_key, (n_slices + 1) // 2), key=slice_key,
    ) if n_slices > 1 else 1

    finite = scan[np.isfinite(scan)]
    lo, hi = (float(np.percentile(finite, 1)), float(np.percentile(finite, 99.5))) \
        if finite.size else (0.0, 1.0)
    if hi <= lo:
        hi = lo + 1.0
    window = st.sidebar.slider("Window (intensity range shown)", lo, hi, (lo, hi))
    opacity = st.sidebar.slider("Overlay opacity", 0.0, 1.0, 0.45, 0.05)
    mode = st.sidebar.radio(
        "Overlay mode", ["Mask overlay", "Error map vs ground truth"],
        disabled=truth is None,
        help="Error map: green = correct vessel, red = false positive, blue = missed vessel.",
    )

    tab_slices, tab_metrics, tab_3d = st.tabs(["🩻 Slices", "📊 Metrics", "🧊 3D view"])

    # ---------------- slices ----------------
    with tab_slices:
        st.caption(
            f"Case **{case_id}** · {plane_name} slice {slice_number}/{n_slices} · "
            f"shape {tuple(int(s) for s in scan.shape)} · "
            f"spacing {spacing[0]:.2f}×{spacing[1]:.2f}×{spacing[2]:.2f} mm"
        )
        index = slice_number - 1
        ct = take_slice(scan, axis, index)

        panels = [TRUTH_FILE] + list(MODELS)
        for column, (title, filename, color) in zip(st.columns(len(panels)), panels):
            with column:
                st.markdown(
                    f'<div style="height:2.4rem;display:flex;align-items:center;'
                    f'font-size:1.15rem;font-weight:600;border-bottom:1px solid #444;'
                    f'margin-bottom:0.5rem;white-space:nowrap;overflow:hidden;'
                    f'text-overflow:ellipsis">'
                    f'<span style="color:rgb{color};margin-right:0.4rem">●</span>{title}</div>',
                    unsafe_allow_html=True,
                )
                if title == TRUTH_FILE[0]:
                    mask = truth
                    issue = truth_issue
                else:
                    mask = masks.get(title)
                    issue = issues.get(title)

                note = None
                if mask is None:
                    note = f"Mask {issue}"
                    image = render_overlay(ct, None, color, window, opacity)
                elif mode == "Error map vs ground truth" and truth is not None \
                        and title != TRUTH_FILE[0]:
                    image = render_errors(ct, take_slice(mask, axis, index),
                                          take_slice(truth, axis, index), window, opacity)
                else:
                    image = render_overlay(ct, take_slice(mask, axis, index),
                                           color, window, opacity)
                st.image(image, use_container_width=True)
                if note:
                    st.caption(note)

        if mode == "Error map vs ground truth" and truth is not None:
            st.markdown(
                " ".join(
                    f'<span style="color:rgb{c}">●</span> {name}&nbsp;&nbsp;'
                    for name, c in ERROR_COLORS.items()
                ),
                unsafe_allow_html=True,
            )

    # ---------------- metrics ----------------
    with tab_metrics:
        if truth is None:
            st.info("Metrics need `ground_truth.nii.gz` on the same voxel grid as the scan.")
        elif not masks:
            st.info("Export at least one model prediction to compute metrics.")
        else:
            rows = []
            truth_path = case_dir / TRUTH_FILE[1]
            for title, filename, _ in MODELS:
                if title not in masks:
                    continue
                pred_path = case_dir / filename
                with st.spinner(f"Scoring {title}…"):
                    scores = cached_metrics(
                        str(pred_path), str(truth_path),
                        pred_path.stat().st_mtime_ns, truth_path.stat().st_mtime_ns,
                        spacing,
                    )
                rows.append({"Model": title} | {
                    METRIC_LABELS[k]: scores[k] for k in METRIC_LABELS
                })
            table = pd.DataFrame(rows).set_index("Model")
            st.dataframe(table.style.format("{:.4f}"), use_container_width=True)

            if len(rows) == 2:
                base, conn = rows[0], rows[1]
                cols = st.columns(len(METRIC_LABELS))
                for col, (key, label) in zip(cols, METRIC_LABELS.items()):
                    delta = conn[label] - base[label]
                    col.metric(
                        label, f"{conn[label]:.4f}", f"{delta:+.4f} vs baseline",
                        delta_color="inverse" if key == "hd95_mm" else "normal",
                    )
                st.caption("Deltas: connectivity-aware model relative to the baseline. "
                           "↑ higher is better, ↓ lower is better.")

    # ---------------- 3D ----------------
    with tab_3d:
        available = [(TRUTH_FILE[0], TRUTH_FILE[1], TRUTH_FILE[2])] if truth is not None else []
        available += [(t, f, c) for t, f, c in MODELS if t in masks]
        if not available:
            st.info("No masks to render yet.")
        else:
            chosen = st.multiselect(
                "Meshes to render", [t for t, _, _ in available],
                default=[t for t, _, _ in available][:2],
            )
            meshes = []
            for title, filename, color in available:
                if title not in chosen:
                    continue
                path = case_dir / filename
                with st.spinner(f"Meshing {title}…"):
                    mesh = mask_mesh(str(path), path.stat().st_mtime_ns, spacing)
                if mesh is not None:
                    meshes.append((title, mesh, color))
            if meshes:
                try:
                    st.plotly_chart(plot_meshes(meshes), use_container_width=True)
                except ImportError:
                    st.error("3D view needs plotly: `pip install plotly`.")
                st.caption("Surfaces are shown in millimeters; drag to rotate, scroll to zoom. "
                           "Disconnected fragments in the orange baseline mesh are exactly "
                           "what the clDice loss is meant to fix.")
            else:
                st.info("Selected masks are empty — nothing to mesh.")


if __name__ == "__main__":
    main()
