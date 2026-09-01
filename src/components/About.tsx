import Section from './Section'
import { profile } from '../data/profile'

export default function About() {
  return (
    <Section id="about" eyebrow="01 · about" title="A developer who ships payroll-grade code">
      <div className="about-grid">
        <div className="card about-bio">
          {profile.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="card edu-card">
          <div className="edu-item">
            <span className="edu-icon" aria-hidden="true">
              🎓
            </span>
            <div>
              <h3>{profile.education.degree}</h3>
              <p className="edu-meta">{profile.education.period}</p>
            </div>
          </div>
          <div className="edu-item">
            <span className="edu-icon" aria-hidden="true">
              🐍
            </span>
            <div>
              <h3>Python Course</h3>
              <p className="edu-sub">{profile.education.extra}</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
