import { motion } from 'framer-motion'
import { FiMail } from 'react-icons/fi'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { profile } from '../data/profile'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          className="contact-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="availability">open to new opportunities</p>
          <h2>
            Let's build something <span className="grad-text">together</span>
          </h2>
          <p>
            I'm currently open to software developer roles. If my work looks like a fit for your
            team, my inbox is open.
          </p>
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>
            <FiMail /> {profile.email}
          </a>
          <div className="contact-socials">
            <a className="social-link" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a className="social-link" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
