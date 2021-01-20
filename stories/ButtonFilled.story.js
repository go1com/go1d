import React from "react";
import { ButtonFilled } from "../src";

export default {
  title: "Original Go1d/ButtonFilled",
  component: ButtonFilled,
};

export const WithText = () => (
  <ButtonFilled>This is a filled button</ButtonFilled>
);

WithText.storyName = "with text";

export const WithSomeEmoji = () => (
  <ButtonFilled>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </ButtonFilled>
);

WithSomeEmoji.storyName = "with some emoji";
