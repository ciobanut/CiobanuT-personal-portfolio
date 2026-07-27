# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary: potential clients** — decision-makers (business owners, startup founders, marketing leads, or agency partners) scoping freelance or contract web development work. They land here to evaluate Tudor's skills, past projects, trustworthiness, and fit before reaching out. They need quick clarity on capabilities, a strong signal of reliability, and a low-friction path to conversation.

Secondary: employers evaluating for a role, and fellow developers reading the blog for technical insight.

## Product Purpose

A personal portfolio website that converts Tudor Ciobanu's technical skills and project experience into client leads and professional credibility. It establishes trust, demonstrates real shipped work (Laravel, WordPress, and beyond), provides a contact channel, and serves as a technical blog for community presence.

Success means a visitor leaves confident Tudor can deliver their project — and has an obvious way to start that conversation.

## Positioning

Full-stack ownership from design handoff to deployment and maintenance — one person who owns the whole lifecycle and delivers production-ready work without handover gaps. Tudor learned Laravel mid-stream on a real client project, not in a tutorial, which proves he figures things out under real constraints. The portfolio itself (Astro + Tailwind) is a demonstration of that: a hand-built static site, not a template.

## Operating Context

- Visitors arrive via search (SEO on skills and location), direct referral, GitHub/LinkedIn profiles, or blog posts shared on social/forums.
- The site is browsed on desktop and mobile — a significant share of initial contact happens on phone (WhatsApp/Telegram links).
- The contact form is the primary conversion point; Telegram and WhatsApp are secondary, lower-friction alternatives.
- Blog content earns long-tail search traffic and positions Tudor as a practitioner who ships real solutions.
- Project case studies serve as the primary proof; each tells a concrete story (problem → process → outcome) with a timeline and client testimonial where available.

## Capabilities and Constraints

- **Pages:** Home, About, Projects, Blog, Contact, Stack, 404, Thanks.
- **Content collections:** Works (7 case studies with schema — title, dates, client, stacks, timeline, optional review/testimonial); Blog (markdown articles).
- **Features:** Dark mode toggle, view transitions, SEO meta/OG tags, Yandex Metrika analytics, contact form (Web3Forms API), responsive card layout, floating bottom navigation, favicon generation pipeline.
- **Technical stack:** Astro 3 (SSG) + Tailwind CSS 3 + TypeScript. No database, no server, no CMS. Content managed via markdown files in `src/content/`.
- **Deployment:** Netlify (static export to `dist/`), domain ciobanut.com.
- **No hard binding constraints** on future changes beyond what the stack and content architecture imply.

## Brand Commitments

- **Name:** Tudor Ciobanu / CiobanuT / CiobanuT.com
- **Domain:** ciobanut.com
- **Voice:** Direct, factual, approachable — describes his work plainly without hype. Communicates in English; acknowledges spoken English is a work in progress.
- **Tagline (used on site):** "Laravel and WordPress developer"
- **Colors:** Primary orange `#F45D22`, secondary blue `#0A9EF5`, slate neutrals.
- **Fonts:** Inter (body/headings), Source Serif Pro (blog prose), Comforter (decorative/handwriting accent).
- **Social presence:** GitHub (ciobanut), LinkedIn (tudor-ciobanu-02286b178), Telegram (@ciobanut), WhatsApp (+37361189770). These profiles are the public home of the brand and must stay consistent.
- **Contact email:** iofesty@gmail.com

## Evidence on Hand

- 7 project case studies with real clients, timelines, and technologies used (in `src/content/works/`)
- 2 technical blog posts on Laravel and Docker/Typesense
- 2 client testimonials (from Supreme Veritas and MyPrivateOrder.com clients)
- 8 FAQ answers that serve as pre-sales objection handling
- Full configurable tech-stack list (20+ tools in `config.js`)
- The site itself is a working demo of Tudor's Astro + Tailwind capabilities

Absences: no formal case-study PDFs, no video walkthroughs, no downloadable resume — currently not needed.

## Product Principles

1. **The portfolio itself is the proof.** Every design and content decision should demonstrate the quality, speed, and attention to detail Tudor brings to client work. A developer who ships a polished site earns trust to ship yours.
2. **Clients come first; peers get a bonus.** Navigation, copy, and contact paths prioritize the client's evaluation and decision. Blog content serves peers but must not distract from the conversion flow.
3. **Real stories beat claims.** Use concrete projects, timelines, client words, and technical specifics rather than generic skill lists. The FAQ and bio are honest about limitations (English speaking, experience level).
4. **Fast and lightweight.** Static-first approach keeps pages instant. No unnecessary JavaScript, no frameworks for their own sake, no database dependency.
5. **Own the whole chain.** From content to layout to deployment — every layer is hand-built and understood, not assembled from templates.

## Accessibility & Inclusion

No formal target level has been set. The site uses semantic HTML, responsive design, and respects `prefers-color-scheme` for dark mode. No screen-reader-specific testing or WCAG auditing has been performed.
