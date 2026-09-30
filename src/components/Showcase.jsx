import { IconArrow, LogoMark } from './Icons.jsx'

const sideItems = ['Dashboard', 'Students', 'Staff', 'Classes', 'Online Store', 'Fees', 'Attendance', 'SMS Center', 'Materials', 'Reports']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
const courses = [
  { name: 'A/L Combined Maths', students: 184, pct: 72 },
  { name: 'O/L Science', students: 226, pct: 64 },
  { name: 'Spoken English', students: 98, pct: 81 },
  { name: 'ICT for Beginners', students: 142, pct: 57 },
]
const payments = [
  { name: 'Kavindi Perera', cls: 'A/L Physics', amount: 'LKR 4,500', due: false },
  { name: 'Sahan Fernando', cls: 'O/L Maths', amount: 'LKR 6,000', due: false },
  { name: 'Malsha Silva', cls: 'English Lit.', amount: 'LKR 3,200', due: false },
  { name: 'Ravindu Jayasinghe', cls: 'ICT', amount: 'LKR 5,000', due: true },
]

export default function Showcase() {
  return (
    <section className="sec showcase">
      <div className="wrap">
        <div className="sec-head"><h2>See everything. Manage everything.</h2></div>

        <div className="bigdash" aria-label="360 LMS administration dashboard preview">
          <aside className="side">
            <div className="logo"><LogoMark />360 LMS</div>
            {sideItems.map((item) => (
              <div key={item} className={item === 'Dashboard' ? 'item on' : 'item'}>{item}</div>
            ))}
          </aside>
          <div className="bd-main">
            <div className="bd-head">
              <div>
                <h3>Good morning, Admin</h3>
                <p>Here's what's happening across your institute today.</p>
              </div>
              <div className="acts">
                <span className="chip">This month</span>
                <span className="chip dark">+ Add Student</span>
              </div>
            </div>
            <div className="bkpis">
              <div className="bkpi"><small>Total Students</small><strong>1,248</strong><em>▲ 5.4% vs last month</em></div>
              <div className="bkpi"><small>Fees Collected</small><strong>LKR 1.84M</strong><em>▲ 12.1% vs last month</em></div>
              <div className="bkpi"><small>Avg. Attendance</small><strong>94.2%</strong><em>▲ 1.8% vs last month</em></div>
              <div className="bkpi"><small>Outstanding Fees</small><strong>LKR 296K</strong><em className="w">48 students pending</em></div>
            </div>
            <div className="brow">
              <div className="card">
                <div className="card-h">
                  <h4>Fee Collection</h4>
                  <div className="legend">
                    <span><i />2026</span>
                    <span><i className="l" />2025</span>
                  </div>
                </div>
                <svg width="100%" height="170" viewBox="0 0 600 170" preserveAspectRatio="none" style={{ marginTop: 14 }} aria-hidden="true">
                  <defs>
                    <linearGradient id="sf" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopColor="#F97316" stopOpacity=".28" />
                      <stop offset="1" stopColor="#F97316" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0 42H600M0 84H600M0 126H600" stroke="#F5ECE4" strokeWidth="1" />
                  <path d="M0 130 C50 120 70 104 110 108 S180 80 220 86 S300 60 340 66 S420 40 460 44 S540 22 600 16 L600 170 L0 170 Z" fill="url(#sf)" />
                  <path d="M0 130 C50 120 70 104 110 108 S180 80 220 86 S300 60 340 66 S420 40 460 44 S540 22 600 16" fill="none" stroke="#C2410C" strokeWidth="3" />
                  <path d="M0 142 C60 138 90 128 130 130 S210 112 250 116 S330 100 380 102 S470 86 520 84 S570 76 600 72" fill="none" stroke="#FDBA74" strokeWidth="2.5" strokeDasharray="6 5" />
                  <circle cx="460" cy="44" r="5" fill="#fff" stroke="#C2410C" strokeWidth="3" />
                </svg>
                <div className="months">{months.map((m) => <span key={m}>{m}</span>)}</div>
              </div>
              <div className="card">
                <h4>Attendance Today</h4>
                <div className="donut-wrap">
                  <div className="donut"><div><b>94%</b><small>present</small></div></div>
                  <div className="dl">
                    <div><i />QR scan<b>1,023</b></div>
                    <div><i className="l" />Manual<b>150</b></div>
                    <div><i className="x" />Absent<b>75</b></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="brow2">
              <div className="card">
                <h4>Course Activity</h4>
                <table>
                  <thead>
                    <tr>
                      <th>Course</th>
                      <th>Students</th>
                      <th style={{ width: '40%' }}>Completion</th>
                    </tr>
                  </thead>
                  <tbody>
                    {courses.map((c) => (
                      <tr key={c.name}>
                        <td className="n">{c.name}</td>
                        <td>{c.students}</td>
                        <td>
                          <div className="prog">
                            <span><i style={{ width: `${c.pct}%` }} /></span>
                            {c.pct}%
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="card">
                <h4>Recent Payments</h4>
                <table>
                  <thead>
                    <tr>
                      <th>Student</th>
                      <th>Class</th>
                      <th>Amount</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {payments.map((p) => (
                      <tr key={p.name}>
                        <td className="n">{p.name}</td>
                        <td>{p.cls}</td>
                        <td className="n">{p.amount}</td>
                        <td><span className={p.due ? 'tag due' : 'tag'}>{p.due ? 'Due' : 'Paid'}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="show-cta">
          <a href="#cta" className="btn btn-white">Explore 360 LMS <IconArrow /></a>
        </div>
      </div>
    </section>
  )
}
