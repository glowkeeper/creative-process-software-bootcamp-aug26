# Week 5 Showcase

## Read this first

This is optional stretch material, not a Week 5 requirement.

Work through it only once your own prototype does something it could not do
last week, and you can explain how. Nothing here is needed to meet the Week 5
outcome, and copying it into an application whose state you cannot yet explain
will cost you more time than it saves.

## What it demonstrates

Complete imports its films, so they exist before the application starts. Here
the same twelve films are fetched over the network from `public/films.json`,
which is how an application talks to a real archive.

- `useEffect`, running once when the application starts
- `fetch`, and checking whether the response actually succeeded
- a loading state, so the page says something before the data arrives
- an error state, so a failed request is not a blank screen

Everything else is identical to Complete.

## The idea worth taking away

Loading data adds three situations your interface has to cope with:

1. the data has not arrived yet
2. the request failed
3. neither of those is a mistake in your code

Most of the extra code here exists to handle those three cases, not to do the
fetching. That is usually true.

## Trying the failure case

Change the URL in `src/App.jsx` to something that does not exist, for example
`/films-missing.json`, and reload. The error state is what a visitor sees when
an archive is unavailable.

## Running it

```bash
npm ci
npm run dev
```
