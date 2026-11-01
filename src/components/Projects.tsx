import { useState } from 'react'
import { projects } from '../content'

export default function Projects() {
  const [openId, setOpenId] = useState<string | null>(projects[0]?.id ?? null)

  return (
    <section className="work section" id="work">
      <div className="section-heading work-heading">
        <div className="section-index">
          <span>03</span>
          <span>/SELECTED_OPERATIONS</span>
        </div>
        <h2>
          Projects <i>on file.</i>
        </h2>
      </div>

      <div className="project-list">
        {projects.map((project, index) => {
          const isOpen = openId === project.id

          return (
            <article className={`project ${isOpen ? 'open' : ''}`} key={project.id}>
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : project.id)}
                aria-expanded={isOpen}
              >
                <span className="project-id">{project.id}</span>
                <span className="project-name">{project.title}</span>
                <span className="project-type">{project.type}</span>
                <span className="project-year">{project.year}</span>
                <span className="project-toggle" aria-hidden="true">
                  {isOpen ? '−' : '+'}
                </span>
              </button>

              <div className="project-detail">
                <div className={`project-visual visual-${index + 1}${project.image ? ' has-image' : ''}`}>
                  {project.image && (
                    <img src={project.image} alt={`${project.title} website screenshot`} loading="lazy" />
                  )}
                </div>
                <div className="project-info">
                  <span className="status">STATUS: {project.status}</span>
                  <p>{project.summary}</p>
                  <div className="tags">
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  <a
                    href={project.url ?? '#contact'}
                    {...(project.url ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    OPEN FILE <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}