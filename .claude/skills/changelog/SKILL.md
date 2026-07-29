---
name: changelog
description: Generate a concise public changelog from recent Git activity.
---

# Purpose

Create a clean, user-facing changelog from recent commits. This is for public consumption — customers and stakeholders who want to know what changed without reading code.

## Structure

```markdown
# Changelog — <date or version>

## Added

- New features.

## Improved

- Enhancements to existing features.

## Fixed

- Bug fixes.

## Performance

- Speed or resource improvements.

## Security

- Security-related changes.

## Known Issues

- Open problems the user should know about.
```

## Rules

- Use bullet points only. No paragraphs, no implementation details.
- Group by category (Added, Improved, Fixed, etc.).
- Omit categories with no entries.
- Write for end users, not developers.
- Be specific: name the feature or fix, not the code change.
- No jargon unless your users know it.
