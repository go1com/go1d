import React from 'react';
import { storiesOf } from '@storybook/react';
import { MultiSelect } from '../src';
storiesOf("MultiSelect", module)
  .add('A custom Multi Select component', () => <MultiSelect options={[
    { "value": "chocolate", label: "Chocolate" },
    { "value": "stawberry", label: "Strawberry" },
    { "value": "vanilla", label: "Vanilla" }
  ]} />)
  .add('Disabled Multi Select Field', () => <MultiSelect label="Disabled" options={[
    { "value": "chocolate", label: "Chocolate" },
    { "value": "stawberry", label: "Strawberry" },
    { "value": "vanilla", label: "Vanilla" }
  ]} disabled={true} />)
  .add('Searchable Multi Select Field', () => <MultiSelect label="Favourite" options={[
    { "value": "chocolate", label: "Chocolate" },
    { "value": "stawberry", label: "Strawberry" },
    { "value": "vanilla", label: "Vanilla" }
  ]} searchable={true} />)
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
      { "value": "stawberry", label: "Strawberry" },
      { "value": "vanilla", label: "Vanilla" }
    ]}
  />)
