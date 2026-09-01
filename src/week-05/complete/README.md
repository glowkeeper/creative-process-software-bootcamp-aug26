# Week 5 Complete

The canonical Week 5 outcome, and the recovery point for the guided build.

The selection now lives in one place, and the summary finally tells the truth.

What changed from Starter:

- `App` holds `selectedIds`, a single array
- `App` passes `isSelected` down to each card
- `App` passes `onToggleSelect` down to each card
- `FilmCard` holds no state at all; it displays what it is given
- `ProgrammeSummary` receives a count and a total running time
- both numbers are worked out during render, not stored
- the summary reports whether the programme fits its 30-45 minute target

## The two ideas worth reading for

**Data down, events up.** Information reaches a card as props. The card cannot
change anything itself; it is handed a function and calls it, and `App` decides
what the call means.

**Derived, not stored.** There is no `count` state and no `totalMinutes` state.
Both are calculated from `selectedIds` every time `App` renders, which is why
they can never disagree with the selection.

This is a worked example to read while building your own application. It is not
a codebase to copy into your own project.

## Running it

```bash
npm ci
npm run dev
```
