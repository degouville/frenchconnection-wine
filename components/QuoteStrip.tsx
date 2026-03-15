export default function QuoteStrip() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background image — img-parallax-wrap for GSAP parallax on alt pages */}
      <div
        className="img-parallax-wrap"
        style={{
          backgroundImage:
            "url(/images/lifestyle/hands-holding-red-grapes.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-[var(--ink)]/75" />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <p className="text-[var(--gold)] text-4xl leading-none mb-6 font-display">
          &ldquo;
        </p>
        <blockquote className="font-display text-2xl md:text-3xl italic text-[var(--off-white)] leading-relaxed mb-6">
          Every bottle we ship is one we would pour at our own table first. That
          is the only standard that matters.
        </blockquote>
        <p className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase">
          — French Connection Wines · Central Vietnam
        </p>
      </div>
    </section>
  );
}
