# Audit Report: CiobanuT Portfolio

## Executive Summary

- **Audit Health Score: 11/20** (Acceptable)
- **Total issues found:** 12 (1x P1, 6x P2, 5x P3)
- **Top critical issues:**
  1. **P1** — Broken dark mode: config set to `'media'`, toggle toggles `'class'`, zero `dark:` variants exist
  2. **P2** — No `<h1>` on any top-level page; broken heading hierarchy site-wide
  3. **P2** — Google Fonts preloaded but not consumed within load window
  4. **P2** — FAQ accordion uses checkbox hack with no ARIA states
  5. **P2** — Zero `dark:` variants means dark mode renders invisibly

---

## Audit Health Score

| #         | Dimension                | Score     | Key Finding                                                                                                    |
| --------- | ------------------------ | --------- | -------------------------------------------------------------------------------------------------------------- |
| 1         | Accessibility            | 2         | No h1 on top-level pages; broken heading hierarchy; no skip-to-content; checkbox-hack FAQ; focus rings removed |
| 2         | Performance              | 3         | All images load eagerly; Google Fonts preload not consumed; HandIcon SVG ~8-10KB inline on every page          |
| 3         | Theming                  | 1         | Dark mode non-functional (config + zero variants); CTA blobs and `#ddd` outside palette                        |
| 4         | Responsive Design        | 3         | Solid responsive layout — minor: no `prefers-reduced-motion`, touch targets undocumented                       |
| 5         | Implementation Integrity | 2         | 3 detector findings; CTA blobs violate system; Button component has dual styling mechanisms                    |
| **Total** |                          | **11/20** | **Acceptable**                                                                                                 |

---

## Implementation Integrity Verdict

**PASS with reservations.** The implementation expresses a coherent product-specific system (Flame/Ice/Slate palette, consistent rounding vocabulary, fixed bottom nav as signature element). However, the dark mode gap is systemic — the toggle exists but the implementation was never completed. The CTA decorative blobs in pastel pink/blue represent active drift from the documented design system. The Button component exposes both a structured variant/size API and ad-hoc `bg_color`/`text_color`/`padding` props that bypass it. Three detector findings (color outside palette, overused font, single-font hierarchy) are confirmed.

---

## Detailed Findings by Severity

### P1 — Major

**P1.1: Dark mode toggle is non-functional and no dark variants exist**

- **Location:** `tailwind.config.js` (no `darkMode: 'class'`); `DarkModeToggler.astro` (toggles class); all components (zero `dark:` variants)
- **Category:** Theming
- **Impact:** Users who toggle dark mode see no visual change or broken rendering. The nav's `bg-white/60` on a dark background becomes transparent. Dark-mode-first users (macOS dark mode enabled) get a broken experience on first visit because the script reads `prefers-color-scheme` and sets the `dark` class, but no styles respond to it.
- **WCAG/Standard:** WCAG 1.4.1 (Use of Color) — if information is conveyed through theme, it must be perceivable
- **Recommendation:** Set `darkMode: 'class'` in tailwind.config.js, add `dark:` variants to every component (body, container, cards, nav, buttons, text, borders), ensure the toggle script handles ViewTransitions hydration correctly
- **Suggested command:** `/impeccable polish`

### P2 — Minor

**P2.1: No `<h1>` on any top-level page**

- **Location:** `src/pages/index.astro:12`, `src/pages/about.astro:19`, `src/pages/works.astro`, `src/pages/blog.astro`, `src/pages/contact.astro`, `src/pages/stack.astro`
- **Category:** Accessibility
- **Impact:** Every top-level page lacks an `<h1>` landmark. Screen reader users navigating by headings cannot identify the page purpose. WCAG 1.3.1 violation. SEO impact — `<h1>` is a primary ranking signal.
- **WCAG/Standard:** WCAG 1.3.1 (Info and Relationships)
- **Recommendation:** Add `<h1>` to each page matching its `pageTitle`. Ensure sequential heading hierarchy: h1 → h2 for sections → h3 for subsections. The `Header.astro` component should accept a `tag` prop for heading level.
- **Suggested command:** `/impeccable audit` (manual fix)

**P2.2: Google Fonts preload not consumed within load window**

- **Location:** `src/layouts/Base/BaseLayout.astro:29-35`
- **Category:** Performance
- **Impact:** Browser warning: "preloaded but not used within a few seconds from the window's load event." The preload uses `as="style"` but the font stylesheet may load after the preload is expected to be consumed. This wastes the preload benefit.
- **Recommendation:** Remove the `rel="preload"` on the Google Fonts URL and let it load naturally, or ensure the stylesheet is fetched with matching `as` and `crossorigin`. Alternatively, switch to `@fontsource/inter` which is already in package.json but commented out.
- **Suggested command:** `/impeccable optimize`

**P2.3: FAQ accordion uses checkbox hack without ARIA**

- **Location:** `src/components/Faq/FaqCard.astro:9-29`
- **Category:** Accessibility
- **Impact:** The accordion toggle (`<input type="checkbox">`) has no `aria-expanded`, `aria-controls`, or `role` attribute. The checkbox is hidden via CSS (`h-0 w-0 appearance-none`), making it potentially unreachable or invisible to some screen reader configurations. The answer content visibility is controlled by CSS opacity/scale but remains in the DOM — screen readers may still read invisible content.
- **WCAG/Standard:** WCAG 4.1.2 (Name, Role, Value)
- **Recommendation:** Replace with `<details>/<summary>` elements (semantic, accessible by default) or add `role="button"`, `aria-expanded`, and proper keyboard handling. Alternatively, use `inert` attribute or `hidden` to remove invisible content from the accessibility tree.
- **Suggested command:** `/impeccable audit` (manual fix)

**P2.4: Focus rings removed from all form inputs**

- **Location:** `src/components/Form/ContactForm.astro:32,52,72`, `src/components/SubscribeForm.astro:10`
- **Category:** Accessibility
- **Impact:** All inputs use `focus:outline-none focus:ring-0`, removing the browser's default focus indicator. The replacement (`focus:border-stone-600` — a subtle brown border shift) may not provide sufficient visual contrast for keyboard users, especially on high-resolution or bright displays.
- **WCAG/Standard:** WCAG 2.4.7 (Focus Visible)
- **Recommendation:** Replace `focus:ring-0` with `focus:ring-2 focus:ring-primary-500/50` or similar visible focus ring that matches the design system. The border color shift should supplement, not replace, a visible focus indicator.
- **Suggested command:** `/impeccable audit`

**P2.5: No `prefers-reduced-motion` media query**

- **Location:** Throughout — button shine animation (`Button.astro`), hand wave (`HandIcon`), green pulse dot (`Header.astro`), FAQ animations
- **Category:** Accessibility
- **Impact:** Users with vestibular motion disorders have no way to disable non-essential animations. The hand wave runs on a 5-second infinite loop. The button shine translates across the button on hover. The green dot pulses indefinitely.
- **WCAG/Standard:** WCAG 2.3.3 (Animation from Interactions) — though advisory, it's a best practice at AA
- **Recommendation:** Wrap all CSS animations in `@media (prefers-reduced-motion: no-preference)`. Ensure the hand wave and button shine are respectful of user preferences.
- **Suggested command:** `/impeccable audit`

**P2.6: CTA decorative blobs outside design system palette**

- **Location:** `src/components/HomePageSections/CallToAction.astro:32-51`
- **Category:** Theming / Implementation Integrity
- **Impact:** The CTA section uses SVG blobs with `#A9C9FF` (light blue) → `#FFBBEC` (pink) gradient. Neither color exists in the DESIGN.md palette (Flame/Ice/Slate). This introduces visual inconsistency at the conversion moment.
- **Recommendation:** Replace gradient with Flame-50 → transparent, Ice-50 → transparent, or a simple slate-100 wash. Keep the organic blob shape (it's visually effective) but use system colors.
- **Suggested command:** `/impeccable colorize`

### P3 — Polish

**P3.1: Detector: `#ddd` color outside DESIGN.md**

- **Location:** `src/components/DarkModeToggler.astro:39`
- **Category:** Theming
- **Impact:** The moon icon fill uses `#ddd` — a color not in the design system palette. The dark mode toggle is the place to get dark mode colors right; using ad-hoc values here compounds the theming problem.
- **Recommendation:** Replace `#ddd` with `slate-300` (`#cbd5e1`) or similar documented neutral.
- **Suggested command:** `/impeccable colorize`

**P3.2: Button component has dual styling mechanisms**

- **Location:** `src/components/Form/Button.astro:9-25`, `src/components/TagsList.astro:9-15`
- **Category:** Implementation Integrity
- **Impact:** Button.astro defines a clean variant/size API (`btn.Variant.primary`/`btn.Size.lg`). But TagsList.astro passes `bg_color`, `text_color`, and `padding` as raw props that spread via `{...props}` — these bypass the variant system entirely and create undocumented component behavior.
- **Recommendation:** Either add `bg_color`/`text_color`/`padding` as explicit Button props with documentation, or refactor TagsList to use the existing variant/size API with a new `tag` variant.
- **Suggested command:** `/impeccable polish`

**P3.3: ContactForm honeypot has redundant hiding**

- **Location:** `src/components/Form/ContactForm.astro:88`
- **Category:** Implementation Integrity
- **Impact:** The anti-spam honeypot checkbox uses both `class="hidden"` AND `style="display: none;"` — redundant. `class="hidden"` (Tailwind's `display: none`) is sufficient.
- **Recommendation:** Remove `style="display: none;"` and keep only `class="hidden"`.
- **Suggested command:** `/impeccable polish`

**P3.4: Hero section has no `max-width` on paragraph**

- **Location:** `src/components/HomePageSections/Hero.astro:16-18`
- **Category:** Responsive / Accessibility
- **Impact:** The hero paragraph lacks a `max-width` constraint. On screens wider than ~1024px (within the 4xl container), text stretches to approximately 650px — exceeding the 65-70ch comfortable reading range for body text.
- **Recommendation:** Add `max-w-prose` or `max-w-2xl` to the paragraph.
- **Suggested command:** `/impeccable layout`

**P3.5: No lazy loading on images**

- **Location:** All `<img>` and `<Image>` tags across components
- **Category:** Performance
- **Impact:** No images use `loading="lazy"`. Below-the-fold images (work samples, testimonials) load eagerly on every page visit, adding unnecessary weight to initial page load.
- **Recommendation:** Add `loading="lazy"` to all images below the initial viewport. The astro:assets `<Image />` component supports a `loading` prop.
- **Suggested command:** `/impeccable optimize`

---

## Patterns & Systemic Issues

1. **Zero dark mode implementation.** The toggle reads `prefers-color-scheme`, persists to localStorage, and toggles a `dark` class on `<html>`. But `tailwind.config.js` doesn't enable class-based dark mode, and not a single component has `dark:` variants. This is not an oversight in one component — it's a missing foundation. The toggle is UI without function.

2. **Heading hierarchy is broken site-wide, not just on the homepage.** No top-level page (`index`, `about`, `works`, `blog`, `contact`, `stack`, `404`, `thanks`) has an `<h1>`. The `Header.astro` component hardcodes `<h4>` for all section titles. Fixing this requires a coordinated change across the layout system, not per-page edits.

3. **Focus indicators replaced with color-only cues.** The `focus:outline-none focus:ring-0` pattern appears 4 times across 2 components. The replacement (`focus:border-stone-600`) is a color change only — no width, no offset, no ring. A keyboard user navigating at a glance cannot see which field has focus.

4. **Semantic components for interactive patterns are missing ARIA.** The FAQ accordion, the bottom nav active state, and the dark mode toggle all lack proper ARIA attributes for state communication.

---

## Positive Findings

1. **Tailwind JIT mode enables minimal CSS output.** The `mode: 'jit'` in tailwind.config.js means only used utilities are compiled — a best practice for performance.

2. **Design token usage is consistent in color application.** Despite the system violations noted above, the Flame/Ice/Slate palette is used consistently in the vast majority of components. The CTA blobs and DarkModeToggler `#ddd` are exceptions, not the rule.

3. **Responsive behavior is thoughtful.** Breakpoints at `sm`, `md`, and custom `max-[400px]` are used strategically. The section layout collapses gracefully. The navigation is fixed at the bottom — in the thumb zone — which is a mobile-first choice many portfolios get wrong.

4. **Static site generation eliminates most performance concerns.** With no SSR overhead, no client-side framework hydration, and prebuilt HTML, the baseline performance is excellent. The issues found (eager image loading, font preload) are optimizations, not fundamental problems.

5. **ARIA labels exist on navigation and social links.** While sparse, the labels that exist (`aria-label="Open page Home"`, `aria-label={"Open page " + title}`) are correctly implemented and meaningful.

---

## Recommended Actions

1. **[P1] `/impeccable polish`**: Fix dark mode foundation — add `darkMode: 'class'` to config, audit all components for dark variants. Replace `#ddd` in `DarkModeToggler` with slate-300.
2. **[P2] `/impeccable audit` (manual)**: Fix heading hierarchy — add `<h1>` to all top-level pages, standardize `Header.astro` component with a `tag` prop.
3. **[P2] `/impeccable audit`**: Replace FAQ checkbox-hack with `<details>/<summary>`. Add visible focus indicators. Add `prefers-reduced-motion`.
4. **[P2] `/impeccable colorize`**: Fix CTA blob colors to use Flame/Ice/Slate palette.
5. **[P3] `/impeccable optimize`**: Add `loading="lazy"` to images. Fix font preload.
6. **[P3] `/impeccable layout`**: Add max-width to hero paragraph.
7. **[P3] `/impeccable polish`**: Clean up redundant honeypot hiding, document Button component props.

You can ask me to run these one at a time, all at once, or in any order you prefer.

Re-run `/impeccable audit` after fixes to see your score improve.
