import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

type SectionProps = {
  id: string
  eyebrow: string
  title: string
  children: ReactNode
}

// Shared section shell: eyebrow + title + scroll-reveal animation
export default function Section({ id, eyebrow, title, children }: SectionProps) {
  return (
    <section id={id} className="section">
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="section-title">{title}</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
}
