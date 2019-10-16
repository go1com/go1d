import React from 'react';
import {storiesOf} from '@storybook/react';
import {Stepper,ButtonMinimal} from '../src';
storiesOf("Stepper", module)
.add('Basic Stepper', () => <Stepper
  id="stepper"
/>)
.add('Stepper with step increment', () => <Stepper
  id="stepper"
  stepIncrement={5}
/>)
.add('Stepper with min num', () => <Stepper
  id="stepper"
  minNumber={0}
/>)
.add('Stepper with max num', () => <Stepper
  id="stepper"
  maxNumber={5}
/>)