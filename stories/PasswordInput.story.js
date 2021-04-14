import React from "react";
import { PasswordInput } from "../src";

export default {
  title: "Athletic/PasswordInput",
  component: PasswordInput,
};

export const BasicPasswordInput = args => (
  <PasswordInput {...args} id="Password" placeholder="Password" />
);

export const PasswordInputSizes = args => (
  <PasswordInput {...args} id="PasswordInputSizes" size="sm" value="Small" />
);

export const PasswordInputWithNoToggle = args => (
  <PasswordInput id="noToggle" toggleableDisplay={false} />
);
PasswordInputWithNoToggle.storyName = "Password Input with no toggle";

export const DisabledPasswordInput = args => (
  <PasswordInput id="Disabled" disabled={true} />
);

export const PasswordInputWithVisibilityIcon = args => (
  <PasswordInput id="PasswordInputWithVisibilityIcon" toggleableDisplay={true} useIconVisibility={true} />
);
