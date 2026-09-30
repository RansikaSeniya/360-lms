import { Logo } from './Icons.jsx'

export default function Header() {
  return (
    <header className="nav">
      <div className="wrap">
        <Logo />
        <nav className="nav-links" aria-label="Main">
          <a href="#platform">Platform</a>
          <a href="#ecosystem">Features</a>
          <a href="#solutions">Solutions</a>
          <a href="#why">Why 360 LMS</a>
          <a href="#cta">Contact</a>
        </nav>
        <div className="nav-cta">
          <a href="#cta" className="signin">Sign in</a>
          <a href="#cta" className="btn btn-primary">Get Started</a>
        </div>
      </div>
    </header>
  )
}
