import React from 'react';
import { storiesOf } from '@storybook/react';
import { FeaturedTag, View, Carousel } from '../src';
import {
  IconCheck,
  IconStar,
  IconCourse,
} from "../src/components/Icons";

storiesOf("Original Go1d/FeaturedTag", module)
  .add('Base', () => (
    <View backgroundColor="faint" padding={5}>
      <FeaturedTag>
        Hello World!
      </FeaturedTag>
    </View>
  ))
  .add('With all props', () => (
    <FeaturedTag
      size="md"
      color="danger"
      iconColor="default"
      backgroundColor="accent"
      icon={IconCheck}
    >
      Hello World!
    </FeaturedTag>
  ))
  .add('With Cards', () => (
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
  ))
  .add('Interactive styles', () => (
    <FeaturedTag passive={false}>
      Hello World!
    </FeaturedTag>
  )) 
