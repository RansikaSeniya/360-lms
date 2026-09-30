import { IconBolt, IconCheckBox, IconLink, IconTrend } from './Icons.jsx'

const items = [
  { icon: IconCheckBox, title: 'Simple', text: 'Everything organized in one easy-to-use platform.' },
  { icon: IconLink, title: 'Connected', text: 'Bring students, teachers, staff, and administrators together.' },
  { icon: IconBolt, title: 'Automated', text: 'Reduce repetitive administrative work with smart automation.' },
  { icon: IconTrend, title: 'Scalable', text: 'Built to grow with your institute.' },
]

export default function Why() {
  return (
    <section id="why" className="sec why">
      <div className="wrap">
        <div className="sec-head"><h2>Built for the way modern institutes work.</h2></div>
        <div className="why-grid">
          {items.map(({ icon: IconEl, title, text }) => (
            <article className="why-card" key={title}>
              <div className="ic"><IconEl /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
