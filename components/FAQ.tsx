'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'Do you deliver outside Central Vietnam?',
    answer: 'Yes — we deliver across Vietnam. Most orders reach you within 2–3 business days.',
  },
  {
    question: 'Is there a minimum order?',
    answer: 'No minimum. Order a single bottle or a full case — we handle both.',
  },
  {
    question: 'How are the wines stored and shipped?',
    answer: 'All wines are kept under temperature-controlled conditions from France to your door. Quality preserved, every time.',
  },
  {
    question: 'Can you help me choose a wine?',
    answer: 'Absolutely. Message us on Zalo and we\'ll recommend based on your occasion, taste, or budget. It takes 30 seconds.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className='py-24 px-6 bg-[var(--ink)]'>
      <div className='max-w-3xl mx-auto'>
        <div className='text-center mb-16'>
          <p className='text-[var(--gold)] text-xs tracking-[0.3em] uppercase mb-3'>
            QUESTIONS
          </p>
          <h2 className='font-display text-4xl md:text-5xl text-[var(--off-white)]'>
            Everything You Need to Know
          </h2>
          <div className='w-16 h-px bg-[var(--gold)] mx-auto mt-6' />
        </div>

        <div className='space-y-0 divide-y divide-[var(--gold)]/15 border-y border-[var(--gold)]/15'>
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className='w-full flex items-center justify-between py-6 text-left gap-4 group'
              >
                <span className='text-[var(--off-white)] group-hover:text-[var(--gold)] transition-colors font-display text-lg'>
                  {faq.question}
                </span>
                <span className='text-[var(--gold)] text-xl leading-none flex-shrink-0'>
                  {open === i ? '−' : '+'}
                </span>
              </button>
              {open === i && (
                <p className='text-[var(--off-white)]/70 leading-relaxed pb-6 text-sm'>
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
