# GO1D

## Overview

GO1D (Spoken Gold) stands for GO1 Design System and is a library of mostly static components for building interfaces. This repo should contain minimal components with more stateful components being in `GO1D/Mine` module.

## Installation

To use the Go1d component library in your consuming app, run either:

```sh
yarn add @go1d/go1d
```

… or:

```sh
npm install @go1d/go1d
```

## Documentation

- Design documentation can be found at [https://go1d.go1.com/](https://go1d.go1.com/)
- Component story documentation can be found at [https://go1d.go1.com/storybook](https://go1d.go1.com/storybook)

## Contributing

See the [CONTRIBUTING.md](./CONTRIBUTING.md) guide to learn:

- How to develop Go1d locally and add changesets
- How to link across repos
- How to run tests
- How to develop component stories
- How to develop design documentation

## Maintainers

* Luke Brooker (luke.brooker@go1.com)
* Diana MacDonald (diana.macdonald@go1.com)

# Known Issues

## #1
We have some import like this:

```javascript
import merge = require("lodash/merge");
```

which doesn't work with `babel` specifically `@babel/preset-typescript`. This piece of code should only work with `tsc` compiler.
While in our `tsconfig.json`, we leave `{ "allowSyntheticDefaultImports": true }` this means allow to import default export `import x from "y"`, howerver,
above option should come with `{ esModuleInterop: true }`. I think this is why we had a `require` like issue #1.

