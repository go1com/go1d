import React from "react";
import { TextInput, ButtonMinimal } from "../src";
import { IconCross, IconSearch } from "../src/components/Icons";

export default {
  title: "Athletic/TextInput",
  component: TextInput,
};

export const BasicTextInput = args => (
  <TextInput {...args} />
);
BasicTextInput.argTypes = {
  id: { defaultValue: "blank" },
  placeholder: { defaultValue: "Blank" },
};
BasicTextInput.storyName = "Basic TextInput";

// Small size
export const TextInputWithSmallSize = () => (
  <TextInput id="TextInputWithSmallSize" size="sm" placeholder="Small" />
);
TextInputWithSmallSize.storyName = "TextInput with Small Size";
TextInputWithSmallSize.parameters = { controls: { hideNoControlsWarning: true } };

export const TextInputWithSmallSizeAndFloatingLabel = () => (
  <TextInput
    id="TextInputWithSmallSizeAndFloatingLabel"
    size="sm"
    floating={true}
    label="Small"
  />
);
TextInputWithSmallSizeAndFloatingLabel.storyName = "TextInput with Small Size and floating label";
TextInputWithSmallSizeAndFloatingLabel.parameters = { controls: { hideNoControlsWarning: true } };

export const TextInputSmallSizeWithFloatingLabelAndPlaceholder = args => (
  <TextInput
    id="TextInputSmallSizeWithFloatingLabelAndPlaceholder"
    size="sm"
    floating={true}
    label="Small"
    defaultValue=""
    placeholder="small size"
  />
);

// Medium size
export const TextInputMediumSize = () => (
  <TextInput size="md" placeholder="medium size" />
);
TextInputMediumSize.storyName = "TextInput Medium Size";
TextInputMediumSize.parameters = { controls: { hideNoControlsWarning: true } };

export const TextInputWithMediumSizeAndFloatingLabel = () => (
  <TextInput
    id="TextInputWithMediumSizeAndFloatingLabel"
    size="md"
    floating={true}
    label="Medium"
  />
);
TextInputWithMediumSizeAndFloatingLabel.storyName = "TextInput with Medium Size and floating label";
TextInputWithMediumSizeAndFloatingLabel.parameters = { controls: { hideNoControlsWarning: true } };

export const TextInputMediumSizeWithFloatingLabelAndPlaceholder = () => (
  <TextInput
    id="TextInputMediumSizeWithFloatingLabelAndPlaceholder"
    size="md"
    floating={true}
    label="Medium"
    placeholder="medium size"
  />
);
TextInputMediumSizeWithFloatingLabelAndPlaceholder.storyName = "TextInput with Medium Size and floating label and placeholder";
TextInputMediumSizeWithFloatingLabelAndPlaceholder.parameters = { controls: { hideNoControlsWarning: true } };

// Large size
export const TextInputLargeSize = args => (
  <TextInput size="lg" placeholder="Large" />
);
TextInputLargeSize.storyName = "TextInput Large Size";
TextInputLargeSize.parameters = { controls: { hideNoControlsWarning: true } };

export const TextInputWithLargeSizeAndFloatingLabel = () => (
  <TextInput
    id="TextInputWithLargeSizeAndFloatingLabel"
    size="lg"
    floating={true}
    label="Large"
  />
);
TextInputWithLargeSizeAndFloatingLabel.storyName = "TextInput with Large Size and floating label";
TextInputWithLargeSizeAndFloatingLabel.parameters = { controls: { hideNoControlsWarning: true } };

export const TextInputLargeSizeWithFloatingLabelAndPlaceholder = args => (
  <TextInput
    id="TextInputLargeSizeWithFloatingLabelAndPlaceholder"
    size="lg"
    floating={true}
    label="Large"
    placeholder="large size"
  />
);
TextInputLargeSizeWithFloatingLabelAndPlaceholder.storyName = "TextInput with Large Size and floating label and placeholder";
TextInputLargeSizeWithFloatingLabelAndPlaceholder.parameters = { controls: { hideNoControlsWarning: true } };

// with Icons
export const TextInputWithIcon = args => (
  <TextInput id="textInputWithIcon" icon={IconSearch} placeholder="Type here to Search" defaultValue="" />
);
TextInputWithIcon.storyName = "TextInput with Icon";
TextInputWithIcon.parameters = { controls: { hideNoControlsWarning: true } };

export const TextInputWithIconAndFloatingLabel = () => (
  <TextInput
    id="textInputWithIconAndFloatingLabel"
    icon={IconSearch}
    floating={true}
    label="Medium with icon"
    placeholder="Medium Size"
  />
);
TextInputWithIconAndFloatingLabel.storyName = "TextInput with Icon and floating label";
TextInputWithIconAndFloatingLabel.parameters = { controls: { hideNoControlsWarning: true } };

export const TextInputWithRightNode = () => (
  <TextInput
    id="textInputWithRightNode"
    placeholder="Type here to Search"
    suffixNode={<ButtonMinimal icon={IconCross} color="accent" />}
  />
);
TextInputWithRightNode.storyName = "TextInput with RightNode";
TextInputWithRightNode.parameters = { controls: { hideNoControlsWarning: true } };

export const TextInputWithRightNodeAndFloatingLabel = () => (
  <TextInput
    id="textInputWithRightNodeAndFloatingLabel"
    size="lg"
    floating={true}
    label="Large"
    suffixNode={<ButtonMinimal size="lg" icon={IconCross} color="accent" />}
  />
);
TextInputWithRightNodeAndFloatingLabel.storyName = "TextInput with RightNode and floating label";
TextInputWithRightNodeAndFloatingLabel.parameters = { controls: { hideNoControlsWarning: true } };

