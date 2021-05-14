---
title: CTA Card
status: ready
releaseVersion: 0.2.18
---

## Examples
### With Price
An example use case of the Go1 Price Packaging on the website

```.jsx
<View padding={5} backgroundColor="soft">
  <CTACard
    iconImage="https://res.cloudinary.com/go1/image/upload/v1542240162/ojaevw3frdaiji5zzmf3.png"
    subtitle="Up to 20 learners"
    description="<center><b>$25 flat</b> / month</center>"
    button={(
      <ButtonFilled color="accent" size="lg" justifyContent="center">
        Button
      </ButtonFilled>
    )}
  />
</View>
```
### With content provider card
An example use case is Content provider Card on the Go1 Website

```.jsx
<View padding={5} backgroundColor="background">
  <CTACard 
    iconImage="https://res.cloudinary.com/go1/image/upload/v1542240162/ojaevw3frdaiji5zzmf3.png"
    title="Pay per use"
    backgroundColor="soft"
    description="Sell your courses through the Go1 course marketplace directly to consumers.<br/><br/>You receive 70% of the purchase price from all sales."
    buttonText="Button"
    button={(
      <ButtonFilled size="lg" justifyContent="center">
        Button
      </ButtonFilled>
    )}
  />
</View>
```


```!jsx
<ComponentDoc component="CTACard" />
```
