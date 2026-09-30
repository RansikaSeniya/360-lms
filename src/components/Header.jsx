export default function Header() {
  return (
    <header className="nav">
      {/* Full-width grid: logo | nav (centered) | cta */}
      <div
        className="wrap"
        style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', height: 76 }}
      >
        {/* Logo — left */}
        <a href="/" className="flex items-center gap-2 justify-self-start">
          <img src="/360logo.png" alt="360 LMS Logo" className="h-10 w-auto" />
        </a>

        {/* Nav links — center */}
        <nav aria-label="Main">
          <ul className="flex items-center gap-1 list-none m-0 p-0">
            {[
              { href: '#platform',  label: 'Platform'    },
              { href: '#ecosystem', label: 'Features'    },
              { href: '#solutions', label: 'Solutions'   },
              { href: '#why',       label: 'Why 360 LMS' },
              { href: '#cta',       label: 'Contact'     },
            ].map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="
                    relative px-4 py-2 rounded-xl
                    text-[14.5px] font-semibold text-[#4A3C33]
                    transition-all duration-200
                    hover:text-[#C2410C] hover:bg-[#FFF1E6]
                    group
                  "
                >
                  {label}
                  {/* underline accent on hover */}
                  <span className="
                    absolute bottom-1 left-4 right-4 h-0.5 rounded-full
                    bg-[#F97316] scale-x-0 group-hover:scale-x-100
                    transition-transform duration-200 origin-left
                  " />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA — right */}
        <div className="flex items-center gap-2 justify-self-end">
          <a
            href="#cta"
            className="
              px-4 py-2 rounded-xl
              text-[14px] font-semibold text-[#4A3C33]
              hover:text-[#C2410C] hover:bg-[#FFF1E6]
              transition-all duration-200
            "
          >
            Sign in
          </a>
          <a
            href="#cta"
            className="
              inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl
              bg-[#C2410C] text-white font-bold text-[14px]
              shadow-[0_6px_20px_rgba(194,65,12,.32)]
              hover:bg-[#9A3412] hover:-translate-y-0.5 hover:shadow-[0_10px_26px_rgba(194,65,12,.42)]
              transition-all duration-200
            "
          >
            Get Started
            <span className="text-base leading-none">→</span>
          </a>
        </div>
      </div>
    </header>
  )
}
