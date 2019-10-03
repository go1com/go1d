import React from 'react';
import { storiesOf } from '@storybook/react';
import { SpotIcon, View } from '../src';
storiesOf("SpotIcon", module)
  .add('Business', () => <SpotIcon name="BusinessSkills" />)
  .add('PersonalDevelopment', () => <SpotIcon name="PersonalDevelopment" />)
  .add('SectorSpecific', () => <SpotIcon name="SectorSpecific" />)
  .add('Technology', () => <SpotIcon name="TechnologySkills" />)
  .add('SpotIcons', () =>
    <View flexDirection="row">
      <SpotIcon name="SafetyAndCompliance" background="red" size={5} backgroundSize={10} />
      <SpotIcon name="SafetyAndCompliance" background="red" size={10} />
      <SpotIcon name="SafetyAndCompliance" background="blue" backgroundType="square" size={8} />
      <SpotIcon name="SafetyAndCompliance" background="contrast" backgroundType="square" />
      <SpotIcon name="SafetyAndCompliance" background="warning" backgroundType="square" />
      <SpotIcon name="SafetyAndCompliance" background="success" />
      <SpotIcon name="SafetyAndCompliance" background="red" />
      <SpotIcon name="TechnologySkills" background="green" />
      <SpotIcon name="BusinessSkills" background="blue" />
      <SpotIcon name="PersonalDevelopment" background="yellow" />
      <SpotIcon name="SectorSpecific" background="lime" />
    </View>
  )