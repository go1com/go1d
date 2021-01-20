import React from "react";
import { ToggleSwitch, View } from "../src";

export default {
  title: "Original Go1d/ToggleSwitch",
};

export const ToggleWithNoProps = () => <ToggleSwitch />;

ToggleWithNoProps.story = {
  name: "Toggle with no props",
};

export const ToggleWithDefaultValueProps = () => (
  <ToggleSwitch defaultValue={true} />
);

ToggleWithDefaultValueProps.story = {
  name: "Toggle with default value props",
};

export const ToggleWithADifferentSize = () => (
  <View flexDirection="row" alignItems="baseline">
    <ToggleSwitch defaultValue={true} size="sm" marginRight={2} />
    <ToggleSwitch defaultValue={false} size="md" marginRight={2} />
    <ToggleSwitch defaultValue={true} size="lg" marginRight={2} />
  </View>
);

ToggleWithADifferentSize.story = {
  name: "Toggle with a different size",
};

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

ToggleWithDisabledProps.story = {
  name: "Toggle with disabled props",
};

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

ToggleWithALabelProps.story = {
  name: "Toggle with a label props",
};

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

ToggleWithALabelAndDescriptionProps.story = {
  name: "Toggle with a label and description props",
};

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

ToggleWithALabelDescriptionReverseProps.story = {
  name: "Toggle with a label, description, reverse props",
};

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

ToggleWithALabelInlineProps.story = {
  name: "Toggle with a label, inline props",
};

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

ToggleWithAllProps.story = {
  name: "Toggle with all props",
};
