'use client'

import Image from 'next/image'
import type { Wine } from '../data/wines'
import { useLanguage } from '../lib/i18n/LanguageContext'
import translations from '../lib/i18n/translations'

const badgeColors = {
  gold: 'bg-[var(--gold)] text-[var(--ink)]',
  red: 'bg-[var(--bordeaux)] text-[var(--off-white)]',
  blush: 'bg-[var(--blush)] text-[var(--ink)]',
}

export default function WineCard({ wine }: { wine: Wine }) {
  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <div className="group relative flex flex-col bg-[var(--ink-mid)]/30 border border-[var(--gold)]/10 hover:border-[var(--gold)]/40 transition-all duration-300 overflow-hidden">
      {/* Badge */}
      <span
        className={`absolute top-3 right-3 z-10 px-2 py-1 text-[10px] font-bold tracking-widest uppercase rounded-sm ${badgeColors[wine.badge.style]}`}
      >
        {wine.badge.label}
      </span>

      {/* Bottle image */}
      <div className="relative h-64 flex items-end justify-center pt-6 pb-4 overflow-hidden bg-gradient-to-b from-[var(--ink)]/20 to-transparent">
        <div className="relative h-56 w-full transition-transform duration-500 group-hover:-translate-y-2">
          <Image
            src={wine.image}
            alt={wine.name}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-contain drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Info */}
      <div className="px-4 pb-5 pt-3 flex flex-col gap-1 flex-1">
        <p className="text-[var(--gold)] text-[10px] tracking-[0.2em] uppercase">
          {wine.appellation}
        </p>
        <h3 className="font-display text-[var(--off-white)] text-lg leading-snug">
          {wine.name}
        </h3>
        <p className="text-[var(--ink-soft)] text-xs mt-0.5">{wine.varietal}</p>
        <div className="mt-auto pt-3 flex items-center justify-between">
          <span className="font-display text-[var(--gold)] text-xl">
            ₫{wine.price.toLocaleString('fr-FR')}
          </span>
          <a
            href="#order"
            className="text-xs tracking-widest uppercase text-[var(--off-white)]/60 hover:text-[var(--gold)] transition-colors border-b border-transparent hover:border-[var(--gold)]"
          >
            {t.wineCard.order}
          </a>
        </div>
      </div>
    </div>
  )
}
