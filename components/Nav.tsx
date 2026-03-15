"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-[var(--ink)]/90 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/images/logos/fcw-logo.png"
            alt="French Connection Wines"
            width={48}
            height={48}
            className="object-contain"
          />
          <span className="font-display text-lg tracking-wide text-[var(--gold)]">
            French Connection Wines
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#wines"
            className="text-sm tracking-widest uppercase text-[var(--off-white)]/80 hover:text-[var(--gold)] transition-colors"
          >
            Our Wines
          </a>
          <a
            href="#story"
            className="text-sm tracking-widest uppercase text-[var(--off-white)]/80 hover:text-[var(--gold)] transition-colors"
          >
            Our Story
          </a>
          <a
            href="#order"
            className="text-sm tracking-widest uppercase text-[var(--off-white)]/80 hover:text-[var(--gold)] transition-colors"
          >
            Order
          </a>
          <a
            href="#order"
            className="px-5 py-2 border border-[var(--gold)] text-[var(--gold)] text-sm tracking-widest uppercase hover:bg-[var(--gold)] hover:text-[var(--ink)] transition-all duration-200"
          >
            Order Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[var(--off-white)] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div
            className={`w-6 h-0.5 bg-current mb-1.5 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <div
            className={`w-6 h-0.5 bg-current mb-1.5 transition-all ${menuOpen ? "opacity-0" : ""}`}
          />
          <div
            className={`w-6 h-0.5 bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[var(--ink)]/95 backdrop-blur-md border-t border-[var(--gold)]/20 px-6 py-4 flex flex-col gap-4">
          <a
            href="#wines"
            onClick={() => setMenuOpen(false)}
            className="text-sm tracking-widest uppercase text-[var(--off-white)]/80"
          >
            Our Wines
          </a>
          <a
            href="#story"
            onClick={() => setMenuOpen(false)}
            className="text-sm tracking-widest uppercase text-[var(--off-white)]/80"
          >
            Our Story
          </a>
          <a
            href="#order"
            onClick={() => setMenuOpen(false)}
            className="text-sm tracking-widest uppercase text-[var(--off-white)]/80"
          >
            Order
          </a>
          <a
            href="#order"
            onClick={() => setMenuOpen(false)}
            className="text-center px-5 py-2 border border-[var(--gold)] text-[var(--gold)] text-sm tracking-widest uppercase"
          >
            Order Now
          </a>
        </div>
      )}
    </nav>
  );
}
