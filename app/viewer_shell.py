from pathlib import Path

import streamlit as st


SHELL_CSS = Path(__file__).with_name("viewer_shell.css")


def show_header():
    theme = st.sidebar.radio(
        "Appearance",
        ("Light", "Dark"),
        index=1,
        horizontal=True,
        key="viewer_appearance",
    )
    scheme = "light" if theme == "Light" else "dark"

    st.html(SHELL_CSS)
    st.html(
        f"""
        <header id="vessel-theme-{scheme}" class="vessel-header">
          <h1>Aortic Vessel Explorer</h1>
          <p>Compare 3D U-Net predictions on the same CTA scan.</p>
        </header>
        """
    )


def show_tutorial():
    st.subheader("Compare two models on one scan")
    st.markdown(
        """
1. **Choose a case.** Start with a demo case that has baseline,
   combined, and ground-truth masks. If you upload a case, use a CTA
   and masks that share the same voxel grid.
2. **Open Viewer.** Select **Axial** in the sidebar and click
   **Jump to densest vessel slice** if a ground-truth mask is loaded.
   Move the slice slider to explore nearby anatomy. Both panels show
   the same slice.
3. **Compare predictions.** The baseline is on the left. Choose the
   combined or connectivity-aware model on the right. Turn on
   **Show ground-truth outline** and lower the overlay opacity to
   see the CTA beneath the predictions.
4. **Inspect errors.** Select **Error map vs ground truth** in the
   sidebar. Red marks extra predicted vessel, blue marks missed
   vessel, and green marks agreement. Follow a thin branch across
   adjacent slices to see whether a gap persists.
5. **Check Metrics and 3D View.** Use clDice to compare centerline
   agreement for the case. In **3D View**, select the reference and
   both predictions, then rotate the meshes to inspect the branch.
        """
    )

    st.info(
        "Try finding one branch the combined model recovers and one place "
        "where it adds an unwanted prediction. Inspect both in adjacent slices."
    )
    st.caption(
        "“Prediction unavailable” means the mask could not be loaded. "
        "“No predicted vessel on this slice” means the mask loaded and "
        "contains no predicted vessel at the selected slice."
    )


def show_about():
    st.subheader("About the project")
    st.write(
        "This Cornell Tech CS 5787 project uses a 3D U-Net to segment "
        "the aorta and its annotated branches in CT angiography scans "
        "from the Aortic Vessel Tree dataset. We compare three training "
        "objectives to study how a centerline-aware loss affects "
        "vessel segmentation."
    )

    st.markdown(
        """
| Model | Training objective |
| --- | --- |
| Baseline U-Net | Dice + cross-entropy |
| Connectivity-aware U-Net | Dice + soft-clDice |
| Combined U-Net | Dice + cross-entropy + soft-clDice |
        """
    )

    st.markdown(
        """
**Reading the metrics**

- **Dice** measures overlap between the predicted and reference masks.
- **clDice** measures how well each mask covers the other mask’s centerline.
- **Recall** measures the fraction of reference vessel voxels recovered.
- **HD95** measures surface distance in millimeters. Lower is better.
        """
    )
    st.caption("Maanasi Ganapathy · Imren More · Kanta Garg · CS 5787")