import React from 'react';
import { storiesOf } from '@storybook/react';
import { PatternIcon, SpotIcon } from '../src';
storiesOf("PatternIcon", module)
  .add('PatternIcon', () => <React.Fragment>
    <PatternIcon name="Forest">
      <SpotIcon
        name="PersonalDevelopment"
        color="background"
        position="absolute"
      />
    </PatternIcon> <br />
    <PatternIcon name="Gold" /> <br />
    <PatternIcon name="Lime" /> <br />
    <PatternIcon name="Ocean" /> <br />
    <PatternIcon name="Ruby" size={80} /> <br />
  </React.Fragment>)
