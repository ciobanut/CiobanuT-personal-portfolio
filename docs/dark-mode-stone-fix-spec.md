# Spec — Dark Mode: Slate→Stone Neutrals + Fix Black Text

**Status:** Implemented 2026-08-05 · **Scope:** dark mode only · **Date:** 2026-08-05

## Problem

Two dark-mode defects on ciobanut.com:

1. **Black / near-black text on dark surfaces.** Several elements carry no `dark:` text override (or no text color at all), so they inherit the browser's default black and become invisible or unreadable on the dark background.
2. **Blue-tinted background.** Dark mode is built on Tailwind's `slate` ramp (`slate-950`/`900`/`800`/`700`), which reads as cold, blue-tinted gray. The background should be warm — Tailwind's `stone` ramp.

## Scope (confirmed with owner)

| Decision                               | Choice                                                                                                                                                                             |
| -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Which blues swap to stone              | **Neutrals only.** `slate-*` surfaces/borders/divides/text → `stone-*`. Ice (`secondary`, `#0A9EF5`) is kept for brand accents: active nav item, secondary buttons, timeline dots. |
| Light mode                             | **Untouched.** Light mode stays slate. Only `dark:` variants change.                                                                                                               |
| Brand accents (Flame orange, Ice blue) | **Untouched.** Only the neutral ramp moves.                                                                                                                                        |

## Root cause

- There is no global text color set (body inherits black). Text is only readable in dark mode when a component explicitly sets `dark:text-slate-*`.
- Dark surfaces use `slate-*`, which has a blue hue. `stone-*` is the warm-gray equivalent at every step of the ramp.

## Current state audit

Key dark-mode classes today (all `dark:` prefixed):

- `bg-slate-950` (body) / `bg-slate-900` (main container, form labels, nav) / `bg-slate-800` (cards, badges) / `bg-slate-700` (tooltip)
- `border-slate-800` / `border-slate-700` / `border-slate-600` / `border-slate-500`
- `divide-slate-700`, `placeholder:text-slate-500`, `before:bg-slate-700`
- `text-slate-100/200/300/400/500` across every text element

Note: the contact/subscribe forms **already** use `stone` for focus states (`focus:border-stone-600`, `dark:focus:border-stone-400`, `dark:peer-focus:text-stone-400`), matching DESIGN.md's `input-field-focus: '#57534e'` (stone-600). Swapping the surrounding neutrals to stone makes the system consistent instead of split.

## Workstream A — Slate → Stone (dark mode)

Swap every `dark:` neutral to its stone equivalent. Light-mode classes stay slate.

### Color mapping

| Slate (current) | Stone (target)        | Used for                                          |
| --------------- | --------------------- | ------------------------------------------------- |
| `slate-950`     | `stone-950` `#0c0a09` | body background                                   |
| `slate-900`     | `stone-900` `#1c1917` | main container, nav bar, form labels, CTA overlay |
| `slate-800`     | `stone-800` `#292524` | cards, badges, stack tags                         |
| `slate-700`     | `stone-700` `#44403c` | tooltip, borders, divides, timeline rail          |
| `slate-600`     | `stone-600` `#57534e` | input/tag borders                                 |
| `slate-500`     | `stone-500` `#78716c` | nav item hover border                             |
| `slate-400`     | `stone-400` `#a8a29e` | muted dark text, placeholders                     |
| `slate-300`     | `stone-300` `#d6d3d1` | secondary dark text, dark-mode toggle moon        |
| `slate-200`     | `stone-200` `#e7e5e4` | card titles in dark                               |
| `slate-100`     | `stone-100` `#f5f5f4` | primary dark text, headings                       |

### Translation rule

- `dark:bg-slate-N` → `dark:bg-stone-N` (opacity suffixes preserved: `dark:bg-slate-900/50` → `dark:bg-stone-900/50`)
- `dark:border-slate-N` → `dark:border-stone-N`
- `dark:text-slate-N` → `dark:text-stone-N` (including `hover:`, `placeholder:`, `peer-focus:` prefixed variants)
- `dark:divide-slate-N` → `dark:divide-stone-N`
- `dark:before:bg-slate-700` (timeline rail) → `dark:before:bg-stone-700`
- `prose prose-slate dark:prose-invert` — **unchanged**. `prose-slate` only affects light mode; `dark:prose-invert` already neutralizes for dark.

### Global CSS (`src/styles/global.css`)

- `:root.dark .active` uses `text-slate-950` on `bg-secondary-400` (light ice). **Keep.** Dark text on a light accent is correct and the accent is Ice (out of scope). Optionally rename to `text-stone-950` for token purity — no visual change.

### Files touched (Workstream A)

- `src/layouts/Base/BaseLayout.astro` — body `dark:bg-slate-950`, main `dark:border-slate-800 dark:bg-slate-900`
- `src/layouts/Base/Header.astro` — `dark:border-slate-800`, `dark:text-slate-300/400/200`
- `src/layouts/Base/Footer.astro` — `dark:text-slate-400`
- `src/layouts/Base/Navigation/Navigation.astro` — `dark:bg-slate-900/60 dark:border-slate-800 dark:text-slate-400`
- `src/layouts/Base/Navigation/NavigationItem.astro` — `dark:hover:text-slate-100 dark:hover:border-slate-500`
- `src/layouts/SingleWorkLayout.astro`, `SingleBlogLayout.astro`, `WorklogLayout.astro` — headings, prose blocks, divides, related-list rows
- `src/components/*` — Card, CardArticle, SimplePost, BlogPost, WorkPost, Social, TagsList, Tooltip, FaqCard, GetWorklogs, Section/Header, Hero, HappyCustomers, LatestWorklogs, MyStack, CallToAction, ViewAllProjectsLink, TimeLineItem, ContactForm, SubscribeForm, Button
- `src/pages/about.astro`, `thanks.astro` — text overrides

## Workstream B — Fix black / near-black text

Add the missing `dark:` text (and surface) overrides. These are the actual "black text" bugs — elements with no dark override that render black on dark.

### 1. `src/components/Stack/StackCard.astro` (biggest offender)

The stack card has **no text color on the title and no dark override on the description** → invisible titles/descriptions on the dark main container.

- `<h5 class="font-bold">{title}</h5>` → `class="font-bold text-slate-900 dark:text-stone-100"`
- `<span class="text-xs text-slate-600">{description}</span>` → add `dark:text-stone-400`
- wrapper `class="flex border border-slate-200/60 rounded-lg p-3 gap-3"` → add `dark:border-stone-700/60`

### 2. `src/components/HomePageSections/CallToAction.astro`

The "Say hello 👋" and "Let's Connect!" headings have **no text color at all** → black on `dark:bg-stone-900/50`.

- `<h5 class="text-xs font-bold">` → `class="text-xs font-bold text-slate-900 dark:text-stone-100"`
- `<h3 class="text-3xl font-bold">` → `class="text-3xl font-bold text-slate-900 dark:text-stone-100"`

### 3. `src/components/Card.astro`

Inner surface is `bg-slate-50` with **no dark override** → stays light in dark mode, while its content (`ViewAllProjectsLink`) uses `dark:text-slate-100` → light text on light card.

- inner `class="flex flex-col gap-2 p-10 bg-slate-50 rounded-xl justify-center h-full"` → add `dark:bg-stone-800`

### 4. `src/components/DarkModeToggler.astro`

- button `hover:text-slate-950` → add `dark:hover:text-stone-100` (prevents near-black hover tint in dark mode)
- `.moon { fill: #cbd5e1 }` (slate-300, blue-tinted) → `#d6d3d1` (stone-300) for warm consistency

## Workstream C — Dark-fill stack icons (recommended, same PR)

The base SVG stack icons are brand-colored except a few with near-black fills that vanish on the dark surface:

- `src/icons/github.svg` — `#181616` (near-black) → **invisible** on `stone-800`/`stone-900`
- `src/icons/livewire.svg` — `#030776` (dark navy) base path → **near-invisible**

The repo already ships `-dark` / `-light` variants (e.g. `github-dark.svg` with a white-on-`#242938` tile) but nothing selects them. Two options:

1. **Wire the variant system (preferred).** In `StackCard.astro` / `IconList.astro`, render `<Icon name={iconName}>` and, when the `dark` class is present, resolve to `${iconName}-dark`. Requires a tiny client-side re-render on theme toggle (the toggle already flips `document.documentElement`).
2. **CSS-only patch (smaller).** Add `.dark` fill overrides for the specific dark-fill icons. Fragile — only fixes known offenders.

Recommended: option 1, matching the already-shipped asset convention.

## Verification checklist

1. Toggle dark mode on: **Home**, **About**, **Projects**, single **Work**, **Blog**, single **Post**, **Stack**, **Work Logs**, **Contact**, **404**, **Thanks**.
2. Every heading, body, label, and card title is readable — no black-on-dark, no white-on-white.
3. Page background, main card, nav bar, and all inner cards read warm gray, not blue.
4. Ice blue remains on: active nav item, secondary buttons, timeline dots. Flame orange unchanged.
5. Stack page: GitHub / Livewire icons are visible in both modes.
6. Forms: focus ring stays stone in both modes; floating labels legible on the dark surface.
7. Light mode renders pixel-identical to before (zero non-`dark:` edits).
8. `prose` blocks (work descriptions, blog posts) readable in dark — `dark:prose-invert` still applied.

## Out of scope

- Ice (`secondary`) surfaces, Flame (`primary`) surfaces, all light-mode colors
- DESIGN.md color tokens (already document slate; the stone focus-token already exists there)
- New shadows, layout changes, motion

## Suggested commit

`fix: dark mode — swap slate neutrals to stone, fix unreadable text`
