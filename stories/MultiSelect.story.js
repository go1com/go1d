import React from 'react';
import { storiesOf } from '@storybook/react';
import { MultiSelect } from '../src';
storiesOf("Original Go1d/MultiSelect", module)
  .add('A custom Multi Select component', () => <MultiSelect options={[
    { "value": "chocolate", label: "Chocolate" },
    { "value": "strawberry", label: "Strawberry" },
    { "value": "vanilla", label: "Vanilla" }
  ]} />)
  .add('Disabled Multi Select Field', () => <MultiSelect label="Disabled" options={[
    { "value": "chocolate", label: "Chocolate" },
    { "value": "strawberry", label: "Strawberry" },
    { "value": "vanilla", label: "Vanilla" }
  ]} disabled={true} />)
  .add('Searchable Multi Select Field', () => <MultiSelect label="Favourite" options={[
    { "value": "chocolate", label: "Chocolate" },
    { "value": "strawberry", label: "Strawberry" },
    { "value": "vanilla", label: "Vanilla" }
  ]} searchable={true} />)
  .add('Initial is open when initialized', () => <MultiSelect label="Favourite" options={[
    { "value": "chocolate", label: "Chocolate" },
    { "value": "strawberry", label: "Strawberry" },
    { "value": "vanilla", label: "Vanilla" }
  ]} initialIsOpen={true}  />)
  .add('Multi Select with extra style props', () => <MultiSelect
    label="Favourite"
    searchable={true}
    defaultValue={["chocolate"]}
    labelPaddingBottom={5}
    clearCSS={{
      height: "50%"
    }}
    options={[
      { "value": "chocolate", label: "Chocolate" },
      { "value": "strawberry", label: "Strawberry" },
      { "value": "vanilla", label: "Vanilla" }
    ]}
  />)
