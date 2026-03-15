'use client'

import { useLanguage } from '../lib/i18n/LanguageContext'
import translations from '../lib/i18n/translations'

export default function Testimonials() {
  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <section className="py-24 px-6 bg-[var(--ink)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase mb-3">
            {t.testimonials.eyebrow}
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-[var(--off-white)]">
            {t.testimonials.heading}
          </h2>
          <div className="w-16 h-px bg-[var(--gold)] mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.testimonials.items.map((item) => (
            <div
              key={item.author}
              className="border border-[var(--gold)]/15 p-8 flex flex-col gap-6"
            >
              <p className="text-[var(--gold)] font-display text-3xl leading-none">
                &ldquo;
              </p>
              <p className="text-[var(--off-white)]/80 leading-relaxed flex-1">
                {item.quote}
              </p>
              <div>
                <p className="text-[var(--off-white)] text-sm font-bold">
                  {item.author}
                </p>
                <p className="text-[var(--gold)] text-xs tracking-widest uppercase mt-1">
                  {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[var(--off-white)]/30 text-xs mt-10 tracking-wide">
          {t.testimonials.placeholder}
        </p>
      </div>
    </section>
  )
}
