---
title: Course Slat
status: ready
releaseVersion: 0.0.3
---

## Examples
### With avatar
```.jsx
<CourseSlat 
  courseImage="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?h=400" 
  title="Master sourdough in a week" 
  description="Despite general improvements in workplace health and safety over the past the risk of sourdough related injuries are still insurmountable for most"
  author="Bob Bobberson"
  authorAvatar="http://lorempixel.com/48/48/people"
  duration="60"
  type="Course"
  typeIcon="Course"
/>
```

### With Import action
```.jsx
<CourseSlat 
  courseImage="https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?h=400" 
  title="Master sourdough in a week" 
  description="Despite general improvements in workplace health and safety over the past the risk of sourdough related injuries are still insurmountable for most"
  author="Bob Bobberson"
  duration="4"
  actionRender={() => (
      <View flexDirection="row">
      <Icon name="Import" marginRight={3} color="accent" />
      <Text color="accent">Import</Text>
      </View>
  )}
  type="Course"
  typeIcon="Course"
/>
```

### With price and duration
As used on the website
```.jsx
<CourseSlat 
  courseImage="https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?h=400" 
  title="Master sourdough in a week" 
  description="Despite general improvements in workplace health and safety over the past the risk of sourdough related injuries are still insurmountable for most"
  author="Hon. Bob Bobberson Jr."
  duration="75"
  price="12345"
  currency="INR"
  type="Course"
  typeIcon="Course"
/>
```

### Skeleton
```.jsx
<CourseSlat 
  skeleton={true}
/>
```

```!jsx
<ComponentDoc component="CourseSlatProps" />
```
