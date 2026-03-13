const testimonials = [
  {
    quote: "Finally, wines I actually recognize. I've been ordering from FCW for months and the quality is consistently excellent — nothing like what you find in regular stores here.",
    author: 'Sarah T.',
    location: 'Central Vietnam',
  },
  {
    quote: "We added the Chateau Fontanche to our restaurant wine list. Our customers ask about it every week. The quality-to-price ratio is outstanding.",
    author: 'Restaurant Manager',
    location: 'Da Nang',
  },
  {
    quote: "Ordered the Cremant de Limoux for a dinner party and everyone wanted to know where it came from. Now I'm the friend who knows wine.",
    author: 'Marc D.',
    location: 'Ho Chi Minh City',
  },
]

export default function Testimonials() {
  return (
    <section className='py-24 px-6 bg-[var(--ink)]'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <p className='text-[var(--gold)] text-xs tracking-[0.3em] uppercase mb-3'>
            WHAT CUSTOMERS SAY
          </p>
          <h2 className='font-display text-4xl md:text-5xl text-[var(--off-white)]'>
            Trusted by Wine Lovers Across Vietnam
          </h2>
          <div className='w-16 h-px bg-[var(--gold)] mx-auto mt-6' />
        </div>

        <div className='grid md:grid-cols-3 gap-8'>
          {testimonials.map((t) => (
            <div
              key={t.author}
              className='border border-[var(--gold)]/15 p-8 flex flex-col gap-6'
            >
              <p className='text-[var(--gold)] font-display text-3xl leading-none'>"</p>
              <p className='text-[var(--off-white)]/80 leading-relaxed flex-1'>{t.quote}</p>
              <div>
                <p className='text-[var(--off-white)] text-sm font-bold'>{t.author}</p>
                <p className='text-[var(--gold)] text-xs tracking-widest uppercase mt-1'>{t.location}</p>
              </div>
            </div>
          ))}
        </div>

        <p className='text-center text-[var(--off-white)]/30 text-xs mt-10 tracking-wide'>
          Replace with real testimonials from actual customers when available.
        </p>
      </div>
    </section>
  )
}
