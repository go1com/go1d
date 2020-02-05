---
title: Package Plan
status: ready
releaseVersion: 0.9.16
---

A plan for a Subscription Package

## Examples
```.jsx
<PackagePlan
  id={123}
  title="Annual"
  interval="year"
  price="100"
  currency="AUD"
  selected={true}
/>

<PackagePlan
  id={1234}
  title="Monthly"
  interval="month"
  price="10"
  currency="AUD"
/>

<PackagePlan
  id={1234}
  title="Monthly"
  interval="month"
  price="10"
  currency="AUD"
  perPortalLicensing={true}
/>
```

```!jsx
<ComponentDoc component="PackagePlanProps" />
```
