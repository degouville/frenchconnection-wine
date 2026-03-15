'use client'

import { useLanguage } from '../lib/i18n/LanguageContext'
import translations from '../lib/i18n/translations'

export default function Hero() {
  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage:
          'url(/images/lifestyle/vineyard-rows-aerial.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--ink)]/70 via-[var(--ink)]/40 to-[var(--ink)]/80" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase mb-6">
          {t.hero.location}
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-tight text-[var(--off-white)] mb-6">
          {t.hero.headline1}
          <br />
          <span className="text-[var(--gold)]">
            {t.hero.headline2}
          </span>
        </h1>
        <p className="text-[var(--off-white)]/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
          {t.hero.body}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#wines"
            className="px-8 py-3.5 bg-[var(--gold)] text-[var(--ink)] font-bold text-sm tracking-widest uppercase hover:bg-[var(--gold-dk)] transition-colors duration-200"
          >
            {t.hero.browseCollection}
          </a>
          <a
            href="https://zalo.me/84936480805"
            className="px-8 py-3.5 border border-[var(--off-white)]/40 text-[var(--off-white)] text-sm tracking-widest uppercase hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors duration-200"
          >
            {t.hero.orderOnZalo}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-[var(--off-white)] text-xs tracking-widest uppercase">
          {t.hero.scroll}
        </span>
        <div className="w-px h-8 bg-[var(--gold)] animate-pulse" />
      </div>
    </section>
  )
}
