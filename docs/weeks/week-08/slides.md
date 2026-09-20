---
marp: true
paginate: true
footer: Week 8
---

# Software Development Bootcamp

## Week 8

Deploy, Explain and Share

Dr Steve Huckle

steve@huckle.studio

<!--
Keep the opening practical. Learners should already have their own repository
open and their development machine available.
-->

---

# Today

## Morning

Deploy · Test · Prepare · Rehearse

## Afternoon

Present your Directors Notes prototype to MarBelle

<!--
Explain the two-part day. The morning has a firm stop point before the client
showcase; it is not an opportunity for another feature sprint.
-->

---

<!-- _class: big-idea section-slide -->

# Big Idea

## Software becomes meaningful when somebody else can use it—and its developer can explain it.

<!--
Sharing includes both access to the application and an honest account of the
decisions behind it.
-->

---

# By Lunchtime

You need:

- A presentation-ready project
- A tested way to demonstrate it
- A fallback if deployment misbehaves
- A rehearsed five-minute explanation

<!--
Establish success before discussing deployment. A deployed URL is desirable,
but it is only one of the four outcomes.
-->

---

# Stop Adding Features

Protect the journey you intend to show.

## Repair only what makes that journey unreliable.

<!--
Reconnect to Week 7 stabilisation. Help learners resist last-minute scope.
-->

---

<!-- _class: section-slide -->

# Deployment

## From your repository to a public web address

<!--
Move into the short deployment explanation. The next slides should take no
more than fifteen minutes before learners begin working.
-->

---

# Your Existing Structure

```text
your-project/
├── app/
│   ├── package.json
│   ├── package-lock.json
│   └── src/
└── README.md
```

## Most Vite applications already live in `app/`.

<!--
Confirm that this matches the structure created in Week 4. Learners who moved
or renamed the folder will use the supplied custom-directory version.
-->

---

# Build Locally First

```bash
cd app
npm ci
npm run build
npm run preview
```

Test the essential journey again.

<!--
Explain that build creates the production files in app/dist. Preview lets the
learner test those files locally before involving GitHub.

[Sources]
- https://vite.dev/guide/static-deploy.html
-->

---

# The Deployment Path

```text
Repository
    ↓
Install dependencies in app/
    ↓
Build app/
    ↓
Upload app/dist/
    ↓
Publish with GitHub Pages
```

<!--
This is the complete mental model. Do not teach the workflow line by line.

[Sources]
- https://vite.dev/guide/static-deploy.html
- https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
-->

---

# Use the Supplied Workflow

Open `files/README.md` in the Week 8 materials and choose one workflow:

- application in `app/`: `deploy-pages.yml`
- application elsewhere: `deploy-pages-custom-directory.yml`

Copy your chosen file to your repository root and name it:

```text
.github/workflows/deploy-pages.yml
```

<!--
Copy rather than retype. The destination must be at the repository root, not
inside the application directory. GitHub only discovers workflows in this
location. Do not install both supplied files.

[Sources]
- https://vite.dev/guide/static-deploy.html
-->

---

# One Workflow, Matching Paths

The three application paths must agree:

- npm runs inside the application directory
- the lockfile is inside that directory
- the built site is that directory's `dist/`
- the repository name becomes Vite's base path

<!--
Learners with `app/` use the primary workflow unchanged. In the custom template,
they replace `website` in all three marked paths with their directory name.
Learners should understand why the paths matter without having to learn YAML.

[Sources]
- https://docs.github.com/en/actions/how-tos/writing-workflows/choosing-what-your-workflow-does/setting-a-default-shell-and-working-directory
-->

---

# Why the Repository Name Matters

```text
https://username.github.io/repository-name/
```

The application is not hosted at the domain root.

## The workflow gives Vite the correct base path.

<!--
Connect this to missing CSS, JavaScript and image failures. The workflow reads
the repository name automatically; learners do not hard-code it.

[Sources]
- https://vite.dev/guide/static-deploy.html
-->

---

# Commit and Push

```bash
git status
git add .github/workflows/deploy-pages.yml
git commit -m "Add GitHub Pages deployment"
git push
```

<!--
Run these commands from the repository root. Ask learners to read git status
before staging the workflow.
-->

---

# Enable GitHub Pages

1. Open **Settings → Pages**
2. Choose **GitHub Actions**
3. Open the **Actions** tab
4. Inspect the deployment run
5. Follow the published URL

<!--
Show the relevant GitHub screens briefly. Interface wording may change; use the
meaning of each choice rather than touring unrelated settings.

[Sources]
- https://vite.dev/guide/static-deploy.html
-->

---

# Test the Published Site

- Opening view
- CSS and images
- Essential user journey
- Narrow layout
- Routes and refreshes
- Saved-state starting point

## Test the site you will actually present.

<!--
Ask learners to open the URL in a fresh tab. A successful green workflow only
proves deployment completed, not that the user journey works.
-->

---

# If Something Fails

```text
Reproduce → Read the evidence → Locate → Change one thing → Test again
```

Check the first useful error in:

- The local build
- The Actions run
- The browser console

<!--
Recover the Week 7 diagnostic loop. Avoid random workflow changes.
-->

---

# Timebox Deployment

A deployment problem must not consume your rehearsal.

## A local application is a valid presentation route.

<!--
If the deployed version remains unreliable after focused support, record the
issue, establish the local route and move on.
-->

---

# Your Demonstration Routes

1. Tested GitHub Pages version
2. Application running on your development machine
3. Screenshots or a short recording

<!--
Gathering around development machines worked in the previous bootcamp. It is
the preferred fallback, not a lesser presentation.
-->

---

<!-- _class: activity section-slide -->

# Deploy and Test

## Build locally, publish if possible, then prepare your fallback

<!--
Begin the supported deployment block. Allow approximately 50–60 minutes for
deployment and 30–40 minutes for testing and recovery. Use the worksheet and
resources. Pause the whole room only for a genuinely shared step.
-->

---

<!-- _class: section-slide -->

# Presenting Your Prototype

## Tell one clear and honest development story

<!--
Return after the break. Deployment work now stops unless a very small repair
protects the demonstration.
-->

---

# Five Useful Prompts

1. Which Directors Notes brief did you choose?
2. What user need did you focus on?
3. What useful journey can you demonstrate?
4. What decision or challenge shaped the result?
5. What did you learn—or what would you do next?

<!--
These prompts shape the story; they are not five equally weighted sections and
need not be repeated as questions in the presentation.
-->

---

# Five Minutes

```text
Context and user need       about 1 minute
One coherent demonstration about 2 minutes
Decision or challenge      about 1 minute
Learning and next step     about 1 minute
```

## Five minutes is a limit, not a target to fill.

<!--
A concise three- or four-minute presentation is completely acceptable.
-->

---

# Demonstrate One Journey

Show what the prototype helps somebody do.

Do not tour:

- Every screen
- Every component
- Every dataset field
- Every unfinished idea

<!--
The demonstration should provide evidence for the user need. Encourage a
known starting state and a small sequence of deliberate actions.
-->

---

# Name the Prototype Honestly

You are showing:

- An interpretation of a Directors Notes brief
- A focused beginner-built prototype
- Decisions made within eight weeks
- Work that may inspire further thinking

## You are not claiming production readiness.

<!--
Directors Notes may take inspiration from the cohort, but adoption is not
promised. Honest boundaries strengthen the explanation.
-->

---

# Questions Are Conversation

You may be asked:

- Why did you choose that approach?
- Who did you imagine using it?
- What challenged you?
- What would you do next?

<!--
Questions are not an examination. Learners should answer from what they know
and can acknowledge uncertainty.
-->

---

# A Useful Honest Answer

> I did not build that within this prototype.
>
> My next step would be to...

<!--
Give learners permission not to invent functionality, confidence or certainty.
-->

---

# Prepare Your Demonstration

- Choose the exact journey
- Reset saved state
- Open the first screen
- Close unrelated tabs and notifications
- Plug in your machine
- Start the local fallback

<!--
Allow approximately twenty minutes of individual preparation before rehearsal.
Collect deployment URLs during this period.
-->

---

<!-- _class: activity section-slide -->

# Rehearse With the Person Beside You

## Five minutes presenting · Three minutes talking · Then swap

<!--
This rehearsal reproduces the presentation boundary without turning into peer
assessment. Both learners should present.
-->

---

# As the Listener

Offer two things:

1. The clearest part of the presentation
2. One genuine question you wanted to ask

## Help the presenter discover what needs clarification.

<!--
Do not ask learners to score one another or prescribe new features.
-->

---

# After Rehearsal

Change one thing:

- Make the opening clearer
- Shorten the demonstration
- Explain one decision better
- Improve the fallback
- Remove something unnecessary

<!--
Learners record one deliberate revision in the worksheet rather than trying to
rebuild the whole presentation.
-->

---

# Before Lunch

- Share your URL—or agree your local route
- Confirm the running order
- Keep deployed and local versions ready
- Leave machines plugged in

<!--
Complete the practical logistics. Prepare browser tabs and note which learners
need the room to move to their machines.
-->

---

# The Journey You Have Made

```text
Brief → Interface → HTML and CSS → JavaScript
      → React → Data → Persistence → Refinement
      → Deployment → Sharing
```

<!--
This is recognition rather than another technical recap. Invite learners to
name examples from their own project.
-->

---

# You Built More Than an Application

You practised how to:

- Break an idea into manageable work
- Read and change code
- Investigate problems
- Test what you built
- Make and explain decisions
- Continue when the route changed

<!--
Recognise the less visible work. Avoid comparing projects by feature count or
visual polish.
-->

---

<!-- _class: section-slide -->

# Afternoon Showcase

## Your Directors Notes prototypes · Your decisions · Your stories

<!--
Welcome MarBelle and restate the context. Each learner has interpreted one
narrow brief during an eight-week beginner course.
-->

---

# Each Presentation Slot

```text
Up to 5 minutes  presentation
About 4 minutes questions and conversation
About 1 minute  changeover
```

Two blocks · A break between them

<!--
The current cohort has approximately twelve learners and potentially fewer
presenters. If time is recovered, use it for questions and MarBelle's overall
response rather than lengthening demonstrations substantially.
-->

---

# If the Deployed Site Does Not Open

Move to the development machine.

Gather around it if necessary.

## A technical interruption does not erase the work.

<!--
Do not troubleshoot through another learner's slot. Move calmly to the local
application and let the learner continue.
-->

---

<!-- _class: reflection section-slide -->

# Look Back

## What can you do now that you could not do eight weeks ago?

<!--
Use this near the final close, after presentations and MarBelle's response.
Invite specific evidence rather than broad claims.
-->

---

# Keep the Cycle Going

```text
Choose → Build → Test → Learn → Share
```

Your next project does not need to be bigger.

## It only needs to teach you something new.

<!--
This is an invitation, not a new assignment.
-->

---

<!-- _class: big-idea section-slide -->

# My goal isn't to build software with AI.

## My goal is to become a software developer who knows how to use AI well.

<!--
Return to the culminating statement from the AI Charter. The emphasis remains
on the learner becoming a developer who understands, questions and tests.
-->

---

# Thank You

Dr Steve Huckle

steve@huckle.studio

<!--
Thank the learners and MarBelle. Leave space for the course close rather than
adding further instructions.
-->
