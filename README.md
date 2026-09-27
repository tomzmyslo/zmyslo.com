# zmyslo.com

![React Router](https://img.shields.io/badge/React-333333.svg?style=for-the-badge&logo=React&logoColor=61DAFB)

![React Router](https://img.shields.io/badge/React%20Router-333333.svg?style=for-the-badge&logo=React-Router&logoColor=red)

![TailwindCSS](https://img.shields.io/badge/Tailwind%20CSS-333333.svg?style=for-the-badge&logo=Tailwind-CSS&logoColor=06B6D4)

![Vite](https://img.shields.io/badge/Vite-333333.svg?style=for-the-badge&logo=Vite&logoColor=646CFF)

The personal website for Tom Zmyslo.

## Development checks

Use Node.js 24 and the pnpm version pinned in `package.json`.

```sh
pnpm install --frozen-lockfile
pnpm exec playwright install chromium
pnpm check
```

`pnpm lint` runs ESLint with zero warnings allowed. `pnpm test` builds the app and
runs Chromium smoke tests against Vite's production preview on port 4173. The
tests cover main pages, navigation, every project, unknown routes, the résumé PDF,
JavaScript crashes, and failed local HTTP responses. Failed tests save traces and
screenshots under `test-results/`.

Pull requests to `main` and pushes to `main` run lint, build, and browser tests.
Deployment runs only after those checks pass, only on `main`, and never for pull
requests. Manual workflow runs use the same checks. The tested `dist` directory
is the one deployed. These checks do not test the production server's configuration.
