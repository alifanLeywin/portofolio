import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Section } from '../components/Shared'

export default function NotFoundPage() {
  useEffect(() => {
    document.title = '404 • alifanO_x'
  }, [])

  return (
    <Section title="404 — Not Found">
      <div className="px-4 py-16 text-center">
        <p className="text-4xl font-bold font-mono" style={{ color: 'var(--p3-cyan)' }}>
          404
        </p>
        <p className="mt-3 text-sm" style={{ color: 'var(--p3-text-muted)' }}>
          The page you are looking for does not exist.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded px-4 py-2 text-sm font-medium transition-colors"
            style={{
              background: 'var(--p3-cyan-soft)',
              border: '1px solid var(--p3-line)',
              color: 'var(--p3-cyan)',
            }}
          >
            ← Return to Home
          </Link>
        </div>
      </div>
    </Section>
  )
}
