# found-sound

![Master build](https://github.com/dxinteractive/found-sound/workflows/CI/badge.svg?branch=main)

A way to search your local sound library.

This app has no server and does not store any personal information.

## Development

You will need `node@16` or greater and `yarn@1` installed globally. Clone the repo and run `yarn prep` to install deps and build. Then you can run:

- `yarn prep` prepares the local copy of the repo for local development, including dependency installations, internal symlinking and prerequisite build steps.
- `yarn build` to build the `*.ts` source files into `*.js` files and `*.d.ts` type files in the library and site packages.
- `yarn test` to run tests using `jest` (none yet).
- `yarn pretty` to run the auto-formatter `prettier` across all packages.
- `yarn lint` to run the linter `eslint` across all packages.
- `yarn dev` runs th local development environment.
- `yarn preview` serves the locally built site in production mode. Run `yarn build` first.
- `build-gh-pages` builds the site for deployment on Github pages. Primarily run by CI to deploy the site.
