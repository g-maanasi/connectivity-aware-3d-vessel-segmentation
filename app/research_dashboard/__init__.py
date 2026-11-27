from base64 import b64encode
from io import BytesIO
from pathlib import Path

import numpy as np
import streamlit as st
from PIL import Image
from scipy.ndimage import binary_erosion


ROOT = Path(__file__).resolve().parent


def png_url(pixels):
    with BytesIO() as buffer:
        Image.fromarray(
            np.asarray(pixels, dtype=np.uint8)
        ).save(buffer, format="PNG")

        encoded = b64encode(
            buffer.getvalue()
        ).decode("ascii")

    return f"data:image/png;base64,{encoded}"


def colored_mask(mask, color):
    rgba = np.zeros((*mask.shape, 4), dtype=np.uint8)
    rgba[mask] = (*color, 255)
    return png_url(rgba)


def show_dashboard(
    *,
    scan,
    reference,
    predictions,
    mesh,
    mesh_key,
    mesh_name,
    results,
    controls,
    slice_count,
    theme,
    component_key,
):
    bundle = ROOT / "dist" / "dashboard.js"

    if not bundle.is_file():
        st.error(
            "Build the dashboard from your repository root with "
            "`npm --prefix app/research_dashboard install` and "
            "`npm --prefix app/research_dashboard run build`."
        )
        return

    panels = []

    for name, mask, issue, color in predictions:
        overlay = None
        note = None

        if mask is None:
            note = (
                "Prediction unavailable · "
                f"{issue or 'mask file missing'}"
            )
        else:
            overlay = colored_mask(mask, color)

            if not mask.any():
                note = "No predicted vessel on this slice."

        panels.append(
            {
                "name": name,
                "overlay": overlay,
                "note": note,
            }
        )

    reference_url = None

    if reference is not None:
        edge = reference & ~binary_erosion(
            reference,
            border_value=0,
        )
        reference_url = colored_mask(
            edge,
            (250, 204, 21),
        )

    mesh_data = None

    if mesh is not None:
        vertices, faces = mesh

        mesh_data = {
            "key": mesh_key,
            "vertices": vertices.astype(
                np.float32
            ).ravel().tolist(),
            "faces": faces.astype(
                np.uint32
            ).ravel().tolist(),
        }

    component = st.components.v2.component(
        "aortic_research_dashboard",
        html='<div class="dashboard-root"></div>',
        css=(ROOT / "dashboard.css").read_text(
            encoding="utf-8"
        ),
        js=bundle.read_text(encoding="utf-8"),
    )

    component(
        key=component_key,
        data={
            "scan": png_url(scan),
            "reference": reference_url,
            "predictions": panels,
            "mesh": mesh_data,
            "meshName": mesh_name,
            "results": results,
            "controls": controls,
            "sliceCount": int(slice_count),
            "theme": theme,
        },
        default={"controls": controls},
        on_controls_change=lambda: None,
    )