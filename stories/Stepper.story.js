import React from "react";
import { Stepper, View } from "../src";

export default {
  title: "Athletic/Stepper",
  component: Stepper,
  parameters: {
    design: [
      {
        name: 'Guidelines',
        type: 'link',
        url: 'https://www.figma.com/file/BxQA6qbzRwjSA2AXWnO0f9/Components?node-id=4361%3A20882',
        label: 'See Stepper designs in Figma',
      },
    ],
  }
};

const Template = (args) => <View width={220}><Stepper id="stepper" {...args} /></View>;

export const Main = Template.bind({});
Main.args = {
  id: "stepper1",
  allowDecimal: true,
  defaultValue: 1.25,
  maxNumber: 6,
  minNumber: -6,
  stepIncrement: 0.25,
  unitLabel: "Hours",
};

export const StepperWithValueSupplied = Template.bind({});
StepperWithValueSupplied.storyName = "Stepper with value supplied";
StepperWithValueSupplied.args = {
  id: "stepper2",
  value: 0,
}

export const StepperWithDefaultValue = Template.bind({});
StepperWithDefaultValue.storyName = "Stepper with default value";
StepperWithDefaultValue.args = {
  id: "stepper3",
  defaultValue: 3,
}

export const StepperWithStepIncrement = Template.bind({});
StepperWithStepIncrement.storyName = "Stepper with step increment";
StepperWithStepIncrement.args = {
  id: "stepper4",
  stepIncrement: 5,
}

export const StepperWithMinNum = Template.bind({});
StepperWithMinNum.storyName = "Stepper with min num";
StepperWithMinNum.args = {
  id: "stepper5",
  minNumber: 0,
}

export const StepperWithMaxNum = Template.bind({});
StepperWithMaxNum.storyName = "Stepper with max num";
StepperWithMaxNum.args = {
  id: "stepper6",
  maxNumber: 5,
}

