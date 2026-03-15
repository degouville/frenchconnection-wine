'use client'

import Image from 'next/image'
import { useLanguage } from '../lib/i18n/LanguageContext'
import translations from '../lib/i18n/translations'

const stepImages = [
  {
    image: '/images/lifestyle/harvest-pruning-white-grapes.webp',
    alt: 'Pruning white grapes at harvest',
  },
  {
    image: '/images/lifestyle/harvest-white-grapes-basket.webp',
    alt: 'Harvested white grapes in a basket',
  },
  {
    image: '/images/lifestyle/vineyard-landscape-estate.webp',
    alt: 'Vineyard landscape with estate on the hilltop',
  },
]

export default function TerroirSection() {
  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <section className="py-24 px-6 bg-[var(--ink)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase mb-3">
            {t.terroir.eyebrow}
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-[var(--off-white)]">
            {t.terroir.heading}
          </h2>
          <div className="w-16 h-px bg-[var(--gold)] mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-6">
          {t.terroir.steps.map((step, i) => (
            <div key={step.number} className="flex flex-col">
              {/* overflow-hidden clips the oversized img-parallax-wrap on alt pages */}
              <div className="relative h-72 overflow-hidden mb-6">
                <div className="img-parallax-wrap">
                  <Image
                    src={stepImages[i].image}
                    alt={stepImages[i].alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/50 to-transparent" />
              </div>
              <p className="font-display text-[var(--gold)] text-5xl mb-3 leading-none">
                {step.number}
              </p>
              <h3 className="font-display text-xl text-[var(--off-white)] mb-3">
                {step.title}
              </h3>
              <p className="text-[var(--ink-soft)] text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
