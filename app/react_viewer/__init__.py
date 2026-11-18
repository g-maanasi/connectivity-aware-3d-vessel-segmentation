from base64 import b64encode
from io import BytesIO
from pathlib import Path

import numpy as np
import streamlit as st
from PIL import Image


ROOT = Path(__file__).resolve().parent


def png_url(pixels):
    with BytesIO() as buffer:
        Image.fromarray(pixels).save(buffer, format="PNG")
        encoded = b64encode(buffer.getvalue()).decode("ascii")
    return f"data:image/png;base64,{encoded}"


def overlay_url(shape, regions):
    pixels = np.zeros((*shape, 4), dtype=np.uint8)
    for mask, color in regions:
        pixels[mask] = (*color, 255)
    return png_url(pixels)


def mask_outline(mask):
    padded = np.pad(mask, 1, constant_values=False)
    interior = (
        mask
        & padded[:-2, 1:-1]
        & padded[2:, 1:-1]
        & padded[1:-1, :-2]
        & padded[1:-1, 2:]
    )
    return mask & ~interior


@st.cache_resource
def register_viewer():
    bundle = ROOT / "dist" / "viewer.js"
    if not bundle.is_file():
        return None

    return st.components.v2.component(
        "vessel_slice_viewer",
        html='<div class="react-root"></div>',
        css=(ROOT / "viewer.css").read_text(encoding="utf-8"),
        js=bundle.read_text(encoding="utf-8"),
    )


def show_viewer(*, case_id, scan, reference, models, error_colors, error_mode):
    component = register_viewer()
    if component is None:
        st.info(
            "Build the React viewer with `npm run build` in "
            "`app/react_viewer`, then restart Streamlit."
        )
        return

    shape = scan.shape[:2]
    panels = []

    for name, filename, color, mask, issue in models:
        note = None
        overlay = None

        if mask is None:
            note = f"Prediction unavailable · {issue or 'mask file missing'}"
        elif error_mode and reference is not None:
            overlay = overlay_url(
                shape,
                [
                    (mask & reference, error_colors["True positive"]),
                    (mask & ~reference, error_colors["False positive"]),
                    (~mask & reference, error_colors["False negative"]),
                ],
            )
            if not mask.any():
                note = "No predicted vessel on this slice."
        elif mask.any():
            overlay = overlay_url(shape, [(mask, color)])
        else:
            note = "No predicted vessel on this slice."

        panels.append(
            {
                "id": filename,
                "name": name,
                "color": f"rgb{tuple(color)}",
                "overlay": overlay,
                "note": note,
            }
        )

    reference_url = None
    if reference is not None:
        reference_url = overlay_url(shape, [(mask_outline(reference), (45, 212, 191))])

    component(
        key="vessel_slice_viewer",
        data={
            "caseId": str(case_id),
            "scan": png_url(scan),
            "reference": reference_url,
            "models": panels,
            "errorMode": bool(error_mode and reference is not None),
        },
    )