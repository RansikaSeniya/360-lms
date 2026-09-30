const nodes = [
  { n: '01', label: 'Students', left: 420, top: 30 },
  { n: '02', label: 'Teachers', left: 700, top: 100 },
  { n: '03', label: 'Classes', left: 825, top: 260 },
  { n: '04', label: 'Courses', left: 700, top: 425 },
  { n: '05', label: 'Payments', left: 420, top: 485 },
  { n: '06', label: 'Attendance', left: 125, top: 425 },
  { n: '07', label: 'Communication', left: 10, top: 260 },
  { n: '08', label: 'Analytics', left: 125, top: 100 },
]

const flow = ['Students', 'Teachers', 'Classes', 'Courses', 'Payments', 'Attendance', 'Communication', 'Analytics']

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="sec eco">
      <div className="wrap">
        <div className="sec-head eco-head">
          <span className="eyebrow">Unified ecosystem</span>
          <h2>One platform. Every part of your institute.</h2>
        </div>

        <div className="ecosystem-visual" aria-label="360 LMS ecosystem overview">
          <div className="orbit-ring ring-one" />
          <div className="orbit-ring ring-two" />
          <div className="orbit-ring ring-three" />
          <div className="halo" />

          <div className="core-hub">
            <div className="core-glow" />
            <b>360</b>
            <span>LMS</span>
          </div>

          {nodes.map((node) => (
            <div key={node.n} className="eco-node" style={{ left: node.left, top: node.top }}>
              <span className="eco-node-index">{node.n}</span>
              <span>{node.label}</span>
            </div>
          ))}
        </div>

        <div className="eco-grid">
          <div className="hub-sm"><b>360</b><span>LMS</span></div>
          {nodes.map((node) => (
            <div key={node.n} className="eco-node compact"><span className="eco-node-index">{node.n}</span><span>{node.label}</span></div>
          ))}
        </div>

        <div className="flow">
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
