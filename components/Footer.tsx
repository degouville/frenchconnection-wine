'use client'

import { useState } from 'react'
import { createPortal } from 'react-dom'
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
  const [contactModalOpen, setContactModalOpen] = useState(false)

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
            <div className="grid grid-cols-2 gap-2 md:gap-3">
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
            <div className="space-y-4 text-sm text-[var(--ink-soft)]">
              <p>
                Bến Trế 3, Phường Hội An Tây
                <br />
                Ben Tre 3, Hoi An Tay Ward, {t.footer.location}
              </p>
<a
                href="https://zalo.me/84936480805"
                className="block hover:text-[var(--gold)] transition-colors"
              >
                Zalo: +84 936 480 805
              </a>
              <button
                onClick={() => setContactModalOpen(true)}
                className="block w-full py-3 px-4 text-[var(--gold)] text-sm font-medium border border-[var(--gold)]/40 hover:bg-[var(--gold)]/10 transition-colors"
              >
                {t.footer.meetTeam}
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-10 pt-8 border-t border-[var(--gold)]/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--ink-soft)] text-xs">
            © {new Date().getFullYear()} French Connection Wines. {t.footer.rights}
          </p>

          <button
            onClick={() => setModalOpen(true)}
            className="text-[var(--ink-soft)] text-xs hover:text-[var(--gold)] transition-colors cursor-pointer underline underline-offset-2 decoration-[var(--gold)]/30 hover:decoration-[var(--gold)]"
          >
            {t.footer.madeBy}
          </button>
        </div>
      </footer>

      {/* Portal modals to document.body so they escape #smooth-wrapper stacking context */}
      {typeof document !== 'undefined' && contactModalOpen && createPortal(
        <div
          className="fixed inset-0 z-[500] flex items-center justify-center bg-[var(--ink)] overflow-y-auto"
        >
          <button
            onClick={() => setContactModalOpen(false)}
            className="fixed top-6 right-6 z-10 text-[var(--off-white)]/60 hover:text-[var(--off-white)] transition-colors"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <div className="w-full max-w-2xl px-8 py-16 md:px-10">
            <p className="text-[var(--gold)] text-xs tracking-[0.25em] uppercase mb-3">
              {t.footer.contactModal.eyebrow}
            </p>
            <h2 className="font-display text-[var(--off-white)] text-2xl mb-8">
              {t.footer.contactModal.title}
            </h2>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {t.footer.contactModal.team.map((member) => (
                <div
                  key={member.name}
                  className="border border-[var(--gold)]/15 p-5 bg-[var(--off-white)]/2 hover:border-[var(--gold)]/30 transition-colors"
                >
                  <p className="font-display text-[var(--off-white)] text-base mb-0.5">
                    {member.name}
                  </p>
                  <p className="text-[var(--gold)] text-[10px] tracking-[0.2em] uppercase mb-4">
                    {member.role}
                  </p>
                  <a
                    href={`tel:${member.phone.replace(/\s/g, '')}`}
                    className="block text-[var(--ink-soft)] text-sm hover:text-[var(--gold)] transition-colors mb-1"
                  >
                    {member.phone}
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="block text-[var(--ink-soft)] text-xs hover:text-[var(--gold)] transition-colors truncate"
                  >
                    {member.email}
                  </a>
                </div>
              ))}
            </div>

            <div className="border-t border-[var(--gold)]/10 pt-6 mb-8 space-y-2">
              <p className="text-[var(--ink-soft)] text-xs">{t.footer.contactModal.contactLine}</p>
              <p className="text-[var(--ink-soft)] text-xs">{t.footer.contactModal.contactLine2}</p>
            </div>

            <button
              onClick={() => setContactModalOpen(false)}
              className="w-full py-3 border border-[var(--gold)]/30 text-[var(--gold)] text-xs tracking-[0.2em] uppercase hover:bg-[var(--gold)]/5 transition-colors"
            >
              {t.footer.contactModal.close}
            </button>
          </div>
        </div>,
        document.body,
      )}

      {typeof document !== 'undefined' && modalOpen && createPortal(
        <div
          className="fixed inset-0 z-[500] flex items-center justify-center bg-[var(--ink)] overflow-y-auto"
        >
          <button
            onClick={() => setModalOpen(false)}
            className="fixed top-6 right-6 z-10 text-[var(--off-white)]/60 hover:text-[var(--off-white)] transition-colors"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <div className="w-full max-w-lg px-8 py-16 md:px-10">
            <p className="text-[var(--gold)] text-xs tracking-[0.25em] uppercase mb-6">
              {t.footer.modal.eyebrow}
            </p>

            <h2 className="font-display text-[var(--off-white)] text-2xl mb-6">
              {t.footer.modal.title}
            </h2>

            <blockquote className="text-[var(--ink-soft)] text-sm leading-relaxed italic mb-6 border-l-2 border-[var(--gold)]/40 pl-5">
              {t.footer.modal.testimonial}
            </blockquote>

            <div className="mb-8">
              <p className="text-[var(--off-white)] text-sm font-medium">
                {t.footer.modal.author}
              </p>
              <p className="text-[var(--ink-soft)] text-xs mt-0.5">
                {t.footer.modal.role}
              </p>
            </div>

            <div className="border-t border-[var(--gold)]/10 mb-6" />

            <div className="mb-4">
              <p className="text-[var(--gold)] text-xs tracking-[0.2em] uppercase mb-1.5">
                {t.footer.modal.stackLabel}
              </p>
              <p className="text-[var(--ink-soft)] text-xs font-mono">
                {t.footer.modal.stack}
              </p>
            </div>

            <div className="mb-8">
              <p className="text-[var(--gold)] text-xs tracking-[0.2em] uppercase mb-1.5">
                {t.footer.modal.aiLabel}
              </p>
              <p className="text-[var(--ink-soft)] text-xs">
                {t.footer.modal.ai}
              </p>
            </div>

            <button
              onClick={() => setModalOpen(false)}
              className="w-full py-3 border border-[var(--gold)]/30 text-[var(--gold)] text-xs tracking-[0.2em] uppercase hover:bg-[var(--gold)]/5 transition-colors"
            >
              {t.footer.modal.close}
            </button>
          </div>
        </div>,
        document.body,
      )}
    </>
  )
}
