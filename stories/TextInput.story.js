import React from 'react';
import { storiesOf } from '@storybook/react';
import { TextInput, ButtonMinimal } from '../src';
import { IconCross, IconSearch } from '../src/components/Icons';

storiesOf("TextInput", module)
  .add('Basic TextInput', () => <TextInput
    id="blank"
    placeholder="Blank"
  />)
  .add('TextInput with Small Size', () => <TextInput
    id="Small"
    size="sm"
    value="Small"
  />)
  .add('TextInput with Small Size and floating label', () => <TextInput
    id="Small"
    size="sm"
    floating={true}
    label="Small"
    value="Small Size"
  />)
  .add('TextInput Medium Size', () => <TextInput
    id="Medium"
    size="md"
    value="Medium"
  />)
  .add('TextInput with Medium Size and floating label', () => <TextInput
    id="Medium"
    size="md"
    floating={true}
    placeholder="Medium"
    value="Medium Size"
  />)
  .add('TextInput Large Size', () => <TextInput
    id="Large"
    size="lg"
    value="Large"
  />)
  .add('TextInput with Large Size and floating label', () => <TextInput
    id="Large"
    size="lg"
    floating={true}
    label="Large"
    value="Large Size"
  />)
  .add('TextInput with Icon', () => <TextInput
    id="search"
    icon={IconSearch}
    placeholder="Type here to Search"
  />)
  .add('TextInput with Icon and floating label', () => <TextInput
    id="search"
    icon={IconSearch}
    floating={true}
    label="Medium"
    value="Medium Size"
  />)
  .add('TextInput with RightNode', () => <TextInput
    id="clear"
    value="Type here to Search"
    suffixNode={<ButtonMinimal icon={IconCross} color="accent" />}
  />)
  .add('TextInput with RightNode and floating label', () => <TextInput
    id="clear"
    size="lg"
    floating={true}
    label="Large"
    value="Large Size"
    suffixNode={<ButtonMinimal size="lg" icon={IconCross} color="accent" />}
  />)
