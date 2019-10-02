import React from 'react';
import { storiesOf } from '@storybook/react';
import { SpotIcon } from '../src';
storiesOf("SpotIcon", module)
  .add('SpotIcons', () =>
    <React.Fragment>
      <SpotIcon name="SafetyAndCompliance" size={8} background="red" backgroundType="square" /> <br/>
      <SpotIcon name="SafetyAndCompliance"  background="red" /> <br/>
      <SpotIcon name="SafetyAndCompliance" background="green" /> <br/>
      <SpotIcon name="SafetyAndCompliance" background="lime" /> <br/>
      <SpotIcon name="SafetyAndCompliance" background="warning" /> <br/>
    </React.Fragment>
  )
  .add('Business', () => <SpotIcon name="BusinessSkills" />)
  .add('PersonalDevelopment', () => <SpotIcon name="PersonalDevelopment" />)
  .add('SectorSpecific', () => <SpotIcon name="SectorSpecific" />)
  .add('Technology', () => <SpotIcon name="TechnologySkills" />)