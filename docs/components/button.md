---
title: Button
lead: Buttons indicate what actions are possible to users. They are important affordances to let users know when they can execute an action, typically immediately. Their associated actions are labelled and defined by verbs.
status: ready
releaseVersion: 0.0.1
---

Buttons usually simulate a 3D-appearance but may also have a minimal appearance.

## Examples

### Filled button in subtle colour

```.jsx
<React.Fragment>
    <ButtonFilled>I'm a button</ButtonFilled>
    <br />
    <ButtonFilled size='sm'>I'm a button</ButtonFilled>
    <br />
    <ButtonFilled size='lg'>I'm a button</ButtonFilled>
</React.Fragment>
```

### Filled button in accent colour

```.jsx
<ButtonFilled color='accent'>Call to action</ButtonFilled>
```

### Filled Icon only button in success colour and round

```.jsx
<ButtonFilled round={true} color="success" icon={IconCheck} />
```

### Filled button in danger colour

```.jsx
<ButtonFilled color='danger'>Danger zone</ButtonFilled>
```

### Minimal button subtle colour

```.jsx
<ButtonMinimal>Minimal button</ButtonMinimal>
```

### Minimal button subtle colour (Icon and label)

```.jsx
<ButtonMinimal icon={IconPlus}>Minimal button</ButtonMinimal>
```

### Minimal button subtle colour (Icon and label, Icon to the right)

```.jsx
<ButtonMinimal icon={IconPlus} flexDirection="row-reverse">Minimal button</ButtonMinimal>
```

### Minimal button in accent colour (Icon only)

```.jsx
<ButtonMinimal color='accent' icon={IconPlus} />
```

### Minimal button in accent colour (Icon and label)

```.jsx
<ButtonMinimal color='accent' icon={IconPlus}>Call to action</ButtonMinimal>
```

### Minimal button in danger colour

```.jsx
<ButtonMinimal color='danger'>Really</ButtonMinimal>
```

### Submit Button used in a Form

```.jsx
<SubmitButton>Create</SubmitButton>
```

## Unstyled Buttons

```.jsx
<React.Fragment>
    <Button>Default</Button>
    <Button color="accent">Accent</Button>
    <Button color='danger'>Danger</Button>
</React.Fragment>
```

## Best practice

- Only one accent or button may be prominent
- Up to a maximum of two actions outside a more menu can be made visible
- Always use style of CTA button (call to action) when primary action is enabled
- Buttons for destructive actions should be signified by red
- When action is in a list or on a card, use minimal button
- When action is to close screen or modal, use minimal button
- If action is not immediately resolved when clicked (e.g. require modal interface to complete task), append the label with an ellipsis

### Choosing the right button

For *floating buttons on a page or section*, always use default buttons with icon and label on desktop avoid tooltips appearing above icons

*Unless..*

- Action menu is enabled. Then, use ellipsis icon as a more button (no label)
- Action associated with the button is extremely common on the platform (i.e. add and edit). Then, use icon for action as the button (no label)
- For buttons on modals, pop-ups or dialogs, use button with label only (no icon)
- For buttons on list items, use icon with label unless it is an action men
- Only use button with label and dropdown chevron for filtering and sorting
- When button is for going back or exiting/cancelling, always use icons

## Content guidelines

Copy for buttons should follow general action content guidelines.

```!jsx
<ComponentDoc component="ButtonProps" />
```
