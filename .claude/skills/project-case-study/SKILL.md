---
name: project-case-study
description: Generate a portfolio case study from a project's full Git history.
---

# Purpose

Analyze a project's complete Git history and generate a detailed case study suitable for the portfolio's work page.

## When to use

- A project has accumulated significant work (months of commits).
- The portfolio needs a new work entry or an update to an existing one.
- The user asks for a case study of a specific project.

## Analysis

- Read the Git log (all branches, all tags).
- Identify major phases: initial build, feature additions, refactors, optimizations.
- Group commits by feature/theme.
- Look at the architecture: key directories, design patterns, data flow.

## Output Structure

```markdown
---
title: <project title>
client: <if applicable>
techStack: [<technologies>]
year: <year range>
---

## Overview

What the project does and who it's for.

## Problem

The original problem or need.

## Solution

High-level approach. Architecture decisions.

## Architecture

Key directories, data flow, hosting. Diagram suggestion.

## Challenges

Hardest technical problems encountered.

## Engineering Decisions

Notable trade-offs and why they were made.

## Interesting Code

One or two small code snippets that show something clever.

## Lessons Learned

What I'd do differently or what I learned building it.

## Future Improvements

What could be added or improved next.
```

## Rules

- Do not expose proprietary business logic, credentials, or secrets.
- Generalize sensitive details (client name, specific metrics) when needed.
- Be honest about trade-offs — no project is perfect.
- Max 2 code snippets, 15 lines each.
