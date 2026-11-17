
# src/vessel_seg/model_registry.py
# Central registry for all trained U-Net checkpoints.

from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
RUNS_DIR = ROOT / "runs"

# Automatically find every saved best.pt checkpoint
MODEL_PATHS = {
    path.parent.relative_to(RUNS_DIR).as_posix(): path
    for path in sorted(RUNS_DIR.rglob("best.pt"))
}
