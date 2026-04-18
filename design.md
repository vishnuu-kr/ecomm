# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

-----

**Project:** Aura Apparel
**Generated:** 2026-04-18 16:08:00
**Category:** Retail / E-Commerce Apparel

-----

## Global Rules

### Color Palette

| Role | Hex | CSS Variable |
|------|-----|--------------|
| Primary | `#111111` | `--color-primary` |
| Secondary | `#71717A` | `--color-secondary` |
| CTA/Accent | `#C2410C` | `--color-cta` |
| Background | `#FFFFFF` | `--color-background` |
| Text | `#111111` | `--color-text` |

**Color Notes:** High-contrast monochrome background to let product imagery stand out, paired with a warm earthy accent (Rust/Terracotta) to drive urgent but elegant conversions.

### Typography

  - **Heading Font:** Playfair Display
  - **Body Font:** Lato
  - **Mood:** elegant, modern, accessible, fashionable, editorial, premium
  - **Google Fonts:** [Playfair Display + Lato](https://www.google.com/search?q=https://fonts.google.com/share%3Fselection.family%3DLato:wght%40300%3B400%3B700%7CPlayfair%2BDisplay:ital,wght%400,400%3B0,600%3B0,700%3B1,400)

**CSS Import:**

```css
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap');
```

### Spacing Variables

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `4px` / `0.25rem` | Tight gaps (e.g., price to product title) |
| `--space-sm` | `8px` / `0.5rem` | Icon gaps, size selector spacing |
| `--space-md` | `16px` / `1rem` | Standard padding |
| `--space-lg` | `24px` / `1.5rem` | Card padding, standard margins |
| `--space-xl` | `32px` / `2rem` | Grid gaps, medium sections |
| `--space-2xl` | `48px` / `3rem` | Section margins |
| `--space-3xl` | `80px` / `5rem` | Hero padding, major visual breaks |

### Shadow Depths

| Level | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle lift (inputs, size swatches) |
| `--shadow-md` | `0 4px 12px rgba(0,0,0,0.08)` | Dropdowns, mini-cart flyouts |
| `--shadow-lg` | `0 12px 24px rgba(0,0,0,0.12)` | Modals, sticky navbars |
| `--shadow-xl` | `0 25px 50px rgba(0,0,0,0.15)` | Promotional pop-ups |

-----

## Component Specs

### Buttons

```css
/* Primary Button (Add to Cart / Checkout) */
.btn-primary {
  background: var(--color-cta);
  color: #FFFFFF;
  padding: 16px 32px;
  border-radius: 4px;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 250ms ease;
  cursor: pointer;
  border: none;
}

.btn-primary:hover {
  background: #9A3412; /* Darker rust */
  transform: translateY(-1px);
}

/* Secondary Button (Outlines, secondary actions) */
.btn-secondary {
  background: transparent;
  color: var(--color-primary);
  border: 1px solid var(--color-primary);
  padding: 16px 32px;
  border-radius: 4px;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 250ms ease;
  cursor: pointer;
}

.btn-secondary:hover {
  background: var(--color-primary);
  color: #FFFFFF;
}
```

### Product Cards

```css
.product-card {
  background: var(--color-background);
  transition: all 300ms ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.product-image-wrapper {
  overflow: hidden;
  position: relative;
  aspect-ratio: 3/4;
}

.product-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 500ms ease;
}

.product-card:hover img {
  transform: scale(1.05);
}

.product-info {
  padding-top: var(--space-sm);
}
```

### Inputs

```css
.input {
  padding: 14px 16px;
  border: 1px solid #E4E4E7;
  border-radius: 4px;
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  transition: border-color 200ms ease;
  width: 100%;
}

.input:focus {
  border-color: var(--color-primary);
  outline: none;
}
```

### Modals & Drawers (Cart)

```css
.drawer-overlay {
  background: rgba(17, 17, 17, 0.4);
  backdrop-filter: blur(2px);
  transition: opacity 300ms ease;
}

.cart-drawer {
  background: var(--color-background);
  box-shadow: var(--shadow-xl);
  max-width: 400px;
  width: 100%;
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  padding: var(--space-lg);
  transform: translateX(100%);
  transition: transform 400ms cubic-bezier(0.16, 1, 0.3, 1);
}

.cart-drawer.open {
  transform: translateX(0);
}
```

-----

## Style Guidelines

**Style:** Editorial Minimalist

**Keywords:** Clean lines, large striking imagery, editorial typography, subtle fade-ins, high contrast, immersive, tactile

**Best For:** Modern fashion boutiques, direct-to-consumer (DTC) apparel, premium lifestyle brands

**Key Effects:** Subtle image zoom on hover (aspect ratio locked), slide-in mini-cart drawer, smooth sticky headers that hide on scroll down and show on scroll up, seamless page transitions.

### Page Pattern

**Pattern Name:** E-Commerce Storefront

  - **Conversion Strategy:** Visuals lead the experience. Prominent, sticky "Add to Cart" on product pages. Frictionless slide-out cart for instant checkout access. Social proof via reviews.
  - **CTA Placement:** Hero banner overlays (Shop Now), sticky Add to Cart on PDPs, prominent Checkout in mini-cart.
  - **Section Order:** 1. Promotional Banner / Announcement Bar
    2\. Hero Image/Video with Overlay CTA
    3\. Featured Categories (Grid)
    4\. Best Sellers / New Arrivals (Carousel)
    5\. Value Props (Shipping, Returns, Quality)
    6\. Fat Footer (Links, Newsletter Signup)

-----

## Anti-Patterns (Do NOT Use)

  - ❌ **Aggressive Pop-ups** — Avoid immediate screen-blocking email captures on load; delay them or use slide-ups.
  - ❌ **Hidden Prices/Sizes** — Essential purchasing info must never require a hover to be seen.

### Additional Forbidden Patterns

  - ❌ **Emojis as icons** — Use elegant, thin-line SVG icons (Lucide, Heroicons Outline)
  - ❌ **Missing cursor:pointer** — All clickable elements must have cursor:pointer
  - ❌ **Layout-shifting hovers** — Avoid adding borders on hover that shift the grid; use inset box-shadow or pseudo-elements.
  - ❌ **Low contrast text** — Maintain 4.5:1 minimum contrast ratio, especially on overlapping image text
  - ❌ **Instant state changes** — Always use transitions (150-300ms)
  - ❌ **Invisible focus states** — Focus states must be visible for accessibility and keyboard checkout navigation

-----

## Pre-Delivery Checklist

Before delivering any UI code, verify:

  - [ ] No emojis used as icons (use SVG instead)
  - [ ] All icons from consistent, lightweight icon set (Heroicons Outline/Lucide)
  - [ ] `cursor-pointer` on all clickable elements, including product images
  - [ ] Hover states with smooth transitions (150-300ms)
  - [ ] Text overlaid on images has sufficient contrast or a protective gradient layer
  - [ ] Focus states visible for keyboard navigation (crucial for checkout flows)
  - [ ] `prefers-reduced-motion` respected (disable image zooms and drawer slides if active)
  - [ ] Responsive: 375px (mobile view priority), 768px, 1024px, 1440px
  - [ ] Touch targets on mobile are at least 44x44px (vital for size selectors)
  - [ ] No horizontal scroll on mobile (except intentional product carousels)