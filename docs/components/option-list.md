---
title: Option List
status: ready
---

### Base
```.tsx
<OptionList>
  <Option title="This is a test title" />
  <Option title="This is a test title" />
  <Option title="This is a test title" />
</OptionList>
```

### With options
```.tsx
<OptionList>
  <Option title="This is a test title" meta="Test meta" spotIcon="SafetyAndCompliance" actionIcon="ChevronRight" checked={true}/>
  <Option title="This is a test title" spotIcon="SafetyAndCompliance" actionIcon="ChevronRight" checked={true} disabled={true}/>
  <Option title="This is a test title" actionIcon="ChevronRight" />
  <Option title="This is a test title" lines={1}/>
</OptionList>
```

### Top level topics
```.tsx
<OptionList>
  <Option title="Compliance" meta="Test meta" spotIcon="SafetyAndCompliance" actionIcon="ChevronRight" checked={true}/>
  <Option title="Technology" meta="Test meta" spotIcon="TechnologySkills" actionIcon="ChevronRight" checked={true}/>
  <Option title="Personal Development" meta="Test meta" spotIcon="PersonalDevelopment" actionIcon="ChevronRight" checked={true}/>
  <Option title="Business" meta="Test meta" spotIcon="BusinessSkills" actionIcon="ChevronRight" checked={true}/>
  <Option title="Sector Specific" meta="Test meta" spotIcon="SectorSpecific" actionIcon="ChevronRight" checked={true}/>
</OptionList>
```
