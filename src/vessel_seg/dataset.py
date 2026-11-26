# src/vessel_seg/dataset.py
# Prepares CT scans and their matching vessel masks for the model.
# The scan is the input, and the mask is the answer key
# (1 = blood vessel, 0 = background).

import numpy as np
import torch
from torch.utils.data import Dataset
from .data import Volume


class VesselPatchDataset(Dataset):
    """Return matching 3D patches from a CT scan and its vessel mask.

    Each patch is centered on either a vessel voxel or a background voxel.
    The scan patch is the model input, and the mask patch is the label.
    """

    def __init__(self, volume: Volume, patch_size=96, num_patches=8, augment=False):
        # Get the already aligned CT scan and vessel mask from data.py
        self.image = np.asarray(volume.image, dtype=np.float32)
        self.mask = np.asarray(volume.mask != 0, dtype=np.uint8)

        # Check that image and mask have matching dimensions
        if self.image.ndim != 3 or self.image.shape != self.mask.shape:
            raise ValueError("Image and mask must be aligned 3D arrays")

        if patch_size <= 0 or num_patches < 2:
            raise ValueError("Invalid patch size or number of patches")

        self.patch_size = patch_size
        self.num_patches = num_patches
        self.augment = augment

        # Half of the patches will be centered on vessels
        self.num_vessel_patches = num_patches // 2

        # Find voxel locations that belong to blood vessels
        self.vessel_indices = np.flatnonzero(self.mask)

        if len(self.vessel_indices) == 0:
            raise ValueError("No vessel voxels found")

        if not np.any(self.mask == 0):
            raise ValueError("No background voxels found")

    def __len__(self):
        # Number of patches sampled from this case
        return self.num_patches

    def __getitem__(self, index):
        if not 0 <= index < len(self):
            raise IndexError(index)

        # Choose vessel-centered patches for the first half
        if index < self.num_vessel_patches:
            flat_index = np.random.choice(self.vessel_indices)
            center = np.unravel_index(flat_index, self.mask.shape)

        # Choose background-centered patches for the second half
        else:
            center = tuple(
                np.random.randint(size)
                for size in self.mask.shape
            )

            while self.mask[center] != 0:
                center = tuple(
                    np.random.randint(size)
                    for size in self.mask.shape
                )

        # Crop the image and mask around the same center
        slices = []
        padding = []

        for axis in range(3):
            start = int(center[axis]) - self.patch_size // 2
            end = start + self.patch_size

            slices.append(
                slice(max(0, start), min(end, self.image.shape[axis]))
            )

            padding.append((
                max(0, -start),
                max(0, end - self.image.shape[axis])
            ))

        image_patch = self.image[tuple(slices)]
        mask_patch = self.mask[tuple(slices)]

        # Pad patches near boundaries to maintain the correct size
        image_patch = np.pad(
            image_patch, padding, mode="constant", constant_values=0
        )
        mask_patch = np.pad(
            mask_patch, padding, mode="constant", constant_values=0
        )

        # Training-time augmentation: cheap regularization for a ~38-scan
        # dataset. Geometry changes apply to image and mask together;
        # intensity changes apply to the image only. Uses np.random, which
        # train.py seeds per case/epoch, so runs stay reproducible.
        if self.augment:
            for axis in range(3):          # random mirror along each axis
                if np.random.rand() < 0.5:
                    image_patch = np.flip(image_patch, axis)
                    mask_patch = np.flip(mask_patch, axis)
            k = np.random.randint(4)       # random 90° turn in the axial plane
            if k:
                image_patch = np.rot90(image_patch, k, axes=(0, 1))
                mask_patch = np.rot90(mask_patch, k, axes=(0, 1))
            scale = np.float32(np.random.uniform(0.9, 1.1))
            shift = np.float32(np.random.uniform(-0.05, 0.05))
            image_patch = image_patch * scale + shift
            if np.random.rand() < 0.5:     # mild Gaussian noise
                image_patch = image_patch + np.random.normal(
                    0.0, 0.02, image_patch.shape
                ).astype(np.float32)
            image_patch = np.ascontiguousarray(image_patch, dtype=np.float32)
            mask_patch = np.ascontiguousarray(mask_patch)

        # Convert arrays to PyTorch tensors and add channel dimension
        image_tensor = torch.from_numpy(
            image_patch.copy()
        ).unsqueeze(0)
        mask_tensor = torch.from_numpy(
            mask_patch.astype(np.float32)
        ).unsqueeze(0)

        return image_tensor, mask_tensor
