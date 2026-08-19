---
marp: true
paginate: true
footer: Week 4
---

# Software Development Bootcamp

## Week 4

Organising Larger Applications

Dr Steve Huckle

steve@huckle.studio

<!--
Welcome learners back. Before anything else, get the install running: cd into
src/week-04/starter and run npm ci. It downloads while we talk.
-->

---

# First, start the download

```bash
cd src/week-04/starter
npm ci
```

Leave it running and look away from your screen.

<!--
This is the single most important slide of the morning. Twelve first installs on
one network is several hundred megabytes. Start it before the teaching, not
after. npm ci installs exactly what the lockfile says and does not rewrite it.
-->

---

# Today, the interface gets organised

- Look at what happens when an application grows
- Meet components as reusable pieces of interface
- Build one film card component and use it six times
- Give it different information using props
- Start React in your own project

<!--
Note what is not on this list: rebuilding everything from Week 3. Today is
deliberately partial.
-->

---

<!-- _class: mentimeter-slide -->

# How confident do you feel about organising an interface into reusable components?

## Mentimeter Activity

<!--
MENTIMETER
Type: Scale
Prompt: How confident do you feel about organising an interface into reusable components?
Scale: 1-5
Labels: 1 = Very unconfident, 5 = Very confident

This is a baseline, not an assessment. Repeat the same question near the end.
-->

---

# Retrieve Week 3 before looking at any React

Let's recall together:

1. What did the visitor do?
2. How did JavaScript notice?
3. What changed on the page?
4. What did you have to repeat for every film?

<!--
Ask them in turn. The fourth question is the one that matters: it moves the class
from behaviour towards organisation without you asserting that a problem exists.
-->

---

# Week 3 made the interface respond

```js
filmButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    // the same setup, once for every film
  });
});
```

## And then you started adding more

<!--
Recognise the real achievement first. Then move to what happens next: more cards,
more markup, more script.
-->

---

# Look at what six film cards actually cost

```jsx
<article className="film-card">
  <p className="film-meta">Documentary · Ireland · 2023</p>
  <h3>The Quiet Cartographer</h3>
  <p>A mapmaker records disappearing paths...</p>
  <button type="button">Add to programme</button>
</article>
```

## Now imagine that five more times

<!--
Open Week 4 Starter and scroll slowly through App.jsx. Do not explain React yet.
Ask what they notice. The intended observation: the same shape repeats and only
the words change.
-->

---

# Four questions that make the problem real

- What if the archive had sixty films?
- What if every card needed a new button?
- Where would you make that change?
- How many places could you get it wrong?

<!--
Let them answer. The cost of repetition should be their conclusion, not your
assertion.
-->

---

<!-- _class: big-idea -->

# Big Idea

## Component-based development helps us organise larger applications

<!--
Keep returning to this. The subject of today is not React. It is the problem
React solves.
-->

---

# A component describes a repeated shape once

```text
Six film cards
      ↓
one description of what a film card is
      ↓
used six times, with different information
```

<!--
This is the whole week in one diagram.
-->

---

# Three things a component is not

```text
React does not replace JavaScript. React is JavaScript.

A component is not a page. It is any reusable piece of interface.

Not everything needs to be a component.
```

<!--
All three come up every year. Say them early rather than correcting them later.
Components earn their place where they improve organisation or remove repetition.
-->

---

# Week 3 instructed; React describes

```text
Week 3    find an element, then change it

Week 4    describe what the interface should look like
          for this information
```

<!--
Say this aloud before the build. Learners who expect textContent and classList
will otherwise hunt for them and conclude something is missing.
-->

---

<!-- _class: section-slide -->

# Guided Build

## One component, six films

<!--
Move to Starter. Aim for roughly 30 minutes on the opening, including retrieval.
-->

---

# Part 1 · Meet a React project

```bash
npm run dev
```

The application already looks exactly like Week 3.

<!--
Open the address it prints. Point out that the server has to keep running: this
is the most common problem of the morning.
-->

---

# Three files matter today

```text
index.html     one nearly empty page
src/main.jsx   starts React and puts App inside that page
src/App.jsx    the whole interface, for now
```

<!--
Show these three and no more. Do not explain package.json, the build or the
module system today. Change one word of visible text in App.jsx and save: the
browser updates without a refresh.
-->

---

# Part 2 · Read JSX

## It looks like HTML, but it is JavaScript

```jsx
className="film-card"    // not class

<>...</>                 // one wrapper around everything returned

{2023}                   // braces mean "a JavaScript value goes here"
```

<!--
Three differences are enough. Demonstrate the third by replacing a year with
{2023}, then with {2020 + 3}. Braces are the doorway back to the JavaScript they
already know.
-->

---

# Part 3 · Create the first component

```jsx
function SiteHeader() {
  return (
    <header className="site-header">
      <h1>Short Film Programme Builder</h1>
    </header>
  );
}

export default SiteHeader;
```

<!--
A component is a function that returns markup. Its name starts with a capital
letter. export default makes it available to other files.
-->

---

# Then use it inside App

```jsx
import SiteHeader from "./components/SiteHeader.jsx";
```

```jsx
<SiteHeader />
```

## The page looks completely unchanged

<!--
Say this explicitly. The first component changed the organisation and nothing
else. That is what reorganising means.
-->

---

# Checkpoint · A running server and one component

```text
npm run dev is running
the browser shows the application
SiteHeader.jsx exists
App.jsx uses <SiteHeader />
```

<!--
Do not move on until everyone is here. Common problems: lower-case component
name, missing export default, import path missing ./ or the .jsx extension.
-->

---

# Part 4 · Move one film card into a component

```jsx
function FilmCard() {
  return (
    <article className="film-card">
      <p className="film-meta">Documentary · Ireland · 2023</p>
      <h3>The Quiet Cartographer</h3>
      ...
    </article>
  );
}
```

## Still hard-coded, still unchanged

<!--
Paste the first film's markup in exactly as it appears now, and use it once in
App. Resist adding props yet: one idea at a time.
-->

---

# Part 5 · Give the component information

```jsx
function FilmCard(props) {
  return (
    <article className="film-card">
      <p className="film-meta">
        {props.form} · {props.country} · {props.year}
      </p>
      <h3>{props.title}</h3>
      <p>{props.synopsis}</p>
      ...
```

<!--
Read props as "the information this component was given". Keep props.title
rather than destructuring; destructuring appears in Showcase.
-->

---

# And pass that information in

```jsx
<FilmCard
  title="The Quiet Cartographer"
  synopsis="A mapmaker records disappearing paths..."
  form="Documentary"
  country="Ireland"
  year={2023}
/>
```

<!--
Note that year uses braces because it is a number, while the others are text in
quotation marks. Change one prop value and save. The card changes. That is the
whole idea.
-->

---

# Part 6 · The same component, six times

```jsx
<FilmCard title="The Quiet Cartographer" ... />
<FilmCard title="Borrowed Weather" ... />
<FilmCard title="Soft Machines" ... />
<FilmCard title="A Song for the Underpass" ... />
<FilmCard title="Tuesday's Orbit" ... />
<FilmCard title="Salt Library" ... />
```

## One description, six films

<!--
Delete the old markup as you go so the shrinking App.jsx is visible. This is
deliberately repetitive and they should feel it. When someone asks whether the
list could come from an array: yes, and that is exactly where Showcase goes.
-->

---

# Checkpoint · Compare App.jsx with where you started

```text
Starter      the whole page, six cards written out
Complete     a short file describing the shape of the page
```

<!--
Put the two files side by side. The reduction is the evidence that organisation
did something.
-->

---

# Part 7 · Let a card remember something

```jsx
import { useState } from "react";
```

```jsx
const [isSelected, setIsSelected] = useState(false);
```

<!--
Plain language: isSelected is what the card currently remembers, and
setIsSelected is the only way to change it. Do not teach hooks today.
-->

---

# Choose what to show from what it remembers

```jsx
const buttonLabel = isSelected
  ? "Remove from programme"
  : "Add to programme";
```

```jsx
<button onClick={() => setIsSelected(!isSelected)}>
  {buttonLabel}
</button>
```

<!--
If the conditional expression is unfamiliar, translate it aloud as an if/else
before discussing punctuation.
-->

---

# Every card remembers separately

```text
Click three cards.
Three cards change.
The others do not.
```

## Why?

<!--
Let them answer. Each card is its own copy of the component, with its own memory.
-->

---

# Part 8 · Review what we built

- Where is the component defined?
- What props does one card receive?
- Where is the same component used with different information?
- What does a card remember about itself?
- How much shorter did `App.jsx` become?

<!--
Ask learners to locate each answer in Complete before moving to their own work.
-->

---

# The application is now a tree

```text
App
├── SiteHeader
├── ProgrammeSummary
├── FilmCard × 6
└── SiteFooter
```

<!--
Draw this on the board. It is the mental model that carries into Week 5.
-->

---

# But look at the summary

```text
Click four films.

The summary still says 0 films selected.
```

## Why?

<!--
Click several cards and point at the summary. Ask the question before anyone
finds it on their own. An unexplained gap reads as personal failure.
-->

---

# Each card keeps its answer to itself

```text
FilmCard knows whether it is selected.
ProgrammeSummary is given the number 0.
Nothing connects them.
```

## That is Week 5

<!--
This is not a mistake and not unfinished homework. Say plainly that Week 4 was
never going to restore everything Week 3 could do, and that this is how a staged
migration actually works.
-->

---

# Showcase shows where the repetition goes

- The films in a data file
- `map()` producing one card for each
- Poster artwork, and a fallback when there is none
- Props pulled apart in the parameter list

## Inspect it; it is not today's checklist

<!--
Demonstrate briefly. This answers the question they asked in Part 6 without
asking them to build it today.
-->

---

<!-- _class: section-slide -->

# Developer Studio

## One reusable component in your own project

<!--
Do the scaffold demonstration first, in a throwaway folder, with learners
watching rather than typing.
-->

---

# Create a React app in your own repository

```bash
npm create vite@latest app
```

Answer `React`, then `JavaScript`, then let it install.

Your Week 2 and Week 3 files stay exactly where they are.

<!--
Demonstrate this once, live, talking through each prompt as it appears. The exact
sequence and the answers to give are in the Week 4 resources. Check that
node_modules is ignored in every learner repository before they commit.
-->

---

# Find the part of your interface that repeats

- A film card in a discovery or archive prototype
- A filmmaker or profile entry
- An award or festival row
- A related-film suggestion
- A readiness-check item

## What is different each time? Those are your props

<!--
Tie this to their chosen Directors Notes brief. The repeated item is almost
always obvious once they look for it.
-->

---

# Your Week 4 minimum outcome

- A React application running at `app/`
- One component in its own file
- Information passed in through props
- The same component used at least three times
- Your Week 2 CSS carried across
- Code you can explain, and a clear commit

<!--
Rebuilding the whole Week 2 interface in JSX is not required. Restoring the full
Week 3 interaction is Week 5's work.
-->

---

# When something breaks

1. Is the dev server still running?
2. Read the error overlay in the browser
3. Which file and line does it name?
4. Capital letter at the start of the component name?
5. `export default` at the bottom?
6. Does the import path start with `./` and end with `.jsx`?

<!--
The Vite overlay is more useful than the terminal. Model reading it rather than
rewriting at random.
-->

---

# Use AI to understand the organisation

Ask it to:

- explain what a line of JSX produces
- translate an error from the overlay
- suggest what could be a prop and what should not
- review whether your component is doing too much

Keep only code you can read, test and explain.

<!--
Brief course-wide reminder, not a separate AI lesson.
-->

---

# What does your component describe, and what is it given?

<!--
Short whole-class reflection. Ask two or three learners to answer aloud before
the confidence check.
-->

---

<!-- _class: mentimeter-slide -->

# How confident do you feel about organising an interface into reusable components?

## Mentimeter Activity

<!--
MENTIMETER
Type: Scale
Prompt: How confident do you feel about organising an interface into reusable components?
Scale: 1-5
Labels: 1 = Very unconfident, 5 = Very confident

Compare with the opening baseline. Confidence often dips in a tooling week; the
stronger evidence is a learner explaining what their component receives.
-->

---

# Week 4 complete

## You described a repeated shape once and reused it

- A React project runs in your own repository
- One component describes a film card
- Props give it different information each time
- The application is organised as a tree

<!--
Return to the Big Idea and to what they actually achieved in a demanding week.
-->

---

# Next week

## Read, review and restore

We will find out why the summary cannot see what the cards know.

<!--
Week 5 is consolidation, code review and restoring important behaviour. The gap
we named today is its starting point.
-->

---

# Thank you

Dr Steve Huckle

steve@huckle.studio

<!--
Brief presenter close.
-->

<!-- EXPORT-IGNORE-START -->

---

# Mentimeter AI Import

<!--

Create these Week 4 questions:

1. Scale, 1-5: How confident do you feel about organising an interface into
   reusable components?
   Labels: 1 = Very unconfident, 5 = Very confident.

2. Repeat the same scale question near the end:
   How confident do you feel about organising an interface into reusable
   components?
   Labels: 1 = Very unconfident, 5 = Very confident.

-->

<!-- EXPORT-IGNORE-END -->
