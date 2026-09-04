import { useEffect, useState, useRef } from 'react'

type Contribution = { date: string; count: number; level: number }
type ContributionResponse = { contributions: Contribution[]; total: { lastYear?: number } }

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const LEVELS = [
  '#131313', // Level 0: dark empty tile (no white borders)
  '#2f2f2f', // Level 1: low
  '#585858', // Level 2: medium
  '#929292', // Level 3: high
  '#f5f5f2', // Level 4: bright max contribution
]

function formatDate(dateStr: string) {
  const date = new Date(`${dateStr}T00:00:00`)
  const month = MONTHS[date.getMonth()]
  const day = date.getDate()
  const year = date.getFullYear()
  return `${month} ${day}, ${year}`
}

export default function ContributionGraph() {
  return (
    <section
      aria-label="GitHub contribution activity"
      className="px-4 py-6 sm:px-5"
      style={{ borderTop: '1px solid var(--p3-line-soft)' }}
    >
      <LiveContributionGrid />
    </section>
  )
}

function LiveContributionGrid() {
  const [data, setData] = useState<ContributionResponse | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [hoveredDay, setHoveredDay] = useState<{
    date: string
    count: number
    x: number
    y: number
    containerWidth: number
  } | null>(null)

  useEffect(() => {
    fetch('https://github-contributions-api.jogruber.de/v4/alifanLeywin?y=last')
      .then(response => response.json() as Promise<ContributionResponse>)
      .then(setData)
      .catch(() => setData(null))
  }, [])

  if (!data || !data.contributions || data.contributions.length === 0) {
    return (
      <div className="py-8 text-center text-sm font-mono" style={{ color: 'var(--p3-text-muted)' }}>
        Loading GitHub activity...
      </div>
    )
  }

  const firstDate = new Date(`${data.contributions[0].date}T00:00:00`)
  const leadingEmptyDays = firstDate.getDay()
  const paddedContributions: (Contribution | null)[] = [
    ...Array.from({ length: leadingEmptyDays }, () => null),
    ...data.contributions,
  ]

  const weeks: (Contribution | null)[][] = Array.from(
    { length: Math.ceil(paddedContributions.length / 7) },
    (_, weekIndex) => paddedContributions.slice(weekIndex * 7, weekIndex * 7 + 7),
  )

  // Calculate unique month label starting positions without overlaps
  const monthLabels: { month: string; weekIndex: number }[] = []
  let lastLabeledWeek = -99

  weeks.forEach((week, weekIndex) => {
    const firstDayInWeek = week.find(d => d !== null)
    if (!firstDayInWeek) return

    const d = new Date(`${firstDayInWeek.date}T00:00:00`)
    const month = d.getMonth()
    const monthName = MONTHS[month]

    const prev = monthLabels[monthLabels.length - 1]
    const isNewMonth = !prev || prev.month !== monthName

    if (isNewMonth) {
      // If the very first month only spanned 1-2 weeks before changing, replace it with the new month
      if (monthLabels.length === 1 && weekIndex - lastLabeledWeek < 3) {
        monthLabels[0] = { month: monthName, weekIndex }
        lastLabeledWeek = weekIndex
      } else if (weekIndex - lastLabeledWeek >= 3 && weeks.length - weekIndex >= 2) {
        monthLabels.push({ month: monthName, weekIndex })
        lastLabeledWeek = weekIndex
      }
    }
  })

  const totalCount =
    data.total?.lastYear ??
    data.contributions.reduce((acc, c) => acc + c.count, 0)

  // Edge-clamping for popup tooltip
  const tooltipHalfWidth = 95
  const clampedX = hoveredDay
    ? Math.max(
        tooltipHalfWidth + 4,
        Math.min(hoveredDay.x, (hoveredDay.containerWidth || 640) - tooltipHalfWidth - 4),
      )
    : 0
  const caretOffset = hoveredDay ? hoveredDay.x - clampedX : 0

  return (
    <div>
      {/* ── Scrollable Grid Wrapper ── */}
      <div
        ref={containerRef}
        className="relative w-full overflow-x-auto overflow-y-visible pb-1"
        style={{ scrollbarWidth: 'none' }}
      >
        <div className="min-w-[620px] select-none">
          {/* ── Month Header (Full English 3-letter Month Names without truncation) ── */}
          <div
            className="relative mb-2.5 h-4 w-full text-[11px] font-mono select-none"
            style={{ color: 'var(--p3-text-muted)' }}
          >
            {monthLabels.map(m => (
              <span
                key={`${m.month}-${m.weekIndex}`}
                className="absolute top-0 -translate-x-1 whitespace-nowrap"
                style={{
                  left: `${(m.weekIndex / weeks.length) * 100}%`,
                }}
              >
                {m.month}
              </span>
            ))}
          </div>

          {/* ── Grid Matrix (7 rows x N weeks, sharp squares, no white lines on empty) ── */}
          <div className="grid grid-flow-col auto-cols-fr grid-rows-7 gap-[2px]">
            {weeks.flatMap((week, weekIndex) =>
              Array.from({ length: 7 }, (_, dayIndex) => {
                const contribution = week[dayIndex]
                if (!contribution) {
                  return (
                    <span
                      key={`${weekIndex}-${dayIndex}`}
                      className="aspect-square rounded-none opacity-0"
                    />
                  )
                }

                const level = contribution.level ?? 0
                const isHovered = hoveredDay?.date === contribution.date

                return (
                  <span
                    key={`${weekIndex}-${dayIndex}`}
                    onMouseEnter={e => {
                      const containerRect = containerRef.current?.getBoundingClientRect()
                      const cellRect = e.currentTarget.getBoundingClientRect()
                      if (containerRect) {
                        setHoveredDay({
                          date: contribution.date,
                          count: contribution.count,
                          x: cellRect.left - containerRect.left + cellRect.width / 2,
                          y: cellRect.top - containerRect.top,
                          containerWidth: containerRect.width,
                        })
                      }
                    }}
                    onMouseLeave={() => setHoveredDay(null)}
                    style={{
                      background: LEVELS[Math.min(level, 4)],
                    }}
                    className={`aspect-square min-w-0 rounded-none cursor-pointer transition-opacity duration-100 ${
                      isHovered ? 'brightness-125 ring-1 ring-white/70 z-10' : 'hover:opacity-90'
                    }`}
                  />
                )
              }),
            )}
          </div>
        </div>

        {/* ── Custom Non-Overflowing Popup Tooltip ── */}
        {hoveredDay && (
          <div
            className="pointer-events-none absolute z-50 -translate-x-1/2 -translate-y-full pb-2 transition-all duration-75"
            style={{
              left: `${clampedX}px`,
              top: `${hoveredDay.y}px`,
            }}
          >
            <div
              className="relative whitespace-nowrap rounded px-2.5 py-1 text-[11px] sm:text-xs font-normal"
              style={{
                background: '#f2f2ef',
                color: '#090909',
                fontFamily: 'system-ui, -apple-system, sans-serif',
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.65)',
              }}
            >
              <span>
                {hoveredDay.count === 0 ? 'No' : hoveredDay.count}{' '}
                {hoveredDay.count === 1 ? 'contribution' : 'contributions'} on{' '}
                {formatDate(hoveredDay.date)}
              </span>

              {/* Dynamic Caret pointing to hovered square */}
              <span
                className="absolute top-full -translate-x-1/2"
                style={{
                  left: `calc(50% + ${caretOffset}px)`,
                  width: 0,
                  height: 0,
                  borderLeft: '4px solid transparent',
                  borderRight: '4px solid transparent',
                  borderTop: '5px solid #f2f2ef',
                }}
              />
            </div>
          </div>
        )}
      </div>

      {/* ── Footer: Total Count & Legend ── */}
      <div
        className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm font-mono"
        style={{ color: 'var(--p3-text-muted)' }}
      >
        <span>
          {totalCount.toLocaleString()} contributions on{' '}
          <a
            href="https://github.com/alifanLeywin"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 transition-colors hover:text-[var(--p3-text)]"
            style={{ color: 'var(--p3-text)' }}
          >
            GitHub
          </a>
          .
        </span>

        <div className="flex items-center gap-2 text-xs">
          <span>Less</span>
          <div className="flex items-center gap-[2px]">
            {LEVELS.map(level => (
              <i
                key={level}
                aria-hidden="true"
                className="h-2.5 w-2.5 rounded-none"
                style={{
                  background: level,
                }}
              />
            ))}
          </div>
          <span>More</span>
        </div>
      </div>
    </div>
  )
}
