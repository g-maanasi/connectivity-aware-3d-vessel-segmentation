# Connectivity-Aware 3D Vessel Segmentation

This CS 5787 project segments the aorta and its annotated branches in 3D CT angiography (CTA). The experiments use the same MONAI 3D U-Net architecture with three training objectives.

| Variant | Training objective |
| --- | --- |
| Baseline | Dice + cross-entropy |
| Connectivity-aware | Dice + weighted soft-clDice |
| Combined | Dice + cross-entropy + soft-clDice |

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

These commands show the baseline and connectivity-aware training entry points. Run `python -m vessel_seg.train --help` to check the objective and preprocessing options available in your checkout. Match the preprocessing and training settings across runs used for direct comparison.

```bash
python -m vessel_seg.train --mode baseline --device cuda
python -m vessel_seg.train --mode connectivity --device cuda
```

Defaults include 96³ patches, 1 mm target spacing, eight patches per case, and 15 epochs. The trainer writes `history.csv` and the checkpoint with the highest validation patch Dice, `best.pt`, under `runs/smoke/<mode>/` for limited runs and `runs/full/<mode>/` for full runs.

## Evaluate full scans

After producing the full-run checkpoints required by the evaluator, evaluate a validation case to check the pipeline and then run on the nine held-out test cases.

```bash
python -m vessel_seg.evaluate --split val --max-cases 1 --device cuda
python -m vessel_seg.evaluate --split test --device cuda
```

The evaluator writes per-case Dice, clDice, recall, and HD95 in millimeters, along with bootstrap summaries, paired differences, and a comparison image under `runs/evaluation/`. If you override `--hu-offset`, use the same value for training and evaluation. Use `--device cpu` for CPU execution.

## Open the viewer

From the repository root, activate the environment and export `PYTHONPATH` as shown in Setup so Streamlit can import `vessel_seg`.

```bash
python -m streamlit run app/streamlit_app.py
```

The milestone viewer looks for pre-exported NIfTI cases under `app/demo_cases/<case_id>/`. Use the directory configured by `DEMO_DIR` if your local app points to `runs/demo/`. Each case contains:

| File | Contents |
| --- | --- |
| `scan.nii.gz` | Required CTA scan |
| `ground_truth.nii.gz` | Optional reference mask |
| `baseline.nii.gz` | Optional baseline prediction |
| `connectivity.nii.gz` | Optional connectivity-aware prediction |
| `combined.nii.gz` | Optional combined-objective prediction |

Keep the scan and masks on the same voxel grid. The app supports NIfTI uploads, axial/coronal/sagittal overlays, error maps and metrics when a reference mask is available, and interactive 3D meshes. The 3D view uses Plotly and scikit-image. The milestone app can generate a synthetic demo when no bundled cases are available. Prepare real-scan NIfTI exports separately from the evaluator's CSV and PNG outputs.

## Milestone results

Best validation patch Dice across 15-epoch runs, as reported in the milestone:

| Training objective | Preprocessing | Best validation patch Dice |
| --- | --- | ---: |
| Dice + cross-entropy | Original | 0.7600 |
| Dice + soft-clDice | Original | 0.4547 |
| Dice + cross-entropy | Corrected HU | 0.7355 |
| Dice + cross-entropy + soft-clDice | Corrected HU | 0.8411 |

With corrected HU preprocessing, the combined objective improved validation patch Dice by **0.1056** over the baseline. The full-volume comparison on the nine held-out scans is pending. It will measure Dice, clDice, recall, and HD95 and inspect predictions for missed branches and false connections.

## Team ownership

- **Maanasi Ganapathy (mg2563)** owns CTA preprocessing and loss implementation, ran the initial baseline training, and contributed to the U-Net and Streamlit viewer.
- **Imren More (im436)** owns patch-based training and full-volume evaluation, including patch sampling, checkpoint evaluation, and metric aggregation. She retrained the connectivity-aware U-Net.
- **Kanta Garg (kg632)** owns the viewer's synthetic demo workflow, configured GitHub Codespaces to launch the viewer, and contributed to the Streamlit MVP.
