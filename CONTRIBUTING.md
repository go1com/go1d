# CONTRIBUTING

## Requirements

Install [yarn](https://yarnpkg.com/lang/en/docs/install/).

Use the version of Node shown in the [.gitlab-ci.yml](./.gitlab-ci.yml) file in the root of the project.

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

## Versioning and publishing using changesets

We use [changesets](https://github.com/atlassian/changesets/) to do versioning and release NPM packages. That means when you contribute code, you need to add a "changeset" by running `yarn changeset add`, which asks you to choose what packages should be bumped (go1d), their associated [semver](https://semver.org/) bump types (major/minor/patch) and a [markdown](https://daringfireball.net/projects/markdown/basics) summary that will be added to the [CHANGELOG](./CHANGELOG.md) file.

Your workflow should look like:

1. *Write your feature branch code*.
2. Run `yarn changeset add`.
    - Choose a semantic version bump level for Go1d (major/minor/patch)
    - Describe your changes succinctly, including WHAT the change is, WHY the change was made, and HOW a consumer should update their code to use this
3. Commit your changeset.
    - It is a text file with a random human readable name by default to avoid collisions when generating them, but there's no harm that will come from renaming them. You can also manually edit the file and make changes to the summary that will be added to the CHANGELOG or to the bump level if you want.

Once you've pushed your code and created a Merge Request (MR), you can continue to make changes and amend that changeset file to add more information or change the bump type. If you push a branch without a changeset file, you'll be asked to add a changeset. If needed, you can run `yarn changeset add --empty` to add an empty changeset. You can read more about changesets in the guide to [Adding a changeset](https://github.com/atlassian/changesets/blob/master/docs/adding-a-changeset.md).

When your MR is merged to master, changesets will version the packages (Go1d), updating the `package.json` file and gather up all the changeset files (deleting them in the process) and add their details to the CHANGELOG file. It will then create a version commit, and finally changesets will publish the version change to NPM and create a git tag before pushing back to the repo.

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

