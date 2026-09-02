import { NavLink, useLocation } from 'react-router-dom'
import { HomeIcon, FolderIcon, StarIcon } from './Shared'
import navigationSfx from '../assets/sfx/COMSE_08.VAG.wav'

const TABS = [
  { key: 'home',     label: 'Home',     path: '/',         icon: HomeIcon },
  { key: 'projects', label: 'Projects', path: '/projects', icon: FolderIcon },
  { key: 'blog',     label: 'Blog',     path: '/blog',     icon: StarIcon },
] as const

export default function Navbar() {
  const location = useLocation()

  function playNavigationSound(path: string) {
    if (path === location.pathname) return

    const sound = new Audio(navigationSfx)
    sound.volume = 0.35
    void sound.play().catch(() => {
      // Browser may block audio when navigation is not triggered by a gesture.
    })
  }

  return (
    <nav
      className="sticky top-0 z-40 h-14"
      style={{
        background: 'rgba(9,9,9,0.94)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--p3-line)',
      }}
      aria-label="Main navigation"
    >
      <div className="grid h-full w-full" style={{ gridTemplateColumns: `repeat(${TABS.length}, 1fr)` }}>
        {TABS.map(t => {
          const Icon = t.icon
          return (
            <NavLink
              key={t.key}
              to={t.path}
              end={t.path === '/'} // exact match for home
              onClick={() => playNavigationSound(t.path)}
              aria-label={t.label}
              className={({ isActive }) =>
                `group relative flex h-full items-center justify-center gap-1.5 px-2 text-sm font-medium transition-colors duration-200 select-none ${
                  isActive ? 'active-nav-link' : 'inactive-nav-link'
                }`
              }
              style={({ isActive }) => ({
                color: isActive ? 'var(--p3-cyan)' : 'var(--p3-text-muted)'
              })}
            >
              {({ isActive }) => (
                <>
                  <span style={{ width: '18px', height: '18px', flexShrink: 0 }}>
                    <Icon />
                  </span>
                  {isActive && <span className="whitespace-nowrap">{t.label}</span>}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-0.5"
                      style={{ background: 'var(--p3-cyan)', boxShadow: '0 0 8px var(--p3-glow)' }}
                    />
                  )}
                </>
              )}
            </NavLink>
          )
        })}
      </div>
    </nav>
  )
}
