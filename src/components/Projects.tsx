import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import Section from './Section'
import ProjectVisual from './ProjectVisual'
import { projects } from '../data/profile'

export default function Projects() {
  return (
    <Section id="projects" eyebrow="05 · projects" title="Things I've built on my own">
      <div className="projects-grid">
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            className="project-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: i * 0.12, ease: 'easeOut' }}
          >
            <ProjectVisual kind={project.visual} />
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
            <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
              View project <FiArrowUpRight />
            </a>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
