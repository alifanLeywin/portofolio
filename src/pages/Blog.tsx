import { Section } from '../components/Shared'

export default function Blog() {
  return (
    <Section title="Blog">
      <div className="px-4 py-12 text-center">
        <p style={{ color: 'var(--p3-text-muted)' }}>
          No posts yet. I'm busy writing code!
        </p>
      </div>
    </Section>
  )
}
