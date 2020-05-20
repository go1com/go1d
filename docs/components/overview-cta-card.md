---
title: Overview CTA Card
lead: A card view for highlighting a call-to-action
status: ready
releaseVersion: 0.0.41
---

### Overview CTA card with no props
```.jsx
<View css={{
  position: "relative",
  height: 60,
}}>
  <OverviewCtaCard />
</View>
```

### Overview CTA card with image and CTA button
```.jsx
<View css={{
  position: "relative",
  height: 480,
}}>
  <OverviewCtaCard
    backgroundImage="https://images.unsplash.com/photo-1539512110726-6d89c892f117?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=10cd46d36ba78d30891de50e25907fe6&auto=format&fit=crop&w=2089&q=80"
    title="Cooking with charcoal"
    ctaButton={(
      <ButtonFilled color="accent">Enquire to enrol</ButtonFilled>
    )}
  />
</View>
```

### Overview CTA card with price and CTA button
```.jsx
<View css={{
  position: "relative",
  height: 200,
}}>
  <OverviewCtaCard
    title="Cooking with charcoal"
    price="49"
    currency="SEK"
    ctaButton={(
      <ButtonFilled color="accent">Enquire to enrol</ButtonFilled>
    )}
      ctaAlt={(
    <>
        <Text fontSize={3} fontWeight="semibold">Included in GO1 Premium</Text>
        <Text fontWeight="semibold" color="subtle">Starting from $12 per user for teams</Text>
        <Button marginBottom={4} paddingTop={0} icon={IconChevronRight} flexDirection="row-reverse" justifyContent="flex-end" paddingLeft={0} color="accent" href="google.com">Learn more</Button>
        <ButtonFilled>Try it free</ButtonFilled>
      </>
    )}
  />
</View>
```

### Overview CTA card with props and CTA button
Different properties are displayed in different positions and shown/hidden based on screen width.
```.jsx
<View css={{
  position: "relative",
  height: 520,
}}>
  <OverviewCtaCard
    author={
      <View flexDirection="row" alignItems="center">
        <Avatar
          size={5}
          src="https://i.imgur.com/Ee55uvc.jpg"
          fullName="Leslie Knope"
          marginRight={3}
        />
        By Leslie Knope
      </View>
    }
    backgroundImage="https://images.unsplash.com/photo-1539512110726-6d89c892f117?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=10cd46d36ba78d30891de50e25907fe6&auto=format&fit=crop&w=2089&q=80"
  ctaAlt={(
    <>
        <Text fontSize={3} fontWeight="semibold">Included in GO1 Premium</Text>
        <Text fontWeight="semibold" color="subtle">Starting from $12 per user for teams</Text>
        <Button marginBottom={4} paddingTop={0} icon={IconChevronRight} flexDirection="row-reverse" justifyContent="flex-end" paddingLeft={0} color="accent" href="google.com">Learn more</Button>
        <ButtonFilled>Try it free</ButtonFilled>
      </>
    )}
    dislikes="2"
    duration="90"
    enrolled="3"
    likes="10"
    price="99"
    subtitle={
      <View flexDirection="row" alignItems="center">
        <Icon
          name="Course"
          size={1}
          marginRight={3}
        />
        <Text fontSize={1} color="subtle">COURSE</Text>
      </View>
    }
    title="Cooking with charcoal"
  />
</View>
```

### Overview CTA card with custom children
```.jsx
<View css={{
  position: "relative",
  height: 320,
}}>
  <OverviewCtaCard
    title="Cooking with charcoal" 
    backgroundImage="https://images.unsplash.com/photo-1539512110726-6d89c892f117?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=10cd46d36ba78d30891de50e25907fe6&auto=format&fit=crop&w=2089&q=80"
    >
    <Text fontSize={1}>Part of your subscription</Text>
  </OverviewCtaCard>
</View>
```

### Overview CTA card with premium
Different properties are displayed in different positions and shown/hidden based on screen width.
```.jsx
<View css={{
  position: "relative"
}}>
  <OverviewCtaCard
    position="relative"
    ctaAlt={(
      <>
        <Text fontSize={3} fontWeight="semibold">Included in GO1 Premium</Text>
        <Text fontWeight="semibold" color="subtle">Starting from $12 per user for teams</Text>
        <Button marginBottom={4} paddingTop={0} icon={IconChevronRight} flexDirection="row-reverse" justifyContent="flex-end" paddingLeft={0} color="accent" href="google.com">Learn more</Button>
        <ButtonFilled>Try it free</ButtonFilled>
      </>
    )}
    author={
      <View flexDirection="row" alignItems="center">
        <Avatar
          size={5}
          src="https://i.imgur.com/Ee55uvc.jpg"
          fullName="Leslie Knope"
          marginRight={3}
        />
        By Leslie Knope
      </View>
    }
    backgroundImage="https://images.unsplash.com/photo-1539512110726-6d89c892f117?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=10cd46d36ba78d30891de50e25907fe6&auto=format&fit=crop&w=2089&q=80"
    ctaButton={(
      <ButtonFilled color="accent">Enrol</ButtonFilled>
    )}
    currency="JPY"
    dislikes="2"
    duration="90"
    enrolled="3"
    likes="10"
    price="99"
    subtitle={
      <View flexDirection="row" alignItems="center">
        <Icon
          name="Course"
          size={1}
          marginRight={3}
        />
        <Text fontSize={1} color="subtle">COURSE</Text>
      </View>
    }
    title="Cooking with charcoal"
  />
</View>
```

```!jsx
<ComponentDoc component="OverviewCtaCardProps" />
```
