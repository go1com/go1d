import React from 'react';
import { storiesOf } from '@storybook/react';
import { InputGroup, InputTextAffix, TextInput, SelectDropdown, View, ButtonFilled, Icon } from '../src';
storiesOf("Original Go1d/InputGroup", module)
  .add('Base', () => <InputGroup>
    <InputTextAffix text="www." />
    <TextInput
      borderRadius={0}
      viewCss={{
        flexGrow: 1,
        flexShrink: 1,
      }}
    />
    <InputTextAffix text=".mygo1.com" />
  </InputGroup>)
  .add('With SelectDropdown and TextInput', () => <InputGroup>
    <SelectDropdown
      options={[
        { "value": "chocolate", label: "Chocolate" },
        { "value": "stawberry", label: "Strawberry" },
        { "value": "vanilla", label: "Vanilla" }
      ]}
      optionRenderer={({ value, label }) => <View>{label}</View>}
      onChange={value => window.alert(`You selected ${value}`)}
    >
      {({ ref, getToggleButtonProps }) => (
        <ButtonFilled
          {...getToggleButtonProps()}
          innerRef={ref}
          paddingX={3}
          borderRadius={0}
          fontWeight="semibold"
          flexGrow={1}
          css={{
            flexGrow: 1,
            flexShrink: 1,
            ":hover, :focus, :active": {
              transform: "none"
            }
          }}
        >
          <View flexDirection="row" alignItems="center">
            Button <IconChevronDown marginLeft={3} />
          </View>
        </ButtonFilled>
      )}
    </SelectDropdown>
    <TextInput borderRadius={0} />
  </InputGroup>) 
