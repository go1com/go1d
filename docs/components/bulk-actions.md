---
title: Bulk actions
lead: Bulk actions help users complete a single action on multiple items in a list. This pattern is a guideline on how to build a resource list of bulk actions with related components.
status: not-ready
---

The standard bulk action on resource list contains:

- List item with checkbox
- Ghost buttons

## Examples

### Bulk actions on resource list with one action only

```.jsx
<div> Example to come</div>
```

### Bulk actions on resource list with action menu only

```.jsx
<div> Example to come</div>
```

### Bulk actions on resource list with two distinct actions

```.jsx
<div> Example to come</div>
```

### Bulk actions on resource list with an action and action menu

```.jsx
<div> Example to come</div>
```

## Best practice

If resource list is very short or if there is no action that makes for users to perform in bulk on the list, do not offer bulk actions.

When bulk actions are enabled on a resource list, they should:

- Save users time (it makes sense to take action on many resources at once) 
- Warn users when a bulk action is irreversible 
- To improve ease of access, appear above the resource list and be aligned to the left next to amount of items/results currently showing
- To improve discoverability, only have a maximum of two actions outside of action menu 
- If frequently used, be shown as a primary action 
- If there are no primary actions but more than two actions, show in order of frequently used
- To avoid visual clutter on mobile, all bulk actions should fall under an action menu

## Content guidelines

Copy for bulk actions (resource list) should be...

### Succinct, but explicit

✔️ Do
Export as CSV
❌ Don't
Export user enrolments as CSV


### Use an active rather than passive voice to encourage action

✔️ Do
Delete enrolments
❌ Don't
Enrolment removal

### Use existing labels for similar actions

✔️ Do
Create X
❌ Don't
Create X, create new Y, new Z
