'use client'

import { useLanguage } from '../lib/i18n/LanguageContext'
import translations from '../lib/i18n/translations'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const { lang } = useLanguage()
  const t = translations[lang]
  const topPanelRef = useRef<HTMLDivElement>(null)
  const bottomPanelRef = useRef<HTMLDivElement>(null)
  const logoWrapRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const taglineRef = useRef<HTMLParagraphElement>(null)
  const [done, setDone] = useState(false)

  useEffect(() => {
    // Init states
    gsap.set(logoWrapRef.current, { clipPath: 'inset(50% 0% 50% 0% round 2px)', opacity: 1 })
    gsap.set(lineRef.current, { scaleX: 0, opacity: 0 })
    gsap.set(taglineRef.current, { opacity: 0, y: 8 })

    const tl = gsap.timeline({
      onComplete: () => {
        setDone(true)
        onComplete()
      },
    })

    // Phase 1 — logo iris-expand from center
    tl.to(logoWrapRef.current, {
      clipPath: 'inset(0% 0% 0% 0% round 2px)',
      duration: 1.0,
      ease: 'expo.out',
      delay: 0.2,
    })

    // Phase 2 — gold line draws + tagline rises
    .to(lineRef.current, { scaleX: 1, opacity: 1, duration: 0.55, ease: 'power3.out' }, '-=0.15')
    .to(taglineRef.current, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }, '<+0.1')

    // Hold
    .to({}, { duration: 0.75 })

    // Phase 3 — logo + decorations fade while panels split
    .to([logoWrapRef.current, lineRef.current, taglineRef.current], {
      opacity: 0,
      scale: 1.06,
      duration: 0.55,
      ease: 'power3.in',
    })

    // Phase 4 — curtain split: top flies up, bottom flies down
    .to(
      topPanelRef.current,
      { yPercent: -100, duration: 0.75, ease: 'power4.inOut' },
      '-=0.3',
    )
    .to(
      bottomPanelRef.current,
      { yPercent: 100, duration: 0.75, ease: 'power4.inOut' },
      '<',
    )

    return () => { tl.kill() }
  }, [onComplete])

  if (done) return null

  return (
    <>
      {/* ── Top curtain ──────────────────────── */}
      <div
        ref={topPanelRef}
        className="fixed inset-x-0 top-0 z-[9998]"
        style={{ height: '50vh', backgroundColor: 'var(--ink)' }}
      />

      {/* ── Bottom curtain ───────────────────── */}
      <div
        ref={bottomPanelRef}
        className="fixed inset-x-0 bottom-0 z-[9998]"
        style={{ height: '50vh', backgroundColor: 'var(--ink)' }}
      />

      {/* ── Logo + decorations (above curtains) ── */}
      <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center pointer-events-none select-none">
        {/* Logo */}
        <div ref={logoWrapRef}>
          <Image
            src="/images/logos/fcw-logo.png"
            alt="French Connection Wines"
            width={400}
            height={400}
            priority
            className="object-contain"
            style={{ width: '20vmin', height: '20vmin' }}
          />
        </div>

        {/* Gold rule */}
        <div
          ref={lineRef}
          className="mt-5 origin-center"
          style={{
            width: '28vmin',
            height: '1px',
            backgroundColor: 'var(--gold)',
            opacity: 0.8,
          }}
        />

        {/* Tagline */}
        <p
          ref={taglineRef}
          className="mt-4 text-[var(--gold)] text-[1.8vmin] tracking-[0.35em] uppercase font-sans"
        >
          {t.splash.tagline}
        </p>
      </div>
    </>
  )
}
