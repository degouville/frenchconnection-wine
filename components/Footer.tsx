'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useLanguage } from '../lib/i18n/LanguageContext'
import translations from '../lib/i18n/translations'

const producers = [
  { type: 'logo', src: '/images/logos/logo-anne-de-joyeuse.png', alt: 'Cave Anne de Joyeuse' },
  { type: 'logo', src: '/images/logos/logo-gilles-cantons.png', alt: 'Gilles Cantons' },
  { type: 'logo', src: '/images/logos/logo-chateau-pennautier.png', alt: 'Chateau de Pennautier' },
  { type: 'text', name: 'Forge Céleste' },
] as const

export default function Footer() {
  const { lang } = useLanguage()
  const t = translations[lang]
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <footer className="bg-[var(--ink)] border-t border-[var(--gold)]/10 py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logos/fcw-logo.png"
                alt="French Connection Wines"
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="font-display text-[var(--gold)] text-lg">
                French Connection Wines
              </span>
            </div>
            <p className="text-[var(--ink-soft)] text-sm leading-relaxed max-w-xs">
              {t.footer.tagline}
            </p>
          </div>

          {/* Producer logos — row on mobile, 2×2 grid on desktop */}
          <div>
            <p className="text-[var(--gold)] text-xs tracking-[0.25em] uppercase mb-4">
              {t.footer.producers}
            </p>
            <div className="flex flex-row gap-3 overflow-x-auto md:grid md:grid-cols-2 md:gap-3 md:overflow-visible">
              {producers.map((p) =>
                p.type === 'logo' ? (
                  <div
                    key={p.alt}
                    className="shrink-0 flex items-center justify-center p-4 bg-[var(--off-white)]/5 hover:bg-[var(--off-white)]/10 transition-colors"
                  >
                    <Image
                      src={p.src}
                      alt={p.alt}
                      width={90}
                      height={36}
                      className="object-contain brightness-75 hover:brightness-100 transition-all"
                    />
                  </div>
                ) : (
                  <div
                    key={p.name}
                    className="shrink-0 flex items-center justify-center p-4 bg-[var(--off-white)]/5 hover:bg-[var(--off-white)]/10 transition-colors"
                  >
                    <span className="font-display text-[var(--ink-soft)] text-sm tracking-wide hover:text-[var(--off-white)] transition-colors cursor-default whitespace-nowrap">
                      {p.name}
                    </span>
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[var(--gold)] text-xs tracking-[0.25em] uppercase mb-5">
              {t.footer.contact}
            </p>
            <div className="space-y-3 text-sm text-[var(--ink-soft)]">
              <p>
                Đường Phan Khôi, Khối Thịnh Mỹ
                <br />
                {lang === 'vi' ? 'Miền Trung Việt Nam' : 'Central Vietnam'}
              </p>
              <a
                href="mailto:contact@frenchconnection.wine"
                className="block hover:text-[var(--gold)] transition-colors"
              >
                contact@frenchconnection.wine
              </a>
              <a
                href="https://zalo.me/84936480805"
                className="block hover:text-[var(--gold)] transition-colors"
              >
                Zalo: +84 936 480 805
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-10 pt-8 border-t border-[var(--gold)]/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--ink-soft)] text-xs">
            © {new Date().getFullYear()} French Connection Wines. {t.footer.rights}
          </p>
          <p className="text-[var(--ink-soft)] text-xs">
            {t.footer.prices}
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="text-[var(--ink-soft)] text-xs hover:text-[var(--gold)] transition-colors cursor-pointer underline underline-offset-2 decoration-[var(--gold)]/30 hover:decoration-[var(--gold)]"
          >
            {t.footer.madeBy}
          </button>
        </div>
      </footer>

      {/* Modal overlay */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          onClick={() => setModalOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          {/* Panel */}
          <div
            className="relative z-10 w-full max-w-lg bg-[var(--ink)] border border-[var(--gold)]/20 p-8 md:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Eyebrow */}
            <p className="text-[var(--gold)] text-xs tracking-[0.25em] uppercase mb-6">
              {t.footer.modal.eyebrow}
            </p>

            {/* Title */}
            <h2 className="font-display text-[var(--off-white)] text-2xl mb-6">
              {t.footer.modal.title}
            </h2>

            {/* Testimonial quote */}
            <blockquote className="text-[var(--ink-soft)] text-sm leading-relaxed italic mb-6 border-l-2 border-[var(--gold)]/40 pl-5">
              {t.footer.modal.testimonial}
            </blockquote>

            {/* Author */}
            <div className="mb-8">
              <p className="text-[var(--off-white)] text-sm font-medium">
                {t.footer.modal.author}
              </p>
              <p className="text-[var(--ink-soft)] text-xs mt-0.5">
                {t.footer.modal.role}
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-[var(--gold)]/10 mb-6" />

            {/* Stack */}
            <div className="mb-4">
              <p className="text-[var(--gold)] text-xs tracking-[0.2em] uppercase mb-1.5">
                {t.footer.modal.stackLabel}
              </p>
              <p className="text-[var(--ink-soft)] text-xs font-mono">
                {t.footer.modal.stack}
              </p>
            </div>

            {/* AI */}
            <div className="mb-8">
              <p className="text-[var(--gold)] text-xs tracking-[0.2em] uppercase mb-1.5">
                {t.footer.modal.aiLabel}
              </p>
              <p className="text-[var(--ink-soft)] text-xs">
                {t.footer.modal.ai}
              </p>
            </div>

            {/* Close button */}
            <button
              onClick={() => setModalOpen(false)}
              className="w-full py-3 border border-[var(--gold)]/30 text-[var(--gold)] text-xs tracking-[0.2em] uppercase hover:bg-[var(--gold)]/5 transition-colors"
            >
              {t.footer.modal.close}
            </button>
          </div>
        </div>
      )}
    </>
  )
}
