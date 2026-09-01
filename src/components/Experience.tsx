import { Fragment } from 'react'
import Section from './Section'
import { experience } from '../data/profile'

export default function Experience() {
  return (
    <Section id="experience" eyebrow="03 · experience" title="Where I've worked">
      <div className="timeline">
        {experience.map((job) => (
          <div className="timeline-item" key={job.title + job.org}>
            <div className="card xp-card">
              <h3>
                {job.title} — <span className="xp-org">{job.org}</span>
              </h3>
              <p className="xp-period">{job.period}</p>
              <p className="xp-summary">{job.summary}</p>
              <ul className="xp-highlights">
                {job.highlights.map((h) => (
                  <li key={h.name}>
                    <strong>{h.name}</strong>
                    <span>{h.detail}</span>
                  </li>
                ))}
              </ul>
              <div className="workflow" aria-label="Leave approval workflow stages">
                <span className="workflow-label">leave approval workflow I built</span>
                {job.workflow.map((step, i) => (
                  <Fragment key={step}>
                    {i > 0 && (
                      <span className="workflow-arrow" aria-hidden="true">
                        →
                      </span>
                    )}
                    <span className="workflow-chip" style={{ animationDelay: `${i * 1.2}s` }}>
                      {step}
                    </span>
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
