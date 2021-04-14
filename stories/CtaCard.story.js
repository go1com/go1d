import React from "react";
import { View, CTACard, ButtonFilled } from "../src";

export default {
  title: "Original Go1d/CTACard",
  component: CTACard,
  subcomponents: { ButtonFilled, View },
};

export const WithPrice = args => (
  <View padding={5} backgroundColor="soft">
    <CTACard
      {...args}
      iconImage="https://res.cloudinary.com/go1/image/upload/v1542240162/ojaevw3frdaiji5zzmf3.png"
      subtitle="Up to 20 learners"
      description="<center><b>$25 flat</b> / month</center>"
      button={
        <ButtonFilled color="accent" size="lg" justifyContent="center">
          Button
        </ButtonFilled>
      }
    />
  </View>
);

export const WithContentProviderCard = args => (
  <View padding={5} backgroundColor="background">
    <CTACard
      {...args}
      iconImage="https://res.cloudinary.com/go1/image/upload/v1542240162/ojaevw3frdaiji5zzmf3.png"
      title="Pay per use"
      backgroundColor="soft"
      description="Sell your courses through the GO1 course marketplace directly to consumers.<br/><br/>You receive 70% of the purchase price from all sales."
      buttonText="Button"
      button={
        <ButtonFilled size="lg" justifyContent="center">
          Button
        </ButtonFilled>
      }
    />
  </View>
);

WithContentProviderCard.storyName = "With content provider card";
