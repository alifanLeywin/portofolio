import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Section, ArrowIcon } from '../components/Shared'
import { PROJECTS } from '../data/portfolio'
import enterDetailSfx from '../assets/sfx/PersonaSFX/deck_ui_into_game_detail.wav'
import toggleSfx from '../assets/sfx/PersonaSFX/deck_ui_switch_toggle_on_off.wav'

const INITIAL_LIMIT = 5

export default function Projects() {
  const [showAll, setShowAll] = useState(false)

  const visibleProjects = showAll ? PROJECTS : PROJECTS.slice(0, INITIAL_LIMIT)
  const hasMore = PROJECTS.length > INITIAL_LIMIT

  function playEnterDetailSound() {
    const sound = new Audio(enterDetailSfx)
    sound.volume = 0.35
    void sound.play().catch(() => {})
  }

  function handleToggleShowAll() {
    const sound = new Audio(toggleSfx)
    sound.volume = 0.3
    void sound.play().catch(() => {})
    setShowAll(prev => !prev)
  }

  return (
    <Section title="Projects" count={PROJECTS.length}>
      <div>
        {visibleProjects.map((p, i) => (
          <Link
            key={p.id || p.name}
            to={`/projects/${p.slug}`}
            onClick={playEnterDetailSound}
            className="group block px-4 py-5 transition-colors sm:px-5"
            style={{
              borderBottom:
                i < visibleProjects.length - 1 || hasMore
                  ? '1px solid var(--p3-line-soft)'
                  : 'none',
            }}
            onMouseEnter={e =>
              (e.currentTarget.style.background = 'rgba(245,245,242,0.04)')
            }
            onMouseLeave={e =>
              (e.currentTarget.style.background = 'transparent')
            }
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              {p.image && (
                <div
                  className="relative aspect-video w-full overflow-hidden rounded-md sm:aspect-[16/10] sm:w-44 sm:shrink-0"
                  style={{
                    background: 'var(--p3-panel-deep)',
                    border: '1px solid var(--p3-line-soft)',
                  }}
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle scanline overlay */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-25"
                    style={{
                      background:
                        'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.4) 2px, rgba(0,0,0,0.4) 4px)',
                    }}
                  />
                </div>
              )}

              <div className="flex min-w-0 flex-1 flex-col justify-between gap-2">
                <div className="flex items-start justify-between gap-3">
                  <h3
                    className="font-semibold transition-colors group-hover:text-[var(--p3-cyan)]"
                    style={{ color: 'var(--p3-text)', fontSize: '16px' }}
                  >
                    {p.name}
                  </h3>
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowIcon />
                  </span>
                </div>

                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--p3-text-soft)' }}
                >
                  {p.desc}
                </p>

                <div className="mt-1 flex flex-wrap gap-1.5">
                  {p.tags.map(tag => (
                    <span
                      key={tag}
                      className="rounded px-2 py-0.5 text-xs font-medium"
                      style={{
                        background: 'var(--p3-cyan-soft)',
                        border: '1px solid var(--p3-line)',
                        color: 'var(--p3-cyan)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}

        {hasMore && (
          <div className="px-4 py-4 text-center sm:px-5">
            <button
              type="button"
              onClick={handleToggleShowAll}
              className="group inline-flex items-center gap-2 rounded px-4 py-2 text-xs font-medium tracking-wide transition-all duration-200 sm:text-sm"
              style={{
                background: 'rgba(245,245,242,0.03)',
                border: '1px solid var(--p3-line)',
                color: 'var(--p3-text-soft)',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget
                el.style.background = 'var(--p3-cyan-soft)'
                el.style.borderColor = 'var(--p3-cyan)'
                el.style.color = 'var(--p3-text)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget
                el.style.background = 'rgba(245,245,242,0.03)'
                el.style.borderColor = 'var(--p3-line)'
                el.style.color = 'var(--p3-text-soft)'
              }}
            >
              <span>
                {showAll
                  ? 'Show Less'
                  : `Show More (${PROJECTS.length - INITIAL_LIMIT} more)`}
              </span>
              <span
                className="inline-block text-xs transition-transform duration-200"
                style={{
                  transform: showAll ? 'rotate(-90deg)' : 'rotate(90deg)',
                }}
              >
                ›
              </span>
            </button>
          </div>
        )}
      </div>
    </Section>
  )
}
