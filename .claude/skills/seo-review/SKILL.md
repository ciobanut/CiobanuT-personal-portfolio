---
name: seo-review
description: Review and improve SEO metadata for a blog article before publication.
---

# Purpose

Analyze a draft blog article and generate SEO metadata and improvement suggestions. Run before publishing.

## Analysis

Review the article's title, content, headings, and existing frontmatter.

## Output

```markdown
## Title Suggestion

<concise, includes primary keyword, under 60 chars>

## Meta Description

<under 160 chars, includes primary keyword, summarizes value>

## Slug Suggestion

<kebab-case, short>

## Primary Keyword

<main search term>

## Secondary Keywords

<2-4 related terms>

## Internal Links

<existing related articles on this site to link to>

## External Links

<authoritative sources to reference>

## FAQ Ideas

<2-3 questions the article could answer for rich snippets>

## Improvements

- <specific, actionable suggestions>
```

## Rules

- Never rewrite technical accuracy for SEO.
- Never suggest keyword stuffing or misleading titles.
- Prioritize readability and accuracy over rankings.
- Only suggest internal links to existing blog posts.
- Meta description and title must match the article's actual content.
