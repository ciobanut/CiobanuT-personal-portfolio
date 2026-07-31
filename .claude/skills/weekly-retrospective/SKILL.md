---
name: weekly-retrospective
description: Summarize one week of engineering work across all projects into a retrospective post.
---

# Purpose

Read all engineering journals from the last 7 days and produce a weekly retrospective.

## Input

Engineering journal markdown files from `src/content/worklogs/` published in the last 7 days.

### Output

```markdown
# Weekly Retrospective — <date range>

## Projects Worked On

Brief overview of which projects had activity this week.

## Biggest Accomplishments

Top 2-3 engineering achievements this week, ranked by impact.

## Challenges

Recurring difficulties, blocked items, or decisions that were harder than expected.

## Lessons Learned

3-5 lessons collected across all journals, deduplicated and refined.

## Statistics

- Total commits
- Repositories active
- Engineering stories published
- Lines changed (if available)

## Next Week

What's on the radar — planned work, open questions, expected continuations.
```
