import React from "react";
import { ButtonFilled } from "../src";

export default {
  title: "Original Go1d/ButtonFilled",
};

export const WithText = () => (
  <ButtonFilled>This is a filled button</ButtonFilled>
);

WithText.story = {
  name: "with text",
};

export const WithSomeEmoji = () => (
  <ButtonFilled>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </ButtonFilled>
);

WithSomeEmoji.story = {
  name: "with some emoji",
};
