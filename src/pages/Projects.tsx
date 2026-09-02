import { Section, ArrowIcon } from '../components/Shared'
import { PROJECTS } from '../data/portfolio'

export default function Projects() {
  return (
    <Section title="Projects" count={PROJECTS.length}>
      <div>
        {PROJECTS.map((p, i) => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-4 transition-colors"
            style={{
              borderBottom: i < PROJECTS.length - 1
                ? '1px solid rgba(216,212,202,0.1)'
                : 'none',
            }}
            onMouseEnter={e =>
              (e.currentTarget.style.background = 'rgba(216,212,202,0.05)')
            }
            onMouseLeave={e =>
              (e.currentTarget.style.background = 'transparent')
            }
          >
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <h3
                  className="font-semibold"
                  style={{ color: '#e4e0d8', fontSize: '15px' }}
                >
                  {p.name}
                </h3>
                <p
                  className="mt-1 text-sm leading-relaxed"
                  style={{ color: 'rgba(225,222,214,0.55)' }}
                >
                  {p.desc}
                </p>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {p.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-xs font-medium"
                      style={{
                        background: 'rgba(216,212,202,0.1)',
                        border: '1px solid rgba(216,212,202,0.22)',
                        color: 'rgba(216,212,202,0.85)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <ArrowIcon />
            </div>
          </a>
        ))}
      </div>
    </Section>
  )
}
