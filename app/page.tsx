"use client";

import { useEffect, useRef, useState } from "react";
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

export default function Home() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [splashDone, setSplashDone] = useState(false);

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
      const parallaxForces = [8, 18, 28];
      gsap.utils
        .toArray<HTMLElement>(".img-parallax-wrap")
        .forEach((wrap, i) => {
          const force = parallaxForces[i % 3];
          // Expand wrapper so image has room to travel: needs at least force% extra on each side
          const overflow = Math.ceil(force / 2) + 5;
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
      <div ref={wrapperRef} id="smooth-wrapper">
        <div ref={contentRef} id="smooth-content">
          {/* ── Split-Screen Hero ──────────────── */}
          <section className="relative min-h-screen grid grid-cols-1 md:grid-cols-2">
            {/* Left: Copy */}
            <div className="flex flex-col justify-center px-8 md:px-16 py-32 md:py-0 bg-(--ink) z-10">
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
              <div className="flex flex-wrap gap-4">
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

            {/* Right: Diagonal clip + parallax */}
            <div className="relative min-h-[50vh] md:min-h-0 overflow-hidden">
              <div
                className="img-parallax-wrap absolute inset-x-0 w-full"
                style={{ top: "-15%", height: "130%" }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "url(/images/lifestyle/vineyard-rows-aerial.webp)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    animation:
                      "clipDiagonal 1.4s cubic-bezier(0.22, 1, 0.36, 1) forwards",
                    clipPath: "polygon(30% 0, 30% 0, 30% 100%, 30% 100%)",
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-(--ink)/20 z-10" />
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

          <SocialProofBar />

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
                  THE COLLECTION
                </p>
                <h2 className="font-display text-4xl md:text-5xl text-(--off-white) mb-6">
                  Wines With Character
                </h2>
                <p className="text-(--off-white)/70 leading-relaxed mb-10 max-w-md">
                  From the sun-drenched vineyards of Languedoc to the
                  prestigious terroirs of Saint-Emilion. Every bottle tells the
                  story of its origin.
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
                &ldquo;Wine is sunlight, held together by water.&rdquo;
              </p>
              <p className="text-(--gold) text-xs tracking-[0.3em] uppercase mt-6">
                &mdash; Galileo Galilei
              </p>
            </div>
          </section>

          {/* ── Horizontal Scroll Gallery ──────── */}
          <section className="py-24 bg-(--ink)">
            <div className="max-w-7xl mx-auto px-6 mb-12 reveal">
              <p className="text-(--gold) text-xs tracking-[0.3em] uppercase mb-3">
                GALLERY
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-(--off-white)">
                Life in the Vineyard
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
