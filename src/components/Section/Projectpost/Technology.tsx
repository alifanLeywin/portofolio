import { Section } from '../../Shared'

interface TechnologyProps {
  technologies: string[]
}

export default function Technology({ technologies }: TechnologyProps) {
  if (!technologies || technologies.length === 0) return null

  return (
    <Section title="Technologies" count={technologies.length}>
      <div className="px-5 py-6 sm:px-6">
        <div className="flex flex-wrap gap-2 sm:gap-2.5">
          {technologies.map(tech => (
            <span
              key={tech}
              className="rounded-lg px-3 py-1.5 font-mono text-xs sm:text-sm transition-colors"
              style={{
                background: 'var(--p3-panel-deep)',
                border: '1px solid var(--p3-line)',
                color: 'var(--p3-text)',
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Section>
  )
}
