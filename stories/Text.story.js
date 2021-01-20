import React from "react";
import { Text } from "../src";

export default {
  title: "Original Go1d/Text",
  component: Text,
};

export const Base = () => (
  <Text
    color="subtle"
    fontSize={4}
    fontWeight="semibold"
    lineHeight="paragraph"
  >
    My large semibold subtle text
  </Text>
);
