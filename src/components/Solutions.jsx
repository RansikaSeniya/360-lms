import { useEffect, useRef, useState } from 'react'
import { IconBriefcase, IconBuilding, IconCap, IconMonitor, IconPerson, IconSchool } from './Icons.jsx'

const items = [
  { icon: IconCap,       title: 'Tuition & Education Institutes', text: 'Classes, batches, fees and attendance' },
  { icon: IconSchool,    title: 'Schools',                        text: 'Students, staff and parent communication' },
  { icon: IconBriefcase, title: 'Professional Training Centers',  text: 'Programs, cohorts and certifications' },
  { icon: IconMonitor,   title: 'Online Course Providers',        text: 'Sell and deliver courses online' },
  { icon: IconBuilding,  title: 'Corporate Training',             text: 'Upskill teams with tracked learning' },
  { icon: IconPerson,    title: 'Individual Educators',           text: 'Run your own classes, your way' },
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

export default function Solutions() {
  const [ref, inView] = useInView()

  return (
    <section id="solutions" className="sec" ref={ref}>
      <div className="wrap">
        <div className={`sec-head transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2>Built for every learning environment</h2>
        </div>
        
        <div className="sol-grid">
          {items.map(({ icon: IconEl, title, text }, i) => (
            <article 
              className="sol transition-all duration-700 ease-out" 
              key={title}
              style={{
                transitionDelay: `${150 + i * 80}ms`,
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(24px)'
              }}
            >
              <div className="ic"><IconEl /></div>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
