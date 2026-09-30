import { Logo } from './Icons.jsx'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <Logo
          href={null}
          extra={
            <span style={{ fontFamily: 'var(--text)', fontWeight: 400, fontSize: 14, color: 'var(--muted)', letterSpacing: 0, marginLeft: 12 }}>
              © 2026 360 LMS. Made in Sri Lanka.
            </span>
          }
        />
        <nav className="foot-links" aria-label="Footer">
          <a href="#platform">Platform</a>
          <a href="#solutions">Solutions</a>
          <a href="#cta">Contact</a>
          <a href="#">Privacy</a>
        </nav>
      </div>
    </footer>
  )
}
