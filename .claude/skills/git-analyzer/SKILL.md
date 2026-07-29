---
name: git-analyzer
description: Analyze Git commits across multiple repositories and extract meaningful engineering work.
---

# Purpose

Analyze today's Git activity across all repositories and produce structured engineering stories ready for the engineering-journal skill.

## Responsibilities

- Discover all Git repositories under `~/projects/`.
- Read today's commits (authored by me, from any branch).
- Inspect diffs and surrounding code to understand what actually changed.
- Ignore noisy commits (typos, formatting, merge, deps, lint, prettier, whitespace, comments).
- Group related commits into coherent engineering stories.
- Mark whether a story is interesting enough to share publicly.

## Ignore Patterns

Skip commits that only contain:

- typo/typo fixes
- formatting/prettier
- lint rule changes
- merge commits
- dependency updates
- whitespace/indentation
- comments/docblocks
- version bumps
- variable renames (unless part of a larger refactor)

## Output Format

Return one section per repository, with grouped stories:

```markdown
# <project-name>

## <Story Title>

### Summary

One-line description of what was done.

### Problem

What engineering problem prompted this change.

### Solution

How the problem was solved — technologies, approach, trade-offs.

### Technologies

List of languages, frameworks, tools involved.

### Files Changed

Count and types of files modified.

### Interesting?

Yes / No — whether this story is worth publishing.
```
