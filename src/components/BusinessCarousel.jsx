import { useRef, useState } from 'react'

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
  'Summit Institute',
  'EduStar Academy',
]

const STATS = [
  { value: '36+',   label: 'Institutions' },
  { value: '1.2K+', label: 'Active Students' },
  { value: '98%',   label: 'Satisfaction' },
  { value: '4.9★',  label: 'Rating' },
]

/* A single infinite track — hover pauses via CSS animation-play-state */
function Track({ items, reverse = false, speed = '28s' }) {
  const [paused, setPaused] = useState(false)

  return (
    <div
      className="overflow-hidden py-1.5"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="flex gap-3 w-max"
        style={{
          animation: `marquee${reverse ? 'Rev' : ''} ${speed} linear infinite`,
          animationPlayState: paused ? 'paused' : 'running',
          willChange: 'transform',
        }}
      >
        {[...items, ...items].map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="
              inline-flex items-center
              px-5 py-2.5 rounded-xl
              bg-white border border-[#EFE2D6]
              text-[#1C1410] text-[14px] font-semibold tracking-[-0.01em]
              shadow-[0_4px_14px_rgba(60,30,10,.05)]
              cursor-default whitespace-nowrap
              transition-all duration-250
              hover:border-[#F97316]/40 hover:shadow-[0_8px_22px_rgba(194,65,12,.10)] hover:-translate-y-0.5
            "
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function BusinessCarousel() {
  return (
    <section
      className="relative overflow-hidden py-20"
      style={{
        background: 'radial-gradient(900px 280px at 50% 0%,rgba(249,115,22,.11),transparent 60%), linear-gradient(180deg,#fff 0%,#fffaf7 100%)',
      }}
      aria-label="Trusted institutions using 360 LMS"
    >
      {/* Header */}
      <div className="max-w-3xl mx-auto px-6 text-center mb-12">
        <span className="
          inline-block px-4 py-1.5 rounded-full
          bg-gradient-to-r from-[#fff2e8] to-white
          text-[#C2410C] text-[11px] font-extrabold tracking-[.13em] uppercase
          border border-[#F97316]/14 shadow-[0_6px_16px_rgba(249,115,22,.09)]
          mb-5
        ">
          Trusted by growing institutions
        </span>

        <h2 className="font-['Sora',sans-serif] font-bold text-[clamp(28px,3vw,44px)] leading-[1.12] tracking-[-0.03em] text-[#1C1410]">
          Top education brands trust{' '}
          <em className="not-italic text-[#C2410C]">360 LMS</em>{' '}
          to scale smarter
        </h2>

        {/* Stat pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {STATS.map(s => (
            <div
              key={s.label}
              className="
                flex flex-col items-center px-6 py-3 rounded-2xl
                bg-white border border-[#EFE2D6]
                shadow-[0_6px_20px_rgba(60,30,10,.05)]
                min-w-[88px]
              "
            >
              <strong className="font-['Sora',sans-serif] text-[22px] font-extrabold text-[#C2410C] leading-tight">
                {s.value}
              </strong>
              <span className="text-[11.5px] font-semibold text-[#6B5A4E] mt-0.5">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee rows */}
      <div className="relative">
        {/* fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10
          bg-gradient-to-r from-[#fffaf7] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10
          bg-gradient-to-l from-[#fffaf7] to-transparent" />

        <div className="flex flex-col gap-3 px-0">
          <Track items={brands}           reverse={false} speed="26s" />
          <Track items={[...brands].reverse()} reverse={true}  speed="22s" />
        </div>
      </div>

      {/* Hint text */}
      <p className="text-center text-[12px] text-[#A8978A] font-medium mt-6 tracking-wide">
        Hover to pause · Trusted by leading Sri Lankan institutions
      </p>
    </section>
  )
}
