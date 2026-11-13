import torch
from vessel_seg.losses import VesselLoss

# A small 3D mask with a straight vessel through the middle.
mask = torch.zeros(1, 1, 16, 16, 16)
mask[:, :, 2:14, 7:9, 7:9] = 1

# Two logit channels: background and vessel.
vessel_logits = (2 * mask - 1) * 8
good_logits = torch.cat([-vessel_logits, vessel_logits], dim=1)

# Simulate a missed section by predicting background across two slices.
broken_logits = good_logits.clone()
broken_logits[:, 0, 7:9, 7:9, 7:9] = 8
broken_logits[:, 1, 7:9, 7:9, 7:9] = -8

for mode in ("baseline", "connectivity"):
    criterion = VesselLoss(mode=mode)
    logits = broken_logits.clone().requires_grad_()

    good_loss = criterion(good_logits, mask)
    broken_loss = criterion(logits, mask)

    assert torch.isfinite(good_loss).item()
    assert torch.isfinite(broken_loss).item()
    assert good_loss.item() < broken_loss.item()

    broken_loss.backward()
    assert logits.grad is not None
    assert torch.isfinite(logits.grad).all().item()
    assert logits.grad.abs().sum().item() > 0

    print(f"{mode}: intact={good_loss.item():.4f}, "
          f"broken={broken_loss.item():.4f} — passed")