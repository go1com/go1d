import React from "react";
import { ToggleSwitch, View } from "../src";

export default {
  title: "Original Go1d/ToggleSwitch",
  component: ToggleSwitch,
};

export const ToggleWithNoProps = () => <ToggleSwitch />;

ToggleWithNoProps.storyName = "Toggle with no props";

export const ToggleWithDefaultValueProps = () => (
  <ToggleSwitch defaultValue={true} />
);

ToggleWithDefaultValueProps.storyName = "Toggle with default value props";

export const ToggleWithADifferentSize = () => (
  <View flexDirection="row" alignItems="baseline">
    <ToggleSwitch defaultValue={true} size="sm" marginRight={2} />
    <ToggleSwitch defaultValue={false} size="md" marginRight={2} />
    <ToggleSwitch defaultValue={true} size="lg" marginRight={2} />
  </View>
);

ToggleWithADifferentSize.storyName = "Toggle with a different size";

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
