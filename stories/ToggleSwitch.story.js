import React from "react";
import { ToggleSwitch, View } from "../src";

export default {
  title: "Athletic/ToggleSwitch",
  component: ToggleSwitch,
  argTypes: {
    value: {
      defaultValue: true,
      control: { type: 'boolean' }
    },
  },
};

export const ToggleWithNoProps = args => <ToggleSwitch {...args} />;
ToggleWithNoProps.storyName = "Toggle with no props";
ToggleWithNoProps.argTypes = {
  value: { defaultValue: true, },
};

export const ToggleWithDefaultValueProps = () => (
  <ToggleSwitch defaultValue={true} />
);
ToggleWithDefaultValueProps.storyName = "Toggle with default value props";
ToggleWithDefaultValueProps.parameters = { controls: { hideNoControlsWarning: true } };

export const ToggleWithADifferentSize = () => (
  <View flexDirection="row" alignItems="baseline">
    <ToggleSwitch defaultValue={true} size="sm" marginRight={2} />
    <ToggleSwitch defaultValue={false} size="md" marginRight={2} />
    <ToggleSwitch defaultValue={true} size="lg" marginRight={2} />
  </View>
);
ToggleWithADifferentSize.storyName = "Toggle with a different size";
ToggleWithADifferentSize.parameters = { controls: { hideNoControlsWarning: true } };

export const ToggleWithDisabledProps = () => (
  <View flexDirection="row">
    <ToggleSwitch
      defaultValue={false}
      size="md"
      disabled={true}
      marginRight={2}
    />
    <ToggleSwitch
      defaultValue={true}
      size="md"
      disabled={true}
      marginRight={2}
    />
  </View>
);
ToggleWithDisabledProps.storyName = "Toggle with disabled props";
ToggleWithDisabledProps.parameters = { controls: { hideNoControlsWarning: true } };

export const ToggleWithALabelProps = () => (
  <View flexDirection="column" alignItems="baseline" justifyContent="center">
    <ToggleSwitch
      defaultValue={true}
      size="sm"
      label="Toggle switch"
      marginRight={2}
    />
    <ToggleSwitch
      defaultValue={false}
      size="md"
      label="Toggle switch"
      marginRight={2}
    />
    <ToggleSwitch
      defaultValue={true}
      size="lg"
      label="Toggle switch"
      marginRight={2}
    />
  </View>
);
ToggleWithALabelProps.storyName = "Toggle with a label props";
ToggleWithALabelProps.parameters = { controls: { hideNoControlsWarning: true } };

export const ToggleWithALabelAndDescriptionProps = () => (
  <>
    <ToggleSwitch
      defaultValue={true}
      size="sm"
      label="Toggle switch"
      description="This is helper text"
      marginRight={2}
    />
    <ToggleSwitch
      defaultValue={false}
      size="md"
      label="Toggle switch"
      description="This is helper text"
      marginRight={2}
    />
    <ToggleSwitch
      defaultValue={true}
      size="lg"
      label="Toggle switch"
      description="This is helper text"
      marginRight={2}
    />
  </>
);
ToggleWithALabelAndDescriptionProps.storyName = "Toggle with a label and description props";
ToggleWithALabelAndDescriptionProps.parameters = { controls: { hideNoControlsWarning: true } };

export const ToggleWithALabelDescriptionReverseProps = () => (
  <View width="300px">
    <ToggleSwitch
      defaultValue={true}
      size="sm"
      label="Toggle switch"
      description="This is helper text"
      direction="row-reverse"
      marginRight={2}
    />
    <ToggleSwitch
      defaultValue={false}
      size="md"
      label="Toggle switch"
      description="This is helper text"
      direction="row-reverse"
      marginRight={2}
    />
    <ToggleSwitch
      defaultValue={true}
      size="lg"
      label="Toggle switch"
      description="This is helper text"
      direction="row-reverse"
      marginRight={2}
    />
  </View>
);
ToggleWithALabelDescriptionReverseProps.storyName = "Toggle with a label, description, reverse props";
ToggleWithALabelDescriptionReverseProps.parameters = { controls: { hideNoControlsWarning: true } };

export const ToggleWithALabelInlineProps = () => (
  <>
    <ToggleSwitch
      defaultValue={true}
      size="sm"
      label="Toggle switch"
      inline={true}
      marginRight={2}
    />
    <ToggleSwitch
      defaultValue={false}
      size="md"
      label="Toggle switch"
      inline={true}
      marginRight={2}
    />
    <ToggleSwitch
      defaultValue={true}
      size="lg"
      label="Toggle switch"
      inline={true}
      marginRight={2}
    />
  </>
);
ToggleWithALabelInlineProps.storyName = "Toggle with a label, inline props";
ToggleWithALabelInlineProps.parameters = { controls: { hideNoControlsWarning: true } };

export const ToggleWithAllProps = () => (
  <>
    <ToggleSwitch
      defaultValue={true}
      size="sm"
      label="Toggle switch"
      description="This is helper text"
      inline={true}
      direction="row-reverse"
      marginRight={2}
    />
    <ToggleSwitch
      defaultValue={false}
      size="md"
      label="Toggle switch"
      description="This is helper text"
      inline={true}
      direction="row-reverse"
      marginRight={2}
    />
    <ToggleSwitch
      defaultValue={true}
      size="lg"
      label="Toggle switch"
      description="This is helper text"
      inline={true}
      direction="row-reverse"
      marginRight={2}
    />
  </>
);
ToggleWithAllProps.storyName = "Toggle with all props";
ToggleWithAllProps.parameters = { controls: { hideNoControlsWarning: true } };

