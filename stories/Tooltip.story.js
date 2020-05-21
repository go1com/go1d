import React from 'react';
import { storiesOf } from '@storybook/react';
import { Tooltip, Text, Icon, ButtonFilled } from '../src';
storiesOf("Tooltip", module)
  .add('Basic Usage', () => <Text
    color='subtle'
    fontSize={4}
    fontWeight='bold'
  >
    My large <Tooltip tip="Really Bold">bold</Tooltip> grey text
</Text>)
  .add('Click Mode', () => <Text
  >
    <Tooltip tip={<Text color=""><EyeIcon display="inline" /> See You</Text>} mode="click" placement="right">Click ME!</Tooltip>
  </Text>)
  .add('Advanced Usage', () => <Tooltip tip="This is a tooltip">
    {({ ref, getEventProps }) => <ButtonFilled
      color="accent"
      innerRef={ref}
      {...getEventProps()}
    >
      Testing
    </ButtonFilled>}
  </Tooltip>) 
