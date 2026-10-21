import { useState } from 'react'
import { CAT_COLS, CAT_PIXELS, CAT_ROWS } from "../assets/catPixels"

const PIXEL_FILL: Record<string, [string, number]> = {
  "1": ["currentColor", 1],
}

const CAT_RUNS = CAT_PIXELS.flatMap((row, y) => {
  const runs: { x: number; y: number; len: number; c: string }[] = []
  for (let x = 0; x < row.length; ) {
    const c = row[x]
    let len = 1
    while (row[x + len] === c) len++
    if (PIXEL_FILL[c]) runs.push({ x, y, len, c })
    x += len
  }
  return runs
})

function DitherPortrait() {
  const px = 5
  const x0 = (560 - CAT_COLS * px) / 2
  const y0 = (640 - CAT_ROWS * px) / 2
  return (
    <svg
      viewBox="0 0 560 640"
      className="portrait-svg"
      role="img"
      aria-label="1-bit pixel art portrait of a cat"
    >
      <g transform={`translate(${x0} ${y0})`} shapeRendering="crispEdges">
        {CAT_RUNS.map(({ x, y, len, c }) => (
          <rect
            key={`${x}-${y}`}
            x={x * px}
            y={y * px}
            width={len * px}
            height={px}
            fill={PIXEL_FILL[c][0]}
            fillOpacity={PIXEL_FILL[c][1]}
          />
        ))}
      </g>
      <path
        d="M2 2h32M2 2v32M558 638h-32M558 638v-32"
        className="portrait-guides"
      />
      <text x="2" y="634" className="portrait-label">
        SUBJECT_00 / FELIS.CATUS
      </text>
      <text x="508" y="14" className="portrait-label">
        FIG.01
      </text>
    </svg>
  )
}

export default function PortrainEditor() {
  const [scale, setScale] = useState(100)
  const [glow, setGlow] = useState(50)
  const [opacity, setOpacity] = useState(100)
  const [lines, setLines] = useState(true)
  const [tint, setTint] = useState<"LILAC" | "CORAL" | "MONO">("LILAC")
  const [tool, setTool] = useState(0)
  const color =
    tint === "LILAC"
      ? "var(--acid)"
      : tint === "CORAL"
        ? "var(--red)"
        : "#e9e4f2"
  const reset = () => {
    setScale(100)
    setGlow(50)
    setOpacity(100)
    setLines(true)
    setTint("LILAC")
  }
  const sliders: [string, number, (n: number) => void, number, number][] = [
    ["Scale", scale, setScale, 70, 120],
    ["Glow", glow, setGlow, 0, 100],
    ["Opacity", opacity, setOpacity, 20, 100],
  ]
  return (
    <div className="editor">
      <div className="editor-menu">
        <div className="window-controls">
          <i />
          <i />
          <i />
        </div>
        <span>File</span>
        <span>Edit</span>
        <span>View</span>
        <span>Help</span>
        <b>subject_00.dith</b>
      </div>
      <div className="editor-body">
        <div className="editor-rail">
          {["✥", "⌖", "▦"].map((t, i) => (
            <button
              key={t}
              type="button"
              className={tool === i ? "active" : ""}
              onClick={() => setTool(i)}
              aria-label={`Tool ${i + 1}`}
            >
              {t}
            </button>
          ))}
        </div>
        <div
          className={`editor-canvas ${lines ? "lines" : ""}`}
          style={{ color, ["--glow" as string]: `${glow / 5}px` }}
        >
          <span className="canvas-tag">SUBJECT_00 / UNVERIFIED</span>
          <div
            className="canvas-art"
            style={{
              transform: `scale(${scale / 100})`,
              opacity: opacity / 100,
            }}
          >
            <DitherPortrait />
          </div>
          <p className="canvas-caption">
            <span>B</span>uilt in the <span>D</span>ark, <span>S</span>hipped in{" "}
            <span>L</span>ight.
          </p>
          <span className="canvas-coords">60.1695° N / 24.9354° E</span>
        </div>
        <aside className="editor-inspector">
          <div className="insp-head">
            <span>▾ SUBTEXTURE</span>
          </div>
          <label className="insp-toggle">
            Scanlines
            <button
              type="button"
              className={lines ? "on" : ""}
              onClick={() => setLines(!lines)}
              aria-pressed={lines}
            >
              <i />
            </button>
          </label>
          <div className="insp-field">
            <span>Tint</span>
            <div className="insp-select">
              {(["LILAC", "CORAL", "MONO"] as const).map((t) => (
                <button
                  key={t}
                  type="button"
                  className={tint === t ? "active" : ""}
                  onClick={() => setTint(t)}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          {sliders.map(([label, v, set, min, max]) => (
            <label className="insp-field" key={label}>
              <span>{label}</span>
              <div className="insp-range">
                <input
                  type="range"
                  min={min}
                  max={max}
                  value={v}
                  onChange={(e) => set(Number(e.target.value))}
                />
                <output>{v}</output>
              </div>
            </label>
          ))}
          <button type="button" className="insp-reset" onClick={reset}>
            Reset to Default
          </button>
        </aside>
      </div>
      <div className="editor-status">
        <span>Portrait Preview</span>
        <span>Zoom {scale}%</span>
        <span className="chip">Scanlines {lines ? "On" : "Off"}</span>
        <span className="chip">Tint {tint}</span>
      </div>
    </div>
  )

}