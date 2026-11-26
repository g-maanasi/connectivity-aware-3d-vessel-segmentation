"""Train the 3D U-Net on AVT vessel patches.

Run from the repository root:
    PYTHONPATH=src python -m vessel_seg.train --mode baseline
    PYTHONPATH=src python -m vessel_seg.train --mode connectivity

Both runs use the same saved scan-level splits and random seed.
"""
import argparse
import csv
import json
import random
import time
from pathlib import Path

import numpy as np
import torch
from torch.utils.data import DataLoader

from .data import discover_cases, load_case
from .dataset import VesselPatchDataset
from .losses import VesselLoss
from .model import build_model


def get_device(name: str) -> torch.device:
    """Choose an available device, or use the one requested by the user."""
    if name == "auto":
        if torch.cuda.is_available():
            name = "cuda"
        elif torch.backends.mps.is_available():
            name = "mps"
        else:
            name = "cpu"
    return torch.device(name)

def prepare_cases(data_root: Path, splits_path: Path):
    """Load saved split IDs and match them to the real AVT scan files."""
    cases = discover_cases(data_root)
    case_by_id = {case.case_id: case for case in cases}

    with splits_path.open() as f:
        splits = json.load(f)

    # Split the ids by train, validation, and test
    train_ids = splits["train"]
    val_ids = splits["val"]
    test_ids = splits["test"]

    # Prevent scan-level data leakage and accidental missing files.
    all_ids = train_ids + val_ids + test_ids
    if len(all_ids) != len(set(all_ids)):
        raise ValueError("A case appears in more than one split")
    if set(all_ids) != set(case_by_id):
        raise ValueError("The saved splits don't match the available AVT cases")

    return case_by_id, train_ids, val_ids

def run_cases(
    model, criterion, optimizer, case_ids, case_by_id,
    args, device, epoch, training, get_volume=None, scaler=None,
):
    """Run one training or validation epoch, loading one CT scan at a time."""
    use_amp = scaler is not None and scaler.is_enabled()

    # Switch the model to training or evaluation mode.
    model.train(training)
    total_loss = 0.0
    total_samples = 0
    intersection = 0.0
    dice_denominator = 0.0

    for case_number, case_id in enumerate(case_ids):
        start_time = time.perf_counter()
        print(f"  {'Train' if training else 'Val'}: {case_id}", flush=True)

        # Change the training patches each epoch, but reuse the same
        # validation patches so the scores are comparable across epochs.
        sample_seed = args.seed + (epoch * 10000 if training else 100000) + case_number
        np.random.seed(sample_seed)

        # Load the CT scan and align its vessel mask to the same grid.
        # get_volume may serve a cached copy to skip NRRD reads + resampling.
        if get_volume is not None:
            volume = get_volume(case_id)
        else:
            volume = load_case(
                case_by_id[case_id],
                spacing_mm=args.spacing_mm,
                hu_window=(-200.0, 600.0),
                hu_offset=args.hu_offset,
            )

        # Sample matching 96 × 96 × 96 patches from the scan and mask.
        dataset = VesselPatchDataset(
            volume,
            patch_size=96,
            num_patches=args.patches_per_case,
            augment=training and not args.no_augment,
        )

        # Group patches into batches and shuffle them during training.
        generator = torch.Generator().manual_seed(sample_seed)
        loader = DataLoader(
            dataset,
            batch_size=args.batch_size,
            shuffle=training,
            num_workers=0,
            generator=generator,
        )

        for images, masks in loader:
            # Move the input patches and their labels to the model's device.
            images = images.to(device)
            masks = masks.to(device)

            if training:
                # Clear gradients left over from the previous batch.
                optimizer.zero_grad()

            # Predict vessel labels and compare the predictions with the masks.
            # Track gradients only during training. Mixed precision (AMP)
            # runs the forward pass in float16 on CUDA for ~2x throughput.
            with torch.set_grad_enabled(training):
                with torch.autocast(device_type=device.type, enabled=use_amp):
                    logits = model(images)
                    loss = criterion(logits, masks)

                if not torch.isfinite(loss).item():
                    raise ValueError(f"Non-finite loss for {case_id}")

                if training:
                    # Compute gradients and use them to update the model.
                    if use_amp:
                        scaler.scale(loss).backward()
                        scaler.step(optimizer)
                        scaler.update()
                    else:
                        loss.backward()
                        optimizer.step()

            # Weight each batch's loss by its patch count so a smaller
            # final batch contributes proportionally to the epoch average.
            batch_size = images.shape[0]
            total_loss += loss.item() * batch_size
            total_samples += batch_size

            if not training:
                # Pick the highest-scoring class for each voxel.
                # Class 1 is vessel, and class 0 is background.
                predicted_vessels = logits.argmax(dim=1, keepdim=True).bool()
                true_vessels = masks.bool()

                # Count correctly predicted vessel voxels and accumulate
                # the predicted and true vessel counts for Dice.
                intersection += (predicted_vessels & true_vessels).sum().item()
                dice_denominator += predicted_vessels.sum().item()
                dice_denominator += true_vessels.sum().item()

        elapsed = time.perf_counter() - start_time
        print(f"  Finished {case_id} in {elapsed:.1f} seconds", flush=True)

        # Release the loader and dataset before the next case. The volume
        # itself may live in the cross-epoch cache, so leave it alone.
        del loader, dataset

    # Average loss across all patches. Compute one Dice score from the
    # pooled validation counts when at least one vessel voxel was counted.
    mean_loss = total_loss / total_samples
    val_dice = (
        2.0 * intersection / dice_denominator
        if not training and dice_denominator > 0
        else None
    )
    return mean_loss, val_dice

def train(args):
    """Train the vessel segmentation model and save the best checkpoint."""

    # Check that the run has at least one epoch and a valid batch size.
    if args.epochs < 1 or args.batch_size < 1:
        raise ValueError("epochs and batch_size must be positive")

    # Require an even patch count for vessel-centered and background-centered sampling.
    if args.patches_per_case < 2 or args.patches_per_case % 2:
        raise ValueError("patches-per-case must be an even number >= 2")

    # Start both loss experiments with the same random seeds so they can
    # use the same initial model weights and patch sampling.
    random.seed(args.seed)
    np.random.seed(args.seed)
    torch.manual_seed(args.seed)
    if torch.cuda.is_available():
        torch.cuda.manual_seed_all(args.seed)

    # Choose where the model runs and load the saved case splits.
    device = get_device(args.device)
    case_by_id, train_ids, val_ids = prepare_cases(args.data_root, args.splits)

    # Use fewer cases when doing a quick test of the training pipeline.
    if args.max_train_cases:
        train_ids = train_ids[:args.max_train_cases]
    if args.max_val_cases:
        val_ids = val_ids[:args.max_val_cases]

    # Both splits need cases to produce meaningful training and validation scores.
    if not train_ids or not val_ids:
        raise ValueError("Both training and validation need at least one case")

    # Save quick tests under smoke/ and full runs under full/.
    # Each loss mode gets its own output folder.
    output_dir = (
        args.output_dir
        / ("smoke" if args.max_train_cases or args.max_val_cases else "full")
        / args.mode
    )
    output_dir.mkdir(parents=True, exist_ok=True)

    # Build the model and configure how it measures prediction errors.
    model = build_model().to(device)
    criterion = VesselLoss(
        mode=args.mode,
        cldice_weight=args.cldice_weight,
        skeleton_iterations=args.skeleton_iterations,
    )

    # AdamW updates the model weights after each training batch.
    optimizer = torch.optim.AdamW(model.parameters(), lr=args.lr)

    # Mixed precision needs CUDA; elsewhere the scaler is a no-op.
    scaler = torch.amp.GradScaler(enabled=device.type == "cuda" and not args.no_amp)

    # Resume a previous run: restore weights, optimizer, epoch, and best score,
    # then continue until --epochs (e.g. a 15-epoch run resumed with
    # --epochs 30 trains 15 MORE epochs, not 30 from scratch).
    start_epoch = 1
    best_dice = -1.0
    if args.resume:
        checkpoint = torch.load(args.resume, map_location="cpu", weights_only=True)
        if checkpoint["mode"] != args.mode:
            raise ValueError(f"Checkpoint mode {checkpoint['mode']!r} != --mode {args.mode!r}")
        model.load_state_dict(checkpoint["model_state_dict"])
        if "optimizer_state_dict" in checkpoint:
            optimizer.load_state_dict(checkpoint["optimizer_state_dict"])
        start_epoch = checkpoint["epoch"] + 1
        best_dice = checkpoint.get("best_dice", checkpoint.get("val_dice", -1.0))
        print(f"Resumed from {args.resume} at epoch {checkpoint['epoch']} "
              f"(best val Dice so far: {best_dice:.4f})")

    # Keep resampled volumes in RAM across epochs to skip repeated NRRD reads
    # and resampling. Each 1 mm volume is roughly 100-250 MB; size the cap to
    # your RAM. Validation cases benefit most since they repeat identically.
    volume_cache = {}

    def get_volume(case_id):
        if case_id in volume_cache:
            return volume_cache[case_id]
        volume = load_case(
            case_by_id[case_id],
            spacing_mm=args.spacing_mm,
            hu_window=(-200.0, 600.0),
            hu_offset=args.hu_offset,
        )
        if len(volume_cache) < args.cache_cases:
            volume_cache[case_id] = volume
        return volume

    print(f"Device: {device} | mode: {args.mode} | AMP: {scaler.is_enabled()} "
          f"| cache: {args.cache_cases} cases")
    print(f"Cases: {len(train_ids)} train, {len(val_ids)} validation")
    print(f"Saving to: {output_dir}")

    # Record training loss, validation loss, and validation Dice for each epoch.
    # A resumed run appends to its existing history instead of overwriting it.
    history_path = output_dir / "history.csv"
    resuming_history = args.resume and history_path.is_file()
    with history_path.open("a" if resuming_history else "w", newline="") as file:
        writer = csv.writer(file)
        if not resuming_history:
            writer.writerow(["epoch", "train_loss", "val_loss", "val_dice"])

        for epoch in range(start_epoch, args.epochs + 1):
            print(f"\nEpoch {epoch}/{args.epochs}", flush=True)

            # Shuffle a copy of the training IDs. The order changes each
            # epoch and is reproducible across runs with the same seed.
            ordered_train_ids = train_ids.copy()
            random.Random(args.seed + epoch).shuffle(ordered_train_ids)

            # Train on the shuffled cases, updating the model weights.
            train_loss, _ = run_cases(
                model, criterion, optimizer, ordered_train_ids,
                case_by_id, args, device, epoch, training=True,
                get_volume=get_volume, scaler=scaler,
            )

            # Evaluate on the validation cases with the current weights.
            val_loss, val_dice = run_cases(
                model, criterion, optimizer, val_ids,
                case_by_id, args, device, epoch, training=False,
                get_volume=get_volume, scaler=scaler,
            )

            # Write this epoch's scores to disk before starting the next one.
            writer.writerow([epoch, train_loss, val_loss, val_dice])
            file.flush()
            print(
                f"Train loss: {train_loss:.4f} | Val loss: {val_loss:.4f} | "
                f"Val Dice: {val_dice:.4f}",
                flush=True,
            )

            # Use vessel Dice to choose the best checkpoint for either loss mode.
            if val_dice > best_dice:
                best_dice = val_dice
                torch.save(
                    {
                        "model_state_dict": model.state_dict(),
                        "epoch": epoch,
                        "mode": args.mode,
                        "seed": args.seed,
                        "val_dice": val_dice,
                        "patch_size": 96,
                        "spacing_mm": args.spacing_mm,
                    },
                    output_dir / "best.pt",
                )
                print("Saved best checkpoint")

            # Always save the latest state so a run can resume with --resume.
            torch.save(
                {
                    "model_state_dict": model.state_dict(),
                    "optimizer_state_dict": optimizer.state_dict(),
                    "epoch": epoch,
                    "mode": args.mode,
                    "seed": args.seed,
                    "best_dice": best_dice,
                    "patch_size": 96,
                    "spacing_mm": args.spacing_mm,
                },
                output_dir / "last.pt",
            )

    print(f"\nFinished. Best validation Dice: {best_dice:.4f}")
    print(f"Resume later with: --resume {output_dir / 'last.pt'} --epochs <more>")


def main():
    """Read command-line settings and start training the AVT 3D U-Net."""
    parser = argparse.ArgumentParser(description="Train AVT 3D U-Net")

    # Choose which loss mode to train with. This flag is required.
    parser.add_argument("--mode", required=True, choices=["baseline", "connectivity", "combined"])

    # Set where to find scans and case splits and where to save results.
    parser.add_argument("--data-root", type=Path, default=Path("data/raw"))
    parser.add_argument("--splits", type=Path, default=Path("configs/splits.json"))
    parser.add_argument("--output-dir", type=Path, default=Path("runs"))

    # Set how long to train, how many patches to use, and how large
    # each weight update should be. The seed helps reproduce the run.
    parser.add_argument("--epochs", type=int, default=15)
    parser.add_argument("--batch-size", type=int, default=1)
    parser.add_argument("--patches-per-case", type=int, default=8)
    parser.add_argument("--lr", type=float, default=1e-4)
    parser.add_argument("--seed", type=int, default=42)

    # Choose the device to run on or let the script pick automatically.
    parser.add_argument("--device", choices=["auto", "cpu", "cuda", "mps"], default="auto")

    # Set the distance between voxels and the offset added to CT intensities.
    parser.add_argument("--spacing-mm", type=float, default=1.0)
    parser.add_argument("--hu-offset", type=float, default=None)

    # Set the strength of the connectivity term and the number of
    # steps used to approximate vessel centerlines for clDice.
    parser.add_argument("--cldice-weight", type=float, default=0.5)
    parser.add_argument("--skeleton-iterations", type=int, default=10)

    # Continue a previous run from its saved state instead of starting over.
    parser.add_argument("--resume", type=Path, default=None,
                        help="Path to a last.pt checkpoint; trains from its epoch+1 up to --epochs")

    # Data augmentation is on by default for training patches.
    parser.add_argument("--no-augment", action="store_true",
                        help="Disable training-time flips/rotations/intensity jitter")

    # Speed: mixed precision (CUDA only) and cross-epoch volume caching.
    parser.add_argument("--no-amp", action="store_true",
                        help="Disable mixed-precision training on CUDA")
    parser.add_argument("--cache-cases", type=int, default=0,
                        help="Keep up to N resampled volumes in RAM across epochs "
                             "(~100-250 MB each at 1 mm; 0 = off)")

    # Limit the number of cases for a quick test. A value of 0 uses the full split.
    parser.add_argument(
        "--max-train-cases",
        type=int,
        default=0,
        help="Optional subset for a smoke test; never changes splits.json",
    )
    parser.add_argument("--max-val-cases", type=int, default=0)

    train(parser.parse_args())


if __name__ == "__main__":
    main()