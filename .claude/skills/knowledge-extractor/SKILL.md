---
name: knowledge-extractor
description: Extract reusable engineering knowledge from each journal article and build a personal knowledge base over time.
---

# Purpose

After writing an engineering journal or blog article, extract the reusable technical knowledge and store it in a structured knowledge base. Over months, this builds a personal reference library of lessons learned.

## What to extract

Scan the article for insights that are reusable across projects:

- **Laravel** — pattern discoveries, Eloquent tricks, service container usage.
- **Livewire** — component architecture, reactivity patterns, quirks.
- **Docker / Docker Swarm** — networking, secrets, multi-stage builds.
- **Redis** — caching strategies, queue patterns, data structures.
- **Architecture** — service layers, DTOs, enums vs DB tables, refactoring patterns.
- **Performance** — query optimization, caching, rendering bottlenecks.
- **Security** — authentication patterns, secret management, input validation.

## Output

Append to a running knowledge file `docs/engineering-knowledge.md`. Each entry:

```markdown
## <topic>: <specific lesson>

**Source:** <link to article>
**Date:** <YYYY-MM-DD>

<what was learned, in 2-4 sentences. Specific enough to act on.>
```

## Rules

- Only extract if the lesson is genuinely reusable — not one-off context.
- Deduplicate: check if the knowledge file already covers this.
- Be specific. Instead of "use caching", say "Cache::rememberForever with model boot events for infrequently-changed lookup data."
