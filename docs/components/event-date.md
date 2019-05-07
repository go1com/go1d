---
title: EventDate
status: ready
releaseVersion: 0.5.68
---

### Event Session/Date

```.jsx
<EventDate
  title="course 1"
  start="2019-06-28T00:25:00+00:00"
  end="2019-06-28T01:25:00+00:00"
  location={{
    thoroughfare: "High St Kensington",
    title: "UNSW Sydney Campus",
    locality: "Sydney",
    administrative_area: "NSW",
    country: "AU",
  }}
  active={true}
  onClick={() => console.log('clicked')}
/>
```

```!jsx
<ComponentDoc component="LessonProps" />
```
