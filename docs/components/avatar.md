---
title: Avatar
status: ready
releaseVersion: 0.0.17
---

A component that displays an avatar.

## Examples

### Avatar with an image
```.jsx
<Avatar src="https://i.imgur.com/Ee55uvc.jpg" fullName="Leslie Knope" />
```


### Avatar without an image
```.jsx
<Avatar fullName="Leslie Knope" />
```

### Avatar without an image and name
```.jsx
<Avatar />
```

### Avatar with a different size
```.jsx
<Avatar fullName="Willy Wonka" size={4} />
```
### Avatar with different colors
```.jsx
<Avatar fullName="Leslie Knope" backgroundColor="subtle" color="background" size={4} />
```

### Avatar with skeleton
```.jsx
<Avatar skeleton={true} size={4} />
```

### Avatar with skeleton square
```.jsx
<Avatar skeleton={true} avatarType="square" size={4} />
```

### Avatar square without image
```.jsx
<Avatar fullName="Leslie Knope" avatarType="square" backgroundColor="subtle" color="background" size={4} />
```

```!jsx
<ComponentDoc component="AvatarProps" />
```
