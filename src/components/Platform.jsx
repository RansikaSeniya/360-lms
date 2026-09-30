import { useEffect, useRef, useState } from 'react'

/* Modern two-tone SVGs */
const ModernIconUsers = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" className="fill-[#F97316]/20" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
)

const ModernIconCard = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <rect x="2" y="5" width="20" height="14" rx="2" className="fill-[#F97316]/20" />
    <line x1="2" y1="10" x2="22" y2="10" />
  </svg>
)

const ModernIconStore = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" className="fill-[#F97316]/20" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
)

const ModernIconChat = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" className="fill-[#F97316]/20" />
    <line x1="9" y1="10" x2="15" y2="10" />
    <line x1="9" y1="14" x2="15" y2="14" />
  </svg>
)

const ModernIconBook = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" className="fill-[#F97316]/20" />
  </svg>
)

const ModernIconQr = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <rect x="3" y="3" width="7" height="7" rx="1" className="fill-[#F97316]/20" />
    <rect x="14" y="3" width="7" height="7" rx="1" className="fill-[#F97316]/20" />
    <rect x="3" y="14" width="7" height="7" rx="1" className="fill-[#F97316]/20" />
    <rect x="14" y="14" width="3" height="3" rx="0.5" />
    <rect x="18" y="18" width="3" height="3" rx="0.5" />
  </svg>
)

const features = [
  { icon: ModernIconUsers, title: 'Student & Staff Management', text: 'Manage students, teachers, staff, classes, and academic information from one centralized platform.' },
  { icon: ModernIconCard,  title: 'Fees Tracking',              text: 'Track payments, outstanding fees, transactions, and financial records with ease.' },
  { icon: ModernIconStore, title: 'Online Class Store',         text: 'Create and manage online courses, classes, and digital learning programs.' },
  { icon: ModernIconChat,  title: 'Automated SMS',              text: 'Keep students and parents informed with automated SMS notifications and updates.' },
  { icon: ModernIconBook,  title: 'Course Materials',           text: 'Upload, organize, and distribute learning materials from one centralized platform.' },
  { icon: ModernIconQr,    title: 'QR Attendance',              text: 'Record attendance quickly and accurately using QR-based attendance technology.' },
]

/* Intersection Observer hook */
function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, inView]
}

export default function Platform() {
  const [ref, inView] = useInView()

  return (
    <section id="platform" className="sec platform-sec" ref={ref}>
      <div className="wrap">
        <div className={`sec-head platform-head transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="eyebrow">Platform overview</span>
          <h2>Everything your institute needs. In one platform.</h2>
          <p>360 LMS brings teaching, learning, administration, communication, and payments together in one powerful ecosystem.</p>
        </div>

        <div className="features">
          {features.map(({ icon: IconEl, title, text }, i) => (
            <article 
              className={`feature transition-all duration-700 ease-out`}
              style={{ 
                transitionDelay: `${150 + i * 100}ms`,
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(24px)'
              }}
              key={title}
            >
              <div className="feature-top">
                <div className="ic shadow-[0_16px_28px_rgba(194,65,12,.26)]"><IconEl /></div>
                <span className="feature-tag">Core feature</span>
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
