# zmyslo.com

![React Router](https://img.shields.io/badge/React-333333.svg?style=for-the-badge&logo=React&logoColor=61DAFB)

![React Router](https://img.shields.io/badge/React%20Router-333333.svg?style=for-the-badge&logo=React-Router&logoColor=red)

![TailwindCSS](https://img.shields.io/badge/Tailwind%20CSS-333333.svg?style=for-the-badge&logo=Tailwind-CSS&logoColor=06B6D4)

![Vite](https://img.shields.io/badge/Vite-333333.svg?style=for-the-badge&logo=Vite&logoColor=646CFF)

The personal website for Tom Zmyslo.

## Development checks

Use Node.js 24 (also recorded in `.node-version`) and the pnpm version pinned in
`package.json`. The package is private and is not intended for npm publishing.

```sh
pnpm install --frozen-lockfile
pnpm exec playwright install chromium
pnpm check
```

`pnpm lint` runs ESLint with zero warnings allowed. `pnpm test` builds the app and
runs desktop and mobile Chromium smoke tests against Vite's production preview on port 4173. The
tests cover main pages, navigation, every project, unknown routes, the résumé PDF,
JavaScript crashes, failed local HTTP responses, keyboard skip navigation, and
320-pixel layouts. Failed tests save traces and
screenshots under `test-results/`.

Pull requests to `main` and pushes to `main` run lint, build, and browser tests.
Deployment runs only after those checks pass, only on `main`, and never for pull
requests. Manual workflow runs use the same checks. The tested `dist` directory
is the one deployed. Workflow runs on the same branch are serialized to avoid
overlapping deployments. These checks do not test the production server's configuration.

## Maintenance

```sh
pnpm outdated
pnpm audit
pnpm check
```

ESLint uses native flat configurations. `@eslint/compat` remains necessary for
`eslint-plugin-react`, whose declared peer range currently stops at ESLint 9.
The project uses ESLint 10 with the compatibility adapter; `pnpm peers check`
reports that upstream peer-range mismatch even though lint passes.

Project descriptions in `src/data/projects.json` contain trusted, repository-owned
HTML. Do not substitute untrusted or user-submitted HTML without sanitizing it.

Configuration references: [Vite aliases](https://vite.dev/config/shared-options.html#resolve-alias)
and [ESLint flat configuration](https://eslint.org/docs/latest/use/configure/migration-guide).

## Deployment follow-up

The existing deployment command disables SSH host verification with
`StrictHostKeyChecking=no`. Replace this with a pinned `known_hosts` entry and
strict verification once the server's host key has been verified through a
trusted channel. Do not rely on an unverified `ssh-keyscan` result as proof of
server identity. This maintenance pass did not connect to or change the live
server; the ignored local `nginx/` files are not managed by the workflow.
