import React from "react";
import { FeaturedTag, View, Carousel } from "../src";
import { IconCheck, IconStar, IconCourse } from "../src/components/Icons";

export default {
  title: "Original Go1d/FeaturedTag",
  component: FeaturedTag,
};

export const Base = args => (
  <View backgroundColor="faint" padding={5}>
    <FeaturedTag {...args}>Hello World!</FeaturedTag>
  </View>
);

export const WithAllProps = args => (
  <FeaturedTag
    size="md"
    color="danger"
    iconColor="default"
    backgroundColor="accent"
    icon={IconCheck}
  >
    Hello World!
  </FeaturedTag>
);

WithAllProps.storyName = "With all props";

export const WithCards = args => (
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
);

export const InteractiveStyles = args => (
  <FeaturedTag passive={false}>Hello World!</FeaturedTag>
);

InteractiveStyles.storyName = "Interactive styles";
