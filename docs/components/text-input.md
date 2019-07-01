---
title: TextInput
status: ready
releaseVersion: 0.0.32
---

## Examples

### Basic TextInput

```.jsx
<TextInput
  id="blank"
  placeholder="Blank"
/>
```

### TextInput with Small Size

```.jsx
<TextInput
  id="Small"
  size="sm"
  value="Small"
/>
```

### TextInput with Small Size and floating label
If there is no label, the placeholder will be used as floating label

```.jsx
<TextInput
  id="Small"
  size="sm"
  floating={true}
  label="Small"
  value="Small Size"
/>
```

### TextInput Medium Size
```.jsx
<TextInput
  id="Medium"
  size="md"
  value="Medium"
/>
```

### TextInput with Medium Size and floating label
If there is no label, the placeholder will be used as floating label
```.jsx
<TextInput
  id="Medium"
  size="md"
  floating={true}
  placeholder="Medium"
  value="Medium Size"
/>
```

### TextInput Large Size
```.jsx
<TextInput
  id="Large"
  size="lg"
  value="Large"
/>
```

### TextInput with Large Size and floating label
If there is no label, the placeholder will be used as floating label
```.jsx
<TextInput
  id="Large"
  size="lg"
  floating={true}
  label="Large"
  value="Large Size"
/>
```

### TextInput with Icon

```.jsx
<TextInput
  id="search"
  iconName="Search"
  placeholder="Type here to Search"
/>
```

### TextInput with Icon and floating label

```.jsx
<TextInput
  id="search"
  iconName="Search"
  floating={true}
  label="Medium"
  value="Medium Size"
/>
```

### TextInput with RightNode

```.jsx
<TextInput
  id="clear"
  value="Type here to Search"
  suffixNode={<ButtonMinimal iconName="Cross" color="accent" />}
/>
```

### TextInput with RightNode and floating label

```.jsx
<TextInput
  id="clear"
  size="lg"
  floating={true}
  label="Large"
  value="Large Size"
  suffixNode={<ButtonMinimal size="lg" iconName="Cross" color="accent" />}
/>
```

```!jsx
<ComponentDoc component="TextInputProps" />
```
