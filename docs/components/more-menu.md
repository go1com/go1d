---
title: More Menu
lead: The more menu is a dropdown for more actions, typically accessed in a bar of actions and always by a more button. It helps keep secondary actions accessible while reducing visual clutter.
status: ready
releaseVersion: 0.0.46
---

It is helpful for uncommon actions that require a more explicit label that can be too long for a button.

The more menu can be found on a bar of actions for a page, screen, section, list item and card.

The standard action menu contains:

- More button to access dropdown
- Dropdown menu of actions

## Examples

### ❗️Action menu only on section or page?

```.jsx
<div> Example to come</div>
```

### Action menu with a single page/section/screen action:
```.jsx
<MoreMenu
  itemList={[
      {
        title: "Add",
        href: "#testing",
        icon: IconPlus,
        iconColor: "muted"
      },
      {
        title: "Delete",
        href: "#testing",
        color: "danger",
        icon: IconTrash,
        target:"_blank",
        rel:"noopener noreferrer",
      },
    ]}
/>
```

### Action menu with two page/section/screen actions:

```.jsx
<div> Example to come</div>
```

### Action menu with a list item action:

### More menu without shadow (e.g. list row)
```.jsx
<Table
  rows={[
    <TR key={0}>
      <TD flexBasis="30%">Cell 00</TD>
      <TD flexBasis="30%">Cell 01</TD>
      <TD flexBasis="30%">Cell 02</TD>
      <TD flexBasis="10%">
        <MoreMenu
          isButtonFilled={false}
          itemList={[
            {
              title: "Add",
              href: "#testing",
              icon: IconPlus,
              iconColor: "muted"
            },
            {
              title: "Delete",
              href: "#testing",
              color: "danger",
              icon: IconTrash,
            },
          ]}
        />
      </TD>
    </TR>
  ]}>
</Table>
```

### Action menu on a card:

```.jsx
<div> Example to come</div>
```

### Action menu on a card with a quick action

```.jsx
<div> Example to come</div>
```

## Best practice

- Always make action menu visible to improve ease of access across all devices
- Always include icons with the action label in the action menu
- Append actions that are not executed immediately with ellipsis
- Follow verb + noun format when action needs clarification for user (assign learning, enrol learning, add to my learning)
- Only two actions can be shown outside of an action menu within a given area of the product
- Hierarchy of actions:
  - Always list destructive actions last
  - For categorising actions by role, display actions in the following order: learner, admin, author
- Destructive actions are to be marked in red and always fall at the bottom of the list

## Content guidelines

Copy for actions on the dropdown menu should follow general action content guidelines:

- Be succinct, but explicit
- Be clear and distinct
- Use similar labels for similar actions
- Use active rather than passive voice

```!jsx
<ComponentDoc component="MoreMenuProps" />
```
