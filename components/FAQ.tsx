'use client'

import { useState } from 'react'
import { useLanguage } from '../lib/i18n/LanguageContext'
import translations from '../lib/i18n/translations'

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <section className="py-24 px-6 bg-[var(--ink)]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase mb-3">
            {t.faq.eyebrow}
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-[var(--off-white)]">
            {t.faq.heading}
          </h2>
          <div className="w-16 h-px bg-[var(--gold)] mx-auto mt-6" />
        </div>

        <div className="space-y-0 divide-y divide-[var(--gold)]/15 border-y border-[var(--gold)]/15">
          {t.faq.items.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-6 text-left gap-4 group"
              >
                <span className="text-[var(--off-white)] group-hover:text-[var(--gold)] transition-colors font-display text-lg">
                  {faq.question}
                </span>
                <span className="text-[var(--gold)] text-xl leading-none flex-shrink-0">
                  {open === i ? '−' : '+'}
                </span>
              </button>
              {open === i && (
                <p className="text-[var(--off-white)]/70 leading-relaxed pb-6 text-sm">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
