# src/vessel_seg/losses.py
# Training losses for binary 3D vessel segmentation.

import torch
from torch import nn
from torch.nn import functional as F

def soft_erode(image: torch.Tensor) -> torch.Tensor:
    """Approximate erosion using min pooling along each spatial axis."""
    depth = -F.max_pool3d(-image, (3, 1, 1), stride=1, padding=(1, 0, 0))
    height = -F.max_pool3d(-image, (3,1,1), stride=1, padding=(1, 0, 0))
    width = -F.max_pool3d(-image, (1,1,3), stride=1, padding=(0, 0, 1))

    return torch.minimum(torch.minimum(depth, height), width)

def soft_open(image: torch.Tensor) -> torch.Tensor:
    """Erode, then dilate."""
    return F.max_pool3d(soft_erode(image), 3, stride=1, padding=1)

def soft_skeleton(image: torch.Tensor, iterations: int) -> torch.Tensor:
    """Extract a differentiable approximation of the vessel centerline."""
    skeleton = F.relu(image - soft_open(image))

    for _ in range(iterations):
        image = soft_erode(image)
        detail = F.relu(image - soft_open(image))
        skeleton = skeleton + F.relu(detail - skeleton * detail)

    return skeleton

class VesselLoss(nn.Module):
    def __init__(
        self,
        mode: str = "baseline",
        cldice_weight: float = 0.5,
        skeleton_iterations: int = 10,
    ):
        super().__init__()
        if mode not in {"baseline", "connectivity"}:
            raise ValueError("mode must be 'baseline' or 'connectivity'")
        if cldice_weight < 0 or skeleton_iterations < 0:
            raise ValueError("cldice_weight and skeleton_iterations must be nonnegative")

        self.mode = mode
        self.cldice_weight = cldice_weight
        self.skeleton_iterations = skeleton_iterations

    def forward(self, logits: torch.Tensor, masks: torch.Tensor) -> torch.Tensor:
        # Channel 0 is background and channel 1 is vessel.
        logits = logits.float()
        vessel_probs = logits.softmax(dim=1)[:, 1:2]
        masks = masks.float()
        spatial_dims = (2, 3, 4)
        eps = 1e-6

        intersection = (vessel_probs * masks).sum(dim=spatial_dims)
        total = (vessel_probs + masks).sum(dim=spatial_dims)
        dice_loss = 1.0 - ((2.0 * intersection + eps) / (total + eps)).mean()

        if self.mode == "baseline":
            labels = masks.squeeze(1).long()
            return dice_loss + F.cross_entropy(logits, labels)

        pred_skeleton = soft_skeleton(vessel_probs, self.skeleton_iterations)
        true_skeleton = soft_skeleton(masks, self.skeleton_iterations)

        pred_length = pred_skeleton.sum(dim=spatial_dims)
        true_length = true_skeleton.sum(dim=spatial_dims)

        precision = ((pred_skeleton * masks).sum(dim=spatial_dims) + eps) / (
            pred_length + eps
        )
        sensitivity = ((true_skeleton * vessel_probs).sum(dim=spatial_dims) + eps) / (
            true_length + eps
        )
        cldice = 2.0 * precision * sensitivity / (precision + sensitivity).clamp_min(eps)

        # Patches without a target centerline still contribute to Dice loss.
        has_centerline = true_length > 0
        cldice_loss = ((1.0 - cldice) * has_centerline).sum()
        cldice_loss = cldice_loss / has_centerline.sum().clamp_min(1)

        return dice_loss + self.cldice_weight * cldice_loss