import { IconBriefcase, IconBuilding, IconCap, IconMonitor, IconPerson, IconSchool } from './Icons.jsx'

const items = [
  { icon: IconCap, title: 'Tuition & Education Institutes', text: 'Classes, batches, fees and attendance' },
  { icon: IconSchool, title: 'Schools', text: 'Students, staff and parent communication' },
  { icon: IconBriefcase, title: 'Professional Training Centers', text: 'Programs, cohorts and certifications' },
  { icon: IconMonitor, title: 'Online Course Providers', text: 'Sell and deliver courses online' },
  { icon: IconBuilding, title: 'Corporate Training', text: 'Upskill teams with tracked learning' },
  { icon: IconPerson, title: 'Individual Educators', text: 'Run your own classes, your way' },
]

export default function Solutions() {
  return (
    <section id="solutions" className="sec">
      <div className="wrap">
        <div className="sec-head"><h2>Built for every learning environment.</h2></div>
        <div className="sol-grid">
          {items.map(({ icon: IconEl, title, text }) => (
            <article className="sol" key={title}>
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
