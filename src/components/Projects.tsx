import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiArrowUpRight, FiImage, FiLock, FiMaximize2 } from 'react-icons/fi'
import Section from './Section'
import ProjectVisual from './ProjectVisual'
import Lightbox from './Lightbox'
import { projects } from '../data/profile'

export default function Projects() {
  const [gallery, setGallery] = useState<number | null>(null)
  const active = gallery === null ? null : projects[gallery]

  return (
    <Section id="projects" eyebrow="05 · projects" title="Things I've built on my own">
      <div className="projects-grid">
        {projects.map((project, i) => {
          const shots: readonly string[] = project.shots
          const isPrivate = 'private' in project && project.private
          return (
            <motion.article
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: 'easeOut' }}
            >
              {shots.length > 0 ? (
                <button
                  className="shot-trigger"
                  aria-label={`Open ${project.title} screenshots`}
                  onClick={() => setGallery(i)}
                >
                  <img className="pv-shot" src={shots[0]} alt={`${project.title} — app screenshot`} loading="lazy" />
                  <span className="shot-badge">
                    <FiMaximize2 /> 1/{shots.length}
                  </span>
                </button>
              ) : (
                <ProjectVisual kind={project.visual} />
              )}
              <h3>{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tags">
                {project.tech.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              {'stack' in project && (
                <details className="stack">
                  <summary>Full tech stack</summary>
                  <ul>
                    {project.stack.map(([layer, tech]) => (
                      <li key={layer}>
                        <span>{layer}</span>
                        <span>{tech}</span>
                      </li>
                    ))}
                  </ul>
                </details>
              )}
              <div className="project-actions">
                {shots.length > 0 && (
                  <button className="project-link" onClick={() => setGallery(i)}>
                    <FiImage /> View screenshots
                  </button>
                )}
                {'link' in project && (
                  <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
                    View code <FiArrowUpRight />
                  </a>
                )}
              </div>
              {isPrivate && (
                <p className="project-note">
                  <FiLock /> Private repo · code on request
                </p>
              )}
            </motion.article>
          )
        })}
      </div>
      <Lightbox
        title={active?.title ?? ''}
        images={active?.shots ?? []}
        open={active !== null}
        onClose={() => setGallery(null)}
      />
    </Section>
  )
}
