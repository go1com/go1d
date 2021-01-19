import React from 'react'; 
import {storiesOf} from '@storybook/react'; 
import {View,CTACard,ButtonFilled} from '../src'; 
storiesOf("Original Go1d/CtaCard", module) 
.add('With Price', () => <View padding={5} backgroundColor="soft">
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
</View>) 
.add('With content provider card', () => <View padding={5} backgroundColor="background">
  <CTACard 
    iconImage="https://res.cloudinary.com/go1/image/upload/v1542240162/ojaevw3frdaiji5zzmf3.png"
    title="Pay per use"
    backgroundColor="soft"
    description="Sell your courses through the GO1 course marketplace directly to consumers.<br/><br/>You receive 70% of the purchase price from all sales."
    buttonText="Button"
    button={(
      <ButtonFilled size="lg" justifyContent="center">
        Button
      </ButtonFilled>
    )}
  />
</View>) 
