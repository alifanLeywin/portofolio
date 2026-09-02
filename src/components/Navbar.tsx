import { NavLink } from 'react-router-dom'
import { HomeIcon, FolderIcon, StarIcon } from './Shared'

const TABS = [
  { key: 'home',     label: 'Home',     path: '/',         icon: HomeIcon },
  { key: 'projects', label: 'Projects', path: '/projects', icon: FolderIcon },
  { key: 'blog',     label: 'Blog',     path: '/blog',     icon: StarIcon },
] as const

export default function Navbar() {
  return (
    <nav
      className="sticky top-0 z-40 h-14"
      style={{
        background: 'rgba(7,2,14,0.92)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(216,212,202,0.14)',
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
              aria-label={t.label}
              className={({ isActive }) =>
                `group relative flex h-full items-center justify-center gap-1.5 px-2 text-sm font-medium transition-colors duration-200 select-none ${
                  isActive ? 'active-nav-link' : 'inactive-nav-link'
                }`
              }
              style={({ isActive }) => ({
                color: isActive ? '#e4e0d8' : 'rgba(225,222,214,0.4)'
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
                      style={{ background: '#d8d4ca', boxShadow: '0 0 6px #d8d4ca' }}
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
