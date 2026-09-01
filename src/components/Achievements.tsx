import type { IconType } from 'react-icons'
import { motion } from 'framer-motion'
import { FiLayers, FiShoppingBag, FiSmartphone } from 'react-icons/fi'
import { FaGoogle } from 'react-icons/fa'
import Section from './Section'
import { achievements } from '../data/profile'

const icons: Record<string, IconType> = {
  architecture: FiLayers,
  google: FaGoogle,
  commerce: FiShoppingBag,
  mobile: FiSmartphone,
}

export default function Achievements() {
  return (
    <Section id="achievements" eyebrow="04 · achievements" title="Highlights I'm proud of">
      <div className="ach-grid">
        {achievements.map((a, i) => {
          const Icon = icons[a.icon]
          return (
            <motion.article
              key={a.title}
              className="card ach-card"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
            >
              <span className="ach-icon" aria-hidden="true">
                {Icon && <Icon />}
              </span>
              <div>
                <h3>{a.title}</h3>
                <p>{a.detail}</p>
              </div>
            </motion.article>
          )
        })}
      </div>
    </Section>
  )
}
