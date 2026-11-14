import { useState } from 'react'
import type { FormEvent } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiDownload, FiSend } from 'react-icons/fi'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { profile } from '../data/profile'

type FormStatus = 'idle' | 'sending' | 'sent' | 'error'

function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle')

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('sending')
    try {
      const res = await fetch(`https://formspree.io/f/${profile.formspreeId}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      })
      if (!res.ok) throw new Error('send failed')
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return <p className="form-note form-ok">Message sent — I'll get back to you soon. Thanks!</p>
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="form-row">
        <label>
          <span>Name</span>
          <input name="name" type="text" required placeholder="Your name" />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" required placeholder="you@company.com" />
        </label>
      </div>
      <label>
        <span>Message</span>
        <textarea name="message" required rows={4} placeholder="Tell me about the role or project…" />
      </label>
      <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
        <FiSend /> {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>
      {status === 'error' && (
        <p className="form-note form-err">
          Something went wrong — email me directly at {profile.email}.
        </p>
      )}
    </form>
  )
}

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

          {profile.formspreeId ? (
            <ContactForm />
          ) : (
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>
              <FiMail /> {profile.email}
            </a>
          )}

          <div className="contact-socials">
            <a className="social-link" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a className="social-link" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            {profile.resumeUrl && (
              <a className="social-link" href={profile.resumeUrl} download aria-label="Download CV">
                <FiDownload />
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
