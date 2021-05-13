---
title: Components
status: ready
lead: A collection of interface elements that can be reused across Go1 to efficiently deliver consistent products.
---

## Setting Up Go1d

### Installing

To add Go1d to a project, run `yarn add @go1d/go1d` or `npm install -s @go1d/go1d` to install go1d into the NPM package of the project you are working on.

### Global CSS Reset & Fonts

The easiest way to set up the CSS reset and fonts is to include the following code in the root JavaScript file of the project:

```
import { globalCSS } from "@go1d/go1d";
globalCSS();
```

Most Go1d components require you to call the `globalCSS` function to add the required CSS rules and fonts to the project.

If Go1d components look different to the documentation website this is the most likely cause.

## Preparing a project for Go1d

### Provider

#### Themes

The theme provider allows us to customize the colors across all child Go1d components. We typically pass a customer's team theme to this provider. Specifically, customers will see UI components tinted with their brand accent color through this theming.

It's recommended to include the Provider component in the root JavaScript file of the project:

```
import { Provider } from "@go1d/go1d";
ReactDOM.render(<Provider accent="yellow"><App /></Provider>, domNode);
```

If you need to control the Provider based on http requests, ensure the Provider is as high up the DOM tree as possible.

#### Links

If your project is using React Router or another routing solution you will need to also pass in a Link Component into the Provider.

This will ensure all links rendered by Go1d components will be passed though the Router of choice.

A Link in Go1d expects the same props as a DOM anchor tag. So if you are using React Router you will need to create a wrapping component to translate the `href` prop to `to`

```
ReactDOM.render(<Provider linkComponent={Link}><App /></Provider>, domNode);
```

### Using components

With Go1d you won't need to write much CSS if any at all as all the customization is controlled via props on the components.

The props on the components will ensure consistent spacing, sizing, and colors across all Go1 applications.

#### [View](components/view)

The most fundamental component for building a UI is the View Component. The View component uses flex box to define the layout.

#### [Text](components/text)

All Text should be wrapped in a Text Component or a specific typography component, such as the Heading component. The Text component handles font and includes some responsive capabilities out of the box.

#### [Colors](foundations/colors)

When specifying colors in Go1d components, use the names listed on the Colors page.

This will ensure all colors are consistent across Go1 applications as well as any tweaks or changes update everywhere.

## Storybook

We use Storybook for our design system to make component-driven development, testing, and communication easier.

- [Go1d storybook](https://go1d.go1.com/storybook/?path=/docs/overview--page)
- [Mine storybook](https://go1d.pages.go1.co/mine/) for our stateful components

## Principles for building components

### Thinking holistically

Create components with the larger picture in mind. Components should be reused as a rule and never designed with only one page or flow in mind.

### Build accessibly

Create an experience that everyone can use and appreciate regardless of vision, hearing, cognitive or motor impairments.

### Make it themable

Create experiences that can be themed. When used by our partners (or enthusiastic users), they can seamlessly be in their Go1 location while adhering to their own branding guidelines.

### Record, record, record

Document as much as possible – but don’t go overboard. If you didn’t make it to work tomorrow, would others be able to pick up where you left off?

### Keep it simple

Exactly.

### Consistency

Create components that are consistent as in, they are inline with our brand/styles and ensure a seamless user experience.

### Don’t think, just be

Ensure that our user experience doesn’t require thought. Our users should ONLY be focused on their content and at ease with how to navigate and use our system. No rage clicks.

---

## Current components

```!jsx
<ComponentList />
```
