import React from "react";
import { Stepper, ButtonMinimal } from "../src";

export default {
  title: "Original Go1d/Stepper",
  component: Stepper,
};

export const BasicStepper = args => <Stepper {...args} id="stepper" />;

export const StepperWithStepIncrement = args => (
  <Stepper id="stepper" stepIncrement={5} />
);

StepperWithStepIncrement.storyName = "Stepper with step increment";

export const StepperWithMinNum = args => <Stepper id="stepper" minNumber={0} />;

StepperWithMinNum.storyName = "Stepper with min num";

export const StepperWithMaxNum = args => <Stepper id="stepper" maxNumber={5} />;

StepperWithMaxNum.storyName = "Stepper with max num";
