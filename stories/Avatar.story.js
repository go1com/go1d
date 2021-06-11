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

export const AvatarSingleWithoutImageUrl = args => (
  <Avatar {...args} fullName="Leslie Knope" />
);
AvatarSingleWithoutImageUrl.storyName = "Without thumbnail url";
AvatarSingleWithoutImageUrl.parameters = { controls: { hideNoControlsWarning: true } };

export const AvatarSingleWithoutImageOrName = args => (
  <Avatar {...args} />
);
AvatarSingleWithoutImageOrName.storyName = "Without image or name";
AvatarSingleWithoutImageOrName.parameters = { controls: { hideNoControlsWarning: true } };

export const AvatarIconPlaceholder = args => (
  <Avatar {...args} icon={IconAudio} />
);
AvatarIconPlaceholder.storyName = "Icon placeholder type";
AvatarIconPlaceholder.parameters = { controls: { hideNoControlsWarning: true } };

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

export const AvatarSingleWithBorder = args => (
  <Avatar {...args} src="https://images.prismic.io/go1prod/3ddeda62-91ae-433c-b376-9fe1155a9724_vls-inside.jpg?auto=compress,format&rect=259,0,630,630&w=600&h=600" fullName="Leslie Knope" border={1} borderColor="delicate" />
);
AvatarSingleWithBorder.storyName = "With border";
AvatarSingleWithBorder.parameters = { controls: { hideNoControlsWarning: true } };

