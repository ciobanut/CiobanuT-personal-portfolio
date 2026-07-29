---
name: portfolio-updater
description: Detect when a project has accumulated enough work to warrant a portfolio update or new case study.
---

# Purpose

Monitor engineering journal output and Git activity to know when it's time to update the portfolio with new work. The portfolio should reflect real shipped work, not inspiration.

## When to trigger

- A project has accumulated significant commits since the last portfolio update.
- A major feature or milestone was completed across multiple days.
- A new project reached a stable, shippable state.
- It's been more than 3 months since the work page or a case study was updated.

## How to decide

- Read the last 3 engineering journals for the project.
- Check the project's Git log for overall commit volume since last update.
- Compare against the existing portfolio entry (work page, case study, or tech stack).

## Output

If an update is warranted:

```markdown
## Update Needed: <project name>

**Last updated:** <date>
**Commits since then:** <count>
**Notable work:** <2-3 bullet points of major changes>

### Suggested action

- [ ] Update work page description
- [ ] Add new case study
- [ ] Update tech stack / skills shown
- [ ] Add new blog post

### Draft

<2-3 sentence draft for the update>
```

If no update is needed, say nothing — no news is good news.

## Rules

- Avoid noise: don't suggest updates for trivial changes.
- Track what was already suggested to avoid repeating.
- Prioritize projects that are featured or want to be featured on the portfolio.
