import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import CRTWarp from '../components/CRTWarp'
import ProfileHeader from '../components/ProfileHeader'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { DividerStrip } from '../components/Shared'

import { PROJECTS } from '../data/portfolio'

export default function ProfileLayout() {
  const location = useLocation()

  useEffect(() => {
    const path = location.pathname.replace(/\/+$/, '') || '/'
    let pageTitle: string

    if (path === '/') {
      pageTitle = 'Home'
    } else if (path === '/projects') {
      pageTitle = 'Projects'
    } else if (path.startsWith('/projects/')) {
      const slug = path.slice('/projects/'.length).toLowerCase()
      const found = PROJECTS.find(p => p.slug.toLowerCase() === slug)
      pageTitle = found ? found.name : '404'
    } else if (path === '/blog') {
      pageTitle = 'Blog'
    } else {
      pageTitle = '404'
    }

    document.title = `${pageTitle} • alifanO_x`
  }, [location.pathname])
  return (
    <div className="relative min-h-screen text-white">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <CRTWarp
          color="#f5f5f2"
          backgroundColor="#050505"
          speed={0.5}
          curvature={0.25}
          scanlineStrength={0.25}
          scanlineFrequency={200}
          waveAmplitude={0.3}
          waveFrequency={2.5}
          bloom={1.5}
          bloomRadius={1}
          noise={0.1}
          vignette={0.3}
          brightness={1.25}
          pixelation={1}
          rgbShift={0.015}
          mouseReact
          mouseStrength={0.5}
          dpr={1}
          fps={30}
        />
      </div>

      <div className="relative z-10 mx-auto w-full sm:px-3" style={{ maxWidth: '752px' }}>
        <div
          className="min-h-screen"
          style={{
            background: 'var(--p3-panel)',
            borderLeft: '1px solid var(--p3-line)',
            borderRight: '1px solid var(--p3-line)',
          }}
        >
          <ProfileHeader />
          <Navbar />
          <DividerStrip />

          <main id="main" tabIndex={-1}>
            <Outlet />
          </main>

          <DividerStrip />
          <Footer />
        </div>
      </div>
    </div>
  )
}
