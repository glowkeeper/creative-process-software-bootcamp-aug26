# Week 8 Resources

## Deploy, Explain and Share

Use this guide to publish your existing Directors Notes prototype and prepare
to present it. Deployment is not a new application feature. Stop adding scope
and make the version you already have dependable.

## The Expected Project Structure

This course assumes your repository contains the Vite application in `app/`:

```text
your-project/
├── app/
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│   └── src/
└── README.md
```

Run npm commands from `app/`, not from the repository root.

## Build Before You Deploy

In the terminal, move into the application and create a production build:

```bash
cd app
npm ci
npm run build
```

Vite writes the production files to `app/dist/`. A successful build does not
guarantee that every interaction works, but a failed build cannot be deployed.
Read the first useful error before changing anything.

You can inspect the production build locally:

```bash
npm run preview
```

Open the address Vite displays and test the project's essential journey.

## Use the Supplied Workflow

The course supplies
[`deploy-pages.yml`](files/deploy-pages.yml) with the Week 8 materials.

In your own project repository, create this exact destination:

```text
.github/workflows/deploy-pages.yml
```

Copy the supplied file rather than retyping it. The workflow must be inside the
repository-root `.github/workflows/` directory—not inside `app/`.

It will:

1. check out the repository
2. install the dependencies from `app/package-lock.json`
3. build the application inside `app/`
4. give Vite the repository-specific GitHub Pages base path
5. upload `app/dist/`
6. deploy the uploaded site to GitHub Pages

The workflow is shared because everyone used the same `app/` folder name. Ask
for support if your application has been moved or renamed.

## Commit and Push the Workflow

From the repository root:

```bash
git status
git add .github/workflows/deploy-pages.yml
git commit -m "Add GitHub Pages deployment"
git push
```

Read `git status` before committing. Do not add secrets, `node_modules/` or the
generated `dist/` directory.

## Enable GitHub Pages

On GitHub:

1. Open the repository's **Settings**.
2. Select **Pages**.
3. Under **Build and deployment**, choose **GitHub Actions**.
4. Open the repository's **Actions** tab.
5. Open the latest deployment run.
6. When it succeeds, follow the published URL.

The workflow also has a manual **Run workflow** option.

## Why Vite Needs a Base Path

A GitHub project site normally has an address shaped like:

```text
https://username.github.io/repository-name/
```

The application is not hosted at the domain root. The workflow therefore runs:

```bash
npm run build -- --base=/${repository-name}/
```

It obtains the real repository name from GitHub automatically. This helps Vite
generate the correct JavaScript, CSS and asset URLs without every learner
editing `vite.config.js`.

## Routing on GitHub Pages

### No router

Nothing extra is required. Test the published application's main journey.

### `HashRouter`

Addresses contain a `#`, for example:

```text
https://username.github.io/repository-name/#/programme
```

Test navigation, refresh the page on each view and paste a complete routed URL
into a fresh tab.

### `BrowserRouter`

A routed view may open through navigation but fail when refreshed directly.
GitHub Pages then looks for a real file at that path. Ask for support; changing
to `HashRouter` is usually the manageable course solution.

Do not add routing merely for deployment.

## Test the Published Version

Open the deployment in a fresh tab and check:

- [ ] The opening view loads without a blank page.
- [ ] CSS and images appear.
- [ ] The essential user journey works.
- [ ] Empty and missing-data states remain understandable.
- [ ] The layout works at a narrow width.
- [ ] Every route you intend to show opens and refreshes.
- [ ] Any saved state is in the condition you want for the demonstration.
- [ ] The browser console contains no error that breaks the main journey.

## Deployment Troubleshooting

| What you see | First checks |
| --- | --- |
| `npm run build` fails locally | Read the first useful error; check imports, filenames and syntax. |
| Install fails in GitHub Actions | Confirm `app/package.json` and `app/package-lock.json` are committed. |
| The workflow cannot find the application | Confirm the folder is named exactly `app`. |
| The deployed page is blank | Inspect the browser console and check the build base path. |
| CSS or images are missing | Check paths, filename capitalisation and committed assets. |
| A routed page fails on refresh | Check whether the project uses `BrowserRouter`. |
| An old version appears | Confirm the latest workflow completed, then refresh without cached files. |

Use evidence and change one thing at a time. Timebox deployment repair so it
does not consume preparation and rehearsal time.

## A Dependable Demonstration

Use the first dependable option:

1. the tested GitHub Pages version
2. the application running on your development machine
3. screenshots or a short recording if neither application opens

If the deployed version fails during the presentation, say so briefly and move
to your machine. A deployment problem does not erase your project or learning.

Before presenting:

- close unrelated tabs and notifications
- plug in the development machine
- start the local application if it is your fallback
- reset saved state to a useful starting point
- open the exact first screen you intend to show
- keep screenshots available only if needed

## Shape a Five-Minute Presentation

Use these prompts rather than describing every file and feature:

1. Which Directors Notes brief did you choose?
2. What user need did you focus on?
3. What useful journey can you demonstrate?
4. What important decision or challenge shaped the result?
5. What did you learn, and what might you do next?

A useful rhythm is:

```text
Context and user need       about 1 minute
One coherent demonstration about 2 minutes
Decision or challenge      about 1 minute
Learning and next step     about 1 minute
```

Five minutes is a limit, not a target that must be filled.

## Questions Are Conversation

MarBelle or somebody in the room may ask why you made a choice, who the
prototype is for, what challenged you or what you would do next. Answer from
what you know.

It is completely reasonable to say:

> I did not build that within this prototype. My next step would be to...

Do not invent certainty or claim the prototype is production-ready.

## Further Reference

- [Vite: Deploying a Static Site](https://vite.dev/guide/static-deploy.html)
- [GitHub: Using custom workflows with GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
- [GitHub: Viewing workflow run history](https://docs.github.com/en/actions/how-tos/monitor-workflows/view-workflow-run-history)
