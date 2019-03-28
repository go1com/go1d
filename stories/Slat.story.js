import React from 'react';
import {storiesOf} from '@storybook/react';
import {Slat,View,Icon,Text} from '../src';
storiesOf("Slat", module)
.add('With dropdown actions', () => <Slat
  id={123}
  topMeta={["one", "two"]}
  title="This is test title"
  description="This is the test description"
  currency="AUD"
  price={100}
  bottomMeta={[
    {
      icon: "Calendar",
      text: "1.30pm - 2.30pm",
    },
    {
      icon: "MapPin",
      text: "Underwood, QLD, Australia",
    },
  ]}
  image="https://res.cloudinary.com/go1vn/image/upload/v1537851944/ckvawokvc4k70fd9t1oj.jpg"
  type="Event"
  typeBackground="background"
  dropdownItems={[{
    iconName: "Calendar",
    title: "fake item",
    onClick: () => console.log('foo'),
  },
    {
      iconName: "Calendar",
      title: "fake item2",
      onClick: () => console.log('foo2'),
    }]}
/>)
  .add('With actionRenderer', () => <Slat
    id={123}
    topMeta={["one", "two"]}
    title="This is test title"
    description="This is the test description"
    currency="AUD"
    price={100}
    bottomMeta={[
      {
        icon: "Calendar",
        text: "1.30pm - 2.30pm",
      },
      {
        icon: "MapPin",
        text: "Underwood, QLD, Australia",
      },
    ]}
    image="https://res.cloudinary.com/go1vn/image/upload/v1537851944/ckvawokvc4k70fd9t1oj.jpg"
    type="Event"
    typeBackground="background"
    actionRenderer={() => (
      <View flexDirection="row">
        <Icon name="Import" marginRight={3} color="accent" />
        <Text color="accent">Import</Text>
      </View>
    )}
  />)
  .add('With implied link wrapper and active/hover states', () => <Slat
  id={123}
  topMeta={["one", "two"]}
  title="This is test title"
  description="This is the test description"
  currency="AUD"
  price={100}
  bottomMeta={[
    {
      icon: "Calendar",
      text: "1.30pm - 2.30pm",
    },
    {
      icon: "MapPin",
      text: "Underwood, QLD, Australia",
    },
  ]}
  image="https://res.cloudinary.com/go1vn/image/upload/v1537851944/ckvawokvc4k70fd9t1oj.jpg"
  type="Event"
  typeBackground="background"
/>)
.add('Skeleton', () => <Slat
  skeleton={true}
/>)
