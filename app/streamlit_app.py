"""React + Streamlit dashboard for aortic vessel segmentation."""

from __future__ import annotations

import gzip
import sys
import tempfile
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[1]

sys.path.insert(0, str(REPO_ROOT / "src"))
sys.path.insert(0, str(REPO_ROOT / "app"))

import nibabel as nib
import numpy as np
import pandas as pd
import streamlit as st

from research_dashboard import show_dashboard


MODELS = (
    ("Baseline U-Net", "baseline.nii.gz", (195, 92, 92)),
    (
        "Connectivity-aware U-Net",
        "connectivity.nii.gz",
        (167, 139, 250),
    ),
    ("Combined U-Net", "combined.nii.gz", (41, 163, 144)),
)

TRUTH_FILE = (
    "Ground truth",
    "ground_truth.nii.gz",
    (250, 204, 21),
)

PLANES = {
    "Axial": 2,
    "Coronal": 1,
    "Sagittal": 0,
}

METRICS = (
    "dice",
    "cldice",
    "recall",
    "hd95_mm",
)


# ------------------------------------------------------------------
# Loading
# ------------------------------------------------------------------

@st.cache_data(max_entries=8, show_spinner=False)
def load_volume(path: str, modified_at: int):
    """Load a 3D NIfTI volume in canonical RAS orientation."""
    volume = nib.as_closest_canonical(nib.load(path))

    if len(volume.shape) != 3:
        raise ValueError(
            f"{Path(path).name} must contain a 3D volume."
        )

    data = volume.get_fdata(dtype=np.float32)

    return data, volume.affine


def voxel_spacing(affine):
    """Return voxel spacing along each axis in millimeters."""
    return tuple(
        float(value)
        for value in np.linalg.norm(
            affine[:3, :3],
            axis=0,
        )
    )


def load_mask(case_dir, filename, scan_shape, scan_affine):
    """Load a binary mask only when its grid matches the scan."""
    path = case_dir / filename

    if not path.is_file():
        return None, "mask file missing"

    try:
        mask, affine = load_volume(
            str(path),
            path.stat().st_mtime_ns,
        )
    except (
        OSError,
        ValueError,
        nib.filebasedimages.ImageFileError,
    ) as error:
        return None, f"could not read mask ({error})"

    if mask.shape != scan_shape:
        return None, "mask shape differs from the scan"

    if not np.allclose(
        affine,
        scan_affine,
        atol=1e-3,
        rtol=0,
    ):
        return None, "mask voxel grid differs from the scan"

    return mask > 0.5, None


def discover_cases():
    """Find demo cases in both supported directories."""
    cases = {}

    roots = (
        REPO_ROOT / "app" / "demo_cases",
        REPO_ROOT / "runs" / "demo",
    )

    for root in roots:
        if not root.is_dir():
            continue

        for path in sorted(root.rglob("scan.nii.gz")):
            name = (
                f"{root.relative_to(REPO_ROOT)}/"
                f"{path.parent.relative_to(root)}"
            )

            cases[name] = path.parent

    uploaded = st.session_state.get(
        "research_uploaded_case"
    )

    if uploaded:
        path = Path(uploaded)

        if (path / "scan.nii.gz").is_file():
            cases["Uploaded case"] = path

    return cases


def save_uploads(uploads):
    """Save uploaded NIfTI files under expected case filenames."""
    files = {}

    expected_names = [
        "scan.nii.gz",
        TRUTH_FILE[1],
        *[model[1] for model in MODELS],
    ]

    for item in uploads:
        for filename in expected_names:
            prefix = filename.split(".")[0]

            if item.name.lower().startswith(prefix):
                files[filename] = item
                break

    if "scan.nii.gz" not in files:
        raise ValueError(
            "Include a file named scan.nii or scan.nii.gz."
        )

    case_dir = Path(
        tempfile.mkdtemp(prefix="research_case_")
    )

    for filename, item in files.items():
        content = item.getvalue()

        if item.name.lower().endswith(".nii"):
            content = gzip.compress(content)

        (case_dir / filename).write_bytes(content)

    return case_dir


# ------------------------------------------------------------------
# Slice rendering
# ------------------------------------------------------------------

def take_slice(volume, axis, index):
    return np.take(volume, index, axis=axis)


def render_scan(ct_slice, window):
    """Window a CTA slice and rotate it for display."""
    low, high = window

    clean = np.nan_to_num(
        ct_slice,
        nan=low,
        posinf=high,
        neginf=low,
    )

    gray = np.clip(
        (clean - low) / max(high - low, 1e-6),
        0,
        1,
    )

    gray = np.rot90(
        (gray * 255).astype(np.uint8)
    )

    return np.repeat(
        gray[..., None],
        3,
        axis=-1,
    )


@st.cache_data(max_entries=8, show_spinner=False)
def display_window(path, modified_at):
    scan, _ = load_volume(path, modified_at)
    finite = scan[np.isfinite(scan)]

    if not finite.size:
        return 0.0, 1.0

    low, high = np.percentile(
        finite,
        [1, 99.5],
    )

    low, high = float(low), float(high)

    if high <= low:
        high = low + 1.0

    return low, high


# ------------------------------------------------------------------
# Metrics
# ------------------------------------------------------------------

@st.cache_data(max_entries=24, show_spinner=False)
def cached_metrics(
    prediction_path,
    reference_path,
    prediction_mtime,
    reference_mtime,
    spacing,
):
    from vessel_seg.metrics import compute_metrics

    prediction, _ = load_volume(
        prediction_path,
        prediction_mtime,
    )

    reference, _ = load_volume(
        reference_path,
        reference_mtime,
    )

    scores = compute_metrics(
        prediction > 0.5,
        reference > 0.5,
        spacing,
    )

    return {
        metric: (
            float(scores[metric])
            if np.isfinite(scores[metric])
            else None
        )
        for metric in METRICS
    }


def metric_signature(case_dir):
    filenames = [
        TRUTH_FILE[1],
        *[model[1] for model in MODELS],
    ]

    return tuple(
        (
            filename,
            (case_dir / filename).stat().st_mtime_ns,
            (case_dir / filename).stat().st_size,
        )
        for filename in filenames
        if (case_dir / filename).is_file()
    )


# ------------------------------------------------------------------
# Mesh generation
# ------------------------------------------------------------------

@st.cache_data(max_entries=8, show_spinner=False)
def mask_mesh(
    path,
    modified_at,
    spacing,
    max_voxels=2_500_000,
):
    """Create a display mesh in millimeters relative to the volume."""
    from skimage.measure import marching_cubes

    mask, _ = load_volume(path, modified_at)
    mask = mask > 0.5

    if not mask.any():
        return None

    step = 1

    while (
        mask[::step, ::step, ::step].size
        > max_voxels
    ):
        step += 1

    sampled = mask[
        ::step,
        ::step,
        ::step
    ].astype(np.float32)

    if not sampled.any():
        return None

    mesh_spacing = tuple(
        value * step
        for value in spacing
    )

    # Padding closes surfaces that meet a volume boundary.
    padded = np.pad(
        sampled,
        1,
        constant_values=0,
    )

    vertices, faces, _, _ = marching_cubes(
        padded,
        level=0.5,
        spacing=mesh_spacing,
    )

    vertices -= np.asarray(mesh_spacing)

    return vertices, faces


# ------------------------------------------------------------------
# Page styling and information
# ------------------------------------------------------------------

def apply_theme(theme):
    dark = theme == "Dark"

    background = "#101b22" if dark else "#ffffff"
    surface = "#18262e" if dark else "#f3f8f6"
    foreground = "#edf6f4" if dark else "#14232c"
    border = "#354b53" if dark else "#d7e0e2"
    muted = "#b3c7c6" if dark else "#526471"

    st.html(
        f"""
        <style>
        .stApp {{
            background: {background};
            color: {foreground};
            color-scheme: {"dark" if dark else "light"};
        }}

        [data-testid="stHeader"] {{
            background: {background};
        }}

        [data-testid="stMainBlockContainer"] {{
            max-width: 1550px;
            padding-top: 5rem;
            padding-bottom: 3rem;
        }}

        .stApp :is(
            h1, h2, h3, h4, p, label, summary
        ) {{
            color: {foreground};
        }}

        [data-testid="stCaptionContainer"] p {{
            color: {muted};
        }}

        .stApp [data-baseweb="select"] > div,
        .stApp button {{
            background: {surface};
            color: {foreground};
            border-color: {border};
        }}

        .stApp [data-testid="stExpander"] {{
            border-color: {border};
        }}
        </style>
        """
    )


def show_about():
    st.title("Explore aortic vessel segmentation")

    st.write(
        "Aortic Vessel Explorer compares 3D U-Net "
        "predictions of the aorta and its annotated "
        "branches in CT angiography scans."
    )

    st.markdown(
        """
| Model | Training objective |
| --- | --- |
| Baseline | Dice + cross-entropy |
| Connectivity-aware | Dice + soft-clDice |
| Combined | Dice + cross-entropy + soft-clDice |
        """
    )

    st.write(
        "We study whether centerline-aware training "
        "improves the segmentation of connected vessel "
        "structures."
    )

    st.write(
        "The Aortic Vessel Tree dataset contains 56 scans. "
        "Our fixed split uses 39 for training, "
        "8 for validation, and 9 for testing."
    )

    st.markdown(
        """
**Use the dashboard to**

- Inspect a vessel reconstruction in 3D.
- Compare predictions on matching CTA slices.
- Display the reference mask’s outline.
- Calculate full-volume metrics for a case.
        """
    )

    st.caption(
        "Maanasi Ganapathy · Imren More · "
        "Kanta Garg · Cornell Tech CS 5787"
    )


def show_tutorial():
    st.title("Explore your first case")

    st.markdown(
        """
1. Open **Viewer** and select a case.
2. Use **Upload CT volume and masks** to load exported NIfTI files.
3. Choose a model to compare with the baseline.
4. Choose the model displayed in the 3D panel.
5. Drag the 3D surface to rotate it and scroll to zoom.
6. Move the shared slice slider to inspect both predictions at the same position.
7. Enable the ground-truth outline and adjust overlay opacity.
8. Click **Calculate case metrics** to populate the Results table.
        """
    )

    st.info(
        "The scan and masks must share the same voxel grid. "
        "The app checks their shapes and affines."
    )

    st.markdown(
        """
| Filename | Contents |
| --- | --- |
| `scan.nii.gz` | CTA scan |
| `ground_truth.nii.gz` | Optional reference mask |
| `baseline.nii.gz` | Optional baseline prediction |
| `connectivity.nii.gz` | Optional connectivity-aware prediction |
| `combined.nii.gz` | Optional combined prediction |
        """
    )

    st.markdown(
        """
**Reading the metrics**

- **Dice** measures mask overlap.
- **clDice** measures centerline agreement.
- **Recall** measures recovery of reference vessel voxels.
- **HD95** measures surface distance in millimeters. Lower is better.
        """
    )

    st.caption(
        "The 3D surface may be downsampled for display. "
        "Metrics use the full-resolution masks."
    )


# ------------------------------------------------------------------
# Main application
# ------------------------------------------------------------------

def main():
    st.set_page_config(
        page_title="Aortic Vessel Explorer",
        layout="wide",
        initial_sidebar_state="collapsed",
    )

    brand_column, navigation_column, theme_column = (
        st.columns([3, 4, 1])
    )

    with brand_column:
        st.markdown("## Aortic Vessel Explorer")
        st.caption("Cornell Tech · Vessel Segmentation Research")

    navigation_column, theme_column = st.columns([4, 1])

    with navigation_column:
        page = st.radio(
            "Navigation",
            ["About", "Viewer", "Experiments", "Tutorial"],
            horizontal=True,
            label_visibility="collapsed",
            key="dashboard_navigation",
        )

    with theme_column:
        theme = st.radio(
            "Appearance",
            ["Light", "Dark"],
            horizontal=True,
            label_visibility="collapsed",
            key="dashboard_theme",
        )

    apply_theme(theme)
    st.divider()

    if page == "About":
        show_about()
        return

    if page == "Tutorial":
        show_tutorial()
        return

    # Uploads
    with st.expander("Upload CT volume and masks"):
        uploads = st.file_uploader(
            "NIfTI files",
            type=["nii", "gz"],
            accept_multiple_files=True,
            help=(
                "Use scan, ground_truth, baseline, "
                "connectivity, and combined as filename prefixes."
            ),
        )

        if st.button("Load uploaded case"):
            if not uploads:
                st.warning(
                    "Choose a scan and any available masks."
                )
            else:
                try:
                    case_dir = save_uploads(uploads)

                    st.session_state[
                        "research_uploaded_case"
                    ] = str(case_dir)

                    st.session_state[
                        "research_case"
                    ] = "Uploaded case"

                    st.rerun()

                except ValueError as error:
                    st.error(str(error))

    cases = discover_cases()

    if not cases:
        st.info(
            "Add a demo case under app/demo_cases/ "
            "or runs/demo/, or upload a scan above."
        )
        return

    # Case and model toolbar
    case_column, comparison_column, mesh_column = (
        st.columns([2, 2, 2])
    )

    with case_column:
        case_id = st.selectbox(
            "Case",
            list(cases),
            key="research_case",
        )

    with comparison_column:
        comparison_names = [
            model[0] for model in MODELS[1:]
        ]

        default_comparison = next(
            (
                index
                for index, name
                in enumerate(comparison_names)
                if "Combined" in name
            ),
            0,
        )

        comparison_name = st.selectbox(
            "Compare baseline with",
            comparison_names,
            index=default_comparison,
        )

    case_dir = cases[case_id]
    scan_path = case_dir / "scan.nii.gz"
    scan_mtime = scan_path.stat().st_mtime_ns

    try:
        scan, affine = load_volume(
            str(scan_path),
            scan_mtime,
        )

    except (
        OSError,
        ValueError,
        nib.filebasedimages.ImageFileError,
    ) as error:
        st.error(f"Could not load the CTA: {error}")
        return

    spacing = voxel_spacing(affine)

    truth, truth_issue = load_mask(
        case_dir,
        TRUTH_FILE[1],
        scan.shape,
        affine,
    )

    masks = {}
    issues = {}

    for name, filename, _ in MODELS:
        mask, issue = load_mask(
            case_dir,
            filename,
            scan.shape,
            affine,
        )

        if mask is not None:
            masks[name] = mask
        else:
            issues[name] = issue

    comparison = next(
        model
        for model in MODELS
        if model[0] == comparison_name
    )

    selected_models = [
        MODELS[0],
        comparison,
    ]

    # Prepare results for this case.
    results_key = (
        "research_results",
        str(case_dir),
        metric_signature(case_dir),
    )

    if st.button(
        "Calculate case metrics",
        disabled=truth is None or not masks,
    ):
        rows = {}
        truth_path = case_dir / TRUTH_FILE[1]

        for name, filename, _ in MODELS:
            if name not in masks:
                continue

            path = case_dir / filename

            with st.spinner(f"Scoring {name}…"):
                rows[name] = cached_metrics(
                    str(path),
                    str(truth_path),
                    path.stat().st_mtime_ns,
                    truth_path.stat().st_mtime_ns,
                    spacing,
                )

        st.session_state[results_key] = rows

    saved_results = st.session_state.get(
        results_key,
        {},
    )

    if truth is None:
        st.caption(
            f"Ground truth unavailable · {truth_issue}"
        )

    if page == "Experiments":
        st.subheader("Case results")

        if saved_results:
            rows = [
                {
                    "Model": name,
                    **scores,
                }
                for name, scores
                in saved_results.items()
            ]

            table = pd.DataFrame(
                rows
            ).set_index("Model")

            st.dataframe(
                table.style.format(
                    "{:.4f}",
                    na_rep="—",
                ),
                use_container_width=True,
            )
        else:
            st.info(
                "Calculate case metrics to compare "
                "the available predictions."
            )

        st.caption(
            "Full-volume scores for the selected case. "
            "These differ from training-time "
            "validation patch scores."
        )
        return

    # Select and generate the actual 3D vessel surface.
    mesh_options = [
        model
        for model in MODELS
        if model[0] in masks
    ]

    if truth is not None:
        mesh_options.append(TRUTH_FILE)

    mesh = None
    mesh_key = ""
    mesh_name = "No mask available"

    with mesh_column:
        if mesh_options:
            mesh_names = [
                model[0] for model in mesh_options
            ]

            default_mesh = (
                mesh_names.index(comparison_name)
                if comparison_name in mesh_names
                else 0
            )

            mesh_name = st.selectbox(
                "3D model",
                mesh_names,
                index=default_mesh,
                key=(
                    f"mesh:{case_id}:"
                    f"{comparison_name}"
                ),
            )

            mesh_spec = next(
                model
                for model in mesh_options
                if model[0] == mesh_name
            )

            mesh_path = case_dir / mesh_spec[1]
            mesh_mtime = mesh_path.stat().st_mtime_ns

            mesh_key = (
                f"{mesh_path}:{mesh_mtime}"
            )

            try:
                with st.spinner(
                    "Preparing vessel surface…"
                ):
                    mesh = mask_mesh(
                        str(mesh_path),
                        mesh_mtime,
                        spacing,
                    )

            except ImportError:
                st.error(
                    "Install the mesh dependency with "
                    "`python -m pip install scikit-image`."
                )

            except ValueError as error:
                st.warning(
                    f"Could not generate the mesh: {error}"
                )

    # React controls persist through Streamlit reruns.
    component_key = (
        f"research_viewer:{case_dir}:{scan_mtime}"
    )

    component_state = st.session_state.get(
        component_key,
        {},
    )

    controls = component_state.get(
        "controls"
    ) or {
        "plane": "Axial",
        "index": None,
    }

    plane = controls.get(
        "plane",
        "Axial",
    )

    if plane not in PLANES:
        plane = "Axial"

    axis = PLANES[plane]
    slice_count = scan.shape[axis]

    index = controls.get("index")

    if index is None:
        index = slice_count // 2

    index = max(
        0,
        min(
            int(index),
            slice_count - 1,
        ),
    )

    controls = {
        "plane": plane,
        "index": index,
    }

    # Matching CTA and prediction slices.
    ct = take_slice(
        scan,
        axis,
        index,
    )

    window = display_window(
        str(scan_path),
        scan_mtime,
    )

    scan_image = render_scan(
        ct,
        window,
    )

    reference_slice = (
        np.rot90(
            take_slice(
                truth,
                axis,
                index,
            )
        )
        if truth is not None
        else None
    )

    predictions = []

    for name, _, color in selected_models:
        mask = masks.get(name)

        mask_slice = (
            np.rot90(
                take_slice(
                    mask,
                    axis,
                    index,
                )
            )
            if mask is not None
            else None
        )

        predictions.append(
            (
                name.replace(" U-Net", ""),
                mask_slice,
                issues.get(name),
                color,
            )
        )

    result_rows = [
        {
            "model": name.replace(" U-Net", ""),
            **saved_results.get(name, {}),
        }
        for name, _, _ in selected_models
    ]

    show_dashboard(
        scan=scan_image,
        reference=reference_slice,
        predictions=predictions,
        mesh=mesh,
        mesh_key=mesh_key,
        mesh_name=mesh_name.replace(
            " U-Net",
            "",
        ),
        results=result_rows,
        controls=controls,
        slice_count=slice_count,
        theme=theme,
        component_key=component_key,
    )

    st.caption(
        "3D surfaces are displayed relative to the volume "
        "origin and may be downsampled. "
        "Metrics use full-resolution masks."
    )


if __name__ == "__main__":
    main()