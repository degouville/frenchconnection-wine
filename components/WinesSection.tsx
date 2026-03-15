"use client";

import { useState, useEffect, useRef } from "react";
import { wines, type WineCategory } from "../data/wines";
import WineCard from "./WineCard";

type Tab = "all" | WineCategory;

const tabs: { id: Tab; label: string }[] = [
  { id: "all", label: "All Wines" },
  { id: "whites", label: "Whites" },
  { id: "reds", label: "Reds" },
  { id: "rose", label: "Rosé" },
  { id: "sparkling", label: "Sparkling" },
];

export default function WinesSection() {
  const [active, setActive] = useState<Tab>("all");
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const filtered =
    active === "all" ? wines : wines.filter((w) => w.category === active);

  return (
    <section
      id="wines"
      ref={ref}
      className={`py-24 px-6 bg-[var(--ink)] transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase mb-3">
            the wines
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-[var(--off-white)] mb-4">
            The Wines
          </h2>
          <div className="w-16 h-px bg-[var(--gold)] mx-auto" />
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`px-5 py-2 text-xs tracking-widest uppercase transition-all duration-200 border ${
                active === tab.id
                  ? "bg-[var(--gold)] text-[var(--ink)] border-[var(--gold)] font-bold"
                  : "border-[var(--gold)]/30 text-[var(--off-white)]/60 hover:border-[var(--gold)] hover:text-[var(--gold)]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Wine grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filtered.map((wine, i) => (
            <div
              key={wine.id}
              className="transition-all duration-500"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <WineCard wine={wine} />
            </div>
          ))}
        </div>

        {/* Count */}
        <p className="text-center text-[var(--ink-soft)] text-xs tracking-widest uppercase mt-8">
          {filtered.length} wine{filtered.length !== 1 ? "s" : ""} shown
        </p>
      </div>
    </section>
  );
}
