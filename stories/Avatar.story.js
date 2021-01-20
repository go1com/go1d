import React from "react";
import { Avatar } from "../src";

export default {
  title: "Original Go1d/Avatar",
  component: Avatar,
};

export const AvatarWithAnImage = args => (
  <Avatar {...args} src="https://i.imgur.com/Ee55uvc.jpg" fullName="Leslie Knope" />
);

AvatarWithAnImage.storyName = "Avatar with an image";

export const AvatarWithoutAnImage = args => <Avatar fullName="Leslie Knope" />;

AvatarWithoutAnImage.storyName = "Avatar without an image";

export const AvatarWithoutAnImageAndName = args => <Avatar />;

AvatarWithoutAnImageAndName.storyName = "Avatar without an image and name";

export const AvatarWithADifferentSize = args => (
  <Avatar fullName="Willy Wonka" size={4} />
);

AvatarWithADifferentSize.storyName = "Avatar with a different size";

export const AvatarWithDifferentColors = args => (
  <Avatar
    fullName="Leslie Knope"
    backgroundColor="subtle"
    color="background"
    size={4}
  />
);

AvatarWithDifferentColors.storyName = "Avatar with different colors";
