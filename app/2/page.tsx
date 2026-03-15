"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Nav from "../../components/Nav";
import SocialProofBar from "../../components/SocialProofBar";
import WinesSection from "../../components/WinesSection";
import QuoteStrip from "../../components/QuoteStrip";
import Testimonials from "../../components/Testimonials";
import Panels from "../../components/Panels";
import FAQ from "../../components/FAQ";
import Footer from "../../components/Footer";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const terroirSteps = [
  {
    number: "01",
    title: "HAND-PICKED",
    desc: "Each variety harvested at peak maturity by estate teams who've worked the same vines for generations. Several estates pick manually \u2014 so every bunch arrives whole, not bruised.",
  },
  {
    number: "02",
    title: "CAREFULLY SELECTED",
    desc: "Only the finest fruit from France's most celebrated appellations makes the cut. Small-lot, estate-grown, no industrial blending.",
  },
  {
    number: "03",
    title: "DELIVERED INTACT",
    desc: "Temperature-controlled from vineyard to your door in Vietnam. Not shaken. Not heat-damaged. Exactly as the winemaker intended.",
  },
];

const mosaicBottles = [
  {
    src: "/images/bottles/forge-celeste-2019-saint-emilion-grand-cru.png",
    name: "Forge Celeste",
  },
  { src: "/images/bottles/chateau-pennautier.png", name: "Chateau Pennautier" },
  { src: "/images/bottles/chateau-fontanche-red.png", name: "Fontanche Red" },
  { src: "/images/bottles/belle-epine-rouge.png", name: "Belle Epine Rouge" },
  { src: "/images/bottles/la-butiniere-blanc.png", name: "La Butiniere" },
  {
    src: "/images/bottles/camas-cremant-de-limoux.png",
    name: "Cremant de Limoux",
  },
];

export default function Alt2() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".reveal", { autoAlpha: 0, y: 40 });

      const smoother = ScrollSmoother.create({
        wrapper: wrapperRef.current!,
        content: contentRef.current!,
        smooth: 1.2,
        effects: true,
        smoothTouch: 0.1,
      });

      // ── Reveal
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
      // 3 parallax forces — cycle through them so adjacent images move at different speeds
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

      // ── Mosaic circle reveal
      gsap.utils.toArray<HTMLElement>(".mosaic-item").forEach((el, i) => {
        gsap.to(el, {
          clipPath: "circle(45%)",
          duration: 0.8,
          delay: i * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      });

      // ── Step numbers slide from left
      gsap.utils.toArray<HTMLElement>(".step-number").forEach((el) => {
        gsap.from(el, {
          x: -80,
          autoAlpha: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 75%",
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
      <Nav />
      <div ref={wrapperRef} id="smooth-wrapper">
        <div ref={contentRef} id="smooth-content">
          {/* ── Circle Reveal Hero ─────────────── */}
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div
              className="img-parallax-wrap absolute inset-x-0 w-full"
              style={{
                top: "-15%",
                height: "130%",
                backgroundImage:
                  "url(/images/lifestyle/vineyard-landscape-estate.webp)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                animation:
                  "clipCircleExpand 1.8s cubic-bezier(0.22, 1, 0.36, 1) forwards",
                clipPath: "circle(0% at 50% 50%)",
              }}
            />
            <div className="absolute inset-0 bg-(--ink)/50" />
            <div
              className="relative z-10 text-center px-6 max-w-4xl mx-auto"
              style={{ animation: "fadeInUp 1s ease 0.8s both" }}
            >
              <p className="text-(--gold) text-xs tracking-[0.3em] uppercase mb-6">
                CENTRAL VIETNAM
              </p>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-tight text-(--off-white) mb-6">
                Experience French Wine
                <br />
                <span className="text-(--gold)">Like Never Before</span>
              </h1>
              <p className="text-(--off-white)/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
                Direct from estate to your table. Premium South of France wines,
                curated for discerning palates in Vietnam.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#wines"
                  className="px-8 py-3.5 bg-(--gold) text-(--ink) font-bold text-sm tracking-widest uppercase hover:bg-(--gold-dk) transition-colors"
                >
                  Explore Wines
                </a>
                <a
                  href="https://zalo.me/84936480805"
                  className="px-8 py-3.5 border border-(--off-white)/40 text-(--off-white) text-sm tracking-widest uppercase hover:border-(--gold) hover:text-(--gold) transition-colors"
                >
                  Order on Zalo
                </a>
              </div>
            </div>
          </section>

          <SocialProofBar />

          {/* ── Sticky Image + Scrolling Text ──── */}
          <section className="relative bg-(--ink)">
            <div className="grid md:grid-cols-2 min-h-[300vh]">
              {/* Left: Sticky image
                  Note: parallax trigger uses the OUTER section (not the sticky div)
                  so the scrub range covers the full 300vh scroll distance          */}
              <div className="hidden md:block relative">
                <div className="sticky top-0 h-screen overflow-hidden">
                  <div className="absolute inset-0 bg-(--bordeaux)" />
                  <div
                    className="img-parallax-wrap absolute inset-x-0 w-full"
                    style={{ top: "-15%", height: "130%" }}
                  >
                    <Image
                      src="/images/lifestyle/harvest-pruning-white-grapes.webp"
                      alt="Harvest pruning"
                      fill
                      sizes="50vw"
                      className="object-cover"
                      style={{ mixBlendMode: "luminosity" }}
                    />
                  </div>
                </div>
              </div>

              {/* Right: Scrolling steps */}
              <div className="flex flex-col">
                {terroirSteps.map((step) => (
                  <div
                    key={step.number}
                    className="min-h-screen flex items-center px-8 md:px-16"
                  >
                    <div className="reveal">
                      <p className="step-number font-display text-(--gold)/20 text-9xl leading-none mb-4">
                        {step.number}
                      </p>
                      <h3 className="font-display text-3xl md:text-4xl text-(--off-white) mb-6">
                        {step.title}
                      </h3>
                      <p className="text-(--off-white)/70 leading-relaxed max-w-md text-lg">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile: image once */}
            <div className="md:hidden relative h-[50vh] overflow-hidden">
              <div
                className="img-parallax-wrap absolute inset-x-0 w-full"
                style={{ top: "-15%", height: "130%" }}
              >
                <Image
                  src="/images/lifestyle/harvest-pruning-white-grapes.webp"
                  alt="Harvest pruning"
                  fill
                  sizes="100vw"
                  className="object-cover"
                  style={{ mixBlendMode: "luminosity" }}
                />
              </div>
              <div className="absolute inset-0 bg-(--bordeaux)/40" />
            </div>
          </section>

          {/* ── Wine Mosaic ────────────────────── */}
          <section className="py-24 px-6 bg-(--ink)">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16 reveal">
                <p className="text-(--gold) text-xs tracking-[0.3em] uppercase mb-3">
                  THE COLLECTION
                </p>
                <h2 className="font-display text-4xl md:text-5xl text-(--off-white)">
                  Our Finest Selection
                </h2>
                <div className="w-16 h-px bg-(--gold) mx-auto mt-6" />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {mosaicBottles.map((b) => (
                  <div key={b.name} className="flex flex-col items-center">
                    <div
                      className="mosaic-item h-64 w-full flex items-center justify-center bg-(--ink-mid)/20"
                      style={{
                        clipPath: "circle(0%)",
                        transition: "clip-path 0.7s ease",
                      }}
                    >
                      <Image
                        src={b.src}
                        alt={b.name}
                        width={80}
                        height={240}
                        className="object-contain drop-shadow-xl"
                      />
                    </div>
                    <p className="text-(--off-white)/70 text-sm mt-4 tracking-wide">
                      {b.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Blend-Mode Section ─────────────── */}
          <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
            <div
              className="img-parallax-wrap absolute inset-x-0 w-full"
              style={{
                top: "-15%",
                height: "130%",
                backgroundImage:
                  "url(/images/lifestyle/wine-glasses-rose-red-overhead.webp)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div
              className="absolute inset-0 bg-(--bordeaux)"
              style={{ mixBlendMode: "multiply" }}
            />
            <div className="relative z-10 text-center px-6 reveal">
              <h2 className="font-display text-5xl md:text-7xl text-(--off-white) mb-4">
                Taste the Difference
              </h2>
              <p className="text-(--off-white)/70 text-lg max-w-xl mx-auto mb-8">
                When the wine is real, you can tell from the first sip.
              </p>
              <a
                href="#wines"
                className="px-8 py-3.5 bg-(--gold) text-(--ink) font-bold text-sm tracking-widest uppercase hover:bg-(--gold-dk) transition-colors"
              >
                See All Wines
              </a>
            </div>
          </section>

          <WinesSection />
          <QuoteStrip />
          <Testimonials />
          <Panels />
          <FAQ />
          <Footer />
        </div>
      </div>
    </>
  );
}
