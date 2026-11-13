# src/vessel_seg/model.py
# Shared 3D U-Net for binary vessel segmentation.

import torch
from monai.networks.nets import UNet

def build_model() -> UNet:
    """Create a model that maps one CTA channel to two class logits."""
    return UNet(
        spatial_dims = 3,
        in_channels = 1,
        out_channels = 2,
        channels = (16, 32, 64, 128, 256),
        strides = (2, 2, 2, 2),
        num_res_units = 2,
        norm = "INSTANCE"
    )

if __name__ == "__main__":
    model = build_model().eval()
    image = torch.zeros(1, 1, 96, 96, 96)

    with torch.inference_mode():
        logits = model(image)

    assert logits.shape == (1, 2, 96, 96, 96), logits.shape
    print(f"Input shape:  {tuple(image.shape)}")
    print(f"Output shape: {tuple(logits.shape)}")