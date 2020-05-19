---
title: Dropdown
status: ready
lead: Dropdown is our accessible popover list component, can be used with menus, searches and selects
releaseVersion: 0.0.46
---

This component renders a dropdown, which can be used with multiple other components. The child is the element that triggers the dropdown (e.g. button or text input), with the renderFunction taking in the list of items and displaying them as defined.

### children

Children needs to be a function that returns React elements that are meant to open the dropdown, taking in a reference and adding it as a prop, e.g.

```
{({ ref }) =>(
    <ButtonFilled innerRef={ref} marginLeft="auto" onClick={toggleDropdown}>
      I am a button
    </ButtonFilled>
  )
}
```

Note that the ref is required, if you do not have it the dropdown will not render.

### renderFunction

The render function takes in an item, and index value and the getItemProps found in [Downshift](https://github.com/paypal/downshift). This will return a React elements. Each React element needs to also have the result from getItemProps descturctured onto it, with getItemProps having the key, item and index passed to it.

```
renderFunction={(item, index, getItemProps) => (
    <ButtonMinimal
      key={index}
      {...getItemProps({
        key: index,
        item,
        index,
      })}
    >
      <Text>{item.title}</Text>
    </ButtonMinimal>
)}
```

### offset

Offset can be used to customise the placement of the dropdown, for the syntax please see the [popper.js docs](https://popper.js.org/popper-documentation.html#modifiers..offset)

## Examples

### Basic dropdown

```.jsx
<Dropdown
  placement="bottom"
  renderFunction={(item, index, getItemProps) => (
    <View
      key={index}
      {...getItemProps({
        key: index,
        item,
        index,
      })}
      width={200}
      paddingX={3}
      paddingY={2}
    >
      <Text>{item.title}</Text>
    </View>
  )}
  itemList={[
    {
      title: "Element 0",
    },
    {
      title: "Element 1",
    },
    {
      title: "Element 3",
    },
  ]}
>
  {({ ref, getToggleButtonProps }) => (
    <View width="70">
      <ButtonFilled
        {...getToggleButtonProps()}
        innerRef={ref}
        color="accent"
      >
        Button
      </ButtonFilled>
    </View>
  )}
</Dropdown>
```

### Dropdown with complex items

```.jsx
<View>
  <Dropdown
    itemToString={item => (item ? item.title : "")}
    renderFunction={(item, index, getItemProps) => (
        <ButtonMinimal
          key={index}
          href={item.href}
          size="lg"
          {...getItemProps({
            key: index,
            item,
            index,
          })}
          color={item.color || "default"}
          icon={item.icon}
          iconColor={item.iconColor}
          css={{
            justifyContent: "flex-start",
          }}
        >
          <Text>{item.title}</Text>
        </ButtonMinimal>
    )}
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
        icon: IconPlus,
      },
    ]}
    placement="right"
  >
  {({ ref, getToggleButtonProps }) => <View width="70"><ButtonFilled {...getToggleButtonProps()} innerRef={ref} color="accent">Button</ButtonFilled></View>}
  </Dropdown>
</View>
```

```!.jsx
<ComponentDoc component="DropdownProps" />
```
