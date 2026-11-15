# Connectivity-Aware 3D Vessel Segmentation

This CS 5787 project segments the aorta and its annotated branches in 3D CT angiography (CTA). Both training modes use the same MONAI 3D U-Net. The baseline uses Dice plus cross-entropy. The connectivity mode uses Dice plus weighted soft-clDice.

## Setup

Use Python 3.11 or 3.12. Run commands from the repository root. For GPU execution, install a CUDA-enabled PyTorch build compatible with your system.

```bash
python3 -m venv .venv
source .venv/bin/activate
python -m pip install -r requirements.txt
export PYTHONPATH="$PWD/src${PYTHONPATH:+:$PYTHONPATH}"
```

Download the [Aortic Vessel Tree dataset](https://figshare.com/articles/dataset/Aortic_Vessel_Tree_AVT_CTA_Datasets_and_Segmentations/14806362). Put the `Dongyang`, `KiTS`, and `Rider` folders directly inside `data/raw/`. Keep matching scan and mask files together, for example `data/raw/Dongyang/D1/D1.nrrd` and `data/raw/Dongyang/D1/D1.seg.nrrd`. The checked-in split lists 39 training, 8 validation, and 9 test cases.

## Model and loss checks

```bash
python -m vessel_seg.model
python -m vessel_seg.scripts.check_loss
```

## Train

For a quick training check, use one case from each split as shown below. The full AVT dataset must still be present for split validation.

```bash
python -m vessel_seg.train --mode baseline --epochs 1 --max-train-cases 1 --max-val-cases 1
python -m vessel_seg.train --mode connectivity --epochs 1 --max-train-cases 1 --max-val-cases 1
```

For the full runs, use the same GPU and configuration for both modes.

```bash
python -m vessel_seg.train --mode baseline --device cuda
python -m vessel_seg.train --mode connectivity --device cuda
```

Defaults include 96³ patches, 1 mm target spacing, eight patches per case, and 15 epochs. The trainer writes `history.csv` and the checkpoint with the highest validation patch Dice, `best.pt`, under `runs/smoke/<mode>/` for limited runs and `runs/full/<mode>/` for full runs.

## Evaluate full scans

After producing both full-run checkpoints, evaluate a validation case to check the pipeline and then run on the held-out test cases.

```bash
python -m vessel_seg.evaluate --split val --max-cases 1 --device cuda
python -m vessel_seg.evaluate --split test --device cuda
```

The evaluator writes per-case Dice, clDice, recall, and HD95 in millimeters, along with bootstrap summaries, paired differences, and a comparison image under `runs/evaluation/`. If you override `--hu-offset`, use the same value for training and evaluation. Use `--device cpu` for CPU execution.

## Open the viewer

```bash
python -m streamlit run app/streamlit_app.py
```

The viewer reads pre-exported NIfTI files from `runs/demo/<case_id>/`. Add a normalized `scan.nii.gz` and any available `ground_truth.nii.gz`, `baseline.nii.gz`, and `connectivity.nii.gz` masks on the same grid. Prepare these NIfTI files separately from the evaluator's CSV and PNG outputs.

## Milestone status

The archived [baseline](https://github.com/g-maanasi/connectivity-aware-3d-vessel-segmentation/blob/ecd1d7f/runs/smoke/baseline/history.csv) and [connectivity](https://github.com/g-maanasi/connectivity-aware-3d-vessel-segmentation/blob/ecd1d7f/runs/smoke/connectivity/history.csv) smoke runs recorded one epoch and validation patch Dice of 0.12073 and 0.12044, respectively. Full-volume comparison results are pending.
