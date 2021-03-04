import React from "react";
import { Popover, Text, ButtonFilled, View } from "../src";
import hideInheritedProps from '../.storybook/hideInheritedProps.js'
import { IconEye } from "../src/components/Icons";

let argTypes = hideInheritedProps({}, Popover);

export default {
  title: "Original Go1d/Popover",
  argTypes: argTypes,
  component: Popover,
};

export const BasicUsage = args => (
  <View flexDirection="row" height={300} justifyContent="center" alignItems="center">
    <Popover
      {...args}
      handleRenderer={
        (ref, handleProps) => <ButtonFilled innerRef={ref} color="accent" {...handleProps}>Hover me</ButtonFilled>
      }
      contentRenderer={
        (ref, contentProps, closePopover) => (
          <View
            innerRef={ref}
            {...contentProps}
            border={1}
            borderColor="subtle"
            borderRadius={3}
            padding={5}
          >
            Popover content
            <ButtonFilled onClick={closePopover} color="accent" marginTop={4}>Close</ButtonFilled>
          </View>
        )
      }
    />
  </View>
);
