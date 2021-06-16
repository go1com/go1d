import React from "react";
import { Tooltip, Text, ButtonFilled } from "../src";
import { IconEye } from "../src/components/Icons";

export default {
  title: "Athletic/Tooltip",
  component: Tooltip,
  parameters: {
    design: [
      {
        name: 'Guidelines',
        type: 'link',
        url: 'https://www.figma.com/file/BxQA6qbzRwjSA2AXWnO0f9/Components?node-id=3105%3A14386',
        label: 'We need your help! Please add a page in Figma using the template and update this link.',
      },
    ],
  }
};

export const BasicUsage = args => (
  <Text color="subtle" fontSize={4} fontWeight="bold">
    My large <Tooltip {...args} tip="Really Bold">bold</Tooltip> grey text
  </Text>
);
BasicUsage.argTypes = {
  tip: { control: { disable: true } },
};

export const ClickMode = () => (
  <Text>
    <Tooltip
      tip={
        <Text color="">
          <IconEye display="inline" /> See You
        </Text>
      }
      mode="click"
      placement="right"
    >
      Click ME!
    </Tooltip>
  </Text>
);
ClickMode.parameters = { controls: { hideNoControlsWarning: true } };

export const AdvancedUsage = args => (
  <Tooltip tip="This is a tooltip">
    {({ ref, getEventProps }) => (
      <ButtonFilled color="accent" innerRef={ref} {...getEventProps()}>
        Testing
      </ButtonFilled>
    )}
  </Tooltip>
);
AdvancedUsage.parameters = { controls: { hideNoControlsWarning: true } };
