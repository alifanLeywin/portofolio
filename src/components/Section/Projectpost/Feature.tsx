import { Section } from '../../Shared'

interface FeatureProps {
  features: string[]
}

export default function Feature({ features }: FeatureProps) {
  if (!features || features.length === 0) return null

  return (
    <Section title="Features" count={features.length}>
      <div className="px-5 py-6 sm:px-6">
        <div className="space-y-4 sm:space-y-5">
          {features.map((feat, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <span
                className="font-mono text-xs italic shrink-0 pt-0.5 select-none"
                style={{ color: 'var(--p3-text-muted)', width: '28px' }}
              >
                {String(idx + 1).padStart(2, '0')}
              </span>
              <p
                className="text-sm sm:text-[15px] leading-relaxed"
                style={{ color: 'var(--p3-text)' }}
              >
                {feat}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
