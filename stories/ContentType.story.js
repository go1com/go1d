import React from 'react';
import {storiesOf} from '@storybook/react';
import {View,ContentType} from '../src';

storiesOf("Original Go1d/ContentType", module)
  .add(
    'ContentType',
    () => <View flexDirection="row"><ContentType type="Course" /></View>
  )
  .add(
    'ContentType with text',
    () => <View flexDirection="row"><ContentType type="Course" text="Course" /></View>
  )
  .add(
    'ContentType with background',
    () => <View flexDirection="row"><ContentType type="Event" text="Event" background="default" width={70} /></View>
  )
