# src/vessel_seg/data.py
# Loads and aligns AVT CT scans with their vessel masks for training.
# The scan is the 3D picture, and the mask is the answer key (1 = vessel, 0 = background).

import argparse
from dataclasses import dataclass
from pathlib import Path
import nrrd
import numpy as np
from scipy.ndimage import affine_transform

@dataclass(frozen=True)
class Case:
    """Case tells us where data is stored. This class stores information on CT scan and vessel mask"""
    case_id: str
    scan: Path
    mask: Path

@dataclass(frozen=True)
class Volume:
    """Volume holds the loaded data. A 3D volume with a spatial origin and direction matrix."""
    image: np.ndarray
    mask: np.ndarray
    affine: np.ndarray

def discover_cases(root: Path) -> list[Case]:
    """Pair files in each directory by their shared filename stem."""
    scans = {}
    masks = {}

    # Collect all scan and mask files in the dataset. Finds every NRRD file.
    for path in sorted(root.rglob("*.nrrd")):
        relative = path.relative_to(root).as_posix()
        # Separates scan and mask files by their suffix.
        if relative.endswith(".seg.nrrd"):
            # Mask files have a ".seg.nrrd" suffix.
            masks[relative.removesuffix(".seg.nrrd")] = path
        else:
            scans[relative.removesuffix(".nrrd")] = path

    # Check for missing files
    missing = scans.keys() ^ masks.keys()
    if missing:
        raise ValueError(f"Unpaired AVT Files: {', '.join(missing)}")

    # Check that we found at least one scan/mask pair. Return matched cases
    if not scans:
        raise ValueError(f"No AVT scan/mask pairs found under {root}")

    return [Case(key, scans[key], masks[key]) for key in scans.keys()]

def read_nrrd(path: Path) -> tuple[np.ndarray, np.ndarray]:
    """Reads a NRRD file and returns the values and affine matrix."""
    values, header = nrrd.read(str(path), index_order='F')
    # Extract the direction matrix from the header, describes img location and orientation
    # Header - instructions for interpreting medical images
    directions = np.asarray(header["space directions"], dtype=float)

    # If the volume has a fourth dimension, and the direction matrix is (4, 3),
    # we assume it is a 4D volume with a single layer axis.
    if values.ndim == 4 and directions.shape == (4, 3):
        #axis with no spatial direction- segmentation layer dimension, then combining layers
        layer_axes = np.flatnonzero(~np.isfinite(directions).any(axis=1))
        if path.name.endswith(".seg.nrrd") and len(layer_axes) == 1:
            layer_axis = int(layer_axes[0])
            values = np.any(values != 0, axis=layer_axis)
            directions = np.delete(directions, layer_axis, axis=0)

    # Check that the volume has three spatial axes and the direction matrix is (3, 3).
    if values.ndim != 3 or directions.shape != (3, 3):
        raise ValueError(f"{path}: expected three spatial axes")
    
    # Check that the direction matrix is valid.
    if not np.isfinite(directions).all() or np.linalg.matrix_rank(directions) != 3:
        raise ValueError(f"{path}: invalid directions")

    # RAS and LPS coordinate systems matrix production
    # RAS means Right, Anterior (front), and Superior (up).
    # LPS means Left, Posterior (back), and Superior (up).
    space = str(header.get("space", "")).lower()
    if space in ("left-posterior-superior", "lps"):
        to_ras = np.diag([-1, -1, 1])
    elif space in ("right-anterior-superior", "ras"):
        to_ras = np.eye(3)
    else:
        raise ValueError(f"{path}: unknown space {space}")
    
    # Extract the spatial origin from the header
    origin = np.asarray(header["space origin"], dtype=float)
    # Starting location of img coordinate grid
    if origin.shape != (3,) or not np.isfinite(origin).all():
        raise ValueError(f"{path}: invalid spatial origin")

    # Construct the affine matrix from the direction matrix and origin.
    affine = np.eye(4)
    affine[:3, :3] = to_ras @ directions.T
    affine[:3, 3] = to_ras @ origin
    return values, affine
    
def resample(
    # Original scan
    values: np.ndarray,
    # Original affine matrix
    source: np.ndarray,
    # Matrix for the grid
    target: np.ndarray,
    # Dimensions of output array
    shape: tuple[int, int, int],
    *,
    # Interpolation Method
    order: int = 3,
    # Value assigned outside 
    outside: float,
) -> np.ndarray:
    """Put a 3D scan or mask onto a new voxel grid.

    For each voxel in the new grid, use the affine matrices to find the
    matching spot in the original grid. Use `order` to pick or blend nearby
    values, and use `outside` as the fill value beyond the original grid.
    Return a new array with the requested `shape`.
    """

    # SciPy maps each output voxel back to the source array.
    mapping = np.linalg.solve(source, target)
    # Interpolationm - Nearest neighbor, linear interpolation
    return affine_transform(
        values,
        matrix=mapping[:3, :3],
        offset=mapping[:3, 3],
        output_shape=shape,
        order=order,
        mode="grid-constant",
        cval=outside,
        prefilter=False,
    )

def load_case(
    case: Case, 
    *, 
    spacing_mm: float = 1.0, 
    hu_window: tuple[float, float] = (-200.0, 600.0),
    hu_offset: float = 0.0,
) -> Volume:
    """Load a CT scan and its vessel mask onto the same voxel grid.

    Apply the HU offset to the scan, then clip it to the HU window
    and scale its intensities to [0, 1]. Return the normalized scan,
    the aligned binary mask, and their shared affine.
    """
    low, high = hu_window
    if not np.isfinite([low, high, spacing_mm, hu_offset]).all():
        raise ValueError("Preprocessing settings must be finite")

    if high <= low or spacing_mm <= 0:
        raise ValueError("Expected low < high and positive spacing")

    # Load the CT scan and vessel mask
    image, image_affine = read_nrrd(case.scan)
    mask, mask_affine = read_nrrd(case.mask)

    # Calculate new voxel spacing
    source_spacing = np.linalg.norm(image_affine[:3, :3], axis=0)
    target = image_affine.copy()
    target[:3, :3] *= spacing_mm / source_spacing

    # Calculate the output array shape
    extent_mm = (np.array(image.shape) - 1) * source_spacing
    shape = tuple(int(length) for length in np.ceil(extent_mm / spacing_mm) + 1)

    # Resample and nromalize the CT image
    image = resample(
        image.astype(np.float32) + hu_offset,
        image_affine,
        target,
        shape,
        order=1,
        outside=low,
    )
    np.clip(image, low, high, out=image)
    image -= low
    image /= high - low

    # Resample vessel mask
    mask = resample(
        (mask != 0).astype(np.uint8),
        mask_affine,
        target,
        shape,
        order=0,
        outside=0,
    )

    if not mask.any():
        raise ValueError(f"{case.case_id}: vessel mask is empty after alignment")
    # Return final processed volume
    return Volume(image=image, mask=mask, affine=target)

def main() -> None:
    """List available AVT cases or load and check one case."""

    # Read the dataset folder and optional settings from the command line.
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("root", type=Path, help="Extracted AVT data directory")
    parser.add_argument("--case", help="Case ID to load and check")
    parser.add_argument("--spacing-mm", type=float, default=1.0)
    parser.add_argument("--hu-offset", type=float, default=0.0)

    args = parser.parse_args()

    # Find matching CT scans and vessel masks in the dataset folder.
    cases = discover_cases(args.root)
    # If no case ID was given, list the available IDs and stop.
    if args.case is None:
        print(f"Found {len(cases)} paired cases")
        for case in cases:
            print(case.case_id)
        return

    # Find the requested case or show an error if the ID is unknown.
    case = next((item for item in cases if item.case_id == args.case), None)
    if case is None:
        parser.error(f"Unknown case ID: {args.case}")

    # Load the scan and mask and align them on the same voxel grid.
    volume = load_case(
        case,
        spacing_mm=args.spacing_mm,
        hu_offset=args.hu_offset,
    )
    # Show the scan dimensions, normalized intensity range, and vessel voxel count.
    print(
        f"{case.case_id}: shape={volume.image.shape}, "
        f"CTA range=[{volume.image.min():.3f}, {volume.image.max():.3f}], "
        f"vessel voxels={np.count_nonzero(volume.mask)}"
    )

if __name__ == "__main__":
    main()