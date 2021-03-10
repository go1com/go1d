import React from "react";
import Theme from "../src/components/Theme";
import {
  InputGroup,
  InputTextAffix,
  TextInput,
  SelectDropdown,
  View,
  ButtonFilled,
} from "../src";
import { IconChevronDown } from "../src/components/Icons";
import hideInheritedProps from '../.storybook/hideInheritedProps.js'

let argTypes = hideInheritedProps({}, InputGroup);

export default {
  title: "Athletic/InputGroup",
  argTypes: argTypes,
};

export const Base = args => (
  <InputGroup>
    <InputTextAffix text="www." />
    <TextInput
      borderRadius={0}
      viewCss={{
        flexGrow: 1,
        flexShrink: 1,
      }}
    />
    <InputTextAffix text=".mygo1.com" />
  </InputGroup>
);

export const WithSelectDropdownAndTextInput = args => (
  <Theme.Consumer>
    {({ radius }) => (
      <InputGroup>
        <SelectDropdown
          options={[
            { value: "chocolate", label: "Chocolate" },
            { value: "stawberry", label: "Strawberry" },
            { value: "vanilla", label: "Vanilla" },
          ]}
          optionRenderer={({ value, label }) => <View>{label}</View>}
          onChange={(value) => window.alert(`You selected ${value}`)}
        >
          {({ ref, getToggleButtonProps }) => (
            <ButtonFilled
              {...getToggleButtonProps()}
              innerRef={ref}
              paddingX={3}
              fontWeight="semibold"
              flexGrow={1}
              css={{
                borderRadius: `${radius[3]}px 0px 0px ${radius[3]}px`,
                flexGrow: 1,
                flexShrink: 1,
                ":hover, :focus, :active": {
                  transform: "none",
                },
              }}
            >
              <View flexDirection="row" alignItems="center">
                Button <IconChevronDown marginLeft={3} />
              </View>
            </ButtonFilled>
          )}
        </SelectDropdown>
        <TextInput borderRadius={0} />
      </InputGroup>
    )}
  </Theme.Consumer>
);

WithSelectDropdownAndTextInput.storyName = "With SelectDropdown and TextInput";
