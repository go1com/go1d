import React from 'react';
import { storiesOf } from '@storybook/react';
import { SpotIcon } from '../src';
storiesOf("SpotIcon", module)
  .add('Compliance', () => <SpotIcon name="Compliance" />)
  .add('Business', () => <SpotIcon name="Business" />)
  .add('PersonalDevelopment', () => <SpotIcon name="PersonalDevelopment" />)
  .add('SectorSpecific', () => <SpotIcon name="SectorSpecific" />)
  .add('Technology', () => <SpotIcon name="Technology" />)