# Week 7 Showcase

The completed Short Film Programme Builder is the final shared reference
application for the course.

It brings earlier ideas together without introducing a new Week 7 teaching
topic:

- 180 fictional films loaded from JSON
- search across film titles and filmmaker names
- form and theme filters
- clear loading, error, empty and missing-data states
- reusable film cards and derived filter options
- individual film routes and related-film journeys
- a saved-programme route using shared React state
- defensive `localStorage` persistence
- derived film counts and programme running time
- responsive layouts and keyboard-visible focus styles
- relative production assets suitable for static hosting

## How to use it

This Showcase is optional reference material. It is an endpoint to inspect,
trace and discuss while learners continue building their own Directors Notes
prototypes. Its feature set is not a Week 7 checklist or a definition of
project success.

Look for one relevant pattern at a time. Before adapting it, explain:

1. what information enters the pattern
2. what changes while somebody uses it
3. what visible result it produces
4. how you will test the change in your own project

The archive and abstract poster images are fictional teaching data. No
Directors Notes records or assets are included.

## Run the application

```bash
npm ci
npm run dev
```

To check the production build:

```bash
npm run lint
npm run build
npm run preview
```
