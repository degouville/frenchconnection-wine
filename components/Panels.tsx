'use client'

import { useLanguage } from '../lib/i18n/LanguageContext'
import translations from '../lib/i18n/translations'

export default function Panels() {
  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <div className="grid md:grid-cols-2">
      {/* Our Story */}
      <section
        id="story"
        className="relative min-h-[520px] flex items-end overflow-hidden"
      >
        {/* Background imageimg-parallax-wrap for GSAP parallax on alt pages */}
        <div
          className="img-parallax-wrap"
          style={{
            backgroundImage:
              'url(/images/lifestyle/vineyard-landscape-estate.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-[var(--ink)]/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/70 to-transparent" />
        <div className="relative z-10 p-10 md:p-14">
          <p className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase mb-3">
            {t.panels.story.eyebrow}
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-[var(--off-white)] mb-4">
            {t.panels.story.heading}
          </h2>
          <p className="text-[var(--off-white)]/80 leading-relaxed mb-4 max-w-md">
            {t.panels.story.body1}
          </p>
          <p className="text-[var(--off-white)]/80 leading-relaxed max-w-md">
            {t.panels.story.body2}
          </p>
          <a
            href="#"
            className="inline-block mt-6 text-xs tracking-widest uppercase text-[var(--gold)] border-b border-[var(--gold)]/40 hover:border-[var(--gold)] transition-colors"
          >
            {t.panels.story.link}
          </a>
        </div>
      </section>

      {/* Order & Delivery */}
      <section
        id="order"
        className="relative min-h-[520px] flex items-end overflow-hidden"
      >
        <div
          className="img-parallax-wrap"
          style={{
            backgroundImage:
              'url(/images/lifestyle/red-wine-pouring-decanter.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'top',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/60 to-transparent" />
        <div className="relative z-10 p-10 md:p-14">
          <p className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase mb-3">
            {t.panels.order.eyebrow}
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-[var(--off-white)] mb-4">
            {t.panels.order.heading}
          </h2>
          <ul className="text-[var(--off-white)]/70 leading-relaxed space-y-2 mb-6 max-w-md">
            {t.panels.order.steps.map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-[var(--gold)] font-bold mt-px">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
          <a
            href="https://zalo.me/84936480805"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--gold)] text-[var(--ink)] font-bold text-sm tracking-widest uppercase hover:bg-[var(--gold-dk)] transition-colors duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 48 48" fill="currentColor">
              <path d="M24 4C13 4 4 12.06 4 22c0 5.72 2.9 10.82 7.46 14.18L9.5 44l8.04-4.02A21.8 21.8 0 0024 40.5c11 0 20-8.06 20-18S35 4 24 4zm-6.5 20.5h-3v-9h3v9zm4.5 0h-3v-9h3v9zm4.5 0h-3v-9h3v9z" />
            </svg>
            {t.panels.order.cta}
          </a>
          <p className="mt-3 text-[var(--off-white)]/40 text-xs tracking-wide">
            {t.panels.order.footnote}
          </p>
        </div>
      </section>
    </div>
  )
}
