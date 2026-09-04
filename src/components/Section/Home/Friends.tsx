import { Section } from '../../Shared'
import { FRIENDS } from '../../../data/portfolio'

export default function Friends() {
  return (
    <Section title="Friends" count={FRIENDS.length}>
      <div className="relative px-4 py-5 sm:px-5">
        <div className="mb-5 flex items-center justify-between">
          <p className="text-xs uppercase tracking-[0.16em]" style={{ color: 'var(--p3-text-muted)' }}>
            People worth building with
          </p>
          <span className="text-xs" style={{ color: 'var(--p3-text-muted)' }}>///</span>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          {FRIENDS.map(friend => (
            <div key={friend.id} className="group relative h-18 w-18 sm:h-20 sm:w-20">
              {/* Tooltip on hover */}
              <div
                className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-3 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-lg px-3 py-1.5 text-center text-xs opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100 shadow-xl"
                style={{ background: 'var(--p3-cyan)', color: 'var(--p3-panel)' }}
              >
                <div className="font-semibold leading-tight">{friend.name}</div>
                {friend.label && (
                  <div className="text-[10px] font-mono opacity-85 mt-0.5">{friend.label}</div>
                )}
                <span
                  className="absolute left-1/2 top-full h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45"
                  style={{ background: 'var(--p3-cyan)' }}
                />
              </div>

              {/* Clickable Friend Avatar */}
              <a
                href={friend.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`${friend.name} (${friend.label})`}
                className="block h-full w-full overflow-hidden rounded-sm transition-all duration-200 hover:scale-105 hover:border-[var(--p3-cyan)]"
                style={{ border: '1px solid var(--p3-line)' }}
              >
                <img
                  src={friend.image}
                  alt={friend.name}
                  className="h-full w-full object-cover transition-opacity duration-200 group-hover:opacity-90"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

