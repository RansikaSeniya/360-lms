const spokes = [
  { width: 220, rotate: -90 },
  { width: 323, rotate: -28.9 },
  { width: 400, rotate: 0 },
  { width: 323, rotate: 28.9 },
  { width: 220, rotate: 90 },
  { width: 323, rotate: 151.1 },
  { width: 400, rotate: 180 },
  { width: 323, rotate: -151.1 },
]

const nodes = [
  { n: '01', label: 'Students', left: 415, top: 33 },
  { n: '02', label: 'Teachers', left: 698, top: 97 },
  { n: '03', label: 'Classes', left: 815, top: 253 },
  { n: '04', label: 'Courses', left: 698, top: 409 },
  { n: '05', label: 'Payments', left: 415, top: 473 },
  { n: '06', label: 'Attendance', left: 132, top: 409 },
  { n: '07', label: 'Communication', left: 15, top: 253 },
  { n: '08', label: 'Analytics', left: 132, top: 97 },
]

const flow = ['Students', 'Teachers', 'Classes', 'Courses', 'Payments', 'Attendance', 'Communication', 'Analytics']

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="sec eco">
      <div className="wrap">
        <div className="sec-head" style={{ marginBottom: 40 }}>
          <h2>One platform. Every part of your institute.</h2>
        </div>

        <div className="orbit" aria-hidden="true">
          <div className="ring" />
          <div className="glow" />
          {spokes.map((s) => (
            <div key={s.rotate} className="spoke" style={{ width: s.width, transform: `rotate(${s.rotate}deg)` }} />
          ))}
          <div className="hub"><b>360</b><span>LMS</span></div>
          {nodes.map((node) => (
            <div key={node.n} className="node" style={{ left: node.left, top: node.top }}>
              <i>{node.n}</i>{node.label}
            </div>
          ))}
        </div>

        <div className="eco-grid">
          <div className="hub-sm"><b>360</b><span>LMS</span></div>
          {nodes.map((node) => (
            <div key={node.n} className="node"><i>{node.n}</i>{node.label}</div>
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
