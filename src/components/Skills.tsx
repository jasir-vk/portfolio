import type { IconType } from 'react-icons'
import { motion } from 'framer-motion'
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiPython,
  SiHtml5,
  SiGit,
  SiMongodb,
  SiPostgresql,
  SiSupabase,
  SiTailwindcss,
  SiVercel,
} from 'react-icons/si'
import Section from './Section'
import { skills } from '../data/profile'

const icons: Record<string, IconType> = {
  javascript: SiJavascript,
  typescript: SiTypescript,
  react: SiReact,
  nextjs: SiNextdotjs,
  nodejs: SiNodedotjs,
  express: SiExpress,
  nestjs: SiNestjs,
  python: SiPython,
  html: SiHtml5,
  git: SiGit,
  mongodb: SiMongodb,
  postgresql: SiPostgresql,
  supabase: SiSupabase,
  tailwind: SiTailwindcss,
  vercel: SiVercel,
}

export default function Skills() {
  return (
    <Section id="skills" eyebrow="02 · skills" title="Tools I work with daily">
      <ul className="skills-grid" style={{ listStyle: 'none' }}>
        {skills.map((skill, i) => {
          const Icon = icons[skill.icon]
          return (
            <motion.li
              key={skill.name}
              className="skill-card"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.05, ease: 'easeOut' }}
            >
              <span className="skill-icon" aria-hidden="true">
                {Icon && <Icon />}
              </span>
              {skill.name}
            </motion.li>
          )
        })}
      </ul>
    </Section>
  )
}
