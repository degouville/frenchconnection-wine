'use client'

import { useLanguage } from '../lib/i18n/LanguageContext'
import translations from '../lib/i18n/translations'

export default function QuoteStrip() {
  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <section className="relative py-24 px-6 overflow-hidden min-h-[400px] flex items-center justify-center">
      {/* Background imageimg-parallax-wrap for GSAP parallax on alt pages */}
      <div
        className="img-parallax-wrap"
        style={{
          backgroundImage:
            'url(/images/lifestyle/hands-holding-red-grapes.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-[var(--ink)]/75" />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <p className="text-[var(--gold)] text-4xl leading-none mb-6 font-display">
          &ldquo;
        </p>
        <blockquote className="font-display text-2xl md:text-3xl italic text-[var(--off-white)] leading-relaxed mb-6">
          {t.quote.body}
        </blockquote>
        <p className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase">
          {t.quote.attribution}
        </p>
      </div>
    </section>
  )
}
