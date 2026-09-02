import { Link } from 'react-router-dom'
import banner from '../assets/banner.jpg'
import { SOCIALS } from '../data/portfolio'

const INDEX_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Blog', to: '/blog' },
]

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(216,212,202,0.14)' }}>
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
              style={{ color: 'rgba(225,222,214,0.45)' }}
            >
              Keep in touch
            </p>
            <h2
              className="font-serif text-3xl italic"
              style={{ color: '#e4e0d8' }}
            >
              Let&apos;s build something useful.
            </h2>
          </div>
        </div>
      </div>

      <div className="grid gap-10 px-5 py-9 sm:grid-cols-[1.2fr_1fr_1fr] sm:px-6">
        <div>
          <p
            className="font-serif text-lg italic"
            style={{ color: 'rgba(225,222,214,0.8)' }}
          >
            alifanLeywin
          </p>
          <p className="mt-2 text-sm" style={{ color: 'rgba(225,222,214,0.45)' }}>
            © 2026 Alfn Leywin
          </p>
          <p className="mt-6 text-sm leading-relaxed" style={{ color: 'rgba(225,222,214,0.55)' }}>
            Front-end developer based in Indonesia, building thoughtful digital experiences.
          </p>
        </div>

        <div>
          <h3
            className="font-serif text-lg italic"
            style={{ color: 'rgba(225,222,214,0.8)' }}
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
                  className="text-sm transition-colors hover:text-[#e4e0d8]"
                  style={{ color: 'rgba(225,222,214,0.52)' }}
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
            className="font-serif text-lg italic"
            style={{ color: 'rgba(225,222,214,0.8)' }}
          >
            Index
          </h3>
          <ul className="mt-3 space-y-2">
            {INDEX_LINKS.map(link => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm transition-colors hover:text-[#e4e0d8]"
                  style={{ color: 'rgba(225,222,214,0.52)' }}
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
