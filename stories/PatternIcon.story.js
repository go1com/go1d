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
    </PatternIcon> <br/>
    <PatternIcon name="Gold" /> <br/>
    <PatternIcon name="Lime" /> <br/>
    <PatternIcon name="Ocean" /> <br/>
    <PatternIcon name="Ruby" size={80} /> <br/>
  </React.Fragment>)
  .add('PatternIcon with SpotIcon', () => <React.Fragment>
    <PatternIcon name="Forest">
      <SpotIcon
        name="TechnologySkills"
        color="background"
        position="absolute"
      />
    </PatternIcon> <br/>
    <PatternIcon name="Ruby">
      <SpotIcon
        name="SafetyAndCompliance"
        color="background"
        position="absolute"
      />
    </PatternIcon> <br/>
    <PatternIcon name="Ocean">
      <SpotIcon
        name="BusinessSkills"
        color="background"
        position="absolute"
      />
    </PatternIcon> <br/>
    <PatternIcon name="Gold">
      <SpotIcon
        name="PersonalDevelopment"
        color="background"
        position="absolute"
      />
    </PatternIcon> <br/>
    <PatternIcon name="Lime">
      <SpotIcon
        name="SectorSpecific"
        color="background"
        position="absolute"
      />
    </PatternIcon> <br/>
  </React.Fragment>)
