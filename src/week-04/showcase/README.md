# Week 4 Showcase

An optional extension showing where the repetition in Complete eventually goes.

Complete writes out one `<FilmCard />` for every film by hand. Here the films
live in `src/data/films.js` and `map()` produces one card for each of them.
Adding a thirteenth film would mean editing only the data.

It also demonstrates:

- destructured props in the parameter list, instead of reading `props.title`
- the twelve-film Stage 2 collection
- poster artwork, with a fallback for the one film that has none
- a `key` on each item in a mapped list
- theme tags produced by a second, smaller `map()`

Showcase is for inspection. It is not the Week 4 success criterion, and none of
it is required during the guided build.

## Running it

```bash
npm ci
npm run dev
```
