import React from "react";
import { PasswordInput } from "../src";

export default {
  title: "Original Go1d/PasswordInput",
  component: PasswordInput,
};

export const BasicPasswordInput = () => (
  <PasswordInput id="Password" placeholder="Pasword" />
);

export const PasswordInputSizes = () => (
  <React.Fragment>
    <PasswordInput id="Small" size="sm" value="Small" />
    <br />
    <PasswordInput id="Medium" size="md" value="Medium" />
    <br />
    <PasswordInput id="Large" size="lg" value="Large" />
  </React.Fragment>
);

export const PasswordInputWithNoToggle = () => (
  <PasswordInput id="noToggle" toggleableDisplay={false} />
);

PasswordInputWithNoToggle.storyName = "Password Input with no toggle";

export const DisabledPasswordInput = () => (
  <PasswordInput id="Disabled" disabled={true} />
);
