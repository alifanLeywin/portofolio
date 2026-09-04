import friendOne from '../assets/Images/profile.jpg'
import friendTwo from '../assets/Images/profile1.jpeg'
import friendThree from '../assets/Images/profile2.png'
import friendFour from '../assets/Images/profile3.png'

export interface Experience {
  id: string
  company: string
  role: string
  location: string
  period: string
  duration: string
  desc: string
}

export const EXPERIENCE: Experience[] = [
  {
    id: 'exp-1',
    company: 'PT. Mobidu Sinergi',
    role: 'Full-stack Developer',
    location: 'Garut',
    period: 'July 2025 – November 2025',
    duration: '5 months',
    desc: 'Designed and developed a scalable backend service for Generasi QR Code, a dynamic QR code generation and management system. Built an interactive dashboard to simplify user interaction with the system and API integration.',
  },
  {
    id: 'exp-2',
    company: 'Nempo Garut',
    role: 'Full-stack Developer',
    location: 'Garut',
    period: 'August 2025 – November 2025',
    duration: '4 months',
    desc: 'Built an administrative panel for Nempo Garut and developed a full-stack Superapps platform using React and Laravel.',
  },
]

export interface Friend {
  id: string
  name: string
  label: string
  image: string
  url: string
}

export const FRIENDS: Friend[] = [
  {
    id: 'friend-1',
    name: 'Alex Rivera',
    label: 'Frontend Engineer',
    image: friendOne,
    url: 'https://github.com/alifanLeywin',
  },
  {
    id: 'friend-2',
    name: 'Devin Vance',
    label: 'Backend Specialist',
    image: friendTwo,
    url: 'https://github.com/alifanLeywin',
  },
  {
    id: 'friend-3',
    name: 'Sarah Chen',
    label: 'Creative Technologist',
    image: friendThree,
    url: 'https://github.com/alifanLeywin',
  },
  {
    id: 'friend-4',
    name: 'Kenji Sato',
    label: 'Full-stack Developer',
    image: friendFour,
    url: 'https://github.com/alifanLeywin',
  },
]

export interface Project {
  id: string
  name: string
  slug: string
  category: string
  desc: string
  image: string
  gallery: string[]
  tags: string[]
  technologies: string[]
  features: string[]
  url: string
  github?: string
}

export const PROJECTS: Project[] = [
  {
    id: 'proj-1',
    name: 'Narratio AI - Business Narrative Deck Generator',
    slug: 'narratio-ai',
    category: 'AI / Machine Learning',
    desc: 'Machine learning-powered platform transforming raw data, web intelligence, and conversations into structured business narratives and consulting-grade slide decks.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    ],
    tags: ['Next.js', 'TypeScript', 'Python', 'PostgreSQL'],
    technologies: [
      'Next.js',
      'TypeScript',
      'Python',
      'PostgreSQL',
      'TensorFlow',
      'Keras',
      'BiLSTM',
      'Sentence Transformers',
    ],
    features: [
      'Natural language input to convert user context, raw data, and transcripts into structured slide outlines.',
      'AI agent workflow conducting automated web intelligence research across news, market reports, and industry sources.',
      'BiLSTM sentiment analysis classifying multilingual texts into positive, negative, or neutral sentiment signals.',
      'Embedding-based semantic layer enhancing contextual alignment between research findings and slide narratives.',
      'LLM-powered slide generator outputting consulting-style narratives, chart structures, and strategic takeaways.',
      'End-to-end pipeline spanning automated research, sentiment analysis, and modular presentation components.',
    ],
    url: 'https://github.com/alifanLeywin',
    github: 'https://github.com/alifanLeywin',
  },
  {
    id: 'proj-2',
    name: 'Alyosha',
    slug: 'alyosha',
    category: 'Creative Development',
    desc: 'Personal portfolio with a CRT WebGL shader background built in React + Three.js.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    ],
    tags: ['React', 'TypeScript', 'Three.js', 'Tailwind'],
    technologies: ['React', 'TypeScript', 'Three.js', 'Tailwind CSS', 'Vite', 'WebGL'],
    features: [
      'Custom CRT WebGL shader post-processing effect with interactive scanlines and barrel distortion.',
      'Persona 3 Reload inspired visual direction and sound effect cues on navigation.',
      'Modular dynamic page router with responsive layouts and fast client-side performance.',
    ],
    url: 'https://github.com/alifanLeywin',
    github: 'https://github.com/alifanLeywin',
  },
  {
    id: 'proj-3',
    name: 'Neon Grid',
    slug: 'neon-grid',
    category: 'Full-stack / Collaboration',
    desc: 'A real-time collaborative design tool with live cursor sharing and SVG export.',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    ],
    tags: ['React', 'WebSocket', 'Canvas API'],
    technologies: ['React', 'Node.js', 'WebSocket', 'HTML5 Canvas', 'Tailwind CSS'],
    features: [
      'Multi-user live cursor and presence synchronization with low-latency WebSocket communication.',
      'Vector drawing canvas with infinite zoom, panning, and object layering.',
      'One-click SVG and PNG asset export with transparent background options.',
    ],
    url: 'https://github.com/alifanLeywin',
    github: 'https://github.com/alifanLeywin',
  },
  {
    id: 'proj-4',
    name: 'Pulse UI',
    slug: 'pulse-ui',
    category: 'Design Systems',
    desc: 'Minimal component library with fluid micro-animations for React applications.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    ],
    tags: ['React', 'TypeScript', 'Framer Motion'],
    technologies: ['React', 'TypeScript', 'Framer Motion', 'Radix UI', 'CSS Modules'],
    features: [
      'Over 30 accessible, headless and animated UI primitives ready for production.',
      'Keyboard navigable and fully compliant with WCAG AAA accessibility guidelines.',
      'Zero-runtime overhead styling with flexible CSS variable token configuration.',
    ],
    url: 'https://github.com/alifanLeywin',
    github: 'https://github.com/alifanLeywin',
  },
  {
    id: 'proj-5',
    name: 'Generasi QR',
    slug: 'generasi-qr',
    category: 'Web Platform',
    desc: 'Dynamic QR code generation and management platform with an analytics dashboard and API integration.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    ],
    tags: ['Laravel', 'React', 'MySQL', 'REST API'],
    technologies: ['Laravel', 'PHP', 'React', 'MySQL', 'Redis', 'Docker'],
    features: [
      'Dynamic QR code routing enabling destination URL changes without reprinting physical codes.',
      'Real-time scan tracking and telemetry (location, device, time of day).',
      'Secure developer REST API with API token authentication and rate limiting.',
    ],
    url: 'https://github.com/alifanLeywin',
    github: 'https://github.com/alifanLeywin',
  },
  {
    id: 'proj-6',
    name: 'Nempo Superapps',
    slug: 'nempo-superapps',
    category: 'Government & Public Service',
    desc: 'Regional administrative portal and citizen service platform built with modern modular microservices.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    ],
    tags: ['React', 'PHP', 'Tailwind', 'PostgreSQL'],
    technologies: ['React', 'PHP', 'Laravel', 'PostgreSQL', 'Tailwind CSS'],
    features: [
      'Unified public service dashboard integrating municipal administration and citizen complaints.',
      'Role-based access control (RBAC) with audit logs for staff and administrators.',
      'Optimized lightweight mobile view for seamless browsing on varying cellular networks.',
    ],
    url: 'https://github.com/alifanLeywin',
    github: 'https://github.com/alifanLeywin',
  },
]

export const STACK_GROUPS = [
  {
    number: '01',
    label: 'Frontend',
    description: 'Interfaces, motion, and visual systems.',
    tools: ['JavaScript', 'TypeScript', 'React.js', 'Tailwind CSS', 'Framer Motion & GSAP'],
  },
  {
    number: '02',
    label: 'Backend',
    description: 'APIs, data, and application logic.',
    tools: ['Node.js (Express/Hono)', 'Laravel (PHP)', 'PostgreSQL & MySQL', 'Prisma & Drizzle ORM'],
  },
  {
    number: '03',
    label: 'Tools / DevOps',
    description: 'The tools that keep ideas moving.',
    tools: ['VS Code', 'AI(Claude, Gemini)', 'Postman', 'Git', 'GitHub', 'Vercel'],
  },
]

export const SOCIALS = [
  { label: 'GitHub',   href: 'https://github.com/alifanLeywin',    iconName: 'GithubIcon' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mochammad-alifan-568464355/',  iconName: 'LinkedinIcon' },
  { label: 'Instagram', href: 'https://www.instagram.com/alfnleywinnn_/', iconName: 'InstagramIcon' },
  { label: 'Email',    href: 'mailto:alifanmunggaran16@gmail.com', iconName: 'EmailIcon' },
]
