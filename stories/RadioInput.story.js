import React from 'react'; 
import {storiesOf} from '@storybook/react'; 
import {RadioInput,RadioGroup} from '../src'; 
storiesOf("Original Go1d/RadioInput", module) 
.add('Label', () => <RadioGroup name="TestInput" options={[
  {
    label: "test",
    value: "testValue"
  },
  {
    label: "test 2",
    value: "testValue 2"
  },
]} />) 
