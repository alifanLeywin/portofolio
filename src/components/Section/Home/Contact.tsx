import { Section } from '../../Shared'

const CONTACTS = [
  { label: 'GitHub', value: 'alifanLeywin', href: 'https://github.com/alifanLeywin' },
  { label: 'Instagram', value: '@alfnleywinnn_', href: 'https://www.instagram.com/alfnleywinnn_/' },
]

export default function Contact() {
  return (
    <Section title="Get in touch">
      <div className="px-4 py-7 sm:px-5">
        <div className="grid gap-7 sm:grid-cols-[1fr_auto] sm:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.18em]" style={{ color: 'var(--p3-text-muted)' }}>Open for collaboration</p>
            <p className="mt-3 max-w-md text-lg leading-relaxed" style={{ color: 'var(--p3-text)' }}>
              Have a thoughtful idea or a tricky interface to build? Let&apos;s make it feel alive.
            </p>
            <p className="mt-3 text-sm" style={{ color: 'var(--p3-text-muted)' }}>Usually replies within a day.</p>
          </div>
          <a
            href="mailto:alifanmunggaran16@gmail.com"
            className="group flex min-w-0 items-center justify-between gap-5 border-b-2 px-1 pb-3 text-sm transition-colors sm:min-w-[230px]"
            style={{ borderColor: 'var(--p3-cyan)', color: 'var(--p3-text)' }}
          >
            <span className="truncate">alifanmunggaran16@gmail.com</span>
            <span aria-hidden="true" className="text-lg transition-transform duration-200 group-hover:translate-x-1" style={{ color: 'var(--p3-cyan)' }}>↗</span>
          </a>
        </div>
        <div className="mt-8 grid gap-2 sm:grid-cols-2">
          {CONTACTS.map(contact => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex items-center justify-between border-t px-1 py-3 text-sm transition-colors hover:text-[var(--p3-cyan)]"
              style={{ borderColor: 'var(--p3-line-soft)', color: 'var(--p3-text-soft)' }}
            >
              <span style={{ color: 'var(--p3-text-muted)' }}>{contact.label}</span>
              <span>{contact.value} ↗</span>
            </a>
          ))}
        </div>
      </div>
    </Section>
  )
}
