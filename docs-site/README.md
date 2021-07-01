# Go1d docs-site

Use the version of Node shown in the [.gitlab-ci.yml](./.gitlab-ci.yml) file in the root of the project.

Install Next.js docs-site from `docs-site` subdirectory:

```sh
cd docs-site && yarn
```

To develop docs-site locally:

```sh
cd docs-site; yarn next:dev
```

To create a deployment build of docs-site and analyze bundle size using [next-bundle-analyzer](https://github.com/vercel/next.js/tree/canary/packages/next-bundle-analyzer):

```sh
cd docs-site; yarn next:build
```

To analyze server and client bundle treemaps:

```sh
cd docs-site; yarn next:analyze
```

To add dependencies for the Next.js docs-site:

```sh
cd docs-site; yarn add <THE_DEPENDENCY>
```

Note: no changesets are required for updating docs-site because we aren't publishing packages to NPM

