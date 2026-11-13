"""Browse saved CTA scans and vessel segmentation results."""

from pathlib import Path
import nibabel as nib
import numpy as np
import streamlit as st

DEMO_DIR = Path(__file__).resolve().parents[1] / "runs" / "demo"
PANELS = (
    ("Ground truth", "ground_truth.nii.gz", (45, 212, 191)),
    ("Baseline U-Net", "baseline.nii.gz", (251, 146, 60)),
    ("Connectivity-aware U-Net", "connectivity.nii.gz", (167, 139, 250)),
)

@st.cache_data(max_entries=2, show_spinner=False)
def load_volume(path: Path, modified_at: int) -> tuple[np.ndarray, np.ndarray]:
    """Load a NIfTI volume in canonical orientation for display."""
    volume = nib.as_closest_canonical(nib.load(str(path)))
    if len(volume.shape) != 3:
        raise ValueError(f"{path.name} must contain a 3D volume.")
    return volume.get_fdata(dtype=np.float32), volume.affine

def render_slice(ct_slice: np.ndarray, mask_slice: np.ndarray | None,
                 color: tuple[int, int, int], opacity: float,
) -> np.ndarray:
    """Blend a binary vessel mask onto a grayscale CTA slice."""
    grayscale = np.clip(ct_slice, 0, 1) * 255
    rgb = np.repeat(grayscale[..., None], 3, axis=-1)

    if mask_slice is not None:
        vessel = mask_slice > 0
        rgb[vessel] = (1 - opacity) * rgb[vessel] + opacity * np.asarray(color)

    return np.rot90(rgb).astype(np.uint8)

def main() -> None:
    st.set_page_config(page_title="Vessel Segmentation Viewer", layout="wide")
    st.title("3D Vessel Segmentation")
    st.caption("Compare both models against the reference mask on the same CTA slice.")

    case_dirs = {
        path.parent.relative_to(DEMO_DIR).as_posix(): path.parent
        for path in sorted(DEMO_DIR.rglob("scan.nii.gz"))
    }
    if not case_dirs:
        st.info("Add a demo case to `runs/demo/<case_id>/scan.nii.gz` to open the viewer.")
        st.stop()

    case_id = st.sidebar.selectbox("Case", list(case_dirs))
    case_dir = case_dirs[case_id]
    scan_path = case_dir / "scan.nii.gz"

    try:
        with st.spinner("Loading CTA…"):
            scan, scan_affine = load_volume(scan_path, scan_path.stat().st_mtime_ns)
    except (OSError, ValueError, nib.filebasedimages.ImageFileError) as error:
        st.error(f"Could not open the CTA: {error}")
        st.stop()

    st.sidebar.header("Display")
    slice_count = scan.shape[2]
    slice_number = 1
    if slice_count > 1:
        slice_number = st.sidebar.slider(
            "Axial slice",
            min_value=1,
            max_value=slice_count,
            value=(slice_count + 1) // 2,
            key=f"slice:{case_id}",
        )
    opacity = st.sidebar.slider("Overlay opacity", 0.0, 1.0, 0.45, 0.05)

    st.caption(f"Case {case_id} · Axial slice {slice_number} of {slice_count}")
    slice_index = slice_number - 1
    ct_slice = scan[:, :, slice_index]

    for column, (title, filename, color) in zip(st.columns(3), PANELS):
        with column:
            st.subheader(title)
            mask_slice = None
            mask_path = case_dir / filename

            if mask_path.is_file():
                try:
                    mask, mask_affine = load_volume(
                        mask_path, mask_path.stat().st_mtime_ns
                    )
                    if mask.shape == scan.shape and np.allclose(
                        mask_affine, scan_affine, atol=1e-3, rtol=0
                    ):
                        mask_slice = mask[:, :, slice_index]
                    else:
                        st.warning("This mask is on a different voxel grid.")
                except (OSError, ValueError, nib.filebasedimages.ImageFileError) as error:
                    st.warning(f"Could not open the mask: {error}")
            else:
                st.caption("Mask export pending")

            st.image(
                render_slice(ct_slice, mask_slice, color, opacity),
                use_container_width=True,
            )

if __name__ == "__main__":
    main()