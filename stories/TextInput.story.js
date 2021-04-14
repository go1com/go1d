import React from "react";
import { TextInput, ButtonMinimal } from "../src";
import hideInheritedProps from '../.storybook/hideInheritedProps.js'
import { IconCross, IconSearch } from "../src/components/Icons";

let argTypes = hideInheritedProps({}, TextInput);

export default {
  title: "Athletic/TextInput",
  argTypes: argTypes,
  component: TextInput,
};

export const BasicTextInput = args => (
  <TextInput {...args} id="blank" placeholder="Blank" />
);

BasicTextInput.storyName = "Basic TextInput";

// Small size
export const TextInputWithSmallSize = args => (
  <TextInput id="TextInputWithSmallSize" size="sm" placeholder="Small" />
);

TextInputWithSmallSize.storyName = "TextInput with Small Size";

export const TextInputWithSmallSizeAndFloatingLabel = args => (
  <TextInput
    id="TextInputWithSmallSizeAndFloatingLabel"
    size="sm"
    floating={true}
    label="Small"
  />
);
TextInputWithSmallSizeAndFloatingLabel.storyName = "TextInput with Small Size and floating label";

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
export const TextInputMediumSize = args => (
  <TextInput size="md" placeholder="medium size" />
);
TextInputMediumSize.storyName = "TextInput Medium Size";

export const TextInputWithMediumSizeAndFloatingLabel = args => (
  <TextInput
    id="TextInputWithMediumSizeAndFloatingLabel"
    size="md"
    floating={true}
    label="Medium"
  />
);
TextInputWithMediumSizeAndFloatingLabel.storyName = "TextInput with Medium Size and floating label";

export const TextInputMediumSizeWithFloatingLabelAndPlaceholder = args => (
  <TextInput
    id="TextInputMediumSizeWithFloatingLabelAndPlaceholder"
    size="md"
    floating={true}
    label="Medium"
    placeholder="medium size"
  />
);


// Large size
export const TextInputLargeSize = args => (
  <TextInput size="lg" placeholder="Large" />
);
TextInputLargeSize.storyName = "TextInput Large Size";

export const TextInputWithLargeSizeAndFloatingLabel = args => (
  <TextInput
    id="TextInputWithLargeSizeAndFloatingLabel"
    size="lg"
    floating={true}
    label="Large"
  />
);
TextInputWithLargeSizeAndFloatingLabel.storyName = "TextInput with Large Size and floating label";

export const TextInputLargeSizeWithFloatingLabelAndPlaceholder = args => (
  <TextInput
    id="TextInputLargeSizeWithFloatingLabelAndPlaceholder"
    size="lg"
    floating={true}
    label="Large"
    placeholder="large size"
  />
);

// with Icons
export const TextInputWithIcon = args => (
  <TextInput id="textInputWithIcon" icon={IconSearch} placeholder="Type here to Search" defaultValue="" />
);

TextInputWithIcon.storyName = "TextInput with Icon";

export const TextInputWithIconAndFloatingLabel = args => (
  <TextInput
    id="textInputWithIconAndFloatingLabel"
    icon={IconSearch}
    floating={true}
    label="Medium with icon"
    placeholder="Medium Size"
  />
);

TextInputWithIconAndFloatingLabel.storyName = "TextInput with Icon and floating label";

export const TextInputWithRightNode = args => (
  <TextInput
    id="textInputWithRightNode"
    placeholder="Type here to Search"
    suffixNode={<ButtonMinimal icon={IconCross} color="accent" />}
  />
);
TextInputWithRightNode.storyName = "TextInput with RightNode";

export const TextInputWithRightNodeAndFloatingLabel = args => (
  <TextInput
    id="textInputWithRightNodeAndFloatingLabel"
    size="lg"
    floating={true}
    label="Large"
    suffixNode={<ButtonMinimal size="lg" icon={IconCross} color="accent" />}
  />
);
