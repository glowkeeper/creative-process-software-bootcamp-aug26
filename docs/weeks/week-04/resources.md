# Week 4 React Resources

The guided build and Complete reference application contain everything needed
for the Week 4 core outcome. Use these links to investigate one idea rather than
reading the React documentation from beginning to end.

## Start Here

- [React: Your first component](https://react.dev/learn/your-first-component)
- [React: Writing markup with JSX](https://react.dev/learn/writing-markup-with-jsx)
- [React: Passing props to a component](https://react.dev/learn/passing-props-to-a-component)

## Create a React App in Your Own Repository

Run this from the top level of your project repository, so that your Week 2 and
Week 3 files stay exactly where they are.

```bash
npm create vite@latest app
```

It asks a short series of questions. Answer them like this:

| Prompt | Answer |
| --- | --- |
| `Project name:` | `app` |
| `Select a framework:` | `React` |
| `Select a variant:` | `JavaScript` |
| `Which linter to use?` | `Oxlint` |
| `Install with npm and start now?` | `Yes` |

Two of those need care:

- Choose **JavaScript**, not TypeScript. TypeScript is a different language on
  top of JavaScript and is not part of this course.
- The variant list also offers **React Router v7** and **TanStack Router**.
  Do not choose either. They build a different kind of project, and you will not
  get the application described here.

If you answered `No` to the last question, finish the setup yourself:

```bash
cd app
npm install
npm run dev
```

Open the address it prints. Leave the server running while you work, and stop it
with Ctrl+C when you are finished.

### Clear Out the Template

A new project ships with a demo page. Remove it so you start from your own work:

1. Delete `src/assets/`, `src/App.css`, `public/icons.svg` and
   `public/favicon.svg`.
2. Replace everything in `src/App.jsx` with a small component of your own.
3. Copy your Week 2 CSS into `src/index.css`.
4. Change the `<title>` in `index.html`.

### Before Your First Commit

The `node_modules` folder contains thousands of installed files and must never
be committed. A new Vite project includes a `.gitignore` that already excludes
it. Check that yours does:

```bash
git status
```

If you can see `node_modules` listed, stop and fix the ignore file before
committing anything.

## Poster Artwork

The fictional film archive now supplies artwork for each film through two
fields:

- `poster` - a path such as `images/film-01.svg`
- `posterAlt` - the alternative text describing that image

The files are in `datasets/fictional-film-archive/images/`. Copy that folder
into your own project alongside the film data, and the stored paths will
resolve. In a Vite application, files placed in `public/` are served from the
top of the site, so `public/images/film-01.svg` is reached as
`/images/film-01.svg`.

The artwork is abstract and wholly fictional, so you may commit and deploy it
freely. Use `posterAlt` as the `alt` attribute rather than inventing your own,
and never leave `alt` off an image.

## Techniques Used in Complete

- [React: Importing and exporting components](https://react.dev/learn/importing-and-exporting-components)
- [React: JavaScript in JSX with curly braces](https://react.dev/learn/javascript-in-jsx-with-curly-braces)
- [React: `useState`](https://react.dev/reference/react/useState)
- [MDN: JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [Vite: Getting started](https://vite.dev/guide/)

Showcase also uses [rendering lists with
`map()`](https://react.dev/learn/rendering-lists), which is not required for the
Week 4 core outcome.

## When Something Does Not Work

React reports most problems in an overlay in the browser rather than in the
terminal. Read it before changing any code.

1. Is the development server still running? Look at the terminal.
2. Is the browser open at the address the server printed?
3. Read the error overlay, including the file name and line number.
4. Does the component name start with a capital letter?
5. Is there an `export default` at the bottom of the component file?
6. Does the import path start with `./` and end with `.jsx`?
7. Is it `className` rather than `class`?
8. Does the component return one wrapper element around everything?
9. Are the prop names in the component spelled exactly as they are passed in?
10. Change one thing, save and look again.

A blank white page usually means an error, not an empty component. Check the
overlay and the browser Console.

## Carried Forward From Week 3

The stylesheet has one fix in it since Week 3.

`.film-card--selected button` was supposed to make a selected film's button
dark, but nothing happened. The rule was correct; its position was not. It had
the same specificity as `.film-card button` and appeared earlier in the file, so
the later rule won.

```css
/* Now placed after the .film-card button rules, so this one wins. */
.film-card--selected button,
.film-card--selected button:hover {
  background-color: var(--text);
}
```

This is worth knowing because nothing about it looks wrong. When a CSS rule
seems to be ignored, check what else could be setting the same property, and
which of the two the browser is choosing. The Elements panel in the browser's
developer tools shows overridden rules with a line through them.

## Course Reference States

- **Starter** - the Week 3 interface as one long React component
- **Complete** - `SiteHeader`, `FilmCard`, `ProgrammeSummary` and `SiteFooter`,
  with props and one small piece of local state
- **Showcase** - the films in a data file, `map()`, poster artwork and
  destructured props

Complete cannot update the programme count. Each film card knows whether it is
selected but keeps that to itself, so the summary is always given `0`. That is
the starting point for Week 5, not a mistake to fix tonight.

Showcase is useful for inspection, but it is not a list of Week 4 requirements.
Start with one component you can explain.
