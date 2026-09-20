# GitHub Pages Workflow Files

These files deploy a Vite application to GitHub Pages. Choose the file that
matches the structure of your individual project repository.

## Application in `app/`

Use [`deploy-pages.yml`](deploy-pages.yml) when your repository has this
structure:

```text
your-repository/
├── app/
│   ├── package.json
│   ├── package-lock.json
│   └── src/
└── README.md
```

You do not need to change the application directory in this workflow.

## Application in Another Directory

Use
[`deploy-pages-custom-directory.yml`](deploy-pages-custom-directory.yml) when
your Vite application is in a directory other than `app/`.

The example uses a directory named `website`. Replace `website` with the name
of your application directory in these three places:

1. `working-directory: website`
2. `cache-dependency-path: website/package-lock.json`
3. `path: website/dist`

All three entries must use the same directory name.

If your application is at the repository root, ask a tutor for help adapting
the workflow. Do not enter `/` as the directory name.

## Install the Chosen Workflow

Whichever version you choose:

1. Copy its contents into your individual project repository.
2. Save it at `.github/workflows/deploy-pages.yml` in the repository root.
3. Commit and push the new file.
4. On GitHub, open **Settings → Pages**.
5. Under **Build and deployment**, choose **GitHub Actions** as the source.
6. Open the **Actions** tab and check the deployment run.
7. When it succeeds, open and test the published URL.

Do not copy both workflows into `.github/workflows/`. Choose one and save it
under the required `deploy-pages.yml` name.
