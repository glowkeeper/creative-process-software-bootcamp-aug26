---
marp: true
paginate: true
footer: Week 6
---

# Software Development Bootcamp

## Week 6

Remembering Choices

Dr Steve Huckle

steve@huckle.studio

<!--
Ask learners to start Week 6 Starter before teaching begins. Clear the
programme-builder-selected-films key on the teaching browser first.
-->

---

# First, start the application

```bash
cd src/week-06/starter
npm ci
npm run dev
```

Choose a programme that fits the 30–45 minute target.

<!--
Do not refresh yet. Ask them to leave the successful programme on screen.
-->

---

# Today, the application will remember

- Find out what React forgets
- Decide what deserves to survive
- Load one saved value
- Save it whenever it changes
- Apply the same decision to your own project

<!--
This is the final day of new technical teaching. Persistence is the only core
build. The expanded archive and routing are project support.
-->

---

<!-- _class: mentimeter-slide -->

# How confident do you feel about making an application remember information after the browser is closed?

## Mentimeter Activity

<!--
MENTIMETER
Type: Scale
Prompt: How confident do you feel about making an application remember information after the browser is closed?
Scale: 1-5
Labels: 1 = Very unconfident, 5 = Very confident

Repeat this question near the end.
-->

---

# Retrieve Week 5 together

1. Where does selection live?
2. What does `selectedIds` contain?
3. Which values are calculated from it?
4. What do you predict will happen after a refresh?

<!--
Lead this with the whole class. The important retrieval is the source of truth
and the derived values, not syntax.
-->

---

# Week 5 created one source of truth

```js
const [selectedIds, setSelectedIds] = useState([]);
```

```text
selectedIds → selected films → count → running time → target message
```

<!--
Everything on the right can be worked out from the array on the left.
-->

---

# Now refresh the browser

What happened to your programme?

<!--
Let the class observe it. Do not answer first.
-->

---

# React state belongs to the running application

Refresh starts the application again.

```js
useState([])
```

It follows the instruction and begins with an empty array.

<!--
React has not malfunctioned or forgotten. It recreated the application as
instructed.
-->

---

# Big Idea

## Applications should remember what matters to their users

<!--
The decision matters more than the API. Remembering everything is not the goal.
-->

---

# Two different kinds of memory

```text
React state     while the application is running
localStorage    text saved in this browser
```

<!--
localStorage belongs to the browser, not React. It is local to this browser and
device; it is not an online account or database.
-->

---

# Browser storage uses a key and a value

```text
Key                                  Value
programme-builder-selected-films     ["film-001","film-004"]
```

The key lets us find the same value again.

<!--
Open the Application or Storage panel only long enough to locate localStorage.
-->

---

# localStorage stores text

```js
JSON.stringify(selectedIds)
```

Array → JSON text

```js
JSON.parse(savedSelectedIds)
```

JSON text → array

<!--
JSON receives a fuller explanation in resources. Today this is simply the
conversion needed for browser storage.
-->

---

# What should we save?

```text
selectedIds       yes — the source of truth
selectedFilms     no  — derived
count             no  — derived
totalMinutes      no  — derived
meetsTarget       no  — derived
```

<!--
This explicitly reinforces Week 5. Two stored versions of the same truth can
disagree.
-->

---

# Guided Build

## Make one meaningful value survive a refresh

---

# Part 1 · Prove the application forgets

1. Select a valid programme
2. Note the selected films and running time
3. Refresh
4. Name the single source of truth that disappeared

<!--
The answer is selectedIds. The count and time disappear because their source
disappears.
-->

---

# Part 2 · Name the saved information

```js
const selectedFilmsKey =
  "programme-builder-selected-films";
```

<!--
Add this above App. A descriptive, project-specific key reduces collisions with
other applications using the same browser.
-->

---

# The same key must load and save

```js
localStorage.getItem(selectedFilmsKey);

localStorage.setItem(selectedFilmsKey, value);
```

<!--
Both methods use the same label. A spelling difference silently creates or
reads a different value.
-->

---

# Part 3 · Load what the browser remembers

```js
function getInitialSelectedIds() {
  const savedSelectedIds =
    localStorage.getItem(selectedFilmsKey);

  if (savedSelectedIds) {
    return JSON.parse(savedSelectedIds);
  }

  return [];
}
```

<!--
Read this as a sentence. The fallback is the same empty array the application
used before persistence existed.
-->

---

# Two possible beginnings

```text
Saved text exists    → parse it and return the array
Nothing saved        → return []
```

<!--
Ask learners which path their browser will take the first time.
-->

---

# Part 4 · Start state with the saved value

```js
const [selectedIds, setSelectedIds] =
  useState(getInitialSelectedIds);
```

<!--
There are deliberately no parentheses after getInitialSelectedIds. React is
given the function and calls it once when establishing initial state.
-->

---

# React receives the function

```js
useState(getInitialSelectedIds)
```

Not its result on every render:

```js
useState(getInitialSelectedIds())
```

<!--
Keep this practical. There is no need to teach the term lazy initializer unless
someone asks.
-->

---

# Checkpoint · Loading exists, saving does not

Refresh still produces an empty programme.

## Why?

<!--
Nothing has yet put a value into localStorage. This is a useful intermediate
failure, not a reason to alter the loading function.
-->

---

# Part 5 · Save whenever selection changes

```js
import { useEffect, useState } from "react";
```

```js
useEffect(() => {
  localStorage.setItem(
    selectedFilmsKey,
    JSON.stringify(selectedIds)
  );
}, [selectedIds]);
```

<!--
Add the import first. Then add the effect immediately below state.
-->

---

# Read the effect as a sentence

```text
After selectedIds changes,
turn its current value into text,
then save that text under this key.
```

<!--
Do not broaden this into general useEffect theory. The dependency array tells
React which change this effect follows.
-->

---

# The dependency names the change we follow

```js
}, [selectedIds]);
```

The effect saves after `selectedIds` changes.

<!--
An omitted dependency array would run the effect after every render. An empty
array would save only once and miss later selections.
-->

---

# Part 6 · Prove that it works

- Select several films
- Inspect the saved text
- Refresh the page
- Close and reopen the tab
- Remove a film
- Confirm the saved text changes

<!--
Testing is part of the build. Do not declare success after the code compiles.
-->

---

# Review what we built

```text
Application starts  → load saved text → parse into selectedIds
Selection changes   → stringify selectedIds → save text
Interface renders   → derive films, count, time and message
```

<!--
Ask learners to point to each of these in Complete.
-->

---

# Complete stores less than it displays

```text
Stored:     selectedIds
Calculated: selected films, count, time, target status
```

That is deliberate.

<!--
Return to the rule: persist the smallest source of truth.
-->

---

# Your projects now have a larger fictional archive

```text
180 films       120 people       40 festivals
24 companies    12 awards        909 credits
495 honours     1,736 taxonomy assignments
```

<!--
This is project infrastructure, not a new exercise. It is wholly fictional and
safe to commit and deploy.
-->

---

# The records are connected

```text
Film → Honour → Festival
Film → Credit → Person
Film → Taxonomy term
```

<!--
One example is enough. Resources explain the data model properly; do not
live-code a join.
-->

---

# Choose one entry point

```text
Film discovery       films-with-directors.json
Festival exploration festival-programmes.json
Filmmaker profiles   filmmaker-filmographies.json
Custom relationships connected source files
```

You do not need to use everything.

<!--
Direct individual learners to the relevant file during studio.
-->

---

# Does your project need separate views?

```text
Move within one page     anchor link
Display another view     application route
```

<!--
Give this explanation to everyone because Week 6 is the final technical week.
Implementation remains optional.
-->

---

# Showcase contains two routed views

```text
Archive          /
Saved programme /programme
```

```text
NavLink `to` → Route `path` → component in `element`
```

<!--
Open Showcase and click between the two views. Do not build routing live.
-->

---

# Shared state stays above the routes

```text
App — selectedIds
├── Archive
└── Saved Programme
```

`HashRouter` keeps the routes compatible with static hosting.

<!--
Point out the # in the URL. Detailed tracing instructions are in resources and
the worksheet.
-->

---

# Developer Studio

## Make one appropriate project value survive a refresh

<!--
Learners work in their own repositories. Complete is a reference and recovery
point, not a project to continue.
-->

---

# Make the decision before writing code

1. What is your source of truth?
2. Why should a visitor expect it to survive?
3. What can be derived from it?
4. What should remain temporary?

<!--
If persistence adds no real value, the learner can explain that and consolidate
Week 5 rather than manufacturing a feature.
-->

---

# One meaningful persistence outcome

- Favourite or shortlisted films
- Completed readiness checks
- An assembled folio or programme
- A chosen recommendation
- An explicit visitor preference

Not every project needs the same answer.

---

# When persistence breaks

1. Compare the loading and saving keys
2. Inspect the value before `JSON.stringify()`
3. Inspect the text in browser storage
4. Inspect the value returned by `JSON.parse()`
5. Check the effect dependency

<!--
Invalid old data can also break JSON.parse. Clear the key during debugging;
Showcase contains a defensive version for later inspection.
-->

---

# Use AI to trace the data journey

Ask it to:

- explain what is stored and what is derived
- read the loading function as a sequence
- identify why a value is not being saved
- compare a proposed route with a normal section link

Keep only code you can test, change and explain.

<!--
This is a brief Charter reminder, not a separate AI lesson.
-->

---

# What does your application remember?

Where is it saved?

What did you deliberately leave temporary or derived?

<!--
Use this as a whole-class reflection before the final confidence check.
-->

---

<!-- _class: mentimeter-slide -->

# How confident do you feel about making an application remember information after the browser is closed?

## Mentimeter Activity

<!--
MENTIMETER
Type: Scale
Prompt: How confident do you feel about making an application remember information after the browser is closed?
Scale: 1-5
Labels: 1 = Very unconfident, 5 = Very confident

Compare with the opening baseline. It measures how the day felt, not mastery.
-->

---

# Week 6 complete

## You chose what should survive and saved one source of truth

- React state still drives the interface
- Browser storage retains selected information
- JSON converts between structured data and text
- Derived values remain derived
- Your project can use a much richer fictional archive

---

# Next week

## Build, debug, simplify and stabilise

Week 7 introduces no new technical topic.

<!--
Deployment and presentation rehearsal happen during the additional Week 8
morning.
-->

---

# Thank you

Dr Steve Huckle

steve@huckle.studio

<!-- EXPORT-IGNORE-START -->

---

# Mentimeter AI Import

<!--
1. Scale, 1-5
How confident do you feel about making an application remember information after the browser is closed?
1 = Very unconfident; 5 = Very confident

2. Scale, 1-5
How confident do you feel about making an application remember information after the browser is closed?
1 = Very unconfident; 5 = Very confident
-->

<!-- EXPORT-IGNORE-END -->
