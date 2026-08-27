# Week 5 React Resources

Reference material for lifting state up, passing functions as props, and
debugging a React application that renders but does not respond.

Everything in the core build uses techniques introduced in the session. The
last section is optional stretch material.

## Start Here

- [React: Sharing state between
  components](https://react.dev/learn/sharing-state-between-components)
- [React: Passing props to a
  component](https://react.dev/learn/passing-props-to-a-component)
- [React: Responding to events](https://react.dev/learn/responding-to-events)

## The Shape of the Change

The pattern from the guided build, in one place.

State lives in the component that contains everything needing it:

```jsx
const [selectedIds, setSelectedIds] = useState([]);
```

A function decides what a change means:

```jsx
function handleToggleSelect(id) {
  if (selectedIds.includes(id)) {
    setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
  } else {
    setSelectedIds([...selectedIds, id]);
  }
}
```

The child is told what it needs and given a way to report back:

```jsx
<FilmCard
  isSelected={selectedIds.includes(film.id)}
  onToggleSelect={handleToggleSelect}
/>
```

And it calls that function when something happens:

```jsx
<button type="button" onClick={() => onToggleSelect(id)}>
```

```text
Information travels down as props.
Events travel up as function calls.
```

## Derived, Not Stored

If a value can be worked out from state you already hold, work it out. Do not
store it as well.

```jsx
const selectedFilms = films.filter((film) => selectedIds.includes(film.id));

let totalMinutes = 0;
for (const film of selectedFilms) {
  totalMinutes = totalMinutes + film.runtimeMinutes;
}
```

Two pieces of state that describe the same thing will eventually disagree, and
the bug appears somewhere far away from the code that caused it.

You will see `.reduce()` used for totals in other people's code. It does the
same job as the loop above in one line, and it is worth reading about once the
loop is comfortable:
[MDN: `Array.prototype.reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce).

## Always Replace, Never Modify

React notices a new value. It does not notice an old value being changed.

```jsx
setSelectedIds([...selectedIds, id]);   // React re-renders
selectedIds.push(id);                   // nothing happens at all
```

This is the most confusing bug of the week because it produces no error. The
data is correct and the page is stale.

- [MDN: Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [React: Updating arrays in state](https://react.dev/learn/updating-arrays-in-state)

## When It Renders But Does Nothing

There is no error overlay for this one. Work through the routine instead of
changing code and hoping.

1. Where is this information stored?
2. Which components receive it?
3. What does the child actually receive right now?
4. What happens when the event fires?

Then check the three that account for most of it:

```jsx
onClick={onToggleSelect}       // called without the id
onClick={onToggleSelect(id)}   // called during render, not on click
selectedIds.push(id)           // React never notices
```

Other things worth checking:

- the prop is passed but spelled differently in the child
- the child still has its own `useState` and is ignoring what it is given
- the id is never passed down, so the child has nothing to report with
- a count is stored in state and no longer agrees with the list

## Seeing Props and State Directly

[React Developer Tools](https://react.dev/learn/react-developer-tools) adds a
**Components** tab to your browser's developer tools. Select any component and
it shows the props it received and the state it holds, updating live as you
click.

It is genuinely useful and entirely optional. Step 3 of the routine above works
without it; the extension just makes the answer faster to find.

## Techniques Used in Complete

- [React: `useState`](https://react.dev/reference/react/useState)
- [React: Rendering lists](https://react.dev/learn/rendering-lists)
- [React: Conditional rendering](https://react.dev/learn/conditional-rendering)
- [MDN: `Array.prototype.filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [MDN: `Array.prototype.includes()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
- [MDN: `for...of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)

## About the Film Data

`runtimeMinutes` in the teaching data is rounded from the archive's
`runtimeSeconds`. The archive has not recorded a runtime for every film, so the
teaching copy fills those gaps in order that a programme total always adds up.

One film in the Stage 2 collection has no poster artwork, which is why the card
has to decide what to show when `poster` is missing.

## Optional: Loading Data From Somewhere Else

**Work through this only once your own prototype does something it could not do
last week, and you can explain how.** Nothing here is needed for the Week 5
outcome.

Complete imports its films, so they exist before the application starts. Real
applications usually ask for their data after starting, which introduces three
situations your interface has to handle: the data has not arrived, the request
failed, and neither of those is a mistake in your code.

```jsx
import { useEffect, useState } from "react";

const [films, setFilms] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  fetch("/films.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Could not load the film archive.");
      }
      return response.json();
    })
    .then((data) => {
      setFilms(data);
      setIsLoading(false);
    })
    .catch((problem) => {
      setError(problem.message);
      setIsLoading(false);
    });
}, []);
```

The empty `[]` at the end means run this once, when the application starts,
rather than after every render. Leaving it out is the classic mistake and
causes an endless loop of requests.

A working version is in `src/week-05/showcase`, including what the page shows
while loading and when the request fails.

- [React: `useEffect`](https://react.dev/reference/react/useEffect)
- [React: Synchronising with effects](https://react.dev/learn/synchronizing-with-effects)
- [MDN: Using the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

## Course Reference States

- **Starter** - the Week 4 application with the films in a data file, `map()`
  and keys, and a `ProgrammeSummary` that is always given `0`
- **Complete** - selection held in `App`, passed down as props, changed through
  a function passed down, with the count and running time calculated
- **Showcase** - the same application loading its films over the network, with
  loading and error states

Complete is a worked example to read while building your own application. It is
not a codebase to copy into your own project. Read it, explain it, then solve
your own version of the problem.

## Carried Forward From Week 4

The Week 4 gap is closed. Each film card no longer keeps its selection to
itself, and the programme summary can finally report a number that changes.

If your own Week 4 component is unfinished, finishing it is this week's work.
There is no separate catching-up track.
