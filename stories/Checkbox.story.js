import React from 'react'; 
import {storiesOf} from '@storybook/react'; 
import {Checkbox,Text,Form,Field,ButtonFilled,CheckboxGroup} from '../src'; 
storiesOf("Checkbox", module) 
.add('Label', () => <Checkbox name="Test" label="Test" />) 
.add('Label size sm', () => <Checkbox size="sm" name="Test" label="Test" />) 
.add('Label size lg', () => <Checkbox size="lg" name="Test" label="Test" />) 
.add('Child label', () => <Checkbox name="Test">
    <Text fontWeight="bold">Test</Text>
</Checkbox>) 
.add('Disabled', () => <Checkbox disabled name="Test" value={true} label="Test" />) 
.add('Checkbox in Field', () => <Form initialValues={{ portalName: true }} onSubmit={(values, actions) => console.log(values, actions)}>
    <Field
    component={Checkbox}
    name="portalName"
    label="Portal name"
    description="The name displayed across the site"
    />
    <ButtonFilled type="submit" color="accent">Submit</ButtonFilled>
</Form>) 
.add('Usage in a CheckboxGroup', () => <CheckboxGroup name="TestInput" options={[
  {
    label: "test",
    value: "testValue"
  },
  {
    label: "test 2",
    value: "testValue 2"
  },
]} />) 
.add('Initial values', () => <CheckboxGroup name="TestInput" value={['testValue']} options={[
  {
    label: "test",
    value: "testValue"
  },
  {
    label: "test 2",
    value: "testValue 2"
  },
]} />) 
.add('Disabled', () => <CheckboxGroup disabled name="TestInput" options={[
  {
    label: "test",
    value: "testValue"
  },
  {
    label: "test 2",
    value: "testValue 2"
  },
]} />) 
