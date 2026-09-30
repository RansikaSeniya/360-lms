
const brands = [
  { name: 'Apex Academy',         emoji: '🏆', color: '#FFF1E6', border: '#FDDCB5' },
  { name: 'BluePeak College',     emoji: '🎓', color: '#EFF6FF', border: '#BFDBFE' },
  { name: 'Nexa Institute',       emoji: '⚡', color: '#F0FDF4', border: '#BBF7D0' },
  { name: 'Crest Learning',       emoji: '🌟', color: '#FFFBEB', border: '#FDE68A' },
  { name: 'Future Horizon',       emoji: '🚀', color: '#FDF4FF', border: '#E9D5FF' },
  { name: 'Pearl Academy',        emoji: '💎', color: '#F0F9FF', border: '#BAE6FD' },
  { name: 'Sapphire Campus',      emoji: '🔷', color: '#EFF6FF', border: '#BFDBFE' },
  { name: 'City Skills',          emoji: '🏙️', color: '#F0FDF4', border: '#BBF7D0' },
  { name: 'BrightPath',           emoji: '✨', color: '#FFF7ED', border: '#FED7AA' },
  { name: 'Lanka Business College', emoji: '📚', color: '#FFF1E6', border: '#FDDCB5' },
]

const STATS = [
  { value: '36+', label: 'Institutions' },
  { value: '1.2K+', label: 'Active Students' },
  { value: '98%', label: 'Satisfaction' },
  { value: '4.9★', label: 'Rating' },
]

export default function BusinessCarousel() {
  return (
    <section className="business-strip" aria-label="Business partners and organizations using 360 LMS">
      <div className="wrap">
        <div className="business-header">
          <span className="eyebrow">Trusted by growing institutions</span>
          <h2>Top education brands trust <em className="bh-accent">360 LMS</em> to scale smarter</h2>

          {/* Stats row */}
          <div className="biz-stats">
            {STATS.map(s => (
              <div className="biz-stat" key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="marquee-shell">
        {/* Row 1 — left to right */}
        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {[...brands, ...brands].map((b, i) => (
              <span
                className="marquee-item"
                key={`a-${b.name}-${i}`}
                style={{ '--mc': b.color, '--mb': b.border }}
              >
                <span className="marquee-emoji">{b.emoji}</span>
                {b.name}
              </span>
            ))}
          </div>
        </div>

        {/* Row 2 — right to left (reverse) */}
        <div className="marquee marquee--rev" aria-hidden="true">
          <div className="marquee-track marquee-track--rev">
            {[...brands.slice().reverse(), ...brands.slice().reverse()].map((b, i) => (
              <span
                className="marquee-item"
                key={`b-${b.name}-${i}`}
                style={{ '--mc': b.color, '--mb': b.border }}
              >
                <span className="marquee-emoji">{b.emoji}</span>
                {b.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
