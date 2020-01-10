---
title: MultiSelect
status: ready
releaseVersion: 0.0.27
---

### A custom Multi Select component

```.tsx
<MultiSelect options={[
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


### Disabled Multi Select Field
```.tsx
<MultiSelect label="Disabled" options={[
  { "value": "chocolate", label: "Chocolate" },
  { "value": "strawberry", label: "Strawberry" },
  { "value": "vanilla", label: "Vanilla" }
]} disabled={true} />
```

### Don't close on select
```.tsx
<MultiSelect label="Dont close" options={[
  { "value": "chocolate", label: "Chocolate" },
  { "value": "strawberry", label: "Strawberry" },
  { "value": "vanilla", label: "Vanilla" }
]} closeOnSelect={false} />
```

### Initial is open when initialized
```.tsx
<MultiSelect label="Dont close" options={[
  { "value": "chocolate", label: "Chocolate" },
  { "value": "strawberry", label: "Strawberry" },
  { "value": "vanilla", label: "Vanilla" }
]} initialIsOpen={true} />
```

### Default Value
```.tsx
<MultiSelect label="Label" options={[
  { "value": "chocolate", label: "Chocolate" },
  { "value": "strawberry", label: "Strawberry" },
  { "value": "vanilla", label: "Vanilla" }
]} defaultValue={["strawberry"]} />
```

### Controlled 
```.tsx
<MultiSelect label="Label" options={[
  { "value": "chocolate", label: "Chocolate" },
  { "value": "strawberry", label: "Strawberry" },
  { "value": "vanilla", label: "Vanilla" }
]} value={["strawberry"]} />
```

### Searchable Multi Select Field
```.tsx
<MultiSelect label="Favourite" options={[
  { "value": "chocolate", label: "Chocolate" },
  { "value": "strawberry", label: "Strawberry" },
  { "value": "vanilla", label: "Vanilla" }
]} searchable={true} />
```

### MultiSelect filled with optgroups
```.tsx
<MultiSelect options={[
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

### MultiSelect filled with label-less optgroups
```.tsx
<MultiSelect options={[
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
<ComponentDoc component="MultiSelectProps" />
```
