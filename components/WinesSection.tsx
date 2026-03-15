'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { wines, type WineCategory, type Wine } from '../data/wines'
import WineCard from './WineCard'
import { useLanguage } from '../lib/i18n/LanguageContext'
import translations from '../lib/i18n/translations'

type Tab = 'all' | WineCategory

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5)
}

export default function WinesSection() {
  const [active, setActive] = useState<Tab>('all')
  const [visible, setVisible] = useState(false)
  const [hoveredWine, setHoveredWine] = useState<Wine | null>(null)
  const [shuffledAll, setShuffledAll] = useState<Wine[]>(wines)

  const mouseRef = useRef({ x: 0, y: 0 })
  const cardCenterRef = useRef({ x: 0, y: 0 })
  const bottleRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number | null>(null)
  const ref = useRef<HTMLElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const savedPositions = useRef<Record<string, DOMRect>>({})
  const isFirstRender = useRef(true)

  const { lang } = useLanguage()
  const t = translations[lang]

  const tabs: { id: Tab; label: string }[] = [
    { id: 'all', label: t.wines.tabs.all },
    { id: 'whites', label: t.wines.tabs.whites },
    { id: 'reds', label: t.wines.tabs.reds },
    { id: 'rose', label: t.wines.tabs.rose },
    { id: 'sparkling', label: t.wines.tabs.sparkling },
  ]

  // Shuffle on mount (after hydration to avoid mismatch)
  useEffect(() => { setShuffledAll(shuffle(wines)) }, [])

  // Intersection reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  // Mouse-follow zoomed bottle
  useEffect(() => {
    if (!hoveredWine) return

    const handleMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    const animate = () => {
      const { x, y } = mouseRef.current
      const cx = cardCenterRef.current.x
      const cy = cardCenterRef.current.y
      const bx = x + (x - cx) * 0.2 - 100
      const by = y + (y - cy) * 0.2 - 320
      if (bottleRef.current) {
        bottleRef.current.style.transform = `translate(${bx}px, ${by}px)`
      }
      rafRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMove)
    rafRef.current = requestAnimationFrame(animate)
    return () => {
      window.removeEventListener('mousemove', handleMove)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [hoveredWine])

  // Capture card positions before a tab change
  const capturePositions = () => {
    const cards = gridRef.current?.querySelectorAll('[data-wine-id]') ?? []
    const map: Record<string, DOMRect> = {}
    cards.forEach((el) => {
      map[(el as HTMLElement).dataset.wineId!] = el.getBoundingClientRect()
    })
    savedPositions.current = map
  }

  // GSAP FLIP animation after render
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    const cards = gridRef.current?.querySelectorAll('[data-wine-id]') ?? []

    cards.forEach((el, i) => {
      const id = (el as HTMLElement).dataset.wineId!
      const old = savedPositions.current[id]
      const now = el.getBoundingClientRect()

      if (old) {
        // Card existed beforeFLIP it to new position
        const dx = old.left - now.left
        const dy = old.top - now.top
        gsap.fromTo(
          el,
          { x: dx, y: dy, opacity: 0.5 },
          { x: 0, y: 0, opacity: 1, duration: 0.55, ease: 'power3.out', delay: i * 0.025 },
        )
      } else {
        // New card entering the grid
        gsap.fromTo(
          el,
          { opacity: 0, y: 40, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.45, ease: 'back.out(1.4)', delay: i * 0.04 },
        )
      }
    })
  }, [active, shuffledAll])

  const handleTabChange = (tab: Tab) => {
    capturePositions()
    if (tab === 'all') setShuffledAll(shuffle(wines))
    setActive(tab)
  }

  const filtered =
    active === 'all' ? shuffledAll : wines.filter((w) => w.category === active)

  const countLabel =
    lang === 'vi'
      ? t.wines.countPlural(filtered.length)
      : filtered.length !== 1
        ? t.wines.countPlural(filtered.length)
        : t.wines.countSingular(filtered.length)

  return (
    <>
      <section
        id="wines"
        ref={ref}
        className={`py-24 px-6 bg-(--ink) transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <p className="text-(--gold) text-xs tracking-[0.3em] uppercase mb-3">
              {t.wines.eyebrow}
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-(--off-white) mb-4">
              {t.wines.heading}
            </h2>
            <div className="w-16 h-px bg-(--gold) mx-auto" />
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`px-5 py-2 text-xs tracking-widest uppercase transition-all duration-200 border ${
                  active === tab.id
                    ? 'bg-(--gold) text-(--ink) border-(--gold) font-bold'
                    : 'border-(--gold)/30 text-(--off-white)/60 hover:border-(--gold) hover:text-(--gold)'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Wine grid */}
          <div
            ref={gridRef}
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {filtered.map((wine) => (
              <div
                key={wine.id}
                data-wine-id={wine.id}
                onMouseEnter={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect()
                  cardCenterRef.current = {
                    x: rect.left + rect.width / 2,
                    y: rect.top + rect.height / 2,
                  }
                  setHoveredWine(wine)
                }}
                onMouseLeave={() => setHoveredWine(null)}
              >
                <WineCard wine={wine} />
              </div>
            ))}
          </div>

          {/* Count */}
          <p className="text-center text-(--ink-soft) text-xs tracking-widest uppercase mt-8">
            {countLabel}
          </p>
        </div>
      </section>

      {/* Floating zoomed bottle */}
      <div
        ref={bottleRef}
        className="fixed top-0 left-0 pointer-events-none z-50 transition-opacity duration-150"
        style={{ opacity: hoveredWine ? 1 : 0 }}
      >
        {hoveredWine && (
          <div className="relative w-[200px] h-[600px] drop-shadow-2xl">
            <Image
              src={hoveredWine.image}
              alt={hoveredWine.name}
              fill
              sizes="200px"
              className="object-contain"
            />
          </div>
        )}
      </div>
    </>
  )
}
