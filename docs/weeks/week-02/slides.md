---
marp: true
paginate: true
footer: Week 2
---

# Software Development Bootcamp

## Week 2

Creating the Interface

Dr Steve Huckle

steve@huckle.studio

<!--
Welcome learners back. Today produces the first visible version of both the shared reference application and each learner's Directors Notes prototype.
-->

---

# Today, your project becomes visible

- Learn the jobs of HTML and CSS
- Build a static Short Film Programme Builder together
- Create one interface for your Directors Notes brief
- Explain the structure and styling you chose

<!--
Keep this concrete. The target is one clear interface, not a finished application.
-->

---

# Two applications still have different jobs

```text
Short Film Programme Builder
Shared example we build together

Your Directors Notes prototype
Your response to one supplied brief
```

<!--
The reference application demonstrates techniques. It is not a project-management tool or an answer learners submit.
-->

---

<!-- _class: mentimeter-slide -->

# What did you decide or create in Week 1?

## Mentimeter Activity

<!--
MENTIMETER
Type: Word cloud
Prompt: What did you decide or create in Week 1?

Use the answers to distinguish decisions from things learners created. The next
slide makes that distinction visible.
-->

---

# Week 1 established your project's direction

```text
You decided                    You created
brief and intended visitor     repository and README
Starting Point                 Project board and first issues
```

## Today, turn that direction into a visible interface

<!--
Invite learners to place a few Mentimeter answers in the two groups. Then ask:
what can a visitor currently see or use in the application itself? The answer
creates the need for today's Big Idea.
-->

---

<!-- _class: big-idea -->

# Big Idea

## Create something people can see and use

<!--
Move quickly from this statement into the few concepts needed to begin.
-->

---

# A web interface has two foundations

```text
HTML                         CSS
structure and meaning   +    presentation

              = interface
```

<!--
HTML says what the content is. CSS controls how it appears. Behaviour arrives next week.
-->

---

# HTML describes the content

```html
<article>
  <h2>The Quiet Cartographer</h2>
  <p>A mapmaker records disappearing paths...</p>
</article>
```

- Elements are written with tags
- Nesting expresses relationships
- Semantic elements communicate meaning

<!--
Do not survey every element. Use this one example to establish the model.
-->

---

# Attributes add information

```html
<section aria-labelledby="films-heading">
  <h2 id="films-heading">Choose from six films</h2>
</section>
```

```text
attribute name="attribute value"
```

<!--
Use id as the first concrete attribute. Explain that it uniquely names one element on this page.
-->

---

# CSS selects HTML and changes its presentation

```css
.film-card {
  padding: 1rem;
  background-color: white;
}
```

```text
selector        property     value
.film-card      padding      1rem
```

<!--
Developers connect HTML and CSS with selectors. A declaration is a property/value pair.
-->

---

# Three simple ways to select HTML

```css
button { }          /* every button element */

.film-card { }      /* reusable class */

#films-heading { }  /* one unique ID */
```

<!--
Element selectors include button, p, body and article. Classes are the default choice for reusable styling. IDs are useful for unique relationships and occasional unique styling.
-->

---

# Spacing happens around the content

```text
+----------------------+
|        margin        |
|  +----------------+  |
|  |     border     |  |
|  |  +----------+  |  |
|  |  | padding  |  |  |
|  |  | content  |  |  |
|  |  +----------+  |  |
|  +----------------+  |
+----------------------+
```

<!--
This is enough box-model vocabulary for now. Revisit it in DevTools while styling the card.
-->

---

<!-- _class: section-slide -->

# Guided Build

## Short Film Programme Builder

<!--
Target: begin practical work within 20-25 minutes of the session starting.
-->

---

# Part 1 · Meet the scaffold

```text
starter/
├── index.html
└── styles/
    └── style.css
```

1. Open `index.html` in VS Code
2. Open it in the browser
3. Edit, save and refresh

<!--
Confirm everyone is editing and refreshing the correct file before continuing.
-->

---

# The document already has foundations

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Short Film Programme Builder</title>
</head>
<body>

</body>
</html>
```

<!--
Identify head as information about the page and body as the visible page content. Learners do not need to type this scaffold.
-->

---

# Part 2 · Structure the page

```html
<body>
  <header></header>

  <main>
    <section></section>
  </main>

  <footer></footer>
</body>
```

<!--
Build the large meaningful regions first. Ask what job each region performs.
-->

---

# Part 3 · Introduce the programme

```html
<header class="site-header">
  <p class="eyebrow">Creative Processes Cinema</p>
  <h1>Short Film Programme Builder</h1>
  <p>Explore six fictional films and imagine a programme...</p>
</header>
```

<!--
Add the full copy from Complete. Point out the reusable class syntax in HTML without styling it yet.
-->

---

# Give the collection a purpose

```html
<section aria-labelledby="films-heading">
  <div class="section-heading">
    <div>
      <p class="eyebrow">Stage 1 archive</p>
      <h2 id="films-heading">Choose from six short films</h2>
    </div>
    <p>Target running time: 30-45 minutes</p>
  </div>
</section>
```

<!--
Connect the section to its unique heading. The class names repeated design roles; the ID names one heading.
-->

---

# Part 4 · Build one film card

```html
<article class="film-card">
  <p class="film-meta">Documentary · Ireland · 2023</p>
  <h3>The Quiet Cartographer</h3>
  <p>A mapmaker records disappearing paths along a changing coastline.</p>
  <button type="button">Add to programme</button>
</article>
```

<!--
Wrap the card in div.film-grid. Explain why a self-contained film record is an article. The button is visible but deliberately does nothing in Week 2.
-->

---

# Part 5 · Create the collection

One card pattern + different content = a collection

```text
The Quiet Cartographer     Borrowed Weather
Soft Machines              A Song for the Underpass
Tuesday's Orbit            Salt Library
```

## Prepared checkpoint - no live repetition

<!--
TUTOR: Do not type or paste the remaining cards live. Switch to Complete's prepared six-card index.html, identify the repeated pattern and continue. Mention that Salt Library has no runtime: real-shaped data is not always complete.
-->

---

# Part 6 · Connect the stylesheet

```html
<link rel="stylesheet" href="styles/style.css">
```

```text
HTML asks the browser to load the CSS file
```

<!--
Add the link inside head. Use Inspect once to confirm that a test body rule is applied, then remove the test.
-->

---

# Give repeated decisions a name

```css
:root {
  --background: #f1eee8;
  --surface: #fffdf8;
  --text: #20201d;
  --muted: #66635d;
  --border: #d8d2c8;
  --accent: #b33a2f;
}
```

<!--
Introduce custom properties just in time. They form a tiny visual system; learners do not need to memorise this syntax.
-->

---

# Establish the page before styling details

```css
* { box-sizing: border-box; }

body {
  margin: 0;
  font-family: Arial, sans-serif;
  line-height: 1.5;
  color: var(--text);
  background-color: var(--background);
}
```

<!--
Explain the element selector body. box-sizing makes declared widths easier to reason about.
-->

---

# Control width and spacing once

```css
.site-header,
main,
footer {
  width: min(1100px, calc(100% - 2rem));
  margin: 0 auto;
}
```

<!--
This grouped selector gives three regions the same width. Avoid unpacking every function in depth; observe the result by resizing.
-->

---

# Part 7 · Style the film card

```css
.film-card {
  min-height: 300px;
  padding: 1.25rem;
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  background-color: var(--surface);
}
```

<!--
Add the complete rule, including flex layout, from the reference CSS. Open the DevTools box-model view and point to content, padding, border and margin.
-->

---

# Interfaces should respond visibly

```css
.film-card button:hover {
  background-color: var(--accent-dark);
}

.film-card button:focus-visible {
  outline: 3px solid var(--text);
  outline-offset: 3px;
}
```

<!--
Hover with the pointer, then Tab with the keyboard. This is visual feedback, not JavaScript behaviour.
-->

---

# Part 8 · Arrange repeated items with Grid

```css
.film-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}
```

<!--
Introduce Grid only now, immediately before use. Learners should understand the outcome: as many useful columns as fit, never narrower than 250px.
-->

---

# Test the narrow layout

```css
@media (max-width: 650px) {
  .section-heading {
    align-items: flex-start;
    flex-direction: column;
  }
}
```

Resize the browser and inspect what changes.

<!--
The grid already adapts. This media query fixes the remaining heading layout at a narrow width.
-->

---

# Part 9 · Review what we built

- meaningful HTML structure
- element, class and ID selectors
- CSS properties and values
- content, padding, border and margin
- a responsive collection
- visible hover and keyboard focus

<!--
Ask learners to point to each in their own code or the browser. Use explanation as the checkpoint.
-->

---

# Complete is today's successful outcome

- Six fictional films
- Clear hierarchy
- Responsive card layout
- Consistent visual system
- Buttons that are visible but do not work yet

<!--
If images/week-02-complete.png exists after capture, show it during delivery as a quick comparison. The working browser is preferable.
-->

---

# Showcase changes the visual direction

It still uses only HTML and CSS.

- Stronger art direction
- CSS-only abstract film artwork
- Runtime labels
- Empty programme summary
- Additional responsive polish

<!--
Show the working Showcase briefly after learners understand Complete. It is inspiration, never the required target.
-->

---

<!-- _class: section-slide -->

# Developer Studio

## Build one interface for your Directors Notes brief

<!--
Learners now return to their chosen brief and worksheet.
-->

---

# Keep the Starting Point narrow

Choose the single most important view or moment:

- What must the visitor understand first?
- What content pattern repeats?
- Which HTML describes that content honestly?
- Which visual choices support its purpose?

<!--
Do not let learners turn Week 2 into a multi-page site. One coherent interface is enough.
-->

---

# Your Week 2 minimum outcome

- One meaningful `index.html`
- One linked external stylesheet
- Clear structure and hierarchy
- A reusable class where appropriate
- A layout that works when narrow
- Fictional, self-created, placeholder or permitted assets only
- A clear Git commit

<!--
Use the worksheet checklist during coaching.
-->

---

# Use AI as a mentor

Before keeping suggested code, ask:

1. What does each line do?
2. Does it use ideas I can explain?
3. Is it solving my Starting Point or expanding it?
4. What did I test or change myself?

<!--
Reconnect to the AI Charter. Learners remain responsible for every line in their project.
-->

---

<!-- _class: mentimeter-slide -->

# What can a visitor understand from your interface?

## Mentimeter Activity

<!--
MENTIMETER
Type: Open ended
Prompt: What can a visitor understand from your interface?

Invite a few learners to connect an answer to a visible interface decision.
-->

---

# Week 3 asks the next question

## How can the page respond when somebody uses it?

```text
Week 2: visible structure and presentation
Week 3: behaviour and interaction
```

<!--
Click Add to programme. It does nothing. That gap creates the need for JavaScript next week.
-->

---

# Week 2 complete

## You turned a planned Starting Point into a visible interface

- HTML gave the content structure and meaning
- CSS gave it hierarchy, layout and presentation
- Your visitor can now understand what the interface is for

<!--
Return to the Big Idea: learners created something people can see and use. End
on the progress they made today before the brief presenter close.
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

Create these Week 2 questions:

1. Word cloud: What did you decide or create in Week 1?

2. Open ended: What can a visitor understand from your interface?

-->

<!-- EXPORT-IGNORE-END -->
