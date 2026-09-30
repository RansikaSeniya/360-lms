const brands = [
  'Apex Academy',
  'BluePeak College',
  'Nexa Institute',
  'Crest Learning',
  'Future Horizon',
  'Pearl Academy',
  'Sapphire Campus',
  'City Skills',
  'BrightPath',
  'Lanka Business College',
]

export default function BusinessCarousel() {
  return (
    <section className="business-strip" aria-label="Business partners and organizations using 360 LMS">
      <div className="wrap">
        <div className="business-header">
          <span className="eyebrow">Trusted by growing institutions</span>
          <h2>Top education brands trust 360 LMS to scale smarter</h2>
        </div>

        <div className="marquee-shell">
          <div className="marquee" aria-hidden="true">
            <div className="marquee-track">
              {[...brands, ...brands].map((name, index) => (
                <span className="marquee-item" key={`${name}-${index}`}>
                  <span className="marquee-dot" />
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
