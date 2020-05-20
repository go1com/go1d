---
title: UL
status: ready
releaseVersion: 0.0.73
---

### Basic UL

```.jsx
<UL>
    <LI>List Item 1</LI>
    <LI>List Item 2 multiline Text, Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</LI>
    <LI>List Item 3</LI>
    <LI>List Item 4</LI>
    <LI>List Item 5</LI>
    <LI>List Item 6</LI>    
</UL>
```

### UL with specific icon and color and fontSize

```.jsx
<UL icon={IconSuccess} fontSize="3" color="subtle">
    <LI>List Item 1</LI>
    <LI>List Item 2 multiline Text, Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</LI>
    <LI>List Item 3</LI>
    <LI>List Item 4</LI>
    <LI>List Item 5</LI>
    <LI>List Item 6</LI>    
</UL>
```

### UL with different icons on each Li

```.jsx
<UL icon={IconSuccess}>
    <LI iconColor="success">Parent Icon</LI>
    <LI icon={IconStar}>Star Icon</LI>
    <LI icon={IconStarOutline}>StarOutline Icon</LI>
    <LI icon={IconTag}>Tag Icon</LI>
    <LI icon={IconToggle}>Toggle Icon</LI>
    <LI icon={IconTrash}>Trash Icon</LI>
    <LI icon={IconWarning}>Warning Icon</LI>
    <LI icon={IconVideo}>Video Icon</LI>
     
</UL>
```

### Props for UL
```!jsx
<ComponentDoc component="ULProps" />
```

### Props for LI
```!jsx
<ComponentDoc component="LIProps" />
```
