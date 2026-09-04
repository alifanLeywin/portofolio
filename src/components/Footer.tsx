import { Link } from 'react-router-dom'
import banner from '../assets/Gif/black-hole-vortex.gif'
import { SOCIALS } from '../data/portfolio'

const INDEX_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Blog', to: '/blog' },
]

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--p3-line)' }}>
      <div className="relative overflow-hidden" style={{ height: '220px' }}>
        <img
          src={banner}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          style={{ filter: 'saturate(0.8)' }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(7,2,14,0.92), rgba(7,2,14,0.3) 65%, rgba(7,2,14,0.7))',
          }}
        />
        <div className="relative flex h-full items-end px-5 pb-6 sm:px-6">
          <div>
            <p
              className="mb-2 text-xs uppercase tracking-[0.22em]"
              style={{ color: 'var(--p3-text-muted)' }}
            >
              Keep in touch
            </p>
            <h2
              className="text-3xl font-bold"
              style={{ color: 'var(--p3-text)', fontFamily: 'var(--font-space)' }}
            >
              Let&apos;s build something useful.
            </h2>
          </div>
        </div>
      </div>

      <div className="grid gap-10 px-5 py-9 sm:grid-cols-[1.2fr_1fr_1fr] sm:px-6">
        <div>
          <p
            className="text-lg font-bold"
            style={{ color: 'var(--p3-text)', fontFamily: 'var(--font-space)' }}
          >
            alifanLeywin
          </p>
          <p className="mt-2 text-sm" style={{ color: 'var(--p3-text-muted)' }}>
            © 2026 Alfn Leywin
          </p>
          <p className="mt-6 text-sm leading-relaxed" style={{ color: 'var(--p3-text-soft)' }}>
            Front-end developer based in Indonesia, building thoughtful digital experiences.
          </p>
        </div>

        <div>
          <h3
            className="text-lg font-bold"
            style={{ color: 'var(--p3-text)', fontFamily: 'var(--font-space)' }}
          >
            Contact
          </h3>
          <ul className="mt-3 space-y-2">
            {SOCIALS.map(social => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="text-sm transition-colors hover:text-[#f5f5f2]"
                  style={{ color: 'var(--p3-text-soft)' }}
                >
                  {social.label}
                  <span aria-hidden="true"> ↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3
            className="text-lg font-bold"
            style={{ color: 'var(--p3-text)', fontFamily: 'var(--font-space)' }}
          >
            Index
          </h3>
          <ul className="mt-3 space-y-2">
            {INDEX_LINKS.map(link => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm transition-colors hover:text-[#f5f5f2]"
                  style={{ color: 'var(--p3-text-soft)' }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
