'use client'

import { useState, useCallback } from 'react'
import { useLanguage } from '../lib/i18n/LanguageContext'
import translations from '../lib/i18n/translations'

const VIDEO_ID = 'vet3KqhTn7g'

export default function Hero() {
  const { lang } = useLanguage()
  const t = translations[lang]
  const [modalOpen, setModalOpen] = useState(false)

  const openModal = useCallback(() => setModalOpen(true), [])
  const closeModal = useCallback(() => setModalOpen(false), [])

  return (
    <>
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* YouTube background — muted autoplay loop */}
        <div className="absolute inset-0 pointer-events-none">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`}
            allow="autoplay; encrypted-media"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] min-w-full min-h-full aspect-video"
            style={{ border: 0 }}
            tabIndex={-1}
            title="Background video"
          />
        </div>

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

          {/* Play video button */}
          <button
            onClick={openModal}
            className="mt-8 inline-flex items-center gap-3 text-[var(--off-white)]/60 text-xs tracking-widest uppercase hover:text-[var(--gold)] transition-colors duration-200 group"
          >
            <span className="flex items-center justify-center w-12 h-12 rounded-full border border-[var(--off-white)]/30 group-hover:border-[var(--gold)] group-hover:scale-110 transition-all duration-300">
              <svg width="16" height="18" viewBox="0 0 16 18" fill="currentColor">
                <path d="M15 9L1 17.66V0.34L15 9Z" />
              </svg>
            </span>
            {lang === 'vi' ? 'Xem video' : 'Play video'}
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-[var(--off-white)] text-xs tracking-widest uppercase">
            {t.hero.scroll}
          </span>
          <div className="w-px h-8 bg-[var(--gold)] animate-pulse" />
        </div>
      </section>

      {/* Video modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeModal}
        >
          {/* Close button */}
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors z-10"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <div
            className="relative w-[90vw] max-w-5xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
              className="w-full h-full"
              style={{ border: 0 }}
              title="Video"
            />
          </div>
        </div>
      )}
    </>
  )
}
