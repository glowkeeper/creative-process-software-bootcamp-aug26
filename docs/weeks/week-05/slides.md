---
marp: true
paginate: true
footer: Week 5
---

# Software Development Bootcamp

## Week 5

Consolidating React Development

Dr Steve Huckle

steve@huckle.studio

<!--
Welcome learners back. Get the install running before the teaching starts:
cd into src/week-05/starter and run npm ci. Much smaller than last week's
download because most packages are already cached, but start it anyway.
-->

---

# First, start the application

```bash
cd src/week-05/starter
npm ci
npm run dev
```

Open it in your browser and click a few films.

<!--
Let them click. The summary says 0 no matter what they do. Do not explain it
yet; the first activity is reading, and the broken summary is the hook.
-->

---

# Today, the summary starts telling the truth

- Read an application before anyone explains it
- Find out why the summary cannot see what the cards know
- Move information to where it can be shared
- Let a card report back to the page
- Work numbers out instead of storing them

<!--
Note the shape of the day: a short morning and a long studio. From this week
most of the time belongs to their own projects.
-->

---

<!-- _class: mentimeter-slide -->

# How confident do you feel about reading and changing React code?

## Mentimeter Activity

<!--
MENTIMETER
Type: Scale
Prompt: How confident do you feel about reading and changing React code?
Scale: 1-5
Labels: 1 = Very unconfident, 5 = Very confident

Note the wording: reading and changing, not writing. This repeats at the end.
-->

---

# Big Idea

## Developers improve software by reading, reviewing, and extending existing applications

<!--
Most professional work happens in code somebody else wrote, often years ago.
Almost nothing starts from an empty folder. Today is the first time the course
asks learners to understand code before changing it, which is the ordinary
condition of the job.
-->

---

# Part 1 · Read it before anyone explains it

```text
src/App.jsx
src/data/films.js
src/components/FilmCard.jsx
src/components/ProgrammeSummary.jsx
```

## Ten minutes, no typing

<!--
Resist narrating. The Big Idea is that developers improve software by reading
it, and a morning that opens with a demonstration contradicts its own premise.
Ask, wait, and take answers from the room.
-->

---

# Questions to answer while you read

- Where does this application start?
- What is different since last week?
- `App.jsx` writes one `FilmCard`. Why are there twelve on the page?
- Which component holds state, and what does it remember?
- Which component needs that information but does not have it?

<!--
The last two questions are the ones the day turns on. Let learners reach them
rather than arriving there first.
-->

---

# The films moved out of the components

```jsx
import films from "./data/films.js";

{films.map((film) => (
  <FilmCard key={film.id} title={film.title} ... />
))}
```

## Adding a thirteenth film means editing only the data

<!--
Teach map here, by reading. Roughly half the room will be meeting it properly
for the first time; it was optional Showcase material last week.
-->

---

# Why every card needs a key

```jsx
<FilmCard key={film.id} ... />
```

React uses it to tell one card from another between updates.

<!--
This is why the data has an id field at all. Without keys React warns in the
console and can confuse cards when a list changes.
-->

---

# Part 2 · The question we left last week

```text
Why can the film card remember something
that the programme summary cannot see?
```

<!--
Click four cards. Point at the summary. It still says 0. Put the question back
on screen in its original words and take answers.
-->

---

# The information exists twelve times over

```text
FilmCard  isSelected: true
FilmCard  isSelected: false
FilmCard  isSelected: true
...
ProgrammeSummary  count: 0
```

## None of it is anywhere the summary can reach

<!--
Guide toward this rather than stating it first. Each card has an answer. No
card has the whole answer, and the summary has nothing.
-->

---

# So where does it have to live?

If the cards need it, and the summary needs it...

## Somewhere above both of them

<!--
The class usually reaches this unaided. App is the nearest component that
contains both. Let them say it before you name it.
-->

---

# The rule that answers it

## State belongs in the closest component that contains everything which needs it

<!--
The design rule of the week. It gets applied three times before lunch and it is
the question to ask learners all afternoon. It is not the Big Idea; that slide
came earlier and is about reading.
-->

---

# Last week was not a mistake

Each card owning its own state was right for what Week 4 was doing.

## The requirement changed, so the design changes with it

<!--
Important for confidence. This is ordinary professional work, not repair of
something done badly. Say it plainly.
-->

---

# Part 3 · Move the answer upward

```jsx
function App() {
  const [selectedIds, setSelectedIds] = useState([]);
```

An array of ids, not twelve separate answers.

<!--
Ask why an array rather than twelve booleans: the number of films is data, not
code. Anything that hard-codes twelve will be wrong when the archive changes.
-->

---

# One function decides what selecting means

```jsx
function handleToggleSelect(id) {
  if (selectedIds.includes(id)) {
    setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
  } else {
    setSelectedIds([...selectedIds, id]);
  }
}
```

<!--
filter builds a new array of everything that passes the test: here, everything
except the id being removed. Read both branches aloud.
-->

---

# Always a new array, never a changed one

```jsx
setSelectedIds([...selectedIds, id]);   // React notices
selectedIds.push(id);                   // React does not
```

<!--
Demonstrate the push version failing if there is time. It is the bug they will
otherwise meet alone at 3pm, and it produces no error message at all.
-->

---

# Part 4 · The card stops keeping secrets

```jsx
function FilmCard({ id, title, isSelected, onToggleSelect, ... }) {
```

## The `useState` line is gone

<!--
The application is now visibly broken. Say so before anyone panics. The card no
longer knows anything, and nothing is telling it yet.
-->

---

# A component just got simpler by knowing less

`FilmCard` no longer has an opinion about selection.

## It displays what it is given

<!--
Protect this moment; it is the most valuable idea of the day. Learners read
removed state as a lost feature. It is the opposite: the card is now reusable,
predictable and easy to reason about.
-->

---

# Tell the card what it needs to know

```jsx
<FilmCard
  key={film.id}
  isSelected={selectedIds.includes(film.id)}
  ...
/>
```

<!--
Cards now light up correctly when selectedIds changes. Nothing can change it
yet, so clicking still does nothing. One more step.
-->

---

# Part 5 · Give the card a way to report back

```jsx
<FilmCard
  onToggleSelect={handleToggleSelect}
  ...
/>
```

A function, passed down like any other prop.

<!--
The child is handed a function. It does not know or care what the function
does. App decides what a click means.
-->

---

# And call it when the button is clicked

```jsx
<button type="button" onClick={() => onToggleSelect(id)}>
  {isSelected ? "Remove from programme" : "Add to programme"}
</button>
```

<!--
The arrow function is the part that goes wrong most often. Explain it once,
carefully, and then again this afternoon.
-->

---

# Why the arrow matters

```jsx
onClick={onToggleSelect(id)}        // runs now, during render
onClick={() => onToggleSelect(id)}  // runs later, on click
```

<!--
Demonstrate the broken version if the room is comfortable. The infinite render
loop it causes is worth seeing once, with an explanation attached.
-->

---

# Checkpoint · Selection works again

```text
clicking a card changes its appearance
the button label changes
selectedIds grows and shrinks in React DevTools
the summary still says 0
```

<!--
Everyone here before Part 6. The summary is the last thing to fix and it is
about to be the easiest.
-->

---

# The pattern you just built

```text
Information travels down as props.
Events travel up as function calls.
```

## A child never reaches upward

<!--
Name it while it is on screen. This is the sentence to repeat every time a
learner is stuck this afternoon.
-->

---

# Part 6 · Where should the count be stored?

```jsx
const [count, setCount] = useState(0);
```

## What goes wrong with this?

<!--
Someone will propose it. Follow it honestly: two places to update, two sources
of truth, and wrong the first time anyone forgets one of them.
-->

---

# Work it out from what you already have

```jsx
const selectedFilms = films.filter((film) =>
  selectedIds.includes(film.id)
);
```

```jsx
count={selectedFilms.length}
```

<!--
Nothing new is stored. The count cannot disagree with the selection because it
is the selection, counted.
-->

---

# The same trick gives us the running time

```jsx
let totalMinutes = 0;

for (const film of selectedFilms) {
  totalMinutes = totalMinutes + film.runtimeMinutes;
}
```

<!--
An explicit loop on purpose. Mention reduce as something they will meet in
other people's code; the loop is readable by everyone in the room today.
-->

---

# And the summary can answer the real question

```jsx
const meetsTarget = totalMinutes >= 30 && totalMinutes <= 45;
```

## Select films until the programme fits

<!--
This is the first time in five weeks the shared application has been genuinely
useful. Let the room enjoy it for a moment.
-->

---

# The rule worth remembering

```text
Could I work this out from something I already have?
If so, do not store it.
```

<!--
Derived, not stored. This prevents a whole category of bugs in Weeks 6 and 7,
where more things start being remembered.
-->

---

# Part 7 · The application as a tree

```text
App  ── holds selectedIds
├── SiteHeader
├── ProgrammeSummary   ← count, totalMinutes
├── FilmCard × 12      ← isSelected, onToggleSelect
│                      → onToggleSelect(id)
└── SiteFooter
```

<!--
Ask learners to find in the code: the one place selection is stored, the two
things every card is told, the one thing a card can say back.
-->

---

# When something renders but does nothing

```text
1. Where is this information stored?
2. Which components receive it?
3. What does the child actually receive right now?
4. What happens when the event fires?
```

<!--
New category of bug this week: no error message, page looks right, clicking
achieves nothing. Guessing is the natural response and it does not work.
-->

---

# You can see props and state directly

React DevTools · Components tab

Select a `FilmCard` and watch its props change as you click.

<!--
Useful, not required. The routine works with deliberate inspection alone, so a
learner who cannot install the extension is not disadvantaged.
-->

---

# Developer Studio

## The rest of the day is yours

<!--
Whatever the morning has done to the clock, this is the longest studio of the
course so far. No further demonstrations. Circulate and ask questions rather
than fixing code.

Announce the finish time rather than a duration, so the slide never contradicts
the room.
-->

---

# Your Week 5 minimum outcome

```text
One behaviour that changes something outside
the component that triggered it
```

<!--
Deliberately a mechanism rather than a feature, so it fits every brief. Met
when a click in one component visibly changes a different part of the page.
-->

---

# Pick the one your brief actually needs

- A category filter that changes which items are shown
- A search field that narrows a list
- Clicking an item to show its detail elsewhere
- A checklist that reports its own progress
- A selection that updates a counter or summary

<!--
Selection is listed last on purpose. It is what the reference application does,
and it is the one most likely to be copied rather than designed.
-->

---

# Plan yours before you read ours

1. Say what should change, and where
2. Work out which component contains both parts
3. Then open the reference and see how it solved its own version

<!--
Planning precedes inspection. The reference is a worked example to read, never
a codebase to take over. Their prototype is theirs.
-->

---

# Make it smaller than you think

| You want | Start with |
| --- | --- |
| Search with several filters | One filter, three options |
| A detail page per film | One panel showing the last click |
| Sorting by four fields | A single sort toggle |
| Remembering choices | That is Week 6 |

<!--
The test: can the learner explain the whole mechanism in two sentences? If not,
it is too big for today.
-->

---

# If your React never ran last week

Getting it running in **your** repository is your first task today.

## That is Week 5 work, not catching up

<!--
Say this without ceremony. A learner who believes they are behind stops asking
questions, which is far more costly than the lost week.
-->

---

# Three bugs that will cost you the afternoon

```jsx
onClick={onToggleSelect}       // never gets the id
onClick={onToggleSelect(id)}   // fires during render
selectedIds.push(id)           // React never notices
```

<!--
Put this on screen and leave it up during studio. These three account for most
of what goes wrong.
-->

---

# Use AI to explain, not to decide

Good: *why does this component re-render when I click?*

Less good: *write the state management for my app*

## You still have to say where the state belongs

<!--
Week 5 is an architecture week, and architecture is exactly what learners must
own. Ask them to explain any generated code before keeping it.
-->

---

# Something in your application changed today

## Where does that information live, and who is told about it?

<!--
Whole-class reflection. Take three or four answers aloud. Listen for a location
and a direction; the code matters less than the explanation.
-->

---

<!-- _class: mentimeter-slide -->

# How confident do you feel about reading and changing React code?

## Mentimeter Activity

<!--
MENTIMETER
Type: Scale
Prompt: How confident do you feel about reading and changing React code?
Scale: 1-5
Labels: 1 = Very unconfident, 5 = Very confident

Compare with the baseline, and say explicitly that it measures how the day felt
rather than what anyone has mastered.
-->

---

# Week 5 complete

## You moved information to where it could be shared

- You read an application before anyone explained it
- State moved up; events travel back down as functions
- A component got simpler by knowing less
- Numbers are worked out, not stored

<!--
Return to the Big Idea and to what they achieved in a week with very little
new syntax and a great deal of new thinking.
-->

---

# Next week

## Your application forgets everything when the tab closes

We will fix that.

<!--
Week 6 is localStorage and persistence. Several learners will have asked for it
today; this is the promised answer.
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

Create these Week 5 questions:

1. Scale, 1-5: How confident do you feel about reading and changing React code?
   Labels: 1 = Very unconfident, 5 = Very confident.

2. Repeat the same scale question near the end:
   How confident do you feel about reading and changing React code?
   Labels: 1 = Very unconfident, 5 = Very confident.

-->

<!-- EXPORT-IGNORE-END -->
