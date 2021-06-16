import React from "react";
import { Link, Slat, View } from "../src";
import { IconSave } from "../src/components/Icons";

const thumbnailUrl = "https://res.cloudinary.com/go1/image/fetch/w_300,h_300,f_auto,c_fill/https://res.cloudinary.com/go1/image/upload/v1616042815/fgvrr5m0cqvt4nnalxus.jpg";

const metaThumbnailUrl = "https://images.prismic.io/go1prod/0b791d6f-c4ff-4a0c-b36c-2a5a99edca3c_Screen+Shot+2020-07-23+at+10.25.55+am.png?auto=compress,format&rect=0,1,390,390&w=30&h=30";

export default {
  title: "Athletic/Slat",
  component: Slat,
  parameters: {
    design: [
      {
        name: 'Guidelines',
        type: 'link',
        url: 'https://www.figma.com/file/BxQA6qbzRwjSA2AXWnO0f9/Components?node-id=3105%3A14386',
        label: 'We need your help! Please add a page in Figma using the template and update this link.',
      },
    ],
  }
};

export const WithActions = args => (
  <Slat
    {...args}
  />
);

WithActions.storyName = "WithActions";
WithActions.argTypes = {
  id: { defaultValue: 123 },
  title: { defaultValue: "This is test title" },
  supportingText: { defaultValue: "This is the test description" },
  thumbnail: { defaultValue: thumbnailUrl },
  meta: { defaultValue: {
      image: metaThumbnailUrl,
      subtitle: ["Catalyst Education", "abc"],
      data: ["Meta Text", "Learning Type"],
  }},
  primaryActionItems: { defaultValue: [
    {
      icon: IconSave,
      onClick: () => alert("fake item 1"),
    },
  ]},
  secondaryActionItems: { defaultValue: [
    {
      icon: IconSave,
      title: "fake item 2",
      onClick: () => alert("fake item 2"),
    },
  ]},
};

export const EmptyThumbnail = () => (
  <Slat
    id={123}
    type="web-content"
    title="This is test title"
    supportingText="This is the test description"
  />
);

EmptyThumbnail.storyName = "EmptyThumbnail";

export const MultipleItems = () => (
  <>
    <View marginBottom={6}>
      <Slat
        id={123}
        type="playlist"
        title="This is a playlist"
        supportingText="This is the test description"
        thumbnail={thumbnailUrl}
        meta={{
          image: metaThumbnailUrl,
          subtitle: ["Catalyst Education", "abc", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"],
          data: ["Meta Text", "Learning Type"],
        }}
        primaryActionItems={[
          {
            icon: IconSave,
            onClick: () => alert("fake item 1"),
          },
        ]}
        secondaryActionItems={[
          {
            icon: IconSave,
            title: "fake item 2",
            onClick: () => alert("fake item 2"),
          },
        ]}
      />
    </View>
    <View>
      <Slat
        id={456}
        type="course"
        title="This is a course"
        supportingText="This is the test description"
      />
    </View>
  </>
);

MultipleItems.storyName = "MultipleItems";

export const WithLink = () => (
  <Slat
    href="https://go1.com"
    id={123}
    type="web-content"
    title="This is test title"
    supportingText="This is the test description"
  />
);

WithLink.storyName = "WithLink";

export const Skeleton = () => (
  <Slat skeleton={true} />
);

Skeleton.storyName = "skeleton";
Skeleton.parameters = { controls: { hideNoControlsWarning: true } };
