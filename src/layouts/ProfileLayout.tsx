import { Outlet } from 'react-router-dom'
import CRTWarp from '../components/CRTWarp'
import ProfileHeader from '../components/ProfileHeader'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function ProfileLayout() {
  return (
    <div className="relative min-h-screen text-white">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <CRTWarp
          color="#d8d4ca"
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
            background: '#090909',
            borderLeft: '1px solid rgba(216,212,202,0.14)',
            borderRight: '1px solid rgba(216,212,202,0.14)',
          }}
        >
          <ProfileHeader />
          <Navbar />
          <div
            className="h-8 w-full"
            style={{
              borderBottom: '1px solid rgba(216,212,202,0.14)',
              backgroundImage:
                'repeating-linear-gradient(135deg,rgba(216,212,202,0.07) 0,rgba(216,212,202,0.07) 1px,transparent 1px,transparent 8px)',
            }}
          />

          <main id="main" tabIndex={-1}>
            <Outlet />
          </main>

          <Footer />
        </div>
      </div>
    </div>
  )
}
