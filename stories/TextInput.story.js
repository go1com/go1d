import React from "react";
import { TextInput, ButtonMinimal } from "../src";
import hideInheritedProps from '../.storybook/hideInheritedProps.js'
import { IconCross, IconSearch } from "../src/components/Icons";

let argTypes = hideInheritedProps({}, TextInput);

export default {
  title: "Original Go1d/TextInput",
  argTypes: argTypes,
  component: TextInput,
};

export const BasicTextInput = args => (
  <TextInput {...args} id="blank" placeholder="Blank" />
);

BasicTextInput.storyName = "Basic TextInput";

export const TextInputWithSmallSize = args => (
  <TextInput id="Small" size="sm" value="Small" />
);

TextInputWithSmallSize.storyName = "TextInput with Small Size";

export const TextInputWithSmallSizeAndFloatingLabel = args => (
  <TextInput
    id="Small"
    size="sm"
    floating={true}
    label="Small"
    value="Small Size"
  />
);

TextInputWithSmallSizeAndFloatingLabel.storyName = "TextInput with Small Size and floating label";

export const TextInputMediumSize = args => (
  <TextInput id="Medium" size="md" value="Medium" />
);

TextInputMediumSize.storyName = "TextInput Medium Size";

export const TextInputWithMediumSizeAndFloatingLabel = args => (
  <TextInput
    id="Medium"
    size="md"
    floating={true}
    placeholder="Medium"
    value="Medium Size"
  />
);

TextInputWithMediumSizeAndFloatingLabel.storyName = "TextInput with Medium Size and floating label";

export const TextInputLargeSize = args => (
  <TextInput id="Large" size="lg" value="Large" />
);

TextInputLargeSize.storyName = "TextInput Large Size";

export const TextInputWithLargeSizeAndFloatingLabel = args => (
  <TextInput
    id="Large"
    size="lg"
    floating={true}
    label="Large"
    value="Large Size"
  />
);

TextInputWithLargeSizeAndFloatingLabel.storyName = "TextInput with Large Size and floating label";

export const TextInputWithIcon = args => (
  <TextInput id="search" icon={IconSearch} placeholder="Type here to Search" />
);

TextInputWithIcon.storyName = "TextInput with Icon";

export const TextInputWithIconAndFloatingLabel = args => (
  <TextInput
    id="search"
    icon={IconSearch}
    floating={true}
    label="Medium"
    value="Medium Size"
  />
);

TextInputWithIconAndFloatingLabel.storyName = "TextInput with Icon and floating label";

export const TextInputWithRightNode = args => (
  <TextInput
    id="clear"
    value="Type here to Search"
    suffixNode={<ButtonMinimal icon={IconCross} color="accent" />}
  />
);

TextInputWithRightNode.storyName = "TextInput with RightNode";

export const TextInputWithRightNodeAndFloatingLabel = args => (
  <TextInput
    id="clear"
    size="lg"
    floating={true}
    label="Large"
    value="Large Size"
    suffixNode={<ButtonMinimal size="lg" icon={IconCross} color="accent" />}
  />
);

TextInputWithRightNodeAndFloatingLabel.storyName = "TextInput with RightNode and floating label";
