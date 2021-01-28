---
"@go1d/go1d": minor
---

Adds [changesets](https://github.com/atlassian/changesets) for versioning and publishing. On git push, Husky will check that contributors have written a changeset file. On master, the pipeline will use changesets to version and publish the Go1d NPM package at the right semantic version level.
