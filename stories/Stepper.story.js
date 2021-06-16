import React from "react";
import { Stepper, ButtonMinimal } from "../src";

export default {
  title: "Athletic/Stepper",
  component: Stepper,
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

export const BasicStepper = args => <Stepper {...args} id="stepper" />;

export const StepperWithStepIncrement = args => (
  <Stepper id="stepper" stepIncrement={5} />
);
StepperWithStepIncrement.storyName = "Stepper with step increment";

export const StepperWithMinNum = args => <Stepper id="stepper" minNumber={0} />;
StepperWithMinNum.storyName = "Stepper with min num";

export const StepperWithMaxNum = args => <Stepper id="stepper" maxNumber={5} />;
StepperWithMaxNum.storyName = "Stepper with max num";
