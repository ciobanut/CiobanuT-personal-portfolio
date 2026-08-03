---
name: engineering-journal
description: Generate a compact daily engineering journal entry from Git analysis.
---

# Purpose

Create a compact personal engineering journal entry based on today's work and save it to `src/content/worklogs/`.

Document what I built, what changed, and what I learned.

Use `blog-writer` separately when a story is worth expanding into a full article.

## Writing Style

- Maximum 350 words.
- Short sentences. Bullet points preferred.
- No introductions, hooks, or conclusions.
- No explanations of obvious concepts. Assume the reader is an experienced engineer.
- No marketing, no fluff, no AI phrases.
- Just facts: what changed, why it mattered, technical details.

## Structure

```
---
title: <includes date>
pubDate: <DD-MM-YYYY>
stack: <3-5 stack items (e.g., laravel, php, astro, tailwindcss)>
description: <one-line summary>
github_repos:
  - <owner/repo>   # one GitHub repo per project worked on today (optional)
---

# <Date>

One short sentence summary.

## Projects

### <Project name>

Grouped engineering stories. Each story:

- What changed, why it mattered, important technical details

### All changes

One bullet per meaningful commit (no noise). Shows every change made today.

---

## Lessons

One or two practical observations.

## Next

Short bullet list.
```

## Output

- Save the file to `src/content/worklogs/`
- Filename: `YYYY-MM-DD.md` (e.g., `2026-07-31.md`)
- No `layout` field in frontmatter — worklogs use their own rendering

## Rules for "All changes"

This section must be included for every project with activity. It exists so the journal doesn't lose sight of individual commits when grouping them into stories.

- One bullet per meaningful commit.
- Ignore: merge commits, typo fixes, whitespace, formatting, lint, comments, variable renames.
- Each bullet: short technical description (no commit hash).
- If a commit belongs to a story in the grouped section above, it can still appear here — redundancy is fine.

## Security

Never expose secrets, credentials, API keys, or confidential business logic. Generalize client details when needed.

## Project Mapping

The `github_repos` field in frontmatter is an array of GitHub full repo names (`owner/repo`) — the canonical key linking worklogs to projects. Every entry MUST be a real GitHub repo (taken from the repo's git remote) that resolves to a known project: a published work in `src/content/works/` or a `repos` entry in `.claude/project-mapping.json`.

**Critical rules:**

- Use the repo's full name from its git remote, e.g. `zordecmax/journey-predictor-api` — never a slug, domain, or directory name
- Use `.claude/project-mapping.json` to identify the project: `mappings` (directory → slug) helps confirm which project a repo belongs to
- Even if a project is not yet published on the website, still list its real repo(s) — do not attribute its work to another project
- When a day has work across multiple repos, list every repo in the `github_repos:` array, and give each project its own `### Project name` section in the body

## Input

Takes structured output from `git-analyzer`.
