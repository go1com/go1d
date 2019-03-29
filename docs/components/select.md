---
title: Select
status: ready
releaseVersion: 0.0.24
---

### A custom select component

```.tsx
<Select options={[
  { "value": "chocolate", label: "Chocolate" },
  { "value": "stawberry", label: "Strawberry" },
  { "value": "vanilla", label: "Vanilla" },
  { "value": "caramel", label: "Caramel" },
  { "value": "maple", label: "Maple" },
  { "value": "birch", label: "Birch" },
  { "value": "soda", label: "Soda" },
  { "value": "feta", label: "Feta" },
  { "value": "brie", label: "Brie" },
  { "value": "camembert", label: "Camembert" },
  { "value": "cheddar", label: "Cheddar" },
  { "value": "ricotta", label: "Ricotta" },
  { "value": "mimolette", label: "Mimolette" },
  { "value": "coulommiers", label: "Coulommiers" },
  { "value": "feta", label: "Feta" },
  { "value": "gorgonzola", label: "Gorgonzola" },
  { "value": "gouda", label: "Gouda" },
  { "value": "havarti", label: "Havarti" },
  { "value": "mascarpone", label: "Mascarpone" },
  { "value": "mozzarella", label: "Mozzarella" },
]} />
```

### Disabled Select Field
```.tsx
<Select options={[
  { "value": "chocolate", label: "Chocolate" },
  { "value": "stawberry", label: "Strawberry" },
  { "value": "vanilla", label: "Vanilla" }
]} disabled={true} />
```

### Clearable Select Field
```.tsx
<Select options={[
  { "value": "chocolate", label: "Chocolate" },
  { "value": "stawberry", label: "Strawberry" },
  { "value": "vanilla", label: "Vanilla" }
]} clearable={true} />
```

### Default Value
```.tsx
<Select options={[
  { "value": "chocolate", label: "Chocolate" },
  { "value": "stawberry", label: "Strawberry" },
  { "value": "vanilla", label: "Vanilla" }
]} defaultValue="vanilla" />
```

### Controlled Value
```.tsx
<Select searchable={true} options={[
  { "value": "chocolate", label: "Chocolate" },
  { "value": "stawberry", label: "Strawberry" },
  { "value": "vanilla", label: "Vanilla" }
]} value="vanilla" />
```

### Searchable Select Field
```.tsx
<Select options={[
  { "value": "chocolate", label: "Chocolate" },
  { "value": "stawberry", label: "Strawberry" },
  { "value": "vanilla", label: "Vanilla" }
]} searchable={true} />
```

### Select filled with optgroups
```.tsx
<Select options={[
  {
    label: "Icecream",
    optgroup: true,
    values: [
      { "value": "chocolate", label: "Chocolate" },
      { "value": "stawberry", label: "Strawberry" },
      { "value": "vanilla", label: "Vanilla" }
    ]
  },
  {
    label: "Cheese",
    optgroup: true,
    values: [
      { "value": "brie", label: "Brie" },
      { "value": "cheddar", label: "Cheddar" },
      { "value": "gorgonzola", label: "Gorgonzola" }
    ]
  }
]} />
```

### Select filled with label-less optgroups
```.tsx
<Select options={[
  {
    label: "",
    optgroup: true,
    values: [
      { "value": "chocolate", label: "Chocolate" },
      { "value": "stawberry", label: "Strawberry" },
      { "value": "vanilla", label: "Vanilla" }
    ]
  },
  {
    label: "",
    optgroup: true,
    values: [
      { "value": "brie", label: "Brie" },
      { "value": "cheddar", label: "Cheddar" },
      { "value": "gorgonzola", label: "Gorgonzola" }
    ]
  }
]} />
```

```!jsx
<ComponentDoc component="SelectProps" />
```
