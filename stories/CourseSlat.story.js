import React from 'react';
import {storiesOf} from '@storybook/react';
import {CourseSlat,View,Icon,Text} from '../src';
storiesOf("CourseSlat", module)
.add('With avatar', () => <CourseSlat
  courseImage="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?h=400"
  title="Master sourdough in a week"
  description="Despite general improvements in workplace health and safety over the past the risk of sourdough related injuries are still insurmountable for most"
  author="Bob Bobberson"
  authorAvatar="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?h=40"
  duration="60"
  type="Course"
  typeIcon="Course"
/>)
.add('With Import action', () => <CourseSlat
  courseImage="https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?h=400"
  title="Master sourdough in a week"
  description="Despite general improvements in workplace health and safety over the past the risk of sourdough related injuries are still insurmountable for most"
  author="Bob Bobberson"
  duration="4"
  actionRenderer={() => (
      <View flexDirection="row">
      <Icon name="Import" marginRight={3} color="accent" />
      <Text color="accent">Import</Text>
      </View>
  )}
  type="Course"
  typeIcon="Course"
/>)
.add('With price and duration', () => <CourseSlat
  courseImage="https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?h=400"
  title="Master sourdough in a week"
  description="Despite general improvements in workplace health and safety over the past the risk of sourdough related injuries are still insurmountable for most"
  author="Hon. Bob Bobberson Jr."
  duration="75"
  price="12345"
  currency="INR"
  type="Course"
  typeIcon="Course"
/>)
.add('Skeleton', () => <CourseSlat
  skeleton={true}
/>)
