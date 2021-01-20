import React from "react";
import { Tooltip, Text, ButtonFilled } from "../src";
import { IconEye } from "../src/components/Icons";

export default {
  title: "Original Go1d/Tooltip",
  component: Tooltip,
};

export const BasicUsage = args => (
  <Text color="subtle" fontSize={4} fontWeight="bold">
    My large <Tooltip {...args} tip="Really Bold">bold</Tooltip> grey text
  </Text>
);

export const ClickMode = args => (
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

export const AdvancedUsage = args => (
  <Tooltip tip="This is a tooltip">
    {({ ref, getEventProps }) => (
      <ButtonFilled color="accent" innerRef={ref} {...getEventProps()}>
        Testing
      </ButtonFilled>
    )}
  </Tooltip>
);
