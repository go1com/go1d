---
title: Card actions
lead: Cards are typically an entryway to more detailed information. Card actions refer to actions that can be done from the card display UI before entering the card. This pattern is a guideline to achieve a consistent user experience for GO1's card UI.
status: not-ready
---

## Examples

### Card with quick action only

```.jsx
<div> Example to come</div>
```

### Card with action menu only

```.jsx
<div> Example to come</div>
```

### Card with quick action and action menu

```.jsx
<div> Example to come</div>
```

### Card with none

```.jsx
<div> Example to come</div>
```

## Best practice

- The card itself is always the primary action to enter it and view more detailed information
- If the primary action to enter card does not make sense on the page, disable it
- All other card actions fall under an action menu unless it is a quick action
- To support devices with touch input only, action menu and quick actions should always be visible
- Always align action menu and quick action with card title to allow maximum action context

## Content guidelines

Card actions copy should follow general action content guidelines

Card actions copy should also follow the following:

### Copy should not be included with quick actions to avoid visual clutter
✔️Do
Show quick action with ✚ icon only

❌ Don't
Show quick action ✚ icon with label 'add'