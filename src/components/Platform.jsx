import { IconBook, IconCard, IconChatLines, IconQr, IconStore, IconUsers } from './Icons.jsx'

const features = [
  { icon: IconUsers, title: 'Student & Staff Management', text: 'Manage students, teachers, staff, classes, and academic information from one centralized platform.' },
  { icon: IconCard, title: 'Fees Tracking', text: 'Track payments, outstanding fees, transactions, and financial records with ease.' },
  { icon: IconStore, title: 'Online Class Store', text: 'Create and manage online courses, classes, and digital learning programs.' },
  { icon: IconChatLines, title: 'Automated SMS', text: 'Keep students and parents informed with automated SMS notifications and updates.' },
  { icon: IconBook, title: 'Course Materials', text: 'Upload, organize, and distribute learning materials from one centralized platform.' },
  { icon: IconQr, title: 'QR Attendance', text: 'Record attendance quickly and accurately using QR-based attendance technology.' },
]

export default function Platform() {
  return (
    <section id="platform" className="sec platform-sec">
      <div className="wrap">
        <div className="sec-head platform-head">
          <span className="eyebrow">Platform overview</span>
          <h2>Everything your institute needs. In one platform.</h2>
          <p>360 LMS brings teaching, learning, administration, communication, and payments together in one powerful ecosystem.</p>
        </div>

        <div className="features">
          {features.map(({ icon: IconEl, title, text }) => (
            <article className="feature" key={title}>
              <div className="feature-top">
                <div className="ic"><IconEl size={24} /></div>
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
