import React from 'react';
import { storiesOf } from '@storybook/react';
import { Select } from '../src';
storiesOf("Original Go1d/Select", module)
  .add('A custom select component', () => <Select options={[
    { "value": "chocolate", label: "Chocolate" },
    { "value": "stawberry", label: "Strawberry" },
    { "value": "vanilla", label: "Vanilla" }
  ]} />)
  .add('Disabled Select Field', () => <Select options={[
    { "value": "chocolate", label: "Chocolate" },
    { "value": "stawberry", label: "Strawberry" },
    { "value": "vanilla", label: "Vanilla" }
  ]} disabled={true} />)
  .add('Clearable Select Field', () => <Select options={[
    { "value": "chocolate", label: "Chocolate" },
    { "value": "stawberry", label: "Strawberry" },
    { "value": "vanilla", label: "Vanilla" }
  ]} clearable={true} />)
  .add('Searchable Select Field', () => <Select options={[
    { "value": "chocolate", label: "Chocolate" },
    { "value": "stawberry", label: "Strawberry" },
    { "value": "vanilla", label: "Vanilla" }
  ]} searchable={true} />)
  .add('Select filled with optgroups', () => <Select options={[
    {
      label: "Icecream",
      optgroup: true,
      values: [
        { "value": "chocolate", label: "Chocolate" },
        { "value": "stawberry", label: "Strawberry" },
        { "value": "vanilla", label: "Vanilla" }
      ]
    },
    {
      label: "Cheese",
      optgroup: true,
      values: [
        { "value": "brie", label: "Brie" },
        { "value": "cheddar", label: "Cheddar" },
        { "value": "gorgonzola", label: "Gorgonzola" }
      ]
    }
  ]} />)
  .add('Select filled with label-less optgroups', () => <Select options={[
    {
      label: "",
      optgroup: true,
      values: [
        { "value": "chocolate", label: "Chocolate" },
        { "value": "stawberry", label: "Strawberry" },
        { "value": "vanilla", label: "Vanilla" }
      ]
    },
    {
      label: "",
      optgroup: true,
      values: [
        { "value": "brie", label: "Brie" },
        { "value": "cheddar", label: "Cheddar" },
        { "value": "gorgonzola", label: "Gorgonzola" }
      ]
    }
  ]} />)
  .add('Controlled Select Value', () => (
    <Select
      value={null}
      options={[
        { "value": "chocolate", label: "Chocolate" },
        { "value": "stawberry", label: "Strawberry" },
        { "value": "vanilla", label: "Vanilla" }
      ]}
    />
  )); 
