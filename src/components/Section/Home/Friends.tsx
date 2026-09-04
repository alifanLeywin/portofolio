import friendOne from '../../../assets/Images/profile.jpg'
import friendTwo from '../../../assets/Images/profile1.jpeg'
import friendThree from '../../../assets/Images/profile2.png'
import { Section } from '../../Shared'

const FRIENDS = [
  { name: 'Lorem ipsum', image: friendOne },
  { name: 'Lorem ipsum', image: friendTwo },
  { name: 'Lorem ipsum', image: friendThree },
]

export default function Friends() {
  return (
    <Section title="Friends" count={FRIENDS.length}>
      <div className="relative px-4 py-5 sm:px-5">
        <div className="mb-5 flex items-center justify-between">
          <p className="text-xs uppercase tracking-[0.16em]" style={{ color: 'var(--p3-text-muted)' }}>People worth building with</p>
          <span className="text-xs" style={{ color: 'var(--p3-text-muted)' }}>///</span>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          {FRIENDS.map((friend, index) => (
            <div key={`${friend.image}-${index}`} className="group relative h-18 w-18 sm:h-20 sm:w-20">
              <div
                className="absolute bottom-full left-1/2 z-10 mb-3 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-lg px-4 py-2 text-sm opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100"
                style={{ background: 'var(--p3-cyan)', color: 'var(--p3-panel)' }}
              >
                {friend.name}
                <span className="absolute left-1/2 top-full h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45" style={{ background: 'var(--p3-cyan)' }} />
              </div>
              <button
                type="button"
                aria-label={friend.name}
                className="h-full w-full overflow-hidden rounded-sm"
                style={{ border: '1px solid var(--p3-line)' }}
              >
                <img src={friend.image} alt={friend.name} className="h-full w-full object-cover" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
