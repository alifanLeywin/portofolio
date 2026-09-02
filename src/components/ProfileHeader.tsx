import avatar from '../assets/Images/profile.jpeg'
import banner from '../assets/banner.jpg'
import { SOCIALS } from '../data/portfolio'
import { BriefcaseIcon, MapPinIcon, GlobeIcon, GithubIcon, LinkedinIcon, DiscordIcon, EmailIcon } from './Shared'

const Icons: Record<string, React.FC> = {
  GithubIcon,
  LinkedinIcon,
  DiscordIcon,
  EmailIcon,
}

export default function ProfileHeader() {
  return (
    <header id="about" style={{ borderBottom: '1px solid rgba(216,212,202,0.14)' }}>
      {/* Banner */}
      <div
        className="relative overflow-hidden"
        style={{ height: '176px' }}
      >
        <img
          src={banner}
          alt="Profile Banner"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Scanline overlay on banner */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,0,0,0.18) 3px,rgba(0,0,0,0.18) 4px)',
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, transparent 55%, #090909 100%)',
          }}
        />
      </div>

      {/* Profile content */}
      <div className="relative px-5 pb-6 sm:px-6">
        {/* Avatar & Bubble Row */}
        <div className="flex items-end" style={{ marginTop: '-60px' }}>
          {/* Avatar Wrapper */}
          <div className="relative shrink-0">
            <div
              className="relative overflow-hidden bg-[#090909]"
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                border: '6px solid #090909',
              }}
            >
              <img
                src={avatar}
                alt="Portrait of Alfn Leywin"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 20%' }}
              />
            </div>
            {/* Online Status Indicator */}
            <div
              className="absolute bottom-0 right-0 rounded-full"
              style={{
                width: '28px',
                height: '28px',
                background: '#23a559',
                border: '5px solid #090909',
                transform: 'translate(-5%, -5%)'
              }}
            />
          </div>

          {/* Status Bubble */}
          <div 
            className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl text-[13px] italic mb-3 relative ml-4"
            style={{ 
              background: '#110c18', 
              border: '1px solid rgba(216,212,202,0.15)',
              color: 'rgba(225,222,214,0.7)',
            }}
          >
            {/* Bubble Tail */}
            <div 
              className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rotate-45"
              style={{ 
                background: '#110c18',
                borderLeft: '1px solid rgba(216,212,202,0.15)',
                borderBottom: '1px solid rgba(216,212,202,0.15)'
              }}
            />
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ opacity: 0.6 }}>
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
            </svg>
            LoL
          </div>
        </div>

        {/* Name + handle */}
        <div className="mt-4">
          <h1
            className="font-bold leading-tight tracking-tight"
            style={{ fontSize: '28px', color: '#f0e8ff' }}
          >
            alifanLeywin
          </h1>
          
          <div className="flex items-center gap-2 mt-1 text-[15px]" style={{ color: 'rgba(225,222,214,0.7)' }}>
            <span>alfnleywin</span>
            <span>•</span>
            <span>Arthur</span>
          </div>
        </div>

        {/* Bio */}
        <p
          className="mt-3.5 leading-relaxed"
          style={{ fontSize: '15px', color: 'rgba(225,222,214,0.75)', maxWidth: '640px' }}
        >
          I'm a front-end developer based in Indonesia, passionate about building
          beautiful, high-performance web experiences. I love creative coding,
          WebGL shaders, and turning complex ideas into intuitive interfaces.
        </p>

        {/* Meta row */}
        <div
          className="mt-4 flex flex-wrap gap-x-4 gap-y-2"
          style={{ fontSize: '14px', color: 'rgba(225,222,214,0.45)' }}
        >
          <span className="inline-flex items-center gap-1.5">
            <BriefcaseIcon />
            Front-end Developer
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPinIcon />
            Indonesia
          </span>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 transition-colors"
            style={{ color: 'rgba(225,222,214,0.45)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'rgba(216,212,202,0.9)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(225,222,214,0.45)')}
          >
            <GlobeIcon />
            alfnleywin.dev
          </a>
        </div>

        {/* Social links */}
        <div
          className="mt-5 pt-4"
            style={{ borderTop: '1px solid rgba(216,212,202,0.12)' }}
        >
          <ul className="flex flex-wrap gap-2">
            {SOCIALS.map(s => {
              const Icon = Icons[s.iconName];
              return (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    aria-label={s.label}
                    title={s.label}
                    className="flex items-center justify-center rounded-lg transition-all"
                    style={{
                      width: '40px',
                      height: '40px',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(216,212,202,0.18)',
                      color: 'rgba(225,222,214,0.5)',
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLAnchorElement
                      el.style.background = 'rgba(216,212,202,0.12)'
                      el.style.borderColor = 'rgba(216,212,202,0.4)'
                      el.style.color = '#e4e0d8'
                      el.style.transform = 'translateY(-2px)'
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLAnchorElement
                      el.style.background = 'rgba(255,255,255,0.04)'
                      el.style.borderColor = 'rgba(216,212,202,0.18)'
                      el.style.color = 'rgba(225,222,214,0.5)'
                      el.style.transform = 'translateY(0)'
                    }}
                  >
                    <span style={{ width: '18px', height: '18px' }}>
                      {Icon && <Icon />}
                    </span>
                    <span className="sr-only">{s.label}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </header>
  )
}
