import React from "react";
import { PasswordInput } from "../src";

export default {
  title: "Original Go1d/PasswordInput",
  component: PasswordInput,
};

export const BasicPasswordInput = args => (
  <PasswordInput {...args} id="Password" placeholder="Pasword" />
);

export const PasswordInputSizes = args => (
  <React.Fragment>
    <PasswordInput id="Small" size="sm" value="Small" />
    <br />
    <PasswordInput id="Medium" size="md" value="Medium" />
    <br />
    <PasswordInput id="Large" size="lg" value="Large" />
  </React.Fragment>
);

export const PasswordInputWithNoToggle = args => (
  <PasswordInput id="noToggle" toggleableDisplay={false} />
);

PasswordInputWithNoToggle.storyName = "Password Input with no toggle";

export const DisabledPasswordInput = args => (
  <PasswordInput id="Disabled" disabled={true} />
);
