import React, { useEffect, useRef, useState } from "react";

import { createRoot } from "react-dom/client";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const roots = new WeakMap();

function MeshViewer({ mesh, theme }) {
  const host = useRef(null);
  const sceneApi = useRef(null);
  const savedView = useRef(null);

  const [wireframe, setWireframe] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const container = host.current;

    if (!mesh || !container) {
      return;
    }

    let renderer;

    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
      });
      setError("");
    } catch {
      setError("WebGL is unavailable in this browser.");
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();

    scene.background = new THREE.Color(
      theme === "Dark" ? "#16232b" : "#f5f8f7",
    );

    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100000);

    camera.up.set(0, 0, 1);

    const geometry = new THREE.BufferGeometry();

    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(mesh.vertices, 3),
    );

    geometry.setIndex(
      new THREE.BufferAttribute(new Uint32Array(mesh.faces), 1),
    );

    geometry.computeVertexNormals();
    geometry.computeBoundingBox();

    const center = new THREE.Vector3();
    geometry.boundingBox.getCenter(center);

    geometry.translate(-center.x, -center.y, -center.z);

    const size = new THREE.Vector3();
    geometry.boundingBox.getSize(size);

    const radius = Math.max(size.x, size.y, size.z, 1);

    const material = new THREE.MeshStandardMaterial({
      color: "#48bba8",
      roughness: 0.48,
      metalness: 0.05,
      side: THREE.DoubleSide,
    });

    const vessel = new THREE.Mesh(geometry, material);

    scene.add(vessel);

    scene.add(new THREE.HemisphereLight(0xffffff, 0x58736c, 2.5));

    const light = new THREE.DirectionalLight(0xffffff, 3);

    light.position.set(radius, -radius, radius * 2);

    scene.add(light);

    const orbit = new OrbitControls(camera, renderer.domElement);

    orbit.enableDamping = true;

    function reset() {
      camera.position.set(0, -radius * 2.1, radius * 0.25);

      orbit.target.set(0, 0, 0);
      orbit.update();
    }

    reset();

    if (savedView.current?.key === mesh.key) {
      camera.position.fromArray(savedView.current.position);

      orbit.target.fromArray(savedView.current.target);

      orbit.update();
    }

    sceneApi.current = {
      reset,
      material,
    };

    material.wireframe = wireframe;

    const resize = new ResizeObserver(() => {
      const width = container.clientWidth;
      const height = container.clientHeight;

      if (!width || !height) {
        return;
      }

      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    });

    resize.observe(container);

    renderer.setAnimationLoop(() => {
      orbit.update();
      renderer.render(scene, camera);
    });

    return () => {
      savedView.current = {
        key: mesh.key,
        position: camera.position.toArray(),
        target: orbit.target.toArray(),
      };

      resize.disconnect();
      renderer.setAnimationLoop(null);
      orbit.dispose();
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      renderer.domElement.remove();
      sceneApi.current = null;
    };
  }, [mesh?.key, theme]);

  useEffect(() => {
    if (sceneApi.current) {
      sceneApi.current.material.wireframe = wireframe;
    }
  }, [wireframe]);

  function fullscreen() {
    host.current?.closest(".mesh-card")?.requestFullscreen?.();
  }

  return (
    <div className="mesh-card">
      <div
        className="mesh-host"
        ref={host}
        aria-label="Interactive 3D vessel reconstruction"
      />

      {!mesh && (
        <div className="mesh-empty">No nonempty vessel mesh is available.</div>
      )}

      {error && <div className="mesh-empty">{error}</div>}

      <div className="mesh-tools">
        <button
          type="button"
          disabled={!mesh}
          onClick={() => sceneApi.current?.reset()}
        >
          Reset view
        </button>

        <button
          type="button"
          disabled={!mesh}
          aria-pressed={wireframe}
          onClick={() => setWireframe(!wireframe)}
        >
          Wireframe
        </button>

        <button type="button" disabled={!mesh} onClick={fullscreen}>
          Fullscreen
        </button>
      </div>

      <span className="mesh-hint">Drag to rotate · Scroll to zoom</span>
    </div>
  );
}

function ScanPanel({ prediction, scan, reference, opacity, showTruth }) {
  return (
    <article className="scan-card">
      <h3>{prediction.name}</h3>

      <div className="scan-image">
        <img src={scan} alt="Selected CTA slice" />

        {prediction.overlay && (
          <img
            src={prediction.overlay}
            className="scan-layer"
            style={{ opacity }}
            alt=""
          />
        )}

        {showTruth && reference && (
          <img src={reference} className="scan-layer" alt="" />
        )}
      </div>

      {prediction.note && <p className="status">{prediction.note}</p>}
    </article>
  );
}

function Dashboard({ data, setStateValue }) {
  const [opacity, setOpacity] = useState(0.5);
  const [showTruth, setShowTruth] = useState(false);

  const [slice, setSlice] = useState(data.controls.index);

  useEffect(() => {
    setSlice(data.controls.index);
  }, [data.controls.index, data.controls.plane]);

  function commitSlice() {
    if (slice !== data.controls.index) {
      setStateValue("controls", {
        ...data.controls,
        index: slice,
      });
    }
  }

  function changePlane(event) {
    setStateValue("controls", {
      plane: event.target.value,
      index: null,
    });
  }

  function formatNumber(value, metric) {
    if (value === null || value === undefined) {
      return "—";
    }

    return Number(value).toFixed(metric === "hd95_mm" ? 2 : 4);
  }

  return (
    <div className="research-dashboard" data-theme={data.theme}>
      <div className="dashboard-controls">
        <label>
          Orientation
          <select value={data.controls.plane} onChange={changePlane}>
            <option>Axial</option>
            <option>Coronal</option>
            <option>Sagittal</option>
          </select>
        </label>

        <label className="opacity-control">
          Overlay opacity
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={opacity}
            onChange={(event) => setOpacity(Number(event.target.value))}
          />
        </label>

        <label className="truth-control">
          <input
            type="checkbox"
            checked={showTruth}
            disabled={!data.reference}
            onChange={(event) => setShowTruth(event.target.checked)}
          />
          Ground-truth outline
        </label>
      </div>

      <div className="dashboard-grid">
        <div className="main-column">
          <section className="mesh-section">
            <div className="section-heading">
              <h3>3D vessels</h3>
              <span>{data.meshName}</span>
            </div>

            <MeshViewer mesh={data.mesh} theme={data.theme} />
          </section>

          <section className="results-card">
            <h3>Results</h3>

            <div className="table-scroll">
              <table>
                <thead>
                  <tr>
                    <th>Model</th>
                    <th>Dice ↑</th>
                    <th>clDice ↑</th>
                    <th>Recall ↑</th>
                    <th>HD95 ↓</th>
                  </tr>
                </thead>

                <tbody>
                  {data.results.map((row) => (
                    <tr key={row.model}>
                      <td>{row.model}</td>
                      {["dice", "cldice", "recall", "hd95_mm"].map((metric) => (
                        <td key={metric}>
                          {formatNumber(row[metric], metric)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="status">Full-volume case metrics · HD95 in mm</p>
          </section>
        </div>

        <div className="scan-column">
          {data.predictions.map((prediction) => (
            <ScanPanel
              key={prediction.name}
              prediction={prediction}
              scan={data.scan}
              reference={data.reference}
              opacity={opacity}
              showTruth={showTruth}
            />
          ))}

          <div className="slice-control">
            <label htmlFor="case-slice">
              Slice {slice + 1} / {data.sliceCount}
            </label>

            <input
              id="case-slice"
              type="range"
              min="0"
              max={data.sliceCount - 1}
              value={slice}
              disabled={data.sliceCount <= 1}
              onChange={(event) => setSlice(Number(event.target.value))}
              onPointerUp={commitSlice}
              onKeyUp={commitSlice}
              onBlur={commitSlice}
            />

            {slice !== data.controls.index && (
              <p className="status">Updating selected slice…</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function render({ parentElement, data, setStateValue }) {
  let root = roots.get(parentElement);

  if (!root) {
    root = createRoot(parentElement.querySelector(".dashboard-root"));

    roots.set(parentElement, root);
  }

  root.render(<Dashboard data={data} setStateValue={setStateValue} />);

  return () => {
    root.unmount();
    roots.delete(parentElement);
  };
}
