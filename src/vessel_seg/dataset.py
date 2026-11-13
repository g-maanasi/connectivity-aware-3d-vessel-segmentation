#dataset.py selects vessel or background center and extractd a matching 3D patch

import numpy as np
import torch
from torch.utils.data import Dataset
from .data import Volume


"""Sample matching 96 x 96 x 96 CT and vessel mask patches."""


"""Sample matching 96 x 96 x 96 CT and vessel mask patches."""

import numpy as np
import torch
from torch.utils.data import Dataset

from .data import Volume


class VesselPatchDataset(Dataset):
    """testing two methods: vessel-centered and background-centered patches"""
    def __init__(self, volume: Volume, patch_size=96, num_patches=8):
        #get the already aligned CT scan and vessel mask from data.py
        self.image = np.asarray(volume.image, dtype=np.float32)
        self.mask = np.asarray(volume.mask != 0, dtype=np.uint8)

        #check that image and mask have matching dimensions
        if self.image.ndim != 3 or self.image.shape != self.mask.shape:
            raise ValueError("Image and mask must be aligned 3D arrays")

        if patch_size <= 0 or num_patches < 2:
            raise ValueError("Invalid patch size or number of patches")

        self.patch_size = patch_size
        self.num_patches = num_patches

        #half of the patches will be centered on vessels
        self.num_vessel_patches = num_patches // 2

        #find voxel locations that belong to blood vessels
        self.vessel_indices = np.flatnonzero(self.mask)

        if len(self.vessel_indices) == 0:
            raise ValueError("No vessel voxels found")

        if not np.any(self.mask == 0):
            raise ValueError("No background voxels found")

    def __len__(self):
        #number of patches sampled from this case
        return self.num_patches

    def __getitem__(self, index):
        if not 0 <= index < len(self):
            raise IndexError(index)

        #choose vessel-centered patches for the first half
        if index < self.num_vessel_patches:
            flat_index = np.random.choice(self.vessel_indices)
            center = np.unravel_index(flat_index, self.mask.shape)

        #choose background-centered patches for the second half
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

        #crop the image and mask around the same center
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

        #pad patches near boundaries to maintain the correct size
        image_patch = np.pad(
            image_patch, padding, mode="constant", constant_values=0
        )

        mask_patch = np.pad(
            mask_patch, padding, mode="constant", constant_values=0
        )

        #convert arrays to PyTorch tensors and add channel dimension
        image_tensor = torch.from_numpy(
            image_patch.copy()
        ).unsqueeze(0)

        mask_tensor = torch.from_numpy(
            mask_patch.astype(np.float32)
        ).unsqueeze(0)

        return image_tensor, mask_tensor
