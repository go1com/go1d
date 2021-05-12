import React from "react";
import { ButtonFilled, Link, CardListIndex, View } from "../src";
import IconSave from "../src/components/Icons/Save";

export default {
  title: "Athletic/Card/CardListIndex",
  component: CardListIndex,
};

export const Base = args => <View width={215}><CardListIndex {...args} /></View>;

export const Skeleton = () => <View width={215}><CardListIndex skeleton={true} /></View>;
Skeleton.parameters = { controls: { hideNoControlsWarning: true } };

export const AlmostAllTheProps = args => (
  <View width={215}>
    <CardListIndex
      {...args}
      title="Test Title"
      thumbnail="https://res.cloudinary.com/go1/image/fetch/w_1024,h_300,c_thumb,g_auto/https://udemy-images.udemy.com/course/750x422/435262_c617.jpg"
      subTitle="Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui."
    />
  </View>
);
AlmostAllTheProps.storyName = "Almost all the Props";

export const CardListIndexWithActionAndLink = () => (
  <Link href="https://go1.com">
    <View width={215}>
      <CardListIndex
        title="Test Title"
        thumbnail="https://res.cloudinary.com/go1/image/fetch/w_1024,h_300,c_thumb,g_auto/https://udemy-images.udemy.com/course/750x422/435262_c617.jpg"
        subTitle="Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui."
        customActionItems={[<ButtonFilled icon={IconSave} />]}
      />
    </View>
  </Link>
);
CardListIndexWithActionAndLink.storyName = "CardListIndex with custom action and link";
CardListIndexWithActionAndLink.parameters = { controls: { hideNoControlsWarning: true } };
