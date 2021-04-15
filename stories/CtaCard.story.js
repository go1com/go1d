import React from "react";
import { View, CTACard, ButtonFilled } from "../src";

export default {
  title: "Original Go1d/CTACard",
  component: CTACard,
  subcomponents: { ButtonFilled, View },
  args: {
    buttonText: "Button"
  },
  argTypes: {
    buttonText: {
      description: 'This is not a prop, but a slot for React children.',
    },
  }
};

export const WithPrice = ({buttonText, ...args}) => (
  <View padding={5} backgroundColor="soft">
    <CTACard
      {...args}
      button={
        <ButtonFilled color="accent" size="lg" justifyContent="center">
          {buttonText}
        </ButtonFilled>
      }
    />
  </View>
);
WithPrice.argTypes = {
  subtitle: { defaultValue: 'Up to 20 learners', },
  iconImage: { defaultValue: 'https://res.cloudinary.com/go1/image/upload/v1542240162/ojaevw3frdaiji5zzmf3.png', },
  description: { defaultValue: "<center><b>$25 flat</b> / month</center>", },
  button: { control: { disable: true, }, },
};

export const WithContentProviderCard = ({buttonText, ...args}) => (
  <View padding={5} backgroundColor="background">
    <CTACard
      {...args}
      button={
        <ButtonFilled size="lg" justifyContent="center">
          {buttonText}
        </ButtonFilled>
      }
    />
  </View>
);
WithContentProviderCard.storyName = "With content provider card";
WithContentProviderCard.argTypes = {
  title: { defaultValue: 'Pay per use', },
  backgroundColor: { defaultValue: "soft", },
  iconImage: { defaultValue: 'https://res.cloudinary.com/go1/image/upload/v1542240162/ojaevw3frdaiji5zzmf3.png', },
  description: { defaultValue: "Sell your courses through the GO1 course marketplace directly to consumers.<br/><br/>You receive 70% of the purchase price from all sales.", },
  button: { control: { disable: true, }, },
};

