# Go1d docs-site

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
cd docs-site; ANALYZE=true yarn next:build
```

To add dependencies for the Next.js docs-site:

```sh
cd docs-site; yarn add <THE_DEPENDENCY>
```

