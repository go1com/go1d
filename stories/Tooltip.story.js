import React from "react";
import { Tooltip, Text, Icon, ButtonFilled } from "../src";

export default {
  title: "Original Go1d/Tooltip",
};

export const BasicUsage = () => (
  <Text color="subtle" fontSize={4} fontWeight="bold">
    My large <Tooltip tip="Really Bold">bold</Tooltip> grey text
  </Text>
);

export const ClickMode = () => (
  <Text>
    <Tooltip
      tip={
        <Text color="">
          <EyeIcon display="inline" /> See You
        </Text>
      }
      mode="click"
      placement="right"
    >
      Click ME!
    </Tooltip>
  </Text>
);

export const AdvancedUsage = () => (
  <Tooltip tip="This is a tooltip">
    {({ ref, getEventProps }) => (
      <ButtonFilled color="accent" innerRef={ref} {...getEventProps()}>
        Testing
      </ButtonFilled>
    )}
  </Tooltip>
);
