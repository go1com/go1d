# GO1D

## Overview

GO1D (Spoken Gold) stands for GO1 Design System and is a library of mostly static components for building interfaces. This repo should contain minimal components with more stateful components being in `GO1D/Mine` module.

## Installation

```sh
yarn add @go1d/go1d
```

## Documentation

- Can be found at [https://go1d.go1.com/](https://go1d.go1.com/)
- (WIP) Developer documentation can be found at [https://go1d.go1.com/storybook](https://go1d.go1.com/storybook)

## Build / Run

To install dependency libraries:

```sh
yarn install
```

To run locally, choose which method you want to use:

```sh
yarn run docs:dev # documentation site and generate props table
yarn run storybook # storybook for component development
yarn run npm:dev # build design system
```

To create a deployment build, choose which method you want to use:

```sh
yarn run docs:build
yarn run storybook:build
yarn run npm:build
```

## Testing

```sh
yarn test --coverage
```

## Happo.io cross-browser screenshot testing

This feature currently is still experimental, please contact shangzhi.pan@go1.com for further information if you want to use it.

## Linking across repos for local development

If you want to test a component change before publishing to NPM, you can use [`npm link`](https://docs.npmjs.com/cli/v6/commands/npm-link) to link your consuming app repo and your local changes to go1d.

### Setup (creating links)

- Clone both repos. This assumes they are in the same directory e.g. `~/code/GO1D/` and `~/code/your-consuming-app`
- Install dependencies of both in their repos via yarn or npm e.g. `cd ~/code/GO1D/ && yarn install` and `cd ~/code/your-consuming-app && npm install`
- In GO1D repo run `npm run npm:dev` to create a build similar to what would be published to NPM
- In another terminal tab, change directory to your consuming app and run `npm link ../GO1D/build` to link to the build directory (not the Go1d module name). On Windows you might need to stop yarn in GO1D Repo, you also have to relink every time you used npm to add or update a package. You can run `npm ls --global @go1d/go1d` to see what links you have, which can be helpful in debugging issues, such as node versions.

### Starting

- In GO1D repo, run `npm run npm:dev`
- Inside your consuming app, run `yarn start` or `npm start` as appropriate

### Cleanup (unlinking)

- Inside your consuming app, run `npm unlink --no-save @go1d/go1d` to uninstall your local version of Go1d, and run `npm install` again to install the NPM version again.
- You can then change directory into your GO1D repo and run `npm unlink` (which is an alias for [`npm uninstall`](https://docs.npmjs.com/cli/v6/commands/npm-uninstall)) to remove the symlink.

## Maintainers

* Luke Brooker (luke.brooker@go1.com)
* Diana MacDonald (diana.macdonald@go1.com)

## Contribute

Components should be documented in docs/components with at least:

* A one or two line description of the component with it’s use case
* Major use cases of the component
* It’s current development status & release version

Component should have at least one story with all props in the "stories" folder. You can find a tutorial on how to add stories for storybook [here](https://storybook.js.org/docs/guides/guide-react/). 

## Developer Guide

### Dos

- Add a `displayName` to your Component
- Export your component as `default`
- Check if there are similar libs already included before adding other 3rd party libs, keep our dependency list short!
- Check the Happo Visual Regression Report before merging changes.
- Remember to use shorthands like: `marginY={[6, 7, 8]}` instead of `marginTop={6} marginBottom={6} css={{[breakpoints.md]: {margin: ......};[breakpoints.lg]: {margin: ......}}}`

### Don'ts

- Avoid imports of other GO1D components into your component through the /components/index.ts file.
    - Avoid `import {View} from "../index"` or `import {View} from "../"`   or `import {View} from "../../"`
    - Instead use `import View, {ViewProps} from "../View"`
- Do not add icons with opacity if they are not intended. Double-check if the Icon Path is included twice in the SVG file.

## Adding Icons

Add the svg to src/icons and then run `yarn icons`. Make sure to include any created files in the commit.

