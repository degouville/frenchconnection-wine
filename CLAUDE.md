# CLAUDE.md — French Connection Wines

## What Is This

Premium French wine e-commerce site for the Vietnamese market. Single-page, static-export Next.js app with GSAP-powered animations, bilingual support (EN/VI), and Zalo ordering integration.

## Quick Start

```bash
bun install
bun run dev        # localhost:3000
bun run build      # static export → /dist
```

## Tech Stack

- **Next.js 16** — App Router, static export (`output: "export"`, `distDir: "dist"`)
- **React 19** — with React Compiler enabled
- **TailwindCSS 4** — utility-first, CSS variable theming
- **GSAP 3.14** — ScrollSmoother, ScrollTrigger, FLIP animations, clip-path reveals
- **TypeScript 5** — strict mode
- **Bun** — package manager and runtime (never use npm/yarn/pnpm)

## Project Structure

```
app/
  layout.tsx          # Root layout, metadata, SEO, fonts (Forum + Inter)
  page.tsx            # Main page — orchestrates all sections + GSAP setup
  globals.css         # CSS variables, keyframes, utility classes
components/
  Nav.tsx             # Fixed navbar, language toggle, responsive menu
  SplashScreen.tsx    # Animated intro (clip-path, gold line, curtain split)
  SocialProofBar.tsx  # 3-stat bar below hero
  Hero.tsx            # Standalone hero (unused — hero is inline in page.tsx)
  WinesSection.tsx    # Tabbed wine grid, FLIP animation, fade + "view all"
  WineCard.tsx        # Individual card with badge, price, wiggle hover
  QuoteStrip.tsx      # Full-width parallax quote
  TerroirSection.tsx  # 3-step journey with images
  Testimonials.tsx    # 3-column customer quotes
  Panels.tsx          # 2-column: Our Story + Order/Delivery
  FAQ.tsx             # Accordion with GSAP height animation
  Footer.tsx          # Producer logos, contact, "Made By" modal
  PhotoStrip.tsx      # 3-column gallery (not used in page.tsx)
data/
  wines.ts            # 24 wines — types: Wine, WineCategory
lib/i18n/
  LanguageContext.tsx  # React Context for lang state ('en' | 'vi')
  translations.ts     # All UI text in EN + VI
public/images/
  bottles/            # PNG bottles (transparent bg), organized by producer
  lifestyle/          # WebP photos for hero, parallax, gallery
  logos/              # Producer logos + FCW logo
```

## Page Sections (top to bottom)

1. **Splash Screen** — animated logo reveal, curtain split
2. **Hero** — YouTube video bg (muted loop, scaled 1.33x), left dark panel with diagonal clip-path, floating bottle, "Watch the Story" modal
3. **Social Proof Bar** — key stats
4. **Editorial Wine Feature** — parallax image + 3 featured bottles
5. **Parallax Divider** — quote over full-height image
6. **Horizontal Gallery** — 6 lifestyle images, scroll-snap
7. **Wines Collection** — tabbed grid, first 8 shown with gradient fade
8. **Quote Strip** — brand philosophy
9. **Terroir** — 3-step journey
10. **Testimonials** — 3 customer quotes
11. **Panels** — Story + Order (Zalo CTA)
12. **FAQ** — 4 collapsible items
13. **Footer** — producers, contact

## Color Palette

```css
--gold: #b8965a        /* Primary accent, CTAs, highlights */
--gold-dk: #8c6e38     /* Hover state for gold */
--ink: #140e12         /* Body background */
--ink-mid: #4a3728     /* Secondary brown */
--ink-soft: #7a6555    /* Tertiary text */
--off-white: #f9f6f1   /* Primary text */
--light: #f2ede4       /* Light variant */
--bordeaux: #6b1a1a    /* Red wine badges */
--blush: #c9897e       /* Rosé badges */
```

## Fonts

- **Forum** (serif) — display headings, wine names (`font-display` utility)
- **Inter** (sans) — body text, UI elements

## Key Architecture Decisions

### Hero Video Background
- YouTube iframe with `youtube-nocookie.com` for privacy
- Video ID: `vet3KqhTn7g`
- Scaled `1.33x` to crop YouTube player chrome (black bars)
- Sizing: `max(177.78vh, 177.78vw)` width for full cover on any orientation
- Left panel: `bg-(--ink)/90 backdrop-blur-md` on mobile, desktop uses `hero-bg-left` animated overlay
- Video modal renders **outside** `#smooth-wrapper` to escape its stacking context (Nav is z-50, modal is z-500)

### Diagonal Clip-Path
- `hero-bg-left` class: full-section-width overlay with `clipDiagonalLeft` animation
- Percentages are viewport-relative (element is 100% of section width = 100vw)
- Desktop: `polygon(0 0, 57% 0, 43% 100%, 0 100%)` — diagonal crosses 50vw at midpoint
- Mobile: no clip-path (left column has direct bg)

### Parallax System
- GSAP ScrollSmoother for smooth scroll
- `.img-parallax-wrap` elements get expanded height + negative top offset
- 3 cycling forces: `[8, 12, 18]` yPercent
- Overflow formula: `Math.ceil((force * 100) / (100 - force * 2)) + 4` — prevents image edge bleed

### ScrollSmoother Stacking Context
- `#smooth-wrapper` has `position: fixed` which creates a stacking context
- Any `fixed` elements inside it (modals) can't exceed Nav's z-index outside it
- Solution: render modals as siblings of Nav, not inside smooth-wrapper

### Wine Collection
- Shows first 8 wines on "All" tab with gradient fade overlay (`h-1/2`, transparent → `--ink`)
- "View all wines" button expands to full list
- FLIP animation on tab change: existing cards slide, new cards scale-in
- Mouse-follow zoomed bottle preview on hover

## i18n

```tsx
const { lang, toggle } = useLanguage()  // 'en' | 'vi'
const t = translations[lang]
t.nav.ourWines  // "Our Wines" | "Rượu Của Chúng Tôi"
```

All text lives in `lib/i18n/translations.ts`. Every component uses the same pattern.

## Wine Data

24 wines across 4 categories in `data/wines.ts`:
- **Whites** (8), **Reds** (9), **Rosé** (3), **Sparkling** (1)
- Price range: 310,000 – 2,500,000 VND
- Producers: Gilles Cantons, Anne de Joyeuse, Château Pennautier, Forge Céleste
- Each wine: id, name, varietal, appellation, price, category, badge, image

## Build & Deploy

Static export — no server needed. Output goes to `/dist`.

```bash
bun run build      # generates /dist
bun run preview    # serve locally
```

Images are unoptimized (no Next.js Image Optimization Server). Bottles are PNG, lifestyle photos are WebP.

## Common Patterns

### CSS Variable Colors in Tailwind 4
```tsx
className="bg-(--ink) text-(--gold) border-(--off-white)/40"
```

### GSAP Reveals
```tsx
// Elements with class "reveal" are set to invisible by GSAP on init
// Then animated in via ScrollTrigger
<div className="reveal">...</div>
```

### Parallax Images
```tsx
// Wrap image in .img-parallax-wrap inside an overflow-hidden container
<div className="relative overflow-hidden">
  <div className="img-parallax-wrap">
    <Image src="..." fill className="object-cover" />
  </div>
</div>
```

## Things to Watch Out For

- **Never add `opacity: 0` in CSS to `.reveal` elements** — GSAP sets this; CSS would make the tween go 0→0
- **Modals must be outside `#smooth-wrapper`** — or they'll be trapped under the Nav's z-index
- **YouTube embed scale** — currently 1.33x to hide player chrome; may need adjustment if YouTube changes UI
- **`hero-bg-left` overlay is section-width** — clip-path percentages = viewport percentages; changing grid proportions doesn't affect the diagonal position
- **Parallax overflow formula is mathematically derived** — don't simplify it or images will show edges at high force values
