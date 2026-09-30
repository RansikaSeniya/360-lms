import { useEffect, useRef, useState } from 'react'

const nodes = [
  { n: '01', label: 'Students',      left: 420, top: 30  },
  { n: '02', label: 'Teachers',      left: 700, top: 100 },
  { n: '03', label: 'Classes',       left: 825, top: 260 },
  { n: '04', label: 'Courses',       left: 700, top: 425 },
  { n: '05', label: 'Payments',      left: 420, top: 485 },
  { n: '06', label: 'Attendance',    left: 125, top: 425 },
  { n: '07', label: 'Communication', left: 10,  top: 260 },
  { n: '08', label: 'Analytics',     left: 125, top: 100 },
]

const flow = ['Students','Teachers','Classes','Courses','Payments','Attendance','Communication','Analytics']

/* Hook: fires once when element enters viewport */
function useInView(threshold = 0.2) {
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

export default function Ecosystem() {
  const [sectionRef, inView] = useInView(0.15)

  return (
    <section id="ecosystem" className="sec eco" ref={sectionRef}>
      <div className="wrap">

        {/* ── Header ── */}
        <div className={`sec-head eco-head transition-all duration-700 ease-out
          ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="eyebrow">Unified ecosystem</span>
          <h2>One platform. Every part of your institute.</h2>
        </div>

        {/* ── Orbit visual ── */}
        <div
          className={`ecosystem-visual transition-all duration-1000 ease-out delay-200
            ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.94]'}`}
          aria-label="360 LMS ecosystem overview"
        >
          <div className="orbit-ring ring-one" />
          <div className="orbit-ring ring-two" />
          <div className="orbit-ring ring-three" />
          <div className="halo" />

          {/* Core hub — pops in */}
          <div className={`core-hub transition-all duration-700 ease-out delay-400
            ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.7]'}`}>
            <div className="core-glow" />
            <b>360</b>
            <span>LMS</span>
          </div>

          {/* Nodes — staggered fade-slide in */}
          {nodes.map((node, i) => (
            <div
              key={node.n}
              className={`eco-node transition-all ease-out
                ${inView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'}`}
              style={{
                left: node.left,
                top: node.top,
                transitionDuration: '600ms',
                transitionDelay: `${400 + i * 80}ms`,
              }}
            >
              <span className="eco-node-index">{node.n}</span>
              <span>{node.label}</span>
            </div>
          ))}
        </div>

        {/* ── Compact grid (mobile) ── */}
        <div className="eco-grid">
          <div className="hub-sm"><b>360</b><span>LMS</span></div>
          {nodes.map((node, i) => (
            <div
              key={node.n}
              className={`eco-node compact transition-all ease-out
                ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDuration: '500ms', transitionDelay: `${200 + i * 60}ms` }}
            >
              <span className="eco-node-index">{node.n}</span>
              <span>{node.label}</span>
            </div>
          ))}
        </div>

        {/* ── Flow tags ── */}
        <div
          className={`flow transition-all duration-700 ease-out delay-900
            ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          {flow.flatMap((item, i) => {
            const parts = [<span key={item}>{item}</span>]
            if (i < flow.length - 1) parts.push(<em key={`${item}-arrow`}>→</em>)
            return parts
          })}
        </div>

      </div>
    </section>
  )
}
