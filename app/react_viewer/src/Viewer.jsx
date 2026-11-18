import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const roots = new WeakMap();

function SlicePanel({ model, scan, reference, showReference, opacity }) {
  return (
    <article className="slice-panel">
      <h3 style={{ borderColor: model.color }}>{model.name}</h3>

      <div className="slice-image">
        <img src={scan} alt={`CTA slice for ${model.name}`} />
        {model.overlay && (
          <img
            className="slice-overlay"
            src={model.overlay}
            style={{ opacity }}
            alt=""
          />
        )}
        {showReference && reference && (
          <img className="slice-overlay" src={reference} alt="" />
        )}
      </div>

      {model.note && <p className="slice-note">{model.note}</p>}
    </article>
  );
}

function Viewer({ data }) {
  const [opacity, setOpacity] = useState(0.55);
  const [showReference, setShowReference] = useState(false);
  const [selectedId, setSelectedId] = useState("combined.nii.gz");

  const baseline = data.models.find((model) => model.id === "baseline.nii.gz");
  const alternatives = data.models.filter((model) => model !== baseline);
  const comparison =
    alternatives.find((model) => model.id === selectedId) ?? alternatives[0];

  return (
    <section
      className="vessel-viewer"
      aria-label="Vessel segmentation comparison"
    >
      <div className="viewer-controls">
        <label>
          Compare with
          <select
            value={comparison.id}
            onChange={(event) => setSelectedId(event.target.value)}
          >
            {alternatives.map((model) => (
              <option key={model.id} value={model.id}>
                {model.name}
              </option>
            ))}
          </select>
        </label>

        <label>
          Overlay opacity · {Math.round(opacity * 100)}%
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={opacity}
            onChange={(event) => setOpacity(Number(event.target.value))}
          />
        </label>

        <label className="reference-toggle">
          <input
            type="checkbox"
            checked={showReference && Boolean(data.reference)}
            disabled={!data.reference}
            onChange={(event) => setShowReference(event.target.checked)}
          />
          {data.reference
            ? "Show ground-truth outline"
            : "Ground truth unavailable"}
        </label>
      </div>

      {data.errorMode && (
        <p className="slice-note">
          Error map · Green: correct vessel · Red: false positive · Blue: missed
          vessel
        </p>
      )}

      <div className="slice-grid">
        {[baseline, comparison].map((model) => (
          <SlicePanel
            key={model.id}
            model={model}
            scan={data.scan}
            reference={data.reference}
            showReference={showReference}
            opacity={opacity}
          />
        ))}
      </div>
    </section>
  );
}

export default function render({ parentElement, data }) {
  let root = roots.get(parentElement);

  if (!root) {
    const mount = parentElement.querySelector(".react-root");
    root = createRoot(mount);
    roots.set(parentElement, root);
  }

  root.render(<Viewer key={data.caseId} data={data} />);

  return () => {
    root.unmount();
    roots.delete(parentElement);
  };
}
