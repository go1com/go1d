---
title: Featured Tag
status: ready
releaseVersion: 0.2.18
---

## Examples

### Base
```.jsx
<View backgroundColor="faint" padding={5}>
  <FeaturedTag>
    Hello World!
  </FeaturedTag>
</View>
```


### With all props
If you really want you can add all the props:
```.jsx
<FeaturedTag
  size="md"
  color="danger"
  iconColor="default"
  backgroundColor="accent"
  icon={IconCheck}
>
  Hello World!
</FeaturedTag>
```


### With Cards
Carousel with lots of combinations of Cards
```.jsx
<View backgroundColor="faint" padding={5}>
  <Carousel slidesToShow={2} slideAnimationDuration={150}>
    <FeaturedTag>Test Words</FeaturedTag>
    <FeaturedTag icon={IconStar}>Test Title</FeaturedTag>
    <FeaturedTag>Lorem Ipsum decor de lesLorem</FeaturedTag>
    <FeaturedTag>Lorem Ipsum decor de lesLorem</FeaturedTag>
    <FeaturedTag icon={IconCourse}>Test Tag</FeaturedTag>
    <FeaturedTag icon={IconCheck}>Infomation Systems</FeaturedTag>
    <FeaturedTag icon={IconCheck}>Programming</FeaturedTag>
  </Carousel>
</View>
```

### Interactive styles
With interactive styles
```.jsx
<FeaturedTag passive={false}>
  Hello World!
</FeaturedTag>
```

```!jsx
<ComponentDoc component="FeaturedTag" />
```
