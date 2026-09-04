import { Section } from '../../Shared'
import { STACK_GROUPS } from '../../../data/portfolio'

export default function Stack() {
  return (
    <Section title="Stack" count={STACK_GROUPS.length}>
      <div className="grid sm:grid-cols-3">
        {STACK_GROUPS.map((group, index) => (
          <div
            key={group.label}
            className="px-4 py-5 sm:px-5"
            style={{
              borderRight: index < STACK_GROUPS.length - 1 ? '1px solid var(--p3-line-soft)' : 'none',
              borderBottom: '1px solid var(--p3-line-soft)',
            }}
          >
            <div className="flex items-baseline justify-between gap-3">
              <span className="text-xs" style={{ color: 'var(--p3-cyan)' }}>{group.number}</span>
              <span className="text-xs uppercase tracking-[0.14em]" style={{ color: 'var(--p3-text-muted)' }}>{group.label}</span>
            </div>
            <p className="mt-4 text-xs leading-relaxed" style={{ color: 'var(--p3-text-muted)' }}>{group.description}</p>
            <ul className="mt-4 space-y-2">
              {group.tools.map(tool => (
                <li key={tool} className="flex items-center gap-2 text-sm" style={{ color: 'var(--p3-text)' }}>
                  <span aria-hidden="true" style={{ color: 'var(--p3-text-muted)' }}>+</span>
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
