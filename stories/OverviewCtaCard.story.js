import React from 'react';
import {storiesOf} from '@storybook/react';
import {OverviewCtaCard,View,ButtonFilled,Avatar,Icon,Text} from '../src';
storiesOf("Original Go1d/OverviewCtaCard", module)
.add('Overview CTA card with no props', () => <View css={{
  position: "relative",
  height: 60,
}}>
  <OverviewCtaCard />
</View>)
.add('Overview CTA card with image and CTA button', () => <View css={{
  position: "relative",
  height: 480,
}}>
  <OverviewCtaCard
    backgroundImage="https://images.unsplash.com/photo-1539512110726-6d89c892f117?fit=crop&w=589"
    title="Cooking with charcoal"
    ctaButton={(
      <ButtonFilled color="accent">Enquire to enrol</ButtonFilled>
    )}
  />
</View>)
.add('Overview CTA card with price and CTA button', () => <View css={{
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
  />
</View>)
.add('Overview CTA card with props and CTA button', () => <View css={{
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
    backgroundImage="https://images.unsplash.com/photo-1539512110726-6d89c892f117?fit=crop&w=589"
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
</View>)
.add('Overview CTA card with custom children', () => <View css={{
  position: "relative",
  height: 320,
}}>
  <OverviewCtaCard
    title="Cooking with charcoal"
    backgroundImage="https://images.unsplash.com/photo-1539512110726-6d89c892f117?fit=crop&w=589"
    >
    <Text fontSize={1}>Part of your subscription</Text>
  </OverviewCtaCard>
</View>)
