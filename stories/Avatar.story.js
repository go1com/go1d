import React from "react";
import { Avatar, Link } from "../src";
import { IconAudio } from "../src/components/Icons";

export default {
  title: "Athletic/Avatar",
  component: Avatar,
  argTypes: {
    scaleSize: {
      defaultValue: 3,
      control: { type: 'range', min: 1, max: 3 }
    },
  },

};

export const Basic = args => (
  <Avatar {...args} />
);

Basic.argTypes = {
  src: { defaultValue: "https://i.imgur.com/Ee55uvc.jpg" },
  fullName: { defaultValue: "Leslie Knope" },
  icon: { defaultValue: null },
  skeleton: { defaultValue: false },
  placeHolderVisibilityType: { defaultValue: 'text' },
};

export const AvatarSingleWithOutImageUrl = args => (
  <Avatar {...args} fullName="Leslie Knope" />
);

AvatarSingleWithOutImageUrl.storyName = "Without thumbnail url";
AvatarSingleWithOutImageUrl.parameters = { controls: { hideNoControlsWarning: true } };

export const AvatarIconPlaceHolder = args => (
  <Avatar {...args} icon={IconAudio} />
);

AvatarIconPlaceHolder.storyName = "Icon placeholder type";
AvatarIconPlaceHolder.parameters = { controls: { hideNoControlsWarning: true } };

export const AvatarWithLink = args => (
  <Link href="https://go1.com">
    <Avatar {...args} fullName="Leslie Knope" />
  </Link>
);

AvatarWithLink.storyName = "With link";
AvatarWithLink.parameters = { controls: { hideNoControlsWarning: true } };

export const AvatarSkeleton = args => (
  <Avatar {...args} skeleton />
);

AvatarSkeleton.storyName = "Skeleton";
AvatarSkeleton.parameters = { controls: { hideNoControlsWarning: true } };

