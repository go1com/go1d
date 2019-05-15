import React from 'react';
import {storiesOf} from '@storybook/react';
import {SlatMini,Icon} from '../src';
storiesOf("SlatMini", module)
.add('With dropdown actions', () => <SlatMini
  id={123}
  title="This is an online content"
  bottomMeta={["Provider", "29 mins"]}
  image="http://res.cloudinary.com/go1/image/upload/v1557388417/l7jhug2k9n1s4qzw3ai8.png"
  type="Course"
  dropdownItems={[{
    iconName: "Calendar",
    title: "fake item #01",
    onClick: () => console.log('You have clicked on `fake item #01`'),
  }, {
    iconName: "Calendar",
    title: "fake item #02",
    onClick: () => console.log('You have clicked on `fake item #02`'),
  }]}
/>)
.add('With actionRender', () => <SlatMini
  id={123}
  title="This is an offline content"
  bottomMeta={["Provider", "29 mins"]}
  image="https://res.cloudinary.com/go1vn/image/upload/v1537851944/ckvawokvc4k70fd9t1oj.jpg"
  type="Event"
  typeBackground="background"
  actionRenderer={() => (
    <Icon color="muted" name="PlusCircle" marginRight={3} />
  )}
/>)
.add('With link', () => <SlatMini
  id={123}
  title="This is an offline content"
  bottomMeta={["Provider", "29 mins"]}
  image="https://res.cloudinary.com/go1vn/image/upload/v1537851944/ckvawokvc4k70fd9t1oj.jpg"
  type="Event"
  href="/"
  typeBackground="accent"
/>)
.add('Skeleton', () => <SlatMini
  skeleton={true}
/>)
