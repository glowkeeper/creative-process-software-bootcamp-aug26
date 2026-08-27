# Week 5 Worksheet

## Consolidating React Development

**Name:** ___________________________________

**Date:** ___________________________________

> **Big Idea:** Developers improve software by reading, reviewing, and
> extending existing applications.

## 1. Read Before Anyone Explains It

Open the Week 5 Starter application and run it. Read these files before the
class discusses them:

```text
src/App.jsx
src/data/films.js
src/components/FilmCard.jsx
src/components/ProgrammeSummary.jsx
```

`App.jsx` writes one `FilmCard`. Why are there twelve on the page?

____________________________________________________________________

What is `key` for?

____________________________________________________________________

Which component holds state, and what does it remember?

____________________________________________________________________

Click four films. What does the programme summary say?

____________________________________________________________________

Why can it not say anything else yet?

____________________________________________________________________

## 2. Guided Build Checkpoints

- [ ] Part 1: I read the application before anyone explained it.
- [ ] Part 2: I can say why the summary cannot see what the cards know.
- [ ] Part 3: `selectedIds` now lives in `App`.
- [ ] Part 4: `FilmCard` no longer has its own `useState`.
- [ ] Part 5: Clicking a card changes the selection again.
- [ ] Part 6: The count and the running time are worked out, not stored.
- [ ] Part 7: I can point at the one place selection is stored.

## 3. Name Your Own Behaviour First

Do this section **before** you go back and read the reference application.

Plan your own version of the problem, then look at how ours was solved.

### What should change

When someone clicks or types something in your application, what should change
somewhere else on the page?

____________________________________________________________________

____________________________________________________________________

### Which parts are involved

Which component do they click?

____________________________________________________________________

Which component has to change as a result?

____________________________________________________________________

Which component contains both of them?

____________________________________________________________________

That last answer is where your state belongs.

### What travels

What does the child component need to be **told**?

____________________________________________________________________

What does it need to be able to **report back**?

____________________________________________________________________

## 4. Now Trace the Reference

With your own plan written down, open `src/week-05/complete` and find:

Where selection is stored:

____________________________________________________________________

The two things every card is told:

____________________________________________________________________

The one thing a card can tell `App`:

____________________________________________________________________

One value that is calculated rather than stored:

____________________________________________________________________

What would go wrong if the count were stored in its own `useState`?

____________________________________________________________________

## 5. Build the Smallest Working Version

- [ ] I decided which component should hold the state.
- [ ] I added the state with `useState` in that component.
- [ ] I passed the value down to the component that displays it.
- [ ] I passed a function down to the component that triggers the change.
- [ ] I called that function from an event handler, using an arrow function.
- [ ] I removed any state the child no longer needs.
- [ ] I checked the browser after each change.
- [ ] Anything I could calculate, I calculated instead of storing.
- [ ] I can explain every line I kept.
- [ ] I committed my work with a clear message.

## 6. When It Renders But Does Nothing

This week you will meet bugs with no error message. Work through the routine
rather than guessing.

Where is this information stored?

____________________________________________________________________

Which components receive it?

____________________________________________________________________

What does the child actually receive right now? How do you know?

____________________________________________________________________

What happens when the event fires?

____________________________________________________________________

Three things worth checking first:

- [ ] The function is passed down **and** called in the child.
- [ ] The click uses `() => doSomething(id)`, not `doSomething(id)`.
- [ ] State is replaced with a new value, never changed with `.push()`.

## 7. If the Core Behaviour Works

Improve what you have before adding anything new:

- calculate one more thing from the state you already hold
- show a helpful message when nothing is selected or nothing matches
- move a second piece of duplicated markup into a component
- use the poster artwork, deciding what to show when a film has none
- improve how the changed part of your page looks, using CSS you already wrote

You are not expected to match the reference application, restore every Week 3
behaviour, or attempt the Showcase material. If your Week 4 component is still
unfinished, finishing it **is** today's work.

## 8. Explain Your Work

The behaviour I built:

____________________________________________________________________

The component that holds the state, and why it is that one:

____________________________________________________________________

What travels down, and what travels up:

____________________________________________________________________

One value I calculated instead of storing:

____________________________________________________________________

One bug I investigated, and how I found it:

____________________________________________________________________

If AI helped, what did I test or change before keeping its suggestion?

____________________________________________________________________

## 9. End-of-Day Reflection

Something in your application changed today. Where does that information live,
and who is told about it?

____________________________________________________________________

____________________________________________________________________

What could you now explain to someone that you could not explain this morning?

____________________________________________________________________

Your application forgets everything when the tab closes. What would you most
want it to remember?

____________________________________________________________________
