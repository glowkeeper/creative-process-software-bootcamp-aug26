---
marp: true
paginate: true
footer: Week 3
---

# Software Development Bootcamp

## Week 3

Adding Behaviour

Dr Steve Huckle

steve@huckle.studio

<!--
Welcome learners back. Today adds one understandable interaction to the static interfaces created in Week 2.
-->

---

# Today, the interface will respond

- Connect JavaScript to a web page
- Follow one action from click to visible change
- Make film selection work in the Programme Builder
- Add one meaningful interaction to your Directors Notes prototype

<!--
The target is one complete interaction, not broad JavaScript coverage.
-->

---

<!-- _class: mentimeter-slide -->

# How confident do you feel about using JavaScript to add behaviour to a webpage?

## Mentimeter Activity

<!--
MENTIMETER
Type: Scale
Prompt: How confident do you feel about using JavaScript to add behaviour to a webpage?
Scale: 1-5
Labels: 1 = Very unconfident, 5 = Very confident

This is a baseline, not an assessment. Repeat the same question near the end.
-->

---

# Retrieve Week 2 before looking at the code

Let’s recall together:

1. What did HTML contribute?
2. What did CSS contribute?
3. Which selectors did you use?
4. How did the layout respond when the browser narrowed?

<!--
Ask the questions one at a time and build the answers with the class. Retrieval
should reconstruct the ideas, not test whether they remember one button.
-->

---

# HTML gave the interface structure and meaning

```html
<article class="film-card">
  <h3>The Quiet Cartographer</h3>
  <p>A mapmaker records disappearing paths...</p>
  <button type="button">Add to programme</button>
</article>
```

<!--
Recall semantic elements, content hierarchy, attributes and reusable classes from the shared Week 2 build.
-->

---

# CSS gave the interface presentation and layout

```css
.film-grid {
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(250px, 1fr)
  );
}
```

<!--
Recall selectors, declarations, the visual system and responsive Grid. Connect this to the interfaces learners built for their own DN briefs.
-->

---

# Week 2 produced a meaningful user interface

- Visitors could understand its purpose
- Semantic HTML organised the content
- CSS established hierarchy and identity
- Responsive layout adapted to available space

## But the interface remained static

<!--
Do not frame Week 2 only as a non-working button. Recognise the substantial visible interface learners created first.
-->

---

# A static interface can suggest an action

```text
The visitor can see six films
The visitor can see an action
The visitor cannot perform that action yet
```

## Today, we connect the action to a response

<!--
Click one of the Week 2 buttons and show that nothing happens.
-->

---

<!-- _class: big-idea -->

# Big Idea

## Make the page do something

<!--
Keep returning to this plain-language goal.
-->

---

# Three technologies have different jobs

```text
HTML        what exists
CSS         how it appears
JavaScript  what happens
```

<!--
Declarative versus procedural thinking can be explained aloud: HTML and CSS describe; JavaScript gives instructions that run in an order.
-->

---

# JavaScript is a programming language

It lets developers give the browser instructions that can:

- run in a particular order
- respond to events
- make decisions
- remember changing values while the page is open
- update what the visitor sees

<!--
This provides a credible definition without attempting a survey of programming. Explain that procedural code describes steps the computer should carry out.
-->

---

# Behaviour makes an interface responsive to people

```text
User action          Possible response
click                select or reveal
typing               validate or suggest
change               filter or recalculate
submit               process and give feedback
```

<!--
Distinguish responsive behaviour from responsive CSS layout. Here responsive means reacting to a user action.
-->

---

# JavaScript supports familiar interface behaviour

- Menus and controls
- Forms and validation
- Search and filtering
- Recommendations
- Media controls
- Feedback and changing information

<!--
Connect examples to the Directors Notes project briefs: discovery, recommendations, related films, submission readiness and archive journeys.
-->

---

# The browser represents the HTML as objects

```text
HTML file
   ↓ browser reads it
DOM
   ↓ JavaScript can find and change it
Visible page
```

## DOM = Document Object Model

<!--
Keep the definition functional. Learners need to know why document.querySelector can find something they wrote in HTML.
-->

---

# One mental model is enough for today

```text
Find something
      ↓
Listen for an action
      ↓
Run instructions
      ↓
Change something visible
```

<!--
This is the narrative for every line in the Complete script.
-->

---

# A small interaction contains four connected ideas

```js
const button = document.querySelector("button");

button.addEventListener("click", function () {
  button.textContent = "Added";
});
```

```text
select -> event -> instructions -> visible change
```

<!--
Read this as a story, not a syntax test. The guided build will construct the same journey incrementally.
-->

---

<!-- _class: section-slide -->

# Guided Build

## Make film selection work

<!--
Move to Starter. The opening is intentionally substantial but moderated: aim
for roughly 30-40 minutes, including retrieval and discussion.
-->

---

# Part 1 · Connect JavaScript

```text
starter/
├── index.html
├── styles/
│   └── style.css
└── scripts/
    └── script.js
```

<!--
Create scripts/script.js. The folder mirrors the separation already used for CSS.
-->

---

# Ask the page to load the script

```html
<script src="scripts/script.js"></script>
</body>
```

Place the script immediately before the closing `body` tag.

<!--
Add console.log("Programme Builder loaded"); then refresh and inspect the Console. This only proves the connection works.
-->

---

# Part 2 · Find one button

```js
const filmButton = document.querySelector(
  ".film-card button"
);
```

```text
document          the page
querySelector()   find the first match
const             give the result a name
```

<!--
Connect querySelector to CSS selector knowledge from Week 2. Do not teach variables generally.
-->

---

# Part 3 · Respond to one click

```js
filmButton.addEventListener("click", function () {
  filmButton.textContent = "Added";
});
```

<!--
Run it immediately. Identify the element, event and instructions that run. This is the first complete action-to-response journey.
-->

---

# Read the code as a sentence

```text
For this film button,
listen for a click.
When the click happens,
change its visible text to “Added”.
```

<!--
Learners do not need to memorise punctuation before they understand the instruction.
-->

---

# Part 4 · Change the film card

```js
const filmCard = filmButton.closest(".film-card");
filmCard.classList.add("film-card--selected");
```

<!--
`closest()` moves from the clicked button to its containing card. It returns
`null` if it cannot find a matching ancestor, so the defensive version is:

```js
const filmCard = filmButton.closest(".film-card");

if (filmCard) {
  filmCard.classList.add("film-card--selected");
}
```

The visible example relies on the controlled HTML structure: every film button
is inside `.film-card`. Explain that assumption, then use the guarded version
in the live code if you want to model the safer pattern.
-->

---

# JavaScript changes the class; CSS changes the appearance

```css
.film-card--selected {
  border-color: var(--accent);
  box-shadow: 0 0 0 0.2rem rgba(179, 58, 47, 0.18);
}
```

<!--
This separation is important: JavaScript expresses state; CSS remains responsible for presentation.
-->

---

# Checkpoint · One button now works

```text
Click
  ↓
event listener runs
  ↓
button text changes
  ↓
selected class changes the card
```

<!--
Pause and ask learners to trace the interaction before generalising it.
-->

---

# Part 5 · Apply the pattern to every film

```js
const filmButtons = document.querySelectorAll(
  ".film-card button"
);

filmButtons.forEach(function (button) {
  // Give this button the click behaviour
});
```

<!--
querySelectorAll returns every matching button. forEach repeats the setup once for each button.
-->

---

# Put the understood interaction inside the pattern

```js
filmButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const filmCard = button.closest(".film-card");
    filmCard.classList.add("film-card--selected");
    button.textContent = "Added";
  });
});
```

<!--
Do not labour every bracket. The one-button version has already established the meaning. Use Complete as a recovery point if syntax repair begins consuming time.
-->

---

# Part 6 · Add and remove films

```js
filmCard.classList.toggle("film-card--selected");
```

`toggle()` adds the class when absent and removes it when present.

<!--
Replace classList.add. Click repeatedly and inspect the class changing in Elements if useful.
-->

---

# Choose the label from the current state

```js
if (filmCard.classList.contains("film-card--selected")) {
  button.textContent = "Remove from programme";
} else {
  button.textContent = "Add to programme";
}
```

<!--
Translate the condition first: if selected, offer removal; otherwise, offer addition.
-->

---

# Part 7 · Add a visible programme count

```html
<p id="programme-count" aria-live="polite">
  0 films selected
</p>
```

```js
const programmeCount = document.querySelector(
  "#programme-count"
);
```

<!--
Add the full programme-summary section from Complete. Select the count once near the top of script.js.
-->

---

# Count the selected cards after every click

```js
const selectedFilms = document.querySelectorAll(
  ".film-card--selected"
);

programmeCount.textContent =
  selectedFilms.length + " films selected";
```

<!--
Add this at the end of the click handler. Keep the wording simple; singular/plural grammar is not today's problem.
-->

---

# Part 8 · Review what we built

- What does the visitor do?
- Where does JavaScript listen?
- Which element changes?
- Which CSS class represents selection?
- What does the `if/else` decide?
- How is the count updated?

<!--
Ask learners to locate each answer in the shared Complete application before moving to their own work.
-->

---

# Complete is one coherent interaction

```text
select or remove a film
        ↓
change the card and button
        ↓
update the selected-film count
```

<!--
This is successful completion of the guided build.
-->

---

# Showcase maps further JavaScript possibilities

- Programme list and total runtime
- Useful programme-length feedback
- Filtering by film form
- A guest-film form and validation
- Dynamically created film cards

## Inspect it; do not treat it as today's checklist

<!--
Demonstrate briefly. Mention that it still forgets everything on refresh; persistence belongs later in the course.
-->

---

<!-- _class: section-slide -->

# Developer Studio

## Add one interaction to your Directors Notes prototype

<!--
Learners now use the worksheet to define one action and response.
-->

---

# Describe the interaction before coding

> When the visitor **does this**,
>
> the interface **changes like this**.

Examples:

- reveal or hide existing information
- select or deselect an item
- display a prepared result
- switch between two prepared views

<!--
The sentence protects scope and exposes whether the intended response is visible and testable.
-->

---

# Your Week 3 minimum outcome

- One user action
- One clear visible response
- One external JavaScript file
- A manual test of both states
- Code you can explain
- A clear Git commit

<!--
Forms, filters and generated collections are not required.
-->

---

# When nothing happens

1. Save and refresh
2. Read the first Console error
3. Check its file and line number
4. Check the script path
5. Check the selector against the HTML
6. Change one thing and test again

<!--
Model investigation rather than random rewriting.
-->

---

# Use AI to understand the interaction

Ask it to:

- explain one unfamiliar line
- translate an error message
- compare two small options
- review whether your action and response match

Keep only code you can read, test and explain.

<!--
This is a brief course-wide reminder, not a separate AI lesson.
-->

---

# What can a visitor do now that they could not do before?

<!--
Use this as a short whole-class reflection. Invite learners to describe both
the action and visible response before the confidence check.
-->

---

<!-- _class: mentimeter-slide -->

# How confident do you feel about using JavaScript to add behaviour to a webpage?

## Mentimeter Activity

<!--
MENTIMETER
Type: Scale
Prompt: How confident do you feel about using JavaScript to add behaviour to a webpage?
Scale: 1-5
Labels: 1 = Very unconfident, 5 = Very confident

Compare with the opening baseline. Confidence may move modestly; the important
evidence is that learners can now trace and explain one interaction.
-->

---

# Week 3 complete

## You connected a user action to a visible response

- JavaScript found existing HTML
- An event listener responded to a click
- The interface communicated its changed state
- Your prototype can now do something

<!--
Return to the Big Idea and the progress learners made.
-->

---

# Next week

## Organise a growing interface with React components and props

The migration will be deliberately partial.

<!--
Week 4 does not need to preserve every Week 3 interaction. The focus shifts to components and props.
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

Create these Week 3 questions:

1. Scale, 1-5: How confident do you feel about using JavaScript to add
   behaviour to a webpage?
   Labels: 1 = Very unconfident, 5 = Very confident.

2. Repeat the same scale question near the end:
   How confident do you feel about using JavaScript to add behaviour to a
   webpage?
   Labels: 1 = Very unconfident, 5 = Very confident.

-->

<!-- EXPORT-IGNORE-END -->
