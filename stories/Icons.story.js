import React from "react";
import { View, Text } from "../src/";
import { IconGo1Logo, IconSuccess } from '../src/components/Icons';
import AllIcons from '../docs/_src/components/AllIcons.js';

export default {
  title: "Athletic/Icons",
  parameters: {
    docs: {
      description: {
        component: 'Each `<Icon* />` component uses the `<IconBase />` component.'
      }
    }
  },
  component: IconSuccess,
};

export const Main = args => (
  <React.Fragment>
    <View>
      <IconSuccess {...args} />
    </View>
  </React.Fragment>
);

export const Size = args => (
  <React.Fragment>
    <View>
      <IconSuccess size={4}/>
    </View>
  </React.Fragment>
);

Size.storyName = "Icon with size";

export const Color = args => (
  <React.Fragment>
    <View>
      <IconGo1Logo color="accent" size={7} />
    </View>
  </React.Fragment>
);

Color.storyName = "Icon with color";

export const AllIconsStory = args => (
  <React.Fragment>
    <View>
      <Text>This is an exhaustive list of all icons currently in the system:</Text>
      <AllIcons />
    </View>
  </React.Fragment>
);

AllIconsStory.storyName = "All Icons";
