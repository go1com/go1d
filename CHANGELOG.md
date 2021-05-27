# @go1d/go1d

## 6.2.1

### Patch Changes

- d57a0068: AVG-339 restore DEPRECATED_SlatSkeleton for CourseSlat & DEPRECATED_Slat

## 6.2.0

### Minor Changes

- 3a601d16: Add Column and Row components

## 6.1.1

### Patch Changes

- febeef64: fix long text for Course Card on IE

## 6.1.0

### Minor Changes

- 23e29af5: AVG-362: Add new CardListIndex component

## 6.0.3

### Patch Changes

- 420529c8: AVG-329: improve connectingShapes to support JSXElement

## 6.0.2

### Patch Changes

- 089105f5: Fix Avatar display when rendering with border

## 6.0.1

### Patch Changes

- 82062f4b: DatePicker > fix incorrect onChange signature

## 6.0.0

### Major Changes

- 3426e9d7: Adds Athletic Avatar as `<Avatar />` and renames the original Go1d Slat to `<DEPRECATED_Avatar />`

  Update `CourseSlat`, `Slat` and `EditFocusModeHeader` to use new `Avatar`

## 5.0.2

### Patch Changes

- 5ee3a5bc: Change empty icon color in Slat

## 5.0.1

### Patch Changes

- 3d7e60b5: Updates Node to v12 because Node 10 has reached End Of Life

## 5.0.0

### Major Changes

- d8d0e6c1: AVG-339 Adds Athletic Slat as `<Slat />` and renames the original Go1d Slat to `<DEPRECATED_Slat />`.

## 4.0.2

### Patch Changes

- 65051ada: Datepicker: increase width a bit to accommodate with long display format
  GlobalCSS: fix Firefox still shows number input arrow buttons

## 4.0.1

### Patch Changes

- 31ff4ca8: AVG-330 fix error path spot icons

## 4.0.0

### Major Changes

- 273263e9: AVG-330 Adds Athletic Card as `<Card />` and renames the original Go1d CourseCard to `<DEPRECATED_CourseCard />`.

## 3.7.1

### Patch Changes

- 78a11e7a: Allow setting custom <form/> attributes

## 3.7.0

### Minor Changes

- 2b660b66: Fix TextArea component always stayed at a fixed size that doesn't respect the multiline and can't scale up, the floating label get mess up with the user input

  Add floating label for DatePicker component

## 3.6.0

### Minor Changes

- 58f325c3: Fix TextArea component always stayed at a fixed size that doesn't respect the multiline and can't scale up, the floating label get mess up with the user input

  Add floating label for DatePicker component

## 3.5.0

### Minor Changes

- 336e8f6a: add label for select input

## 3.4.3

### Patch Changes

- b7e8573e: add prop to ignore cache in Carousel

## 3.4.2

### Patch Changes

- b512cbf9: DatePicker > take border width into account for height

## 3.4.1

### Patch Changes

- cbc00c9d: TextInput: Keep floating label on the top as Chrome autofill input

## 3.4.0

### Minor Changes

- 72893871: AVG-331: add new learning type spot icons

## 3.3.2

### Patch Changes

- ed164c12: ImageUploader: Fix issue npm throwing require index file directly for react-easy-crop

## 3.3.1

### Patch Changes

- f873911f: DatePicker > update height to fit new design

## 3.3.0

### Minor Changes

- 94f54ee8: ImageUploader: Allow crop function as scroll and upgrade crop library

## 3.2.6

### Patch Changes

- e84d575f: Select > add size lg + update height to fit with new design

## 3.2.5

### Patch Changes

- 2a3bdf5b: AVG-287: fix issue carousel doesn't change currentSlide when slide reach right edge

## 3.2.4

### Patch Changes

- 33938626: Update color picker text color to match design

## 3.2.3

### Patch Changes

- a320a699: set medium input size for color picker and change input typescale for large

## 3.2.2

### Patch Changes

- 783cc93e: Improves Storybook story controls usability

## 3.2.1

### Patch Changes

- 77d0f549: Fix the unnecessary space on Modal title

## 3.2.0

### Minor Changes

- 726cca5c: Refine the TextInput component to be same the design and support Eye icon on password input

## 3.1.10

### Patch Changes

- 9ebaa428: SelectDropdown > update menu position when input element's height changed

## 3.1.9

### Patch Changes

- 97d0fb1e: Fix padding for ImageUploadSlat component on mobile

## 3.1.8

### Patch Changes

- cfde0418: TagSelector: close dropdown when number of selected values reaches maximum

## 3.1.7

### Patch Changes

- b975995d: TagSelector: add maxSelectedValues property

## 3.1.6

### Patch Changes

- 5db39424: DatePicker - support customizing display format

## 3.1.5

### Patch Changes

- c856956b: Update storybook to version 6.2.1

## 3.1.4

### Patch Changes

- 309616d9: Fix the pattern to exclude inherited node_modules props in Storybook

## 3.1.3

### Patch Changes

- 98f915fb: Uses built-in doc generation for Storybook

## 3.1.2

### Patch Changes

- 1f78a21d: Fixes overlapping text in table headers by adding maxWidth 100% to TH inner Text cell

## 3.1.1

### Patch Changes

- dd642697: Improvement for Carousel component, make this component be able to custom controls which control scroll item in carousel.

## 3.1.0

### Minor Changes

- 096e3333: Add ColorPicker component
  Use fix option for tslint in lint-staged + Update typescript and some dev packages to latest version

### Patch Changes

- 427a0be8: Exclude all tests file from building stories
- aad7133f: Remove the doc of component contains hook

## 3.0.5

### Patch Changes

- 8806d2d8: Course card and Feature tag small changes

## 3.0.4

### Patch Changes

- f33b026d: set default border radius 16px to Select and Multiselect component

## 3.0.3

### Patch Changes

- b20c5972: update title in OverviewHero to be Heading 1

## 3.0.2

### Patch Changes

- c7c42962: change border radius to 16px for CourseSlat & CourseCard-Skeleton

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
