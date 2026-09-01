import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { FiMail } from 'react-icons/fi'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { profile } from '../data/profile'

// Typing animation cycling through profile.rotatingRoles
function useTypedRole(roles: readonly string[], enabled: boolean) {
  const [text, setText] = useState(enabled ? '' : roles[0])

  useEffect(() => {
    if (!enabled) return
    let roleIdx = 0
    let charIdx = 0
    let deleting = false
    let timer: ReturnType<typeof setTimeout>

    const tick = () => {
      const role = roles[roleIdx]
      charIdx += deleting ? -1 : 1
      setText(role.slice(0, charIdx))

      let delay = deleting ? 40 : 75
      if (!deleting && charIdx === role.length) {
        delay = 2000
        deleting = true
      } else if (deleting && charIdx === 0) {
        deleting = false
        roleIdx = (roleIdx + 1) % roles.length
        delay = 350
      }
      timer = setTimeout(tick, delay)
    }
    timer = setTimeout(tick, 300)
    return () => clearTimeout(timer)
  }, [roles, enabled])

  return text
}

// Signature backdrop: pulsing cells on the grid, a nod to attendance heatmaps
const cells = [
  { top: '14%', right: '8%', delay: 0 },
  { top: '22%', right: '22%', delay: 1.4, alt: true },
  { top: '38%', right: '5%', delay: 2.6 },
  { top: '48%', right: '30%', delay: 3.4, alt: true },
  { top: '12%', right: '38%', delay: 4.2 },
  { top: '60%', right: '14%', delay: 5.1, alt: true },
  { top: '32%', right: '46%', delay: 5.8 },
]

export default function Hero() {
  const reduceMotion = useReducedMotion()
  const typed = useTypedRole(profile.rotatingRoles, !reduceMotion)

  return (
    <section id="top" className="hero">
      <div className="hero-grid" aria-hidden="true">
        {cells.map((c, i) => (
          <span
            key={i}
            className={`hero-cell ${c.alt ? 'alt' : ''}`}
            style={{ top: c.top, right: c.right, animationDelay: `${c.delay}s` }}
          />
        ))}
      </div>

      <div className="container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="hero-hello">hi, my name is</p>
          <h1 className="hero-name">
            {profile.firstName} <span className="grad-text">{profile.name.split(' ').slice(1).join(' ')}</span>
          </h1>
          <p className="hero-role" aria-label={profile.role}>
            {typed}
            <span className="hero-caret" aria-hidden="true" />
          </p>
          <p className="hero-tagline">{profile.tagline}</p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn btn-ghost">
              Get in Touch
            </a>
          </div>

          <div className="hero-socials">
            <a className="social-link" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a className="social-link" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a className="social-link" href={`mailto:${profile.email}`} aria-label="Email">
              <FiMail />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
