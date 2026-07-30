---
name: engineering-journal
description: Generate a compact daily engineering journal entry from Git analysis.
---

# Purpose

Create a compact personal engineering journal entry based on today's work.

Document what I built, what changed, and what I learned. Nothing more.

Use `blog-writer` separately when a story is worth expanding into a full article.

## Writing Style

- Maximum 200 words.
- Short sentences. Bullet points preferred.
- No introductions, hooks, or conclusions.
- No explanations of obvious concepts. Assume the reader is an experienced engineer.
- No marketing, no fluff, no AI phrases.
- Just facts: what changed, why it mattered, technical details.

## Structure

```
---
title: <includes date>
pubDate: <YYYY-MM-DD>
tags: <3-5 tags>
description: <one-line summary>
---

# <Date>

One short sentence summary.

## Projects

### <Project name>

- What changed
- Why it mattered
- Important technical details

Repeat per project.

## Lessons

One or two practical observations.

## Next

Short bullet list.
```

## Security

Never expose secrets, credentials, API keys, or confidential business logic. Generalize client details when needed.

## Input

Takes structured output from `git-analyzer`.
