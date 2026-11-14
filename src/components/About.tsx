import { LuAward, LuGraduationCap } from 'react-icons/lu'
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
              <LuGraduationCap />
            </span>
            <div>
              <h3>{profile.education.degree}</h3>
              <p className="edu-meta">{profile.education.period}</p>
            </div>
          </div>
          {profile.certifications.map((cert) => (
            <div className="edu-item" key={cert.name}>
              <span className="edu-icon" aria-hidden="true">
                <LuAward />
              </span>
              <div>
                <h3>{cert.name}</h3>
                <p className="edu-sub">
                  {cert.issuer} · {cert.period}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
