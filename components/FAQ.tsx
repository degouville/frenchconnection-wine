'use client'

import { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { useLanguage } from '../lib/i18n/LanguageContext'
import translations from '../lib/i18n/translations'

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  const answerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (!answerRef.current || !contentRef.current) return

    const answerEl = answerRef.current
    const contentEl = contentRef.current

    if (isOpen) {
      const height = contentEl.offsetHeight
      gsap.fromTo(
        answerEl,
        { height: 0, opacity: 0 },
        {
          height,
          opacity: 1,
          duration: 0.35,
          ease: 'power2.out',
          onComplete: () => {
            answerEl.style.height = 'auto'
          },
        }
      )
    } else {
      const height = contentEl.offsetHeight
      gsap.fromTo(
        answerEl,
        { height, opacity: 1 },
        {
          height: 0,
          opacity: 0,
          duration: 0.25,
          ease: 'power2.in',
        }
      )
    }
  }, [isOpen])

  return (
    <div>
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-6 text-left gap-4 group"
      >
        <span className="text-[var(--off-white)] group-hover:text-[var(--gold)] transition-colors font-display text-lg">
          {question}
        </span>
        <span
          className="text-[var(--gold)] text-xl leading-none flex-shrink-0 transition-transform duration-300"
          style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >
          +
        </span>
      </button>
      <div
        ref={answerRef}
        className="overflow-hidden"
        style={{ height: 0, opacity: 0 }}
      >
        <p
          ref={contentRef}
          className="text-[var(--off-white)]/70 leading-relaxed pb-6 text-sm"
        >
          {answer}
        </p>
      </div>
    </div>
  )
}

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
            <FAQItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={open === i}
              onClick={() => setOpen(open === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
