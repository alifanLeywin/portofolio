import { Section, Dot } from '../components/Shared'
import { EXPERIENCE, SKILLS } from '../data/portfolio'

export default function Home() {
  return (
    <>
      {/* Experience section */}
      <Section title="Experience" count={EXPERIENCE.length}>
        <div>
          {EXPERIENCE.map((exp, i) => (
            <div
              key={exp.id}
              className="px-4 py-4 space-y-1"
              style={{
                borderBottom: i < EXPERIENCE.length - 1
                  ? '1px solid rgba(216,212,202,0.1)'
                  : 'none',
              }}
            >
              <div className="flex items-start gap-3">
                <div
                  className="mt-0.5 flex items-center justify-center rounded-lg flex-shrink-0"
                  style={{
                    width: '24px',
                    height: '24px',
                    background: 'rgba(216,212,202,0.12)',
                    border: '1px solid rgba(216,212,202,0.25)',
                    fontSize: '11px',
                  }}
                >
                  ✦
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    className="font-medium leading-snug"
                    style={{ color: 'rgba(225,222,214,0.9)' }}
                  >
                    {exp.role}
                  </p>
                  <div
                    className="flex flex-wrap items-center gap-1.5 mt-0.5 text-xs"
                    style={{ color: 'rgba(225,222,214,0.4)', fontVariantNumeric: 'tabular-nums' }}
                  >
                    <span>{exp.company}</span>
                    <Dot />
                    <span>{exp.type}</span>
                    <Dot />
                    <span className="font-mono">{exp.period}</span>
                    <Dot />
                    <span className="font-mono">{exp.duration}</span>
                  </div>
                  <p
                    className="mt-2 text-sm leading-relaxed"
                    style={{ color: 'rgba(225,222,214,0.55)' }}
                  >
                    {exp.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* SKILLS */}
      <Section title="Skills">
        <div className="px-4 py-4 space-y-4">
          {SKILLS.map(s => (
            <div key={s.label}>
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-sm font-medium" style={{ color: 'rgba(225,222,214,0.8)' }}>
                  {s.label}
                </span>
                <span className="text-xs font-mono" style={{ color: 'rgba(216,212,202,0.7)' }}>
                  {s.level}%
                </span>
              </div>
              <div
                className="h-1.5 rounded-full overflow-hidden"
                style={{ background: 'rgba(216,212,202,0.12)' }}
              >
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${s.level}%`,
                    background: 'linear-gradient(90deg,#77736c,#d8d4ca)',
                    boxShadow: '0 0 8px rgba(216,212,202,0.5)',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section title="Get in touch">
        <div className="px-4 py-6 space-y-4">
          <p className="text-sm leading-relaxed" style={{ color: 'rgba(225,222,214,0.6)' }}>
            Feel free to reach out — whether it's about a project,
            collaboration, or just saying hi. I usually reply within a day.
          </p>
          <div className="space-y-2">
            {[
              { label: 'Email',   value: 'alfn@example.com',   href: 'mailto:alfn@example.com' },
              { label: 'GitHub',  value: 'github.com/alfnleywin', href: 'https://github.com' },
              { label: 'Discord', value: '@alfnleywin',         href: '#' },
            ].map(c => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-3 py-3 rounded-lg text-sm transition-all"
                style={{
                  background: 'rgba(216,212,202,0.06)',
                  border: '1px solid rgba(216,212,202,0.15)',
                  color: 'rgba(225,222,214,0.75)',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.background = 'rgba(216,212,202,0.12)'
                  el.style.borderColor = 'rgba(216,212,202,0.35)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.background = 'rgba(216,212,202,0.06)'
                  el.style.borderColor = 'rgba(216,212,202,0.15)'
                }}
              >
                <span style={{ color: 'rgba(225,222,214,0.4)' }}>{c.label}</span>
                <span style={{ color: '#d8d4ca' }}>{c.value}</span>
              </a>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
