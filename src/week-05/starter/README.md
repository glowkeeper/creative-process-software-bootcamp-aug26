# Week 5 Starter

The state of the Short Film Programme Builder at the start of Week 5.

It is the Week 4 application with the films moved into a data file, so this is
also where `map()` and list keys are covered properly. They were optional
Showcase material in Week 4.

What is here:

- the twelve-film Stage 2 collection in `src/data/films.js`
- `map()` producing one `FilmCard` for each film, with a `key`
- poster artwork, with a fallback for the one film that has none
- destructured props
- `useState` inside `FilmCard`, so each card remembers its own selection
- `ProgrammeSummary`, which is always given `0`

## The problem to solve

Click as many films as you like. The summary still says `0 films selected`.

Each card knows whether it is selected and keeps that to itself, so nothing on
the page can work the number out. That is the question Week 5 opens with, and
it is not a bug to fix before the session.

## Running it

```bash
npm ci
npm run dev
```
