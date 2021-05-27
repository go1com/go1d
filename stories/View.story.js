import React from "react";
import { View, Text, Column, Row } from "../src";

export default {
  title: "Athletic/View",
  component: View,
};

export const BasicUsage = args => (
  <View {...args}>
    <Text>My View</Text>
  </View>
);

export const ColumnLayout = args => (
  <Column {...args}>
    <View backgroundColor="successMid" padding={3}>
      <Text>Apple</Text>
    </View>
    <View backgroundColor="successMid" padding={3} marginTop={3}>
      <Text>Banana</Text>
    </View>
    <View backgroundColor="successMid" padding={3} marginTop={3}>
      <Text>Pineapple</Text>
    </View>
  </Column>
);

export const RowLayout = args => (
  <Row {...args}>
    <View backgroundColor="successMid" padding={3}>
      <Text>Apple</Text>
    </View>
    <View backgroundColor="successMid" padding={3} marginLeft={3}>
      <Text>Banana</Text>
    </View>
    <View backgroundColor="successMid" padding={3} marginLeft={3}>
      <Text>Pineapple</Text>
    </View>
  </Row>
);

export const ResponsiveExamples = args => (
  <React.Fragment>
    <View flexDirection="row" flexWrap="wrap" {...args}>
      <View width={[1 / 3, 1 / 6, 1 / 12]}>
        <Text>A</Text>
      </View>
      <View width={[1 / 3, 1 / 6, 1 / 12]}>
        <Text>B</Text>
      </View>
      <View width={[1 / 3, 1 / 6, 1 / 12]}>
        <Text>C</Text>
      </View>
      <View width={[1 / 3, 1 / 6, 1 / 12]}>
        <Text>D</Text>
      </View>
      <View width={[1 / 3, 1 / 6, 1 / 12]}>
        <Text>A</Text>
      </View>
      <View width={[1 / 3, 1 / 6, 1 / 12]}>
        <Text>B</Text>
      </View>
      <View width={[1 / 3, 1 / 6, 1 / 12]}>
        <Text>C</Text>
      </View>
      <View width={[1 / 3, 1 / 6, 1 / 12]}>
        <Text>D</Text>
      </View>
      <View width={[1 / 3, 1 / 6, 1 / 12]}>
        <Text>A</Text>
      </View>
      <View width={[1 / 3, 1 / 6, 1 / 12]}>
        <Text>B</Text>
      </View>
      <View width={[1 / 3, 1 / 6, 1 / 12]}>
        <Text>C</Text>
      </View>
      <View width={[1 / 3, 1 / 6, 1 / 12]}>
        <Text>D</Text>
      </View>
    </View>
    <View flexDirection="row" flexWrap="wrap">
      <View width={[1, 1 / 2, 1 / 4]}>
        <Text>A</Text>
      </View>
      <View width={[1, 1 / 2, 1 / 4]}>
        <Text>B</Text>
      </View>
      <View width={[1, 1 / 2, 1 / 4]}>
        <Text>C</Text>
      </View>
      <View width={[1, 1 / 2, 1 / 4]}>
        <Text>D</Text>
      </View>
    </View>
  </React.Fragment>
);
