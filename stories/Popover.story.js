import React from "react";
import { Popover, ButtonFilled, View } from "../src";

export default {
  title: "Original Go1d/Popover",
  component: Popover,
  parameters: {
    design: [
      {
        name: 'Guidelines',
        type: 'link',
        url: 'https://www.figma.com/file/BxQA6qbzRwjSA2AXWnO0f9/Components?node-id=6636%3A3',
        label: 'See Popover designs in Figma',
      },
    ],
  }
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

BasicUsage.storyName = "Basic Popover";

export const DisabledPopup = args => (
  <View flexDirection="row" height={300} justifyContent="center" alignItems="center">
    <Popover
      {...args}
      disabled={true}
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

DisabledPopup.storyName = "Disabled Popover";
