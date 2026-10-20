import { useState } from 'react';
import { filters, skills } from '../content'
import type { Filter, Skill } from '../content'

export default function Skills() {
    const [activeSkill, setActiveSkill] = useState<Skill>(skills[0])
    const [filter, setFilter] = useState<Filter>('ALL')
    const visibleSkills = skills.filter((s) => filter === 'ALL' || (filter === 'CORE' ? s.core : s.cat === filter))
    return (
      <section className="skills section" id="skills">
        <div className="section-heading skills-heading">
          <div className="section-index">
            <span>02</span>
            <span style={{ whiteSpace: "nowrap" }}>/LOADED_MODULES</span>
          </div>
          <div className="module-title">
            <h2>Installed modules</h2>
            <span>
              <i /> {skills.length} OPERATIONAL
            </span>
          </div>
          <p>
            A live registry of tools loaded into my working system. Select any
            module to inspect its capability data.
          </p>
        </div>

        <div className="skill-layout">
          <div className="module-browser">
            <div className="browser-bar">
              <div className="window-controls">
                <i />
                <i />
                <i />
              </div>
              <span>ana://system/modules</span>
              <span className="filter-count">
                {visibleSkills.length}/{skills.length} LOADED
              </span>
            </div>
            <div
              className="module-filters"
              role="tablist"
              aria-label="Filter modules"
            >
              {filters.map((f) => (
                <button
                  key={f}
                  type="button"
                  role="tab"
                  aria-selected={filter === f}
                  className={filter === f ? "active" : ""}
                  onClick={() => {
                    setFilter(f)
                    const first = skills.find(
                      (s) =>
                        f === "ALL" || (f === "CORE" ? s.core : s.cat === f),
                    )
                    if (first) setActiveSkill(first)
                  }}
                >
                  {f.toLowerCase()}
                </button>
              ))}
            </div>
            <div className="browser-columns">
              <span>ID / STATUS</span>
              <span>PACKAGE</span>
              <span>CLASS</span>
              <span>CAPABILITY</span>
              <span>VER.</span>
            </div>
            <div className="skill-table">
              {visibleSkills.map((skill) => (
                <button
                  className={`skill-cell group-${skill.group.toLowerCase()} ${
                    activeSkill.symbol === skill.symbol ? "active" : ""
                  }`}
                  key={skill.symbol}
                  onMouseEnter={() => setActiveSkill(skill)}
                  onFocus={() => setActiveSkill(skill)}
                  onClick={() => setActiveSkill(skill)}
                >
                  <span className="module-header">
                    <span>MOD_{skill.index}</span>
                    <span className="module-status">
                      <i /> ACTIVE
                    </span>
                  </span>
                  <strong>{skill.name}</strong>
                  <small>
                    {skill.cat.slice(0, 4)}.{skill.symbol.toUpperCase()}
                  </small>
                  <span className="module-meter">
                    <i
                      style={{
                        width:
                          skill.level === "ADV"
                            ? "88%"
                            : skill.level === "INT"
                              ? "64%"
                              : "38%",
                      }}
                    />
                  </span>
                  <span className="module-footer">
                    <span>V{skill.index}.0</span>
                    <b>{skill.level}</b>
                  </span>
                </button>
              ))}
            </div>
          </div>
          <aside className="skill-reader" aria-live="polite">
            <div className="reader-top">
              <span>INSPECT / MOD_{activeSkill.index}</span>
              <span>[{activeSkill.cat}]</span>
            </div>
            <strong>{activeSkill.symbol}</strong>
            <h3>{activeSkill.name}</h3>
            <p>{activeSkill.note}</p>
            <div className="meter">
              <span
                style={{
                  width:
                    activeSkill.level === "ADV"
                      ? "88%"
                      : activeSkill.level === "INT"
                        ? "64%"
                        : "38%",
                }}
              />
            </div>
            <div className="reader-bottom">
              <span>STATUS: OPERATIONAL</span>
              <b>{activeSkill.level}</b>
            </div>
          </aside>
        </div>

        <div className="legend">
          {[
            ["LANG", "Language"],
            ["UI", "Interface"],
            ["SYS", "System"],
            ["DATA", "Data"],
            ["DES", "Design"],
          ].map(([code, label]) => (
            <span key={code}>
              <i className={`dot group-${code.toLowerCase()}`} />
              {code} / {label}
            </span>
          ))}
        </div>
      </section>
    )
}