# @go1d/go1d

## 3.0.1

### Patch Changes

- 82af00d1: change CourseCard border radius to be 16px

## 3.0.0

### Major Changes

- c6ea66a1: Adds a new border radius scale `radius = [0, 4, 8, 12, 16, 32, 48, 64, 128]`, in addition to the previously used spacing scale `spacing = [0, 2, 4, 8, 16, 24, 32, 48, 64, 128, 256]`. This means previous components using the `borderRadius` prop with a number, such as `borderRadius={1}`, will now be using a different scale and likely need to be updated. Please check components using a border radius array index of any number other than `{0}` or `{4}` (which remain the same). This change also updates components with Go1d using the border radius: Avatar, Button, Checkbox, Course Card, Date Range, DatePicker, EmptyState, Input Group, Modal, Overview CTA Card, Pill, SlatSkeleton, Stepper, Table, TagToggle, and View.
- f23ab94a: Adds a border to subtle, filled buttons. If this is too prominent for a specific instance, change the subtle, filled button to a minimal button.
- b4673fa8: Upgrades Go1d to Learn Athletic brand style, including updated colors, fonts (Victor Serif and Obelisc), typography, border-radius, and some minor spacing changes.
- e88f8b83: Removes Muli font and adds Victor Serif and Obelisc fonts.

### Minor Changes

- 0e46cb11: Adds Heading component. Use this instead of Text component to choose the right combination of props for Athletic heading styles.
- 15c2015f: Adds vivid status colors to Athletic Go1d theme
- 766de53c: Adds new theme colors, including tints and shades for status colors, such as `dangerHighest`, `dangerHigh`, `dangerMid`, `dangerLow`, `dangerLowest`, as well as a `complementary` color, which is used in accent filled buttons.
- 1cfe88e2: Adds ConnectingShapes component. This replaces custom TextInBubble components, using different theme colors, replacing "bubble" with "shape" in prop names, and accepting an array of "content" instead of a text string.

## 0.16.0

### Minor Changes

- c2a3a84c: Add popover to show learning outcomes when hovering the title

### Patch Changes

- 0bd14350: Convert popover to class component

## 0.15.0

### Minor Changes

- 4a337d3f: Popover - add a prop to disable popup

## 0.14.1

### Patch Changes

- 049b9a23: Popover: stop event propagation when clicking on backdrop

## 0.14.0

### Minor Changes

- cda74b14: Add Popover component

## 0.13.2

### Patch Changes

- a55205bf: Add icon arrow left

## 0.13.1

### Patch Changes

- 217dc764: Improve carousel component, make it scrollable by touch and click

## 0.13.0

### Minor Changes

- 598a77d8: --- "@go1d/go1d": minor --- edit IconExport

## 0.12.0

### Minor Changes

- 3a094a94: add IconCircleCheck

## 0.11.1

### Patch Changes

- 894064ac: - Adds a CONTRIBUTING guide to help people version and publish packages
  - Updates `.gitignore` to ignore `.npmrc` to further minimise risk of committing it in CI

## 0.11.0

### Minor Changes

- 9ff7283f: Adds [changesets](https://github.com/atlassian/changesets) for versioning and publishing. On git push, Husky will check that contributors have written a changeset file. On master, the pipeline will use changesets to version and publish the Go1d NPM package at the right semantic version level.

Prior to this we did not have a CHANGELOG or automated versioning and publishing.
