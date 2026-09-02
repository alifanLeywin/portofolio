import { Section } from '../components/Shared'

export default function Blog() {
  return (
    <Section title="Blog">
      <div className="px-4 py-12 text-center">
        <p style={{ color: 'rgba(225,222,214,0.5)' }}>
          No posts yet. I'm busy writing code!
        </p>
      </div>
    </Section>
  )
}
