---
title: Rating
lead: 
status: ready
releaseVersion: 0.9.38
---

## Examples

```.jsx
<Rating name="rating" iconName="Star" defaultValue={4} />
```

### Empty
```.jsx
<Rating />
```


### Any icon can be used
```.jsx
<Rating name="rating" iconName="Go1Logo" defaultValue={4} />
```

### Doesnt have to be out of 5
```.jsx
<Rating name="rating" count={9} defaultValue={4} />
```

### Controller
```.jsx
<Rating name="rating" iconName="Star" value={4} />
```


### Disabled
```.jsx
<Rating name="rating" iconName="Star" disabled={true} defaultValue={4} />
```


### Different selected and unselected colors
```.jsx
<Rating name="rating" selectedColor="contrast" unselectedColor="subtle" defaultValue={3} />
```


## Rating Props
```!jsx
<ComponentDoc component="RatingProps" />
```
