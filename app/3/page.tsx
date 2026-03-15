'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import Nav from '../../components/Nav'
import WinesSection from '../../components/WinesSection'
import Testimonials from '../../components/Testimonials'
import Panels from '../../components/Panels'
import FAQ from '../../components/FAQ'
import Footer from '../../components/Footer'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

const terroirCards = [
  {
    number: '01',
    title: 'HAND-PICKED',
    desc: "Each variety harvested at peak maturity by estate teams who've worked the same vines for generations.",
    image: '/images/lifestyle/harvest-pruning-white-grapes.webp',
  },
  {
    number: '02',
    title: 'CAREFULLY SELECTED',
    desc: "Only the finest fruit from France's most celebrated appellations. Small-lot, estate-grown.",
    image: '/images/lifestyle/harvest-white-grapes-basket.webp',
  },
  {
    number: '03',
    title: 'DELIVERED INTACT',
    desc: 'Temperature-controlled from vineyard to your door. Exactly as the winemaker intended.',
    image: '/images/lifestyle/vineyard-landscape-estate.webp',
  },
]

export default function Alt3() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.set('.reveal', { autoAlpha: 0, y: 40 })

      const smoother = ScrollSmoother.create({
        wrapper: wrapperRef.current!,
        content: contentRef.current!,
        smooth: 1.2,
        effects: true,
        smoothTouch: 0.1,
      })

      // ── Reveal
      gsap.utils.toArray<HTMLElement>('.reveal').forEach((el) => {
        gsap.to(el, {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        })
      })

      // ── Parallax on all illustration images
      // 3 parallax forces — cycle through them so adjacent images move at different speeds
      const parallaxForces = [8, 18, 28]
      gsap.utils.toArray<HTMLElement>('.img-parallax-wrap').forEach((wrap, i) => {
        const force = parallaxForces[i % 3]
        // Expand wrapper so image has room to travel: needs at least force% extra on each side
        const overflow = Math.ceil(force / 2) + 5
        gsap.set(wrap, { top: `-${overflow}%`, height: `${100 + overflow * 2}%` })
        gsap.fromTo(wrap,
          { yPercent: 0 },
          {
            yPercent: force,
            ease: 'none',
            scrollTrigger: {
              trigger: wrap.parentElement,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        )
      })

      // ── Giant TERROIR moves at different speed to bg image (double-layer)
      gsap.to('.terroir-giant', {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: '.terroir-parallax',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })

      // ── Quote box slides in from left
      gsap.from('.quote-box', {
        x: -100,
        autoAlpha: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.quote-section',
          start: 'top 65%',
          toggleActions: 'play none none none',
        },
      })

      // ── Brutalist cards stagger
      gsap.utils.toArray<HTMLElement>('.brutalist-card').forEach((card, i) => {
        gsap.from(card, {
          y: 80,
          autoAlpha: 0,
          duration: 0.9,
          delay: i * 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.brutalist-grid',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        })
      })

      return () => smoother.kill()
    }, contentRef)

    return () => ctx.revert()
  }, [])

  return (
    <>
      <Nav />
      <div ref={wrapperRef} id='smooth-wrapper'>
        <div ref={contentRef} id='smooth-content'>

          {/* ── Overlapping Grid Hero ──────────── */}
          <section className='relative min-h-screen grid grid-cols-12 items-center overflow-hidden bg-[var(--ink)]'>

            {/* Image 1 — oversized for parallax */}
            <div className='col-start-1 col-end-7 row-start-1 h-[80vh] relative overflow-hidden'>
              <div
                className='img-parallax-wrap absolute inset-x-0 w-full'
                style={{
                  top: '-15%',
                  height: '130%',
                  animation: 'clipInsetReveal 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.2s forwards',
                  clipPath: 'inset(40% 40% 40% 40%)',
                }}
              >
                <Image src='/images/lifestyle/vineyard-rows-aerial.webp' alt='Vineyard rows aerial' fill sizes='50vw' className='object-cover' />
              </div>
            </div>

            {/* Image 2 — oversized for parallax */}
            <div className='col-start-5 col-end-13 row-start-1 h-[70vh] mt-20 relative overflow-hidden'>
              <div
                className='img-parallax-wrap absolute inset-x-0 w-full'
                style={{
                  top: '-15%',
                  height: '130%',
                  animation: 'clipInsetReveal 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.6s forwards',
                  clipPath: 'inset(40% 40% 40% 40%)',
                }}
              >
                <Image src='/images/lifestyle/red-wine-pouring-decanter.webp' alt='Red wine pouring' fill sizes='60vw' className='object-cover' />
              </div>
            </div>

            {/* Headline overlay */}
            <div className='col-start-1 col-end-13 row-start-1 z-10 flex items-center justify-center h-full px-6'>
              <div className='text-center' style={{ animation: 'fadeInUp 1s ease 1.2s both' }}>
                <h1
                  className='font-display text-6xl md:text-8xl lg:text-9xl leading-none text-[var(--off-white)]'
                  style={{ mixBlendMode: 'difference' }}
                >
                  FRENCH<br />CONNECTION
                </h1>
                <p className='text-[var(--gold)] text-xs tracking-[0.4em] uppercase mt-6'>
                  Premium wines &middot; South of France &middot; Delivered to Vietnam
                </p>
              </div>
            </div>
          </section>

          {/* Diagonal Divider */}
          <div className='h-32 bg-[var(--bordeaux)]' style={{ clipPath: 'polygon(0 0, 100% 60%, 100% 100%, 0 100%)' }} />

          {/* ── Asymmetric Wine Showcase ───────── */}
          <section className='py-24 px-6 bg-[var(--ink)]'>
            <div className='max-w-7xl mx-auto grid md:grid-cols-[2fr_1fr_1fr] gap-8 items-center'>

              {/* Large image with gold-peek inset + parallax */}
              <div className='reveal relative h-[600px] overflow-hidden group'>
                <div className='img-parallax-wrap absolute inset-x-0 w-full' style={{ top: '-15%', height: '130%' }}>
                  <Image
                    src='/images/lifestyle/red-grapes-on-vine.webp'
                    alt='Red grapes on vine'
                    fill
                    sizes='(max-width: 768px) 100vw, 50vw'
                    className='object-cover transition-[clip-path] duration-700 ease-out'
                    style={{ clipPath: 'inset(3%)' }}
                    onMouseEnter={(e) => { (e.target as HTMLElement).style.clipPath = 'inset(0%)' }}
                    onMouseLeave={(e) => { (e.target as HTMLElement).style.clipPath = 'inset(3%)' }}
                  />
                </div>
                <div className='absolute inset-0 border-2 border-[var(--gold)]/30 pointer-events-none z-10' />
              </div>

              {/* Floating bottle */}
              <div className='reveal flex flex-col items-center md:-mt-20' data-speed='1.05'>
                <div style={{ animation: 'bottleFloat 4s ease-in-out infinite' }}>
                  <Image src='/images/bottles/forge-celeste-2019-saint-emilion-grand-cru.png' alt='Forge Celeste 2019' width={140} height={420} className='object-contain drop-shadow-2xl' />
                </div>
                <p className='font-display text-[var(--off-white)] text-xl mt-6'>Forge Celeste</p>
                <p className='text-[var(--gold)] text-xs tracking-[0.2em] uppercase mt-1'>Saint-Emilion Grand Cru</p>
              </div>

              {/* Large price */}
              <div className='reveal text-center md:text-left'>
                <p className='font-display text-[var(--gold)] text-7xl md:text-8xl leading-none'>2.5M</p>
                <p className='text-[var(--off-white)]/50 text-xs tracking-widest uppercase mt-2'>VND per bottle</p>
                <a href='https://zalo.me/84936480805' className='inline-block mt-8 px-8 py-3.5 bg-[var(--gold)] text-[var(--ink)] font-bold text-sm tracking-widest uppercase hover:bg-[var(--gold-dk)] transition-colors'>
                  Order Now
                </a>
              </div>
            </div>
          </section>

          {/* ── Parallax Giant Typography ──────── */}
          <section className='terroir-parallax relative h-[60vh] flex items-center justify-center overflow-hidden'>
            <div
              className='img-parallax-wrap absolute inset-x-0 w-full'
              style={{
                top: '-15%',
                height: '130%',
                backgroundImage: 'url(/images/lifestyle/vineyard-landscape-estate.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className='absolute inset-0 bg-[var(--ink)]/60' />
            {/* Separate parallax speed for double-layer depth */}
            <h2
              className='terroir-giant relative z-10 font-display text-[20vw] leading-none text-[var(--off-white)] select-none'
              style={{ mixBlendMode: 'overlay' }}
            >
              TERROIR
            </h2>
          </section>

          {/* ── Brutalist Terroir Cards ────────── */}
          <section className='py-24 px-6 bg-[var(--ink)]'>
            <div className='max-w-7xl mx-auto'>
              <div className='text-center mb-16 reveal'>
                <p className='text-[var(--gold)] text-xs tracking-[0.3em] uppercase mb-3'>THE JOURNEY</p>
                <h2 className='font-display text-4xl md:text-5xl text-[var(--off-white)]'>From Vine to Your Glass</h2>
                <div className='w-16 h-px bg-[var(--gold)] mx-auto mt-6' />
              </div>
              <div className='brutalist-grid grid md:grid-cols-3 gap-8 md:gap-6'>
                {terroirCards.map((card, i) => (
                  <div
                    key={card.number}
                    className='brutalist-card relative border-2 border-[var(--gold)]/30 overflow-hidden'
                    style={{ marginTop: i === 1 ? '2rem' : i === 2 ? '4rem' : '0' }}
                  >
                    <div className='relative h-64 overflow-hidden'>
                      <div className='img-parallax-wrap absolute inset-x-0 w-full' style={{ top: '-15%', height: '130%' }}>
                        <Image
                          src={card.image}
                          alt={card.title}
                          fill
                          sizes='(max-width: 768px) 100vw, 33vw'
                          className='object-cover transition-[clip-path] duration-500 ease-out'
                          style={{ clipPath: 'inset(4%)' }}
                          onMouseEnter={(e) => { (e.target as HTMLElement).style.clipPath = 'inset(0%)' }}
                          onMouseLeave={(e) => { (e.target as HTMLElement).style.clipPath = 'inset(4%)' }}
                        />
                      </div>
                    </div>
                    <p className='font-display text-[var(--gold)]/15 text-9xl leading-none absolute -top-4 -left-2 pointer-events-none select-none'>
                      {card.number}
                    </p>
                    <div className='p-8'>
                      <h3 className='font-display text-xl text-[var(--off-white)] mb-3'>{card.title}</h3>
                      <p className='text-[var(--off-white)]/60 text-sm leading-relaxed'>{card.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <WinesSection />

          {/* ── Overlapping Quote ──────────────── */}
          <section className='quote-section relative py-32 px-6 overflow-hidden'>
            <div
              className='img-parallax-wrap absolute inset-x-0 w-full'
              style={{
                top: '-15%',
                height: '130%',
                backgroundImage: 'url(/images/lifestyle/hands-holding-red-grapes.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className='absolute inset-0 bg-[var(--ink)]/70' />
            <div className='quote-box relative z-10 max-w-3xl ml-[5%] md:ml-[10%] bg-[var(--off-white)] p-10 md:p-16 -mb-20'>
              <p className='font-display text-[var(--bordeaux)] text-4xl leading-none mb-6'>&ldquo;</p>
              <blockquote className='font-display text-2xl md:text-3xl italic text-[var(--ink)] leading-relaxed mb-6'>
                Every bottle we ship is one we would pour at our own table first.
              </blockquote>
              <p className='text-[var(--ink-mid)] text-xs tracking-[0.3em] uppercase'>&mdash; French Connection Wines</p>
            </div>
          </section>

          <Testimonials />
          <Panels />
          <FAQ />
          <Footer />

        </div>
      </div>
    </>
  )
}
