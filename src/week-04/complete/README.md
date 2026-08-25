# Week 4 Complete

The canonical outcome for the Week 4 guided build.

The interface is unchanged from Week 3. Only its organisation is different:

```text
App
├── SiteHeader
├── ProgrammeSummary   (count arrives as a prop)
├── FilmCard × 6       (the same component, six sets of props)
└── SiteFooter
```

`FilmCard` holds one small piece of its own state, so a visitor can still
select and deselect a film.

## What this application deliberately cannot do

The programme count never changes.

Each film card knows whether it is selected, but it keeps that to itself, and
`ProgrammeSummary` is always given `0`. Nothing here is broken or unfinished by
accident: no component can see another component's state yet.

That is the question Week 5 opens with.

## Running it

```bash
npm ci
npm run dev
```
