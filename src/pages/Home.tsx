import { Section, DividerStrip, Dot } from '../components/Shared'
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
                  ? '1px solid var(--p3-line-soft)'
                  : 'none',
              }}
            >
              <div className="flex items-start gap-3">
                <div
                  className="mt-0.5 flex items-center justify-center rounded-lg flex-shrink-0"
                  style={{
                    width: '24px',
                    height: '24px',
                    background: 'var(--p3-cyan-soft)',
                    border: '1px solid var(--p3-line)',
                    fontSize: '11px',
                  }}
                >
                  ✦
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    className="font-medium leading-snug"
                    style={{ color: 'var(--p3-text)' }}
                  >
                    {exp.role}
                  </p>
                  <div
                    className="flex flex-wrap items-center gap-1.5 mt-0.5 text-xs"
                    style={{ color: 'var(--p3-text-muted)', fontVariantNumeric: 'tabular-nums' }}
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
                    style={{ color: 'var(--p3-text-soft)' }}
                  >
                    {exp.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <DividerStrip />

      {/* SKILLS */}
      <Section title="Skills">
        <div className="px-4 py-4 space-y-4">
          {SKILLS.map(s => (
            <div key={s.label}>
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-sm font-medium" style={{ color: 'var(--p3-text)' }}>
                  {s.label}
                </span>
                <span className="text-xs font-mono" style={{ color: 'var(--p3-cyan)' }}>
                  {s.level}%
                </span>
              </div>
              <div
                className="h-1.5 rounded-full overflow-hidden"
                style={{ background: 'var(--p3-cyan-soft)' }}
              >
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${s.level}%`,
                    background: 'linear-gradient(90deg,#bcbcbc,#f5f5f2)',
                    boxShadow: '0 0 8px var(--p3-glow)',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </Section>

      <DividerStrip />

      {/* CONTACT */}
      <Section title="Get in touch">
        <div className="px-4 py-7 sm:px-5">
          <div className="grid gap-7 sm:grid-cols-[1fr_auto] sm:items-end">
            <div>
              <p
                className="text-xs uppercase tracking-[0.18em]"
                style={{ color: 'var(--p3-text-muted)' }}
              >
                Open for collaboration
              </p>
              <p
                className="mt-3 max-w-md text-lg leading-relaxed"
                style={{ color: 'var(--p3-text)' }}
              >
                Have a thoughtful idea or a tricky interface to build? Let&apos;s make it feel alive.
              </p>
              <p className="mt-3 text-sm" style={{ color: 'var(--p3-text-muted)' }}>
                Usually replies within a day.
              </p>
            </div>

            <a
              href="mailto:alfn@example.com"
              className="group flex min-w-0 items-center justify-between gap-5 border-b-2 px-1 pb-3 text-sm transition-colors sm:min-w-[230px]"
              style={{ borderColor: 'var(--p3-cyan)', color: 'var(--p3-text)' }}
            >
              <span className="truncate">alfn@example.com</span>
              <span
                aria-hidden="true"
                className="text-lg transition-transform duration-200 group-hover:translate-x-1"
                style={{ color: 'var(--p3-cyan)' }}
              >
                ↗
              </span>
            </a>
          </div>

          <div className="mt-8 grid gap-2 sm:grid-cols-2">
            {[
              { label: 'GitHub', value: 'github.com/alfnleywin', href: 'https://github.com' },
              { label: 'Discord', value: '@alfnleywin', href: '#' },
            ].map(c => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center justify-between border-t px-1 py-3 text-sm transition-colors hover:text-[var(--p3-cyan)]"
                style={{ borderColor: 'var(--p3-line-soft)', color: 'var(--p3-text-soft)' }}
              >
                <span style={{ color: 'var(--p3-text-muted)' }}>{c.label}</span>
                <span>{c.value} ↗</span>
              </a>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
