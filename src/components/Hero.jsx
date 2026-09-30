import {
  IconArrow,
  IconBell,
  IconBook,
  IconCard,
  IconChat,
  IconGrid,
  IconPlay,
  IconQr,
  IconSearch,
  IconShieldCheck,
  IconUsers,
} from './Icons.jsx'

const bars = [
  { h: 66, label: 'Mon' },
  { h: 72, label: 'Tue' },
  { h: 69, label: 'Wed' },
  { h: 75, label: 'Thu', pk: true },
  { h: 70, label: 'Fri' },
  { h: 61, label: 'Sat' },
]

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div>
          <span className="badge"><b>🚀 No. 1</b>The No. 1 Learning Management Platform in Sri Lanka.</span>
          <h1>Manage Learning.<span>Manage Everything.</span></h1>
          <p className="lead">Manage your classes and students smarter with an all-in-one platform built for modern educators and institutes.</p>
          <p className="sub">From seamless Student & Staff Management to Fees Tracking, Online Class Stores, Automated SMS, Course Materials, and QR Attendance — everything you need to run your institute, all in one place.</p>
          <div className="hero-actions">
            <a href="#cta" className="btn btn-primary">Get Started <IconArrow /></a>
            <a href="#platform" className="btn btn-ghost">Explore Platform</a>
          </div>
          <p className="trust">
            <IconShieldCheck />
            Built for modern educators, institutes, and learning communities.
          </p>
        </div>

        <div className="visual" aria-label="360 LMS dashboard preview">
          <div className="dash">
            <div className="dash-top">
              <div className="dots"><i /><i /><i /></div>
              <div className="search"><IconSearch />Search students, classes…</div>
              <div className="top-r">
                <div className="bell"><IconBell /><em>3</em></div>
                <div className="avatar">NP</div>
              </div>
            </div>
            <div className="dash-body">
              <div className="rail" aria-hidden="true">
                <div className="on"><IconGrid /></div>
                <IconUsers />
                <IconBook />
                <IconCard />
                <IconQr />
                <IconChat />
              </div>
              <div className="dash-main">
                <div className="dash-head"><strong>Institute Overview</strong><span>This term</span></div>
                <div className="kpis">
                  <div className="kpi"><small>Total Students</small><strong>1,248</strong><em>+64 this month</em></div>
                  <div className="kpi"><small>Active Courses</small><strong>36</strong><em style={{ color: 'var(--orange-strong)' }}>8 online</em></div>
                  <div className="kpi"><small>Staff Members</small><strong>42</strong><em style={{ color: 'var(--muted)' }}>28 teachers</em></div>
                  <div className="kpi hot"><small>Fee Collection</small><strong>LKR 1.8M</strong><em>86% collected</em></div>
                </div>
                <div className="row2">
                  <div className="panel">
                    <div className="panel-h">Attendance Overview<span style={{ color: '#15803D' }}>94%</span></div>
                    <div className="bars">
                      {bars.map((bar) => (
                        <div key={bar.label}>
                          <i className={bar.pk ? 'pk' : undefined} style={{ height: `${bar.h}px` }} />
                          {bar.label}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="panel">
                    <div className="panel-h">Student Performance<span>Avg 78%</span></div>
                    <svg width="100%" height="92" viewBox="0 0 260 96" preserveAspectRatio="none" aria-hidden="true">
                      <defs>
                        <linearGradient id="hp" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0" stopColor="#F97316" stopOpacity=".25" />
                          <stop offset="1" stopColor="#F97316" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path d="M0 70 L37 62 L74 66 L111 48 L148 52 L185 34 L222 30 L260 18 L260 96 L0 96 Z" fill="url(#hp)" />
                      <path d="M0 70 L37 62 L74 66 L111 48 L148 52 L185 34 L222 30 L260 18" fill="none" stroke="#C2410C" strokeWidth="2.5" strokeLinejoin="round" />
                      <path d="M0 80 L37 76 L74 74 L111 70 L148 66 L185 60 L222 58 L260 52" fill="none" stroke="#FDBA74" strokeWidth="2" strokeDasharray="4 4" />
                    </svg>
                  </div>
                </div>
                <div className="row3">
                  <div className="panel">
                    <div className="panel-h">Upcoming Classes</div>
                    <div className="cls"><b>4:00</b><div><strong>A/L Physics</strong><small>Hall 02</small></div></div>
                    <div className="cls"><b>5:30</b><div><strong>O/L Maths</strong><small>Online</small></div></div>
                    <div className="cls"><b>7:00</b><div><strong>English Lit.</strong><small>Hall 05</small></div></div>
                  </div>
                  <div className="panel">
                    <div className="panel-h">Recent Payments</div>
                    <div className="pay"><span>K. Perera</span><b>4,500</b></div>
                    <div className="pay"><span>S. Fernando</span><b>6,000</b></div>
                    <div className="pay"><span>M. Silva</span><b>3,200</b></div>
                    <div className="pay"><span>R. Jayasinghe</span><b className="due">Due</b></div>
                  </div>
                  <div className="panel">
                    <div className="panel-h">Notifications</div>
                    <div className="note"><i />SMS reminders sent to 312 parents</div>
                    <div className="note"><i className="g" />New materials uploaded: Chem Unit 4</div>
                    <div className="note"><i className="d" />18 fees due this week</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="float f-qr">
            <div className="ic g"><IconQr size={22} /></div>
            <div><strong>QR Attendance</strong><span className="ok">✓ Attendance recorded</span></div>
          </div>
          <div className="float f-fee">
            <div className="ic"><IconCard size={22} /></div>
            <div><strong>Fee Tracking</strong><span><b>LKR 245,000</b> collected</span></div>
          </div>
          <div className="float f-online">
            <div className="ic"><IconPlay /></div>
            <div><strong>Online Classes</strong><span><b>12</b> upcoming sessions</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}
