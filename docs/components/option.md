---
title: Option
status: ready
---

### Base
```.tsx
  <Option title="Title test" />
```

### Add actionIcon (Default is none)
```.tsx
  <Option title="Title test" actionIcon="ChevronRight"/>
```

### Add spotIcon (Default is none)
```.tsx
  <Option title="Sector Specific" spotIcon="SectorSpecific"/>
```

### With meta
```.tsx
  <Option title="Title test"
   meta="Meta level test 1, Meta level test 2, Meta level test 3, Meta level test 4, Meta level test 5" />
```

### With meta + spotIcon + actionIcon
```.tsx
  <Option title="Title test"
   spotIcon="SafetyAndCompliance"
   actionIcon="ChevronRight" 
   meta="Meta level test 1, Meta level test 2, Meta level test 3, Meta level test 4, Meta level test 5" />
```

### With checked and spotIcon
```.tsx
  <Option title="Title test" 
   spotIcon="SafetyAndCompliance"
   checked={true}
   meta="Meta level test 1, Meta level test 2, Meta level test 3, Meta level test 4, Meta level test 5" />
```

### With checked and disabled
```.tsx
  <Option title="Title test" 
   checked={true}
   disabled={true} />
```

### Force height 
```.tsx
  <Option title="Title test" 
   spotIcon="SafetyAndCompliance"
   actionIcon="Cross" 
   height={48} />
```

```!jsx
<ComponentDoc component="OptionProps" />
```
