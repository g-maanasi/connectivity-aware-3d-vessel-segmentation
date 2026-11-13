
from importlib import import_module
from pathlib import Path

import numpy as np
import torch
import matplotlib.pyplot as plt
from torch.utils.data import DataLoader
from vessel_seg.data import discover_cases, load_case
from vessel_seg.dataset import VesselPatchDataset
from vessel_seg.model import build_model

#reproduce the same random samples during testing
np.random.seed(42)
torch.manual_seed(42)
# Find the AVT scans and their vessel masks
cases = discover_cases(Path("data/raw"))

# Load one scan and its aligned mask
volume = load_case(cases[0])

# Sample 8 patches from the scan
dataset = VesselPatchDataset(
    volume,
    patch_size=96,
    num_patches=8
)

# Load 4 patches into one batch
loader = DataLoader(
    dataset,
    batch_size=4,
    shuffle=False
)

images, masks = next(iter(loader))

# Check the dimensions
print("Image batch shape:", images.shape)
print("Mask batch shape:", masks.shape)

assert images.shape == (4, 1, 96, 96, 96)
assert masks.shape == (4, 1, 96, 96, 96)

# Check that the mask is binary
assert torch.all((masks == 0) | (masks == 1)).item()

# Check that a vessel-centered patch contains vessel labels
assert masks[0].sum().item() > 0

print("Vessel voxels in first patch:", masks[0].sum().item())
print("Dataset test passed!")

# Use the first vessel-centered patch from our tested batch
image = images[0, 0].numpy()
mask = masks[0, 0].numpy()

# Check how much of the patch contains vessel labels
vessel_voxels = np.count_nonzero(mask)
vessel_percentage = 100 * vessel_voxels / mask.size

print("Vessel voxels:", vessel_voxels)
print("Vessel percentage:", round(vessel_percentage, 2), "%")
print("Mask values:", np.unique(mask))

# Visualize the CT scan and vessel mask along all three axes
fig, axes = plt.subplots(2, 3, figsize=(12, 8))

for axis in range(3):

    # Find the slice containing the most vessel voxels
    other_axes = tuple(i for i in range(3) if i != axis)
    vessel_counts = mask.sum(axis=other_axes)
    index = int(np.argmax(vessel_counts))

    # Extract the same slice from the CT and mask
    ct_slice = np.take(image, index, axis=axis)
    mask_slice = np.take(mask, index, axis=axis)

    # Display the original CT slice
    axes[0, axis].imshow(ct_slice, cmap="gray", vmin=0, vmax=1)
    axes[0, axis].set_title(f"CT Patch - Axis {axis}")

    # Display the CT slice with its vessel mask
    axes[1, axis].imshow(ct_slice, cmap="gray", vmin=0, vmax=1)
    axes[1, axis].imshow(
        np.ma.masked_where(mask_slice == 0, mask_slice),
        cmap="autumn",
        alpha=0.4
    )
    axes[1, axis].set_title(f"Vessel Mask - Axis {axis}")

# Remove axes for cleaner visualization
for ax in axes.flat:
    ax.axis("off")

plt.tight_layout()
plt.savefig("vessel_patch_3views.png", dpi=150)
plt.show()

# Initialize the model
model = build_model()
model.eval()

# Use one patch to avoid unnecessary memory usage
with torch.no_grad():
    predictions = model(images[:1])

print("Model input shape:", images[:1].shape)
print("Model output shape:", predictions.shape)

# Verify the model returns two class scores per voxel
assert predictions.shape == (1, 2, 96, 96, 96)

# Check that predictions contain valid numbers
assert torch.isfinite(predictions).all()

print("3D U-Net forward pass successful!")

