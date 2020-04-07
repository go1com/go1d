---
title: Prose
lead: Sanitizes HTML and wraps it into a text component
status: ready
releaseVersion: 0.5.2
---

All text in our apps should be wrapped in a Text component.

Try out the props below.

### Base
```.jsx
<Prose HTML="<h2>Heading 2</h2><b>This is bold text</b><br /><img src='https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?h=100' alt='Here be image' title='Here be image' />" />
```

### Does not allow banned tags such as script
```.jsx
<Prose HTML="<script>document.write('Hello World!');</script> Script tags wont show up" />
```

### Does not allow banned attributes
```.jsx
<Prose HTML="Hello from the world of <a href='#Test' target='_blank' norel='badtag'>Hello World!</a>" />
```

### Line clamp with show more/less button
```.jsx
<Prose lineClamp={3} expandable HTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
```

```!jsx
<ComponentDoc component="ProseProps" />
```
