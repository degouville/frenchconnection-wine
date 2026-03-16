"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../lib/i18n/LanguageContext";
import translations from "../lib/i18n/translations";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Nav from "../components/Nav";
import SplashScreen from "../components/SplashScreen";
import SocialProofBar from "../components/SocialProofBar";
import WinesSection from "../components/WinesSection";
import QuoteStrip from "../components/QuoteStrip";
import TerroirSection from "../components/TerroirSection";
import Testimonials from "../components/Testimonials";
import Panels from "../components/Panels";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const galleryImages = [
  {
    src: "/images/lifestyle/vineyard-rows-aerial.webp",
    alt: "Vineyard rows aerial view",
  },
  {
    src: "/images/lifestyle/harvest-pruning-white-grapes.webp",
    alt: "Pruning white grapes",
  },
  {
    src: "/images/lifestyle/red-wine-pouring-decanter.webp",
    alt: "Pouring red wine",
  },
  {
    src: "/images/lifestyle/hands-holding-red-grapes.webp",
    alt: "Hands holding grapes",
  },
  {
    src: "/images/lifestyle/harvest-white-grapes-basket.webp",
    alt: "Grapes in basket",
  },
  {
    src: "/images/lifestyle/wine-glasses-rose-red-overhead.webp",
    alt: "Wine glasses overhead",
  },
];

const featureBottles = [
  {
    src: "/images/bottles/forge-celeste/forge-celeste-2019-saint-emilion-grand-cru.png",
    name: "Forge Celeste",
  },
  {
    src: "/images/bottles/chateau-pennautier/chateau-pennautier.png",
    name: "Chateau Pennautier",
  },
  {
    src: "/images/bottles/gilles-cantons/chateau-fontanche-red.png",
    name: "Chateau Fontanche",
  },
];

const VIDEO_ID = "vet3KqhTn7g";

export default function Home() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [splashDone, setSplashDone] = useState(false);
  const [videoModal, setVideoModal] = useState(false);
  const { lang } = useLanguage();
  const t = translations[lang];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set .reveal elements invisible BEFORE ScrollSmoother initialises
      // (autoAlpha = opacity + visibility together, so layout is preserved)
      gsap.set(".reveal", { autoAlpha: 0, y: 40 });

      const smoother = ScrollSmoother.create({
        wrapper: wrapperRef.current!,
        content: contentRef.current!,
        smooth: 1.2,
        effects: true,
        smoothTouch: 0.1,
      });

      // ── Reveal: animate FROM gsap.set state TO natural (autoAlpha:1, y:0)
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.to(el, {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });
      });

      // ── Parallax on all illustration images
      // Positive yPercent = image drifts DOWN relative to container
      // Container moves UP with scroll → net: image moves up SLOWER = depth
      // 3 parallax forcescycle through them so adjacent images move at different speeds
      const parallaxForces = [8, 12, 18];
      gsap.utils
        .toArray<HTMLElement>(".img-parallax-wrap")
        .forEach((wrap, i) => {
          const force = parallaxForces[i % 3];
          // Correct overflow: yPercent moves wrapper by force×wrapperHeight, so top drifts by
          // force×(100+2×overflow)/100. We need that ≤ overflow → overflow ≥ force×100/(100-2×force)
          const overflow = Math.ceil((force * 100) / (100 - force * 2)) + 4;
          gsap.set(wrap, {
            top: `-${overflow}%`,
            height: `${100 + overflow * 2}%`,
          });
          gsap.fromTo(
            wrap,
            { yPercent: 0 },
            {
              yPercent: force,
              ease: "none",
              scrollTrigger: {
                trigger: wrap.parentElement,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            },
          );
        });

      // ── Gallery cards stagger
      gsap.utils.toArray<HTMLElement>(".gallery-card").forEach((card, i) => {
        gsap.from(card, {
          y: 60,
          autoAlpha: 0,
          duration: 0.7,
          delay: i * 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".gallery-row",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      });

      return () => smoother.kill();
    }, contentRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {!splashDone && <SplashScreen onComplete={() => setSplashDone(true)} />}
      <Nav />

      {/* ── Video modal — outside smooth-wrapper to escape its stacking context ── */}
      {videoModal && (
        <div
          className="fixed inset-0 z-[500] flex items-center justify-center bg-black/85 backdrop-blur-sm"
          onClick={() => setVideoModal(false)}
        >
          <button
            onClick={() => setVideoModal(false)}
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          <div
            className="relative w-[90vw] max-w-5xl"
            style={{ aspectRatio: '16/9' }}
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
              style={{ border: 0, width: '100%', height: '100%', display: 'block' }}
              title="The Story"
            />
          </div>
        </div>
      )}
      <div ref={wrapperRef} id="smooth-wrapper">
        <div ref={contentRef} id="smooth-content">
          {/* ── Split-Screen Hero ──────────────── */}
          <section className="relative min-h-screen grid grid-cols-1 md:grid-cols-2 overflow-hidden">

            {/* Full-section YouTube background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&controls=0&disablekb=1&rel=0&modestbranding=1&playsinline=1`}
                allow="autoplay; encrypted-media"
                className="absolute"
                style={{ border: 0, width: "max(177.78vh, 177.78vw)", height: "max(100vh, 56.25vw)", top: "50%", left: "50%", transform: "translate(-50%, -50%) scale(1.33)" }}
                title="Background video"
              />
            </div>

            {/* Desktop diagonal overlay — full section width so clip-path % = vw % */}
            <div className="hero-bg-left hidden md:block absolute inset-0 z-[1] bg-(--ink)/95 backdrop-blur-md" />

            {/* Left: Copy */}
            <div className="relative flex flex-col justify-center px-8 md:px-16 py-32 md:py-0 z-10 bg-(--ink)/95 md:bg-transparent backdrop-blur-md md:backdrop-blur-none">
              {/* Content */}
              <div className="relative z-10">
                <p className="text-(--gold) text-xs tracking-[0.3em] uppercase mb-6">
                  CENTRAL VIETNAM
                </p>
                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-tight text-(--off-white) mb-6">
                  The French Wines
                  <br />
                  <span className="text-(--gold)">You Deserve</span>
                </h1>
                <p className="text-(--off-white)/70 text-lg leading-relaxed max-w-md mb-10">
                  Sourced directly from South of France estates. Curated,
                  cellar-quality wine, delivered to your door.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <a
                    href="#wines"
                    className="px-8 py-3.5 bg-(--gold) text-(--ink) font-bold text-sm tracking-widest uppercase hover:bg-(--gold-dk) transition-colors"
                  >
                    Browse Collection
                  </a>
                  <a
                    href="https://zalo.me/84936480805"
                    className="px-8 py-3.5 border border-(--off-white)/40 text-(--off-white) text-sm tracking-widest uppercase hover:border-(--gold) hover:text-(--gold) transition-colors"
                  >
                    Order on Zalo
                  </a>
                </div>

              </div>
            </div>

            {/* Right: video with play button at bottom */}
            <div className="relative min-h-[50vh] md:min-h-0 flex items-end justify-start z-10 pb-10 pl-10">
              <button
                onClick={() => setVideoModal(true)}
                className="inline-flex items-center gap-3 text-black text-xs tracking-widest uppercase hover:opacity-70 transition-opacity duration-200 group"
              >
                <span className="flex items-center justify-center w-14 h-14 rounded-full border-2 border-black group-hover:scale-110 transition-transform duration-300">
                  <svg width="14" height="16" viewBox="0 0 12 14" fill="black">
                    <path d="M12 7L0 14V0L12 7Z" />
                  </svg>
                </span>
                Watch the story
              </button>
            </div>

            {/* Floating bottle */}
            <div
              className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 drop-shadow-2xl"
              style={{ animation: "bottleFloat 4s ease-in-out infinite" }}
            >
              <Image
                src="/images/bottles/forge-celeste/forge-celeste-2019-saint-emilion-grand-cru.png"
                alt="Forge Celeste Grand Cru"
                width={120}
                height={400}
                className="object-contain"
              />
            </div>
          </section>



          <div className="-mt-px">
            <SocialProofBar />
          </div>

          {/* ── Editorial Wine Feature ─────────── */}
          <section className="py-24 px-6 bg-(--ink)">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              {/* Left: Parallelogram imageoversized for parallax */}
              <div
                className="reveal relative h-[500px] overflow-hidden"
                style={{
                  clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0% 100%)",
                }}
              >
                <div
                  className="img-parallax-wrap absolute inset-x-0 w-full"
                  style={{ top: "-15%", height: "130%" }}
                >
                  <Image
                    src="/images/lifestyle/red-wine-pouring-decanter.webp"
                    alt="Red wine pouring into decanter"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right: Copy + bottles */}
              <div className="reveal">
                <p className="text-(--gold) text-xs tracking-[0.3em] uppercase mb-3">
                  {t.collection.eyebrow}
                </p>
                <h2 className="font-display text-4xl md:text-5xl text-(--off-white) mb-6">
                  {t.collection.heading}
                </h2>
                <p className="text-(--off-white)/70 leading-relaxed mb-10 max-w-md">
                  {t.collection.body}
                </p>
                <div className="flex gap-6">
                  {featureBottles.map((b) => (
                    <div key={b.name} className="text-center">
                      <div className="h-48 flex items-end justify-center mb-3">
                        <Image
                          src={b.src}
                          alt={b.name}
                          width={60}
                          height={180}
                          className="object-contain drop-shadow-lg"
                        />
                      </div>
                      <p className="text-(--off-white)/60 text-xs tracking-wide">
                        {b.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── Parallax Divider ───────────────── */}
          <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
            <div
              className="img-parallax-wrap absolute inset-x-0 w-full"
              style={{
                top: "-15%",
                height: "130%",
                backgroundImage:
                  "url(/images/lifestyle/hands-holding-red-grapes.webp)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="absolute inset-0 bg-(--ink)/65" />
            <div className="relative z-10 text-center px-6 max-w-3xl reveal">
              <p className="font-display text-3xl md:text-4xl italic text-(--off-white) leading-relaxed">
                &ldquo;{t.editorial.quote}&rdquo;
              </p>
              <p className="text-(--gold) text-xs tracking-[0.3em] uppercase mt-6">
                &mdash; {t.editorial.attribution}
              </p>
            </div>
          </section>

          {/* ── Horizontal Scroll Gallery ──────── */}
          <section className="py-24 bg-(--ink)">
            <div className="max-w-7xl mx-auto px-6 mb-12 reveal">
              <p className="text-(--gold) text-xs tracking-[0.3em] uppercase mb-3">
                {t.gallery.eyebrow}
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-(--off-white)">
                {t.gallery.heading}
              </h2>
            </div>
            <div
              className="gallery-row flex gap-6 px-6 overflow-x-auto scrollbar-hide"
              style={{ scrollSnapType: "x mandatory" }}
            >
              {galleryImages.map((img, i) => (
                <div
                  key={i}
                  className="gallery-card flex-none w-[80vw] md:w-[40vw] lg:w-[30vw] h-[50vh] relative overflow-hidden"
                  style={{ scrollSnapAlign: "start" }}
                >
                  <div
                    className="img-parallax-wrap absolute inset-x-0 w-full"
                    style={{ top: "-15%", height: "130%" }}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 768px) 80vw, 30vw"
                      className="object-cover transition-[clip-path] duration-500 ease-out"
                      style={{ clipPath: "inset(4%)" }}
                      onMouseEnter={(e) => {
                        (e.target as HTMLElement).style.clipPath = "inset(0%)";
                      }}
                      onMouseLeave={(e) => {
                        (e.target as HTMLElement).style.clipPath = "inset(4%)";
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <WinesSection />
          <QuoteStrip />
          <TerroirSection />
          <Testimonials />
          <Panels />
          <FAQ />
          <Footer />
        </div>
      </div>
    </>
  );
}
