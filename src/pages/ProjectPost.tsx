import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { DividerStrip, ExternalLinkIcon, GithubIcon } from '../components/Shared'
import Technology from '../components/Section/Projectpost/Technology'
import Feature from '../components/Section/Projectpost/Feature'
import { PROJECTS } from '../data/portfolio'
import exitDetailSfx from '../assets/sfx/PersonaSFX/deck_ui_out_of_game_detail.wav'
import slideSfx from '../assets/sfx/PersonaSFX/deck_ui_tab_transition_01.wav'

import NotFoundPage from './404page'

export default function ProjectPost() {
  const { slug } = useParams<{ slug: string }>()
  const project = PROJECTS.find(p => p.slug.toLowerCase() === slug?.toLowerCase())
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  // Handle document title when project changes
  useEffect(() => {
    if (project) {
      document.title = `${project.name} • alifanO_x`
    }
  }, [project])

  function playExitSound() {
    const sound = new Audio(exitDetailSfx)
    sound.volume = 0.35
    void sound.play().catch(() => {})
  }

  function playSlideSound() {
    const sound = new Audio(slideSfx)
    sound.volume = 0.22
    void sound.play().catch(() => {})
  }

  if (!project) {
    return <NotFoundPage />
  }

  const gallery = project.gallery && project.gallery.length > 0
    ? project.gallery
    : [project.image]

  const prevImage = () => {
    playSlideSound()
    setActiveImageIndex(prev => (prev === 0 ? gallery.length - 1 : prev - 1))
  }

  const nextImage = () => {
    playSlideSound()
    setActiveImageIndex(prev => (prev === gallery.length - 1 ? 0 : prev + 1))
  }

  return (
    <article className="min-h-full">
      {/* ── Sticky Top Bar (under Navbar) ── */}
      <div
        className="sticky top-14 z-30 flex items-center justify-between gap-3 px-5 py-3 sm:px-6"
        style={{
          background: 'rgba(9,9,9,0.92)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--p3-line-soft)',
        }}
      >
        <Link
          to="/projects"
          onClick={playExitSound}
          className="group inline-flex items-center gap-1.5 text-sm font-medium transition-colors shrink-0"
          style={{ color: 'var(--p3-text-muted)' }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--p3-cyan)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--p3-text-muted)')}
        >
          <span className="transition-transform duration-200 group-hover:-translate-x-1">←</span>
          <span>Projects</span>
        </Link>

        {project.category && (
          <span
            className="font-mono text-xs sm:text-sm italic shrink-0"
            style={{ color: 'var(--p3-text-muted)' }}
          >
            {project.category}
          </span>
        )}
      </div>

      {/* ── Header: Title, Description & Action Buttons ── */}
      <div className="px-5 pt-8 pb-7 sm:px-6">
        <h1
          className="font-bold leading-tight tracking-tight text-2xl sm:text-3xl lg:text-4xl"
          style={{
            color: 'var(--p3-text)',
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}
        >
          {project.name}
        </h1>

        <p
          className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed"
          style={{ color: 'var(--p3-text-soft)' }}
        >
          {project.desc}
        </p>

        {/* Action button row */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
            style={{
              background: '#f2f2ef',
              color: '#090909',
            }}
          >
            <span style={{ width: '15px', height: '15px' }}>
              <ExternalLinkIcon />
            </span>
            <span>Live Demo</span>
          </a>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors"
              style={{
                background: 'rgba(245, 245, 242, 0.05)',
                border: '1px solid var(--p3-line)',
                color: 'var(--p3-text)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--p3-cyan-soft)'
                e.currentTarget.style.borderColor = 'var(--p3-cyan)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(245, 245, 242, 0.05)'
                e.currentTarget.style.borderColor = 'var(--p3-line)'
              }}
            >
              <span style={{ width: '16px', height: '16px' }}>
                <GithubIcon />
              </span>
              <span>Source Code</span>
            </a>
          )}
        </div>
      </div>

      {/* ── Carousel Preview Showcase ── */}
      <div className="px-5 pb-8 sm:px-6">
        <div
          className="group/carousel relative aspect-[16/10] w-full overflow-hidden rounded-xl sm:aspect-[16/9]"
          style={{
            background: '#0a0a0a',
            border: '1px solid var(--p3-line)',
          }}
        >
          <img
            src={gallery[activeImageIndex]}
            alt={`${project.name} preview slide ${activeImageIndex + 1}`}
            className="h-full w-full object-cover transition-opacity duration-300"
          />

          {/* Retro scanline overlay */}
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              background:
                'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.5) 2px, rgba(0,0,0,0.5) 4px)',
            }}
          />

          {/* Navigation Arrows */}
          {gallery.length > 1 && (
            <>
              <button
                type="button"
                onClick={prevImage}
                aria-label="Previous slide"
                className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full transition-all duration-200 opacity-80 hover:opacity-100 hover:scale-105 cursor-pointer"
                style={{
                  background: 'rgba(9, 9, 9, 0.75)',
                  border: '1px solid var(--p3-line)',
                  color: 'var(--p3-text)',
                  backdropFilter: 'blur(6px)',
                }}
              >
                ‹
              </button>

              <button
                type="button"
                onClick={nextImage}
                aria-label="Next slide"
                className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full transition-all duration-200 opacity-80 hover:opacity-100 hover:scale-105 cursor-pointer"
                style={{
                  background: 'rgba(9, 9, 9, 0.75)',
                  border: '1px solid var(--p3-line)',
                  color: 'var(--p3-text)',
                  backdropFilter: 'blur(6px)',
                }}
              >
                ›
              </button>
            </>
          )}
        </div>

        {/* Carousel Pagination Dots */}
        {gallery.length > 1 && (
          <div className="mt-4 flex items-center justify-center gap-2">
            {gallery.map((_, dotIndex) => (
              <button
                key={dotIndex}
                type="button"
                aria-label={`Jump to slide ${dotIndex + 1}`}
                onClick={() => {
                  playSlideSound()
                  setActiveImageIndex(dotIndex)
                }}
                className="h-2 rounded-full transition-all duration-200 cursor-pointer"
                style={{
                  width: activeImageIndex === dotIndex ? '18px' : '6px',
                  background:
                    activeImageIndex === dotIndex
                      ? 'var(--p3-cyan)'
                      : 'rgba(245, 245, 242, 0.25)',
                }}
              />
            ))}
          </div>
        )}
      </div>

      <DividerStrip />

      {/* ── Modular Sections (Technology & Feature) ── */}
      <Technology technologies={project.technologies} />
      <DividerStrip />
      <Feature features={project.features} />
    </article>
  )
}
