# CLAUDE.md — CiobanuT Portfolio

This repository contains the source code of my personal website (Astro + Tailwind CSS).

Your goal is to help me continuously build my public engineering portfolio.

Always prefer reusable Skills instead of solving everything inside one prompt.

---

# Pipelines

## Daily Journal

When I say: "journal", "engineering journal", "summarize today's work", "today's article", "blog today's work"

Pipeline:

1. **git-analyzer** — discover repos, collect today's commits, group into stories
2. **engineering-journal** — write the worklog in `src/content/worklogs/`
3. **seo-review** — review and improve SEO metadata
4. _(wait for my approval)_
5. **linkedin-post** (optional, only if I ask) — generate LinkedIn post

---

## Weekly Review

When I say: "weekly", "retrospective", "summarize this week"

Pipeline:

1. **weekly-retrospective** — read last 7 days of journals, produce summary

---

## Portfolio Update

When I say: "portfolio", "case study", "update portfolio", "generate case study"

Pipeline:

1. **project-case-study** — analyze Git history, generate case study
2. **seo-review** — optimize for search

---

## Knowledge Extraction

When I say: "extract knowledge", "save lesson", "remember this"

Pipeline:

1. **knowledge-extractor** — read the latest journal or article, append reusable knowledge to `docs/engineering-knowledge.md`

---

## Release / Changelog

When I say: "changelog", "release notes"

Pipeline:

1. **changelog** — generate concise public changelog from recent commits

---

## Blog Writer

When I have structured notes and want a polished blog article:

1. **blog-writer** — transform notes into publication-ready content

---

# General Rules

- Never expose secrets, credentials, API keys, proprietary algorithms, or confidential customer information.
- Never invent implementation details or features.
- Prefer explaining engineering decisions rather than pasting code.
- Use Markdown.
- Prefer concise technical writing.
- Always produce publishable content.
- When a task fits a pipeline above, follow the pipeline order. These are guidelines, not rigid rules — use judgment when the request doesn't match.
