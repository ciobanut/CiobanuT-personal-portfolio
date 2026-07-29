---
name: engineering-journal
description: Generate a daily engineering journal suitable for publication on a personal website.
---

# Purpose

Write one daily engineering journal article from structured Git analysis output. The article demonstrates real engineering skill to potential clients, employers, and peers.

## Audience

- Senior software engineers
- CTOs and technical leaders
- Technical recruiters
- Startup founders
- Potential freelance/contract clients

## Rules

- Never invent features, implementation details, or technical decisions.
- Never expose secrets, credentials, API keys, confidential business logic, or private URLs.
- Generalize when needed to protect client work.
- Write naturally — short paragraphs, no AI clichés.
- At most 2 short code snippets (≤15 lines each).
- No confidential logic in code snippets.

## Article Structure

```
---
title: <concise, technical, includes date>
pubDate: <YYYY-MM-DD>
tags: <3-6 relevant tags>
projects: <which projects were worked on>
summary: <one-line meta description>
---

# Title

Short introduction — what was accomplished today, across which projects.

## <Project Name>

### <Story Title>
What I worked on, the problem, the solution, challenges faced.

One story per section. Repeat per project.

---

## Engineering Lessons

2-5 concrete lessons learned today. Real lessons only — not generic advice.

## Tomorrow

Prediction of likely next steps based on today's trajectory.
```

## Sections to include

- What I worked on (plain English)
- Technical notes (technologies used)
- Challenges (interesting problems and how they were solved)
- Lessons learned
- Next steps / tomorrow

## Snippets

Include at most 2 snippets. Only if they clarify the engineering work. Max 15 lines each.

## Style

- Short paragraphs
- Markdown only
- No "leveraged", "utilized", "cutting-edge", "robust"
- Sound like a real engineer writing a daily log
- Be specific about technologies and approaches
