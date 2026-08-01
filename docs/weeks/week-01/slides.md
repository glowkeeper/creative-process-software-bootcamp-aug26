---
marp: true
paginate: true
footer: Week 1
---

# Software Development Bootcamp

## Week 1

Becoming a Developer Through a Real Client Brief

Dr Steve Huckle

steve@huckle.studio

<!--
Welcome learners and introduce the teaching team.

Today begins with a real organisation and a real opportunity, but the outcome is a learning prototype rather than production work.
-->

---

# Over eight weeks, you will build one prototype

- Respond to a Directors Notes brief
- Learn modern web-development foundations
- Make and explain your own decisions
- Present your work to MarBelle in Week 8

<!--
Set the destination before discussing the detail of Week 1.

The prototype can be incomplete. Understanding and visible development are more important than feature count.
-->

---

# How we will learn

```text
I do    I demonstrate

We do   We investigate and build together

You do  You apply the idea to your prototype
```

<!--
The balance changes over the course. Early weeks contain more shared guidance; later weeks contain more Developer Studio.
-->

---

# Two applications have different jobs

```text
Short Film Programme Builder
Shared reference for learning techniques

Your Directors Notes prototype
Your individual response to a client brief
```

<!--
The reference application is not the learner planning tool and not an answer to one of the client briefs.
-->

---

# Weeks 1-4 build the foundations

1. Plan and organise
2. Build a visible interface
3. Add behaviour
4. Begin organising with React components

<!--
Keep this roadmap high level. The Week 4 React migration is deliberately staged rather than completed in one session.
-->

---

# Weeks 5-8 build independence

5. Review and restore important behaviour
6. Remember appropriate information
7. Test, improve and prepare to share
8. Present your prototype

<!--
Emphasise that guidance reduces and learner decisions increase.
-->

---

<!-- _class: mentimeter-slide -->

# How confident do you feel about beginning a software project?

## Mentimeter Activity

<!--
MENTIMETER
Type: Scale
Prompt: How confident do you feel about beginning a software project?
Scale: 1-5
Labels: 1 = Very unconfident, 5 = Very confident

There is no expected starting score. Use this as a baseline, not an assessment.
-->

---

<!-- _class: mentimeter-slide -->

# What do software developers actually do?

## Mentimeter Activity

<!--
MENTIMETER
Type: Word cloud
Prompt: What do software developers actually do?

Accept coding answers, then use the discussion to broaden the practice.
-->

---

# Software development includes code

## It also includes everything around it

- Listening
- Asking questions
- Planning
- Communicating
- Designing
- Testing
- Debugging
- Documenting
- Reviewing

<!--
Do not diminish coding. Position it as one important part of a larger practice.
-->

---

<!-- _class: big-idea -->

# Big Idea

## Software development is planned and organised

<!--
This is the sentence learners should remember at the end of the day.
-->

---

# Today begins with listening

```text
Client
   ↓
Visitor
   ↓
Opportunity
   ↓
Small starting point
   ↓
Organised work
```

<!--
Introduce the sequence before MarBelle speaks.

Listening creates the context for all later planning.
-->

---

<!-- _class: section-slide -->

# Directors Notes

## A real publication, archive and client context

<!--
Invite MarBelle to introduce Directors Notes.

[Sources]
- https://directorsnotes.com/
[/Sources]
-->

---

# Listen for four things

1. What is Directors Notes?
2. Who visits it?
3. What makes its archive valuable?
4. What could help visitors discover more?

<!--
Direct learners to Activity 1 in the worksheet.

Encourage notes and questions rather than solution-making while MarBelle speaks.
-->

---

# Ask before you assume

## Useful client questions

- Who are we helping?
- What are they trying to do?
- What happens today?
- What matters most?
- What would you need to know before deciding?

<!--
Invite learner questions for MarBelle.

Keep the discussion on visitors and opportunities rather than WordPress infrastructure.
-->

---

# MarBelle will return in Week 8

## You will present an individual prototype

Your ideas may inspire future Directors Notes development.

There is no expectation that your prototype will become production software.

<!--
Make the real audience and the boundary equally prominent.
-->

---

# Ten briefs, twenty individual responses

Several people may choose the same brief.

```text
Same opportunity
      ≠
Same solution
```

<!--
Explain that comparison is useful. Every learner keeps an individual repository, board, codebase and presentation.
-->

---

# Briefs 1-5

1. Film Discovery Explorer
2. Filmmaker Profile
3. Film Folio
4. Awards Journey
5. Festival Explorer

<!--
Give only a one-sentence oral introduction to each. Learners will read the full briefs themselves.
-->

---

# Briefs 6-10

6. What Should I Watch?
7. Thematic Archive Story
8. Homepage Discovery Rail
9. Submission Readiness Guide
10. Related Film Journey

<!--
Avoid describing any brief as easy or advanced.
-->

---

# Every brief has the same shape

- **Opportunity** - why it may be useful
- **Intended visitor** - who it should help
- **Starting Point** - the smallest meaningful prototype
- **Possible Directions** - optional future development
- **Keep Manageable** - what not to build yet

<!--
Introduce the project-briefs document.

These are scope controls, not ability levels.
-->

---

# Everyone begins with the Starting Point

## More experience does not require more initial scope

Build something small.

Make it work.

Understand it.

Then decide what comes next.

<!--
Previous programming experience is not a reliable predictor of how someone will handle independent scope or React.
-->

---

<!-- _class: activity-slide -->

# Choose your brief

1. Read all ten summaries
2. Record a first choice
3. Record a second choice
4. Explain what interests you

<!--
Use project-briefs.md and Worksheet Activity 2.

Allow quiet reading time before discussion.
-->

---

# Name the visitor before the features

Complete these sentences:

> I am designing for...

> They are trying to...

> My prototype explores...

<!--
Use Worksheet Activity 3.

Help learners replace broad audiences such as “everyone” with the intended visitor from the brief.
-->

---

# A Starting Point is a promise

## It says what the first useful version will do

It does not describe everything the project might eventually become.

<!--
Ask one learner to share a Starting Point and one Possible Direction.
-->

---

# Protect the scope

```text
Starting Point       Build first

Possible Directions Consider later

Keep Manageable      Leave out deliberately
```

<!--
Deferring work is a development decision, not failure.
-->

---

# Prototype with safe content

Do not copy Directors Notes:

- Photographs or film stills
- Videos or logos
- Article or interview text
- Client archive data

<!--
The original client project pack remains private tutor reference material.
-->

---

# The constraint can make the work more original

Use:

- The course's fictional film dataset
- Your own writing or artwork
- Abstract placeholders or HTML and CSS treatments
- Openly licensed, attributed assets

<!--
Ask learners to record their initial asset approach in Worksheet Activity 4.
-->

---

<!-- _class: section-slide -->

# Organise the project

## Repository · Project board · Backlog · README · Git

<!--
Transition from client and scope decisions into the shared developer workflow.
-->

---

# Your repository is the project’s home

It contains:

- Code
- Documentation
- Version history
- Evidence of development

<!--
Explain that each learner creates an individual project repository, separate from the shared August cohort repository.
-->

---

# Remote and local

```text
GitHub repository
        ↕
    push / pull
        ↕
Local working copy
```

<!--
Keep the explanation practical. Learners will create on GitHub, clone locally, edit locally and push changes back.
-->

---

<!-- _class: guided-build section-slide -->

# Create and clone

1. Create an individual GitHub repository
2. Initialise it with a README
3. Copy the repository URL
4. Clone into a known folder
5. Open the folder in VS Code

<!--
Demonstrate one stage at a time and pause for learners to repeat it.

Verify the target folder before cloning.
-->

---

# A Project board makes work visible

```text
Todo → In Progress → Done
```

Use it to choose the next small piece of work - not to describe the whole project
in one card.

<!--
Create or connect a simple GitHub Project board.
-->

---

# “Build the app” is not a useful task

## Break the Starting Point into visible steps

- Write five fictional film records
- Add one film card in HTML
- Style the film card
- Add the remaining cards
- Test headings and keyboard navigation

<!--
Model decomposition with Film Discovery Explorer, but explain that the pattern applies to every brief.
-->

---

<!-- _class: activity-slide -->

# Create a small backlog

Write **five to eight** items.

Include work for:

- Content
- Interface
- Testing
- Documentation

<!--
Use Worksheet Activity 8.

Ask learners to identify the first item and something that can wait.
-->

---

# A README explains the project

Include:

- Project name
- Directors Notes context
- Chosen brief
- Intended visitor
- Opportunity
- Starting Point
- Asset approach
- Current status

<!--
Keep the first README short and useful. It can improve throughout the course.
-->

---

# Version control creates a history

```text
Edit → Check → Stage → Commit → Push
```

Each commit records a meaningful step.

<!--
Demonstrate git status before staging and after committing.
-->

---

<!-- _class: guided-build section-slide -->

# Commit the project foundation

```bash
git status
git add README.md
git commit -m "document initial project plan"
git push
```

<!--
Adapt the push command if Git displays first-push instructions.

Confirm the README appears on GitHub.
-->

---

<!-- _class: activity-slide -->

# Your Week 1 outcome

- Agreed brief
- Intended visitor
- Manageable Starting Point
- Individual repository and local clone
- GitHub Project board
- Small backlog
- Initial README
- Successful commit and push

<!--
Use the checklist in Worksheet Activity 10.
-->

---

# Finished the checklist?

Improve understanding before adding features:

- Clarify a backlog item
- Improve README structure
- Research safe assets
- Sketch the Week 2 page
- Explore a public repository

<!--
Do not reward a larger feature list. The preferred extension is clearer planning.
-->

---

<!-- _class: mentimeter-slide -->

# What did planning help you decide before writing code?

## Mentimeter Activity

<!--
MENTIMETER
Type: Open ended
Prompt: What did planning help you decide before writing code?
-->

---

# Before next week, be able to explain

1. Who your intended visitor is
2. What your Starting Point does
3. What you deliberately left for later
4. Why your first backlog item comes first

<!--
Invite two or three short responses.
-->

---

<!-- _class: mentimeter-slide -->

# How confident do you feel about beginning your project now?

## Mentimeter Activity

<!--
MENTIMETER
Type: Scale
Prompt: How confident do you feel about beginning your project now?
Scale: 1-5
Labels: 1 = Very unconfident, 5 = Very confident
-->

---

# Next week

## Create something people can see and use

You will build the first static interface for your Directors Notes prototype
using HTML and CSS.

We will meet the Short Film Programme Builder reference application.

<!--
Connect the project foundation to a visible first page.
-->

---

# Your goal is not to build everything

## Build a small prototype you understand and can explain

<!--
Close by resolving the opening: a developer begins with listening, a clear user, controlled scope and organised work.
-->

<!-- EXPORT-IGNORE-START -->

---

# Mentimeter AI Import

<!--

Create these Week 1 questions:

1. Scale, 1-5: How confident do you feel about beginning a software project?
   Labels: 1 = Very unconfident, 5 = Very confident.

2. Word cloud: What do software developers actually do?

3. Open ended: What did planning help you decide before writing code?

4. Scale, 1-5: How confident do you feel about beginning your project now?
   Labels: 1 = Very unconfident, 5 = Very confident.

-->

<!-- EXPORT-IGNORE-END -->
