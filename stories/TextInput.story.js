import React from "react";
import { TextInput, ButtonMinimal } from "../src";
import { IconCross, IconSearch } from "../src/components/Icons";

export default {
  title: "Original Go1d/TextInput",
  component: TextInput,
};

export const BasicTextInput = () => (
  <TextInput id="blank" placeholder="Blank" />
);

BasicTextInput.storyName = "Basic TextInput";

export const TextInputWithSmallSize = () => (
  <TextInput id="Small" size="sm" value="Small" />
);

TextInputWithSmallSize.storyName = "TextInput with Small Size";

export const TextInputWithSmallSizeAndFloatingLabel = () => (
  <TextInput
    id="Small"
    size="sm"
    floating={true}
    label="Small"
    value="Small Size"
  />
);

TextInputWithSmallSizeAndFloatingLabel.storyName = "TextInput with Small Size and floating label";

export const TextInputMediumSize = () => (
  <TextInput id="Medium" size="md" value="Medium" />
);

TextInputMediumSize.storyName = "TextInput Medium Size";

export const TextInputWithMediumSizeAndFloatingLabel = () => (
  <TextInput
    id="Medium"
    size="md"
    floating={true}
    placeholder="Medium"
    value="Medium Size"
  />
);

TextInputWithMediumSizeAndFloatingLabel.storyName = "TextInput with Medium Size and floating label";

export const TextInputLargeSize = () => (
  <TextInput id="Large" size="lg" value="Large" />
);

TextInputLargeSize.storyName = "TextInput Large Size";

export const TextInputWithLargeSizeAndFloatingLabel = () => (
  <TextInput
    id="Large"
    size="lg"
    floating={true}
    label="Large"
    value="Large Size"
  />
);

TextInputWithLargeSizeAndFloatingLabel.storyName = "TextInput with Large Size and floating label";

export const TextInputWithIcon = () => (
  <TextInput id="search" icon={IconSearch} placeholder="Type here to Search" />
);

TextInputWithIcon.storyName = "TextInput with Icon";

export const TextInputWithIconAndFloatingLabel = () => (
  <TextInput
    id="search"
    icon={IconSearch}
    floating={true}
    label="Medium"
    value="Medium Size"
  />
);

TextInputWithIconAndFloatingLabel.storyName = "TextInput with Icon and floating label";

export const TextInputWithRightNode = () => (
  <TextInput
    id="clear"
    value="Type here to Search"
    suffixNode={<ButtonMinimal icon={IconCross} color="accent" />}
  />
);

TextInputWithRightNode.storyName = "TextInput with RightNode";

export const TextInputWithRightNodeAndFloatingLabel = () => (
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
