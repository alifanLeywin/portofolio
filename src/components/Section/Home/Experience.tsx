import { Section, Dot } from '../../Shared'
import { EXPERIENCE } from '../../../data/portfolio'

export default function Experience() {
  return (
    <Section title="Experience" count={EXPERIENCE.length}>
      <div>
        {EXPERIENCE.map((exp, i) => (
          <div
            key={exp.id}
            className="px-4 py-4 space-y-1"
            style={{ borderBottom: i < EXPERIENCE.length - 1 ? '1px solid var(--p3-line-soft)' : 'none' }}
          >
            <div className="flex items-start gap-3">
              <div
                className="mt-0.5 flex items-center justify-center rounded-lg flex-shrink-0"
                style={{ width: '24px', height: '24px', background: 'var(--p3-cyan-soft)', border: '1px solid var(--p3-line)', fontSize: '11px' }}
              >
                ✦
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium leading-snug" style={{ color: 'var(--p3-text)' }}>{exp.role}</p>
                <div className="flex flex-wrap items-center gap-1.5 mt-0.5 text-xs" style={{ color: 'var(--p3-text-muted)', fontVariantNumeric: 'tabular-nums' }}>
                  <span>{exp.company}</span><Dot /><span>{exp.location}</span><Dot /><span className="font-mono">{exp.period}</span><Dot /><span className="font-mono">{exp.duration}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--p3-text-soft)' }}>{exp.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
