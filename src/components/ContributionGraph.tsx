import { useEffect, useState } from 'react'

export default function ContributionGraph() {
  return (
    <section
      aria-label="GitHub contribution activity"
      className="overflow-hidden px-4 py-5 sm:px-5"
      style={{ borderTop: '1px solid var(--p3-line-soft)' }}
    >
      <div>
        <LiveContributionGrid />
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-sm" style={{ color: 'var(--p3-text-muted)' }}>
        <span>
          Contributions on{' '}
          <a
            href="https://github.com/alfnLeywin"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 transition-colors hover:text-[var(--p3-text)]"
          >
            GitHub
          </a>
          .
        </span>
      </div>
    </section>
  )
}

type Contribution = { date: string; count: number; level: number }
type ContributionResponse = { contributions: Contribution[]; total: { lastYear?: number } }

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const LEVELS = ['#101010', '#292929', '#565656', '#8b8b8b', '#f5f5f2']

function LiveContributionGrid() {
  const [data, setData] = useState<ContributionResponse | null>(null)

  useEffect(() => {
    fetch('https://github-contributions-api.jogruber.de/v4/alifanLeywin?y=last')
      .then(response => response.json() as Promise<ContributionResponse>)
      .then(setData)
      .catch(() => setData(null))
  }, [])

  if (!data) {
    return <div className="min-w-[690px] py-10 text-sm" style={{ color: 'var(--p3-text-muted)' }}>Loading GitHub activity...</div>
  }

  const firstDate = new Date(`${data.contributions[0].date}T00:00:00`)
  const leadingEmptyDays = firstDate.getDay()
  const paddedContributions = [
    ...Array.from({ length: leadingEmptyDays }, () => null),
    ...data.contributions,
  ]
  const weeks = Array.from(
    { length: Math.ceil(paddedContributions.length / 7) },
    (_, week) => paddedContributions.slice(week * 7, week * 7 + 7),
  )

  return (
    <div>
      <div className="mb-3 grid grid-cols-[24px_repeat(53,minmax(0,1fr))] gap-[2px] text-[9px] sm:text-xs" style={{ color: 'var(--p3-text-muted)' }}>
        <span />
        {Array.from({ length: 53 }, (_, weekIndex) => {
          const weekDate = new Date(firstDate)
          weekDate.setDate(firstDate.getDate() - leadingEmptyDays + weekIndex * 7)
          return <span key={weekIndex}>{weekDate.getDate() <= 7 ? MONTHS[weekDate.getMonth()] : ''}</span>
        })}
      </div>
      <div className="flex gap-1">
        <div className="grid w-4 shrink-0 grid-rows-7 gap-[2px] pt-0.5 text-[8px] sm:w-5 sm:text-[10px]" style={{ color: 'var(--p3-text-muted)' }}>
          <span /><span>Mon</span><span /><span>Wed</span><span /><span>Fri</span><span />
        </div>
        <div className="grid min-w-0 flex-1 grid-flow-col grid-rows-7 gap-[2px]">
          {weeks.flatMap((week, weekIndex) => Array.from({ length: 7 }, (_, dayIndex) => {
            const contribution = week[dayIndex]
            const level = contribution?.level ?? 0
            return <span key={`${weekIndex}-${dayIndex}`} title={contribution ? `${contribution.count} contributions on ${contribution.date}` : 'No contributions'} style={{ background: LEVELS[Math.min(level, 4)] }} className="aspect-square min-w-0 rounded-[1px]" />
          }))}
        </div>
      </div>
      <div className="mt-5 flex justify-end gap-2 text-xs sm:text-sm" style={{ color: 'var(--p3-text-muted)' }}>
        <span>Less</span>
        {LEVELS.map(level => <i key={level} aria-hidden="true" className="h-3 w-3 rounded-[2px]" style={{ background: level }} />)}
        <span>More</span>
      </div>
    </div>
  )
}
