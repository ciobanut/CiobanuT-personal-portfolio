---
name: 'CiobanuT Portfolio'
description: 'Personal portfolio for Tudor Ciobanu — Laravel and WordPress web developer'
colors:
  flame: '#F45D22'
  flame-50: '#FDDDD1'
  flame-100: '#FCCFBD'
  flame-200: '#FAB297'
  flame-300: '#F89670'
  flame-400: '#F67949'
  flame-500: '#F45D22'
  flame-600: '#D3430B'
  flame-700: '#9E3208'
  flame-800: '#682105'
  flame-900: '#331003'
  flame-950: '#180801'
  ice: '#0A9EF5'
  ice-50: '#BAE4FC'
  ice-100: '#A7DCFB'
  ice-200: '#80CDFA'
  ice-300: '#58BDF8'
  ice-400: '#31AEF7'
  ice-500: '#0A9EF5'
  ice-600: '#087BBF'
  ice-700: '#065889'
  ice-800: '#033653'
  ice-900: '#01131D'
  ice-950: '#000202'
  neutral-bg: '#f8fafc'
  neutral-surface: '#ffffff'
  neutral-border: '#e2e8f0'
  neutral-border-soft: '#f1f5f9'
  neutral-border-strong: '#cbd5e1'
  neutral-text: '#475569'
  neutral-text-strong: '#0f172a'
  neutral-text-muted: '#64748b'
typography:
  display:
    fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif'
    fontSize: 'clamp(1.875rem, 5vw, 2.25rem)'
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: '-0.025em'
  body:
    fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif'
    fontSize: '1rem'
    fontWeight: 400
    lineHeight: 1.625
  prose:
    fontFamily: 'Source Serif Pro, Georgia, serif'
    fontSize: '1.125rem'
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif'
    fontSize: '0.75rem'
    fontWeight: 400
    letterSpacing: 'normal'
  hand:
    fontFamily: 'Comforter, cursive'
    fontSize: '2.25rem'
    fontWeight: 400
rounded:
  sm: '0.25rem'
  md: '0.375rem'
  lg: '0.5rem'
  xl: '0.75rem'
  xxl: '1rem'
  xxxl: '1.5rem'
  full: '9999px'
spacing:
  xs: '0.75rem'
  sm: '1.25rem'
  md: '2rem'
  lg: '3.5rem'
  container: '56rem'
components:
  button-primary:
    backgroundColor: '{colors.flame}'
    textColor: '#ffffff'
    rounded: '{rounded.lg}'
    padding: '0.625rem 1.25rem'
    typography: '{typography.display}'
  button-primary-hover:
    backgroundColor: '{colors.flame-600}'
  button-secondary:
    backgroundColor: '{colors.ice}'
    textColor: '#ffffff'
    rounded: '{rounded.lg}'
    padding: '0.625rem 1.25rem'
  button-secondary-hover:
    backgroundColor: '{colors.ice-600}'
  button-default:
    backgroundColor: '#f1f5f9'
    textColor: '#0f172a'
    rounded: '{rounded.sm}'
    padding: '0.5rem 0.75rem'
  button-badge:
    backgroundColor: '#f1f5f9'
    textColor: '#64748b'
    rounded: '{rounded.full}'
    padding: '0.25rem 0.5rem'
  button-link:
    backgroundColor: 'transparent'
    textColor: '#331003'
    padding: '0 0.5rem'
  card-default:
    backgroundColor: '{colors.neutral-surface}'
    textColor: '{colors.neutral-text-strong}'
    rounded: '{rounded.xxl}'
    padding: '0.5rem'
  card-inner:
    backgroundColor: '#f8fafc'
    rounded: '{rounded.xl}'
    padding: '2.5rem'
  input-field:
    backgroundColor: 'transparent'
    textColor: '#0f172a'
    rounded: '{rounded.lg}'
    padding: '0.75rem 0.625rem'
  input-field-focus:
    borderColor: '#57534e'
  nav-item:
    backgroundColor: 'transparent'
    textColor: '#64748b'
    rounded: '{rounded.xl}'
    padding: '0.5rem'
  nav-item-active:
    backgroundColor: '{colors.ice}'
    textColor: '#ffffff'
  tooltip:
    backgroundColor: '#1e293b'
    textColor: '#ffffff'
    rounded: '{rounded.md}'
    padding: '0.25rem 0.625rem'
---

# Design System: CiobanuT Portfolio

## Overview

**Creative North Star: "The Dock Brief"**

A personal portfolio that reads like a captain's log: direct, truthful, purposeful. Every element has a job. The design does not perform — it presents. Warmth comes from personality and candor, not decoration. The orange ("Flame") is a signal, used sparingly to mark what matters. The blue ("Ice") is a steady current beneath interactions — present but never demanding attention.

The page feels like a well-organized brief handed across a desk: structured without being stiff, friendly without being casual. Content is framed in white card stock on a warm-slate ground, with rounded corners that keep the edges approachable. The fixed bottom nav with glassmorphism is the one lifted gesture — it stays out of the way until needed, then feels solid and intentional.

This is a portfolio for a developer who ships. The design communicates reliability, clarity, and a human behind the screen.

**Key Characteristics:**

- Card-based layout on a warm neutral ground — content floats in white containers
- Two-accent palette: Flame (orange, high-signal) + Ice (blue, interaction-focused)
- Rounded edges at every scale — from 6px inputs to 24px container corners
- Typography-driven: Inter carries the weight; Source Serif Pro slows down reading on blog posts
- Flat by default, with depth reserved for interactive state (nav glassmorphism, button shine)
- Dark mode that respects system preference and persists choice

## Colors

A two-accent palette with a slate neutral core. Flame is the attention signal — buttons, icons, highlights. Ice is the interaction color — active navigation, secondary actions, hover states. Slate neutrals provide the reading environment — calm, professional, never competing.

### Primary (Flame)

- **Flame** (#F45D22 / `oklch(62.5% 0.187 43.5)`): The signature accent. Used on primary CTAs, key icons, and section headings. The 50–950 scale provides tonal flexibility for backgrounds (50), hover (600), and pressed (700) states.
- **Role:** Primary buttons, icon accents, decorative section markers, selection highlight background.
- **Signal rule:** Flame appears on ≤15% of any given viewport. Its rarity is what gives it power.

### Secondary (Ice)

- **Ice** (#0A9EF5 / `oklch(62.1% 0.156 249)`): The steady counterpart. Used for secondary actions, active navigation item, and as an alternative accent.
- **Role:** Secondary buttons, active nav state, selected filters, alternate icon color.

### Neutral (Slate)

- **Slate-50** (#f8fafc): Page background. The warm-light grey that frames all content.
- **White** (#ffffff): Card and container surfaces. Content lives on white.
- **Slate-100** (#f1f5f9): Subtle container backgrounds (card inner, header).
- **Slate-200** (#e2e8f0): Borders — cards, containers, sections.
- **Slate-300** (#cbd5e1): Stronger borders — tags, field strokes.
- **Slate-400** (#94a3b8): Placeholder and disabled text.
- **Slate-500** (#64748b): Muted body text, secondary labels, social icons, footer.
- **Slate-600** (#475569): Body text (primary reading).
- **Slate-700** (#334155): Strong body text.
- **Slate-800** (#1e293b): Bold headings and emphasized text.
- **Slate-900** (#0f172a): Headings, heavy text, hero titles.
- **Slate-950** (#020617): Near-black — overlay text on light sections.

### Named Rules

**The Signal Rule.** Flame (the primary accent) is used on ≤15% of any given viewport. Its rarity is the point — when Flame appears, the visitor knows it means something. Overuse would turn the portfolio into a carnival.

**The Warm Ground Rule.** The page background (slate-50) is never pure white. White is reserved for content containers. This creates a subtle depth hierarchy without shadows: the page is the ground, cards float just above it.

## Typography

**Display & Body Font:** Inter (variable 100–900, with ui-sans-serif / system-ui fallback)
**Prose Font:** Source Serif Pro (with Georgia, serif fallback) — blog posts and long-form project descriptions
**Hand Accent:** Comforter (cursive) — personal signature on the About page only

**Character:** The pairing is a workhorse serif-sans combination for the web. Inter is clean, neutral, and highly readable at all sizes — it does the job without calling attention to itself. Source Serif Pro brings a measured, authoritative rhythm to long-form reading. The Comforter hand accent is a single personal touch, used once.

### Hierarchy

- **Display** (Bold 700, `clamp(1.875rem, 5vw, 2.25rem)`, tight 1.1, -0.025em tracking): Hero headings and section titles. The bold weight and tight tracking give it a confident, editorial presence.
- **Headline** (Bold 700, `1.25rem` / `1.5rem` / `1.875rem`, 1.25): Subheadings within sections. Three tiers used — h1 (3xl/4xl), h2 (2xl/3xl), h3 (xl/2xl).
- **Title** (Semibold 600, `1.125rem`, 1.3, -0.025em): Card titles and list item headings in work/blog previews.
- **Body** (Normal 400, `1rem` / `1.125rem`, 1.625): All reading text. On desktop the scale shifts up slightly (text-lg). Max line length approximately 65–70ch inside the 4xl container.
- **Prose** (Normal 400, `1.125rem`, 1.75): Blog and project description body, set in Source Serif Pro. Slower, more comfortable reading rhythm.
- **Label** (Normal 400, `0.75rem` / `0.875rem`): Small text — footer, form labels, metadata tags, timestamps.
- **Hand** (Normal 400, `2.25rem`): The decorative Comforter signature. Used exactly once: the name "Tudor Ciobanu" on the About page.

## Layout

**Grid model:** Single-column flex layout on mobile, expanding to a single wide column (max-w-4xl = 56rem) centered on larger screens. The main content card is a rounded-3xl white container with a 1px slate-200 border, held at the center of the viewport with generous top/bottom margin.

**Container behavior:** All page content lives inside one `main` element with `mx-auto max-w-4xl flex flex-col gap-14`. Sections stack vertically with gap-14 between them. The body carries `m-5 sm:mx-8` for outer breathing room.

**Density:** Spacious. Sections are separated by 3.5rem (gap-14). Within sections, content uses gap-3 (0.75rem), gap-5 (1.25rem), or gap-6 (1.5rem) depending on context. Cards use padding-5 (1.25rem) inner with optional larger p-10.

**Responsive behavior:**

- Below `sm` (640px): Single column, tighter margins (m-5), full-width cards, centered text on sections.
- `sm` (640px+): Wider horizontal margins (mx-8), text can go left, two-column layouts emerge (FAQ in columns-2, testimonials in columns-2).
- `md` (768px+): Work grid switches to 2 columns for related projects.
- Container caps at max-w-4xl (56rem) and does not grow beyond.

**Spacing rhythm:**

- Outer page margin: `1.25rem` (m-5) → `2rem` (sm:mx-8)
- Container padding: `1.25rem` (p-5) → `2.5rem` horizontal / `2rem` vertical (sm:px-10 sm:py-8)
- Section gap: `3.5rem` (gap-14)
- Internal component gaps: `0.75rem` (gap-3), `1.25rem` (gap-5)

## Elevation & Depth

The system is **flat by default, lifted in specific interaction moments.** The visual hierarchy is established through tonal layering (slate-50 ground, white surfaces, slate-200 borders) rather than shadows. This keeps the page clean, fast, and distraction-free.

**Where depth exists:**

- **Navigation bar** (`drop-shadow-2xl`, `backdrop-blur-md`, `bg-white/60`): The only significant shadow in the system. It visually separates the fixed bottom nav from the scrolling content below. The glassmorphism (blur + semi-transparency) softens the break between content and chrome.
- **Button hover:** No box-shadow. Depth is conveyed through the white-overlay shine effect that translates diagonally across the button on hover — a motion cue, not a spatial one.

**Dark mode:** Same philosophy. Surfaces use the dark equivalent of slate tonal layering. No new shadows are introduced.

### Named Rules

**The Flat-By-Default Rule.** Surfaces are flat at rest. Shadows appear only as a functional signal — the navigation needs one because it floats above scrolling content. No card, container, or button has a resting shadow.

## Shapes

Rounded corners are the defining shape language — applied at every scale with deliberate variation by role.

**Corner vocabulary:**

- **Full** (`9999px`): Avatars, active badges, pill buttons, the top header bar.
- **3xl** (`1.5rem` / 24px): The main content container. The outermost frame.
- **2xl** (`1rem` / 16px): Cards, CTA sections, testimonials, project detail images.
- **Xl** (`0.75rem` / 12px): Navigation items, dark mode toggle, card inner sections.
- **Lg** (`0.5rem` / 8px): Large buttons, input fields.
- **Md** (`0.375rem` / 6px): Medium buttons, tooltips.
- **Sm** (`0.25rem` / 4px): Default/small buttons.

**Borders:**

- Cards and containers: `1px solid` in `slate-200` (#e2e8f0) or `slate-100` (#f1f5f9).
- Input fields: `1px solid` in `slate-300` (#cbd5e1).
- Tag/badge chips: `1px solid` in `slate-300` (#cbd5e1).
- Top header: `1px solid` in `slate-100`.
- Navigation items at rest: `1px solid` in `slate-400/20` (very subtle).

**No clipping, masks, or non-rectangular shapes** (except the decorative SVG blobs in the CTA section, which are background atmosphere, not shape language).

## Components

### Buttons

Confident, grounded, with a single motion detail that makes them feel alive.

- **Shape:** Rounded based on size — `sm` (4px), `md` (6px), `lg` (8px).
- **Primary:** Flame (`#F45D22`) background, white text. Hover: Flame-600 (`#D3430B`).
- **Secondary:** Ice (`#0A9EF5`) background, white text. Hover: Ice-600 (`#087BBF`).
- **Default:** Slate-100 background, slate-900 text. For tertiary actions.
- **Link:** Transparent background, Flame-900 text. Inline within text sections.
- **Badge:** Slate-100 background, slate-500 text, full rounded. Tags and filter chips.
- **Hover animation:** A white `20%` opacity overlay rectangle sits inside each button. On hover, it translates diagonally across the button over 1s, creating a shine sweep. Accompanying icons shift +1px on the X axis.
- **Icon:** When present, icons animate `translate-x` on group hover. Always placed after the label (icon on right).
- **Sizes:** `sm` (px-2 py-0.5), `md` (px-3 py-1.5), `lg` (px-5 py-2, sm:px-7 sm:py-2.5).

### Navigation (Bottom Bar)

The signature chrome element. Fixed at viewport bottom, centered, floating.

- **Position:** `fixed bottom-6 left-1/2 -translate-x-1/2`, above all content.
- **Style:** Glassmorphism — `background: white/60`, `backdrop-blur-md`, `border: 1px solid white/60`, `drop-shadow-2xl`.
- **Shape:** rounded-2xl (16px) outer container, rounded-xl (12px) items.
- **Items:** Icons with tooltip labels on hover. Default: slate-500 text, subtle border. Hover: slate-950 text, stronger border.
- **Active:** Ice background, white text, solid border. Indicates current page.
- **Items:** Home, About, Projects, Blog, Stack, Contact — in that order. Six items, centered.

### Cards / Containers

The primary content vessel. Two layers for most cards.

- **Outer layer:** white background, `1px solid` slate-200 border, rounded-2xl (16px), p-2 (8px).
- **Inner layer** (when used): slate-50 background, rounded-xl (12px), p-10 (40px) on feature cards.
- **Simple post cards** (work/blog thumbnails): Rounded-2xl container, image in rounded-2xl with p-2, content area with p-3 pt-1 pb-5 (12px top, 4px bottom, 20px bottom).
- **Testimonial cards:** Single-layer white on slate-50 columns layout. Display avatar, name, client name, and review text.

### Inputs / Fields

Floating-label pattern on the contact form — friendly, responsive, with clear state changes.

- **Style:** Transparent background, `1px solid` slate-300 stroke, rounded-lg (8px).
- **Label:** Floating — starts centered inside the field, animates up to the top-left on focus or when filled. White background behind the label text prevents visual collision with the border.
- **Focus:** Border shifts from slate-300 to stone-600 (`#57534e`). No glow, no ring — just a firmer line.
- **Filled state:** Peer-based: once `:not(:placeholder-shown)`, label stays in the floating position.
- **Textarea:** Same treatment, with 7 rows default and a helper text line below.
- **Error / Disabled:** No custom error states observed in the component (handled by browser defaults).

### Tooltips

Floating labels on navigation items and icon buttons.

- **Style:** Slate-800 background, white text, rounded-md (6px), px-2.5 py-1.
- **Position:** Centered above the trigger element, with a small rotated square arrow bridging the gap.
- **Behavior:** `opacity-0` at rest, `opacity-100` on parent hover. 300ms transition.

### Section Headers

Consistent title pattern across every section.

- **Layout:** Centered flex column, gap-3, mb-8.
- **Icon (optional):** 2rem (w-8), rendered in Flame-400 (`#F67949`).
- **Title:** Bold 700, responsive `text-3xl/sm:text-4xl`, tight tracking, slate-900.
- **Description (optional):** Centered text, constrained to `max-w-[400px]`, slate-500, slightly larger weight.

### Dark Mode Toggle

A single button in the navigation area. Sun/moon icon pair — one visible per mode.

- **Style:** No background, `1px solid` slate-500/10 border, rounded-xl (12px), hover border intensifies.
- **Behavior:** Reads `prefers-color-scheme` and `localStorage("theme")` on load. Toggles `dark` class on `<html>`. Persists choice.
- **Icon:** Inline SVG. Sun (black fills) visible in light mode. Moon (`#ddd` fills) visible in dark mode via `.dark` scoping.

### Top Header

Avatar, name, title, and availability indicator in a compact bar.

- **Style:** Slate-100 border, rounded-full (pill), px-2.5 py-2.
- **Avatar:** w-12 h-12 rounded-full, linked to About page.
- **Name & title:** "Ciobanu Tudor" in medium slate-700, "Web Developer" in xs slate-600.
- **Availability indicator:** Green pulsing dot + "Available for Amazing Projects" link, visible on `sm:` and above.

## Do's and Don'ts

### Do:

- **Do** use Flame sparingly — it's the signature accent, not a background color. One primary button, one icon, one highlight per viewport.
- **Do** keep content on white surfaces against the slate-50 page background. This maintains the card-on-ground hierarchy.
- **Do** use the full rounding vocabulary — from 4px (small buttons) to 24px (container) — to create visual rhythm.
- **Do** use Source Serif Pro for blog posts and long-form project descriptions. Inter for everything else.
- **Do** respect the gap-14 section spacing. Crowding sections undermines the airy, professional feel.
- **Do** use the floating label pattern on all form fields — it signals attention to UX detail.
- **Do** prefer flat surfaces over shadows. The navigation is the only element that should cast a shadow.

### Don't:

- **Don't** add shadows to cards, buttons, or containers. Depth is conveyed through tonal layering, not box-shadow.
- **Don't** use Flame on more than ~15% of any screen. It loses its signaling power when overused.
- **Don't** use the Comforter hand font anywhere except the About page signature.
- **Don't** add new animation patterns without matching the button shine sweep's character (single axis, slow ease, purposeful reveal).
- **Don't** introduce a third accent color. The Flame + Ice + Slate triangle is the full palette.
- **Don't** overload the navigation — it fits exactly six items and should stay there.
- **Don't** replace the inline SVG icons with font-based icon systems. The `astro-icon` + Phosphor set is the icon standard.
- **Don't** use box-shadow on focus states. Use border color shift (slate-300 → stone-600).
