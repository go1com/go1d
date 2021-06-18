import React from "react";
import { SlatMini } from "../src";
import { IconCalendar, IconPlusCircle } from "../src/components/Icons";

export default {
  title: "Athletic/Slat/SlatMini",
  component: SlatMini,
  argTypes: {
    skeleton: {
      defaultValue: false,
      control: { type: 'boolean' }
    },
  },
  parameters: {
    design: [
      {
        name: 'Guidelines',
        type: 'link',
        url: 'https://www.figma.com/file/BxQA6qbzRwjSA2AXWnO0f9/Components?node-id=3091%3A21',
        label: 'See Slat Mini designs in Figma',
      },
    ],
  }
};

export const WithDropdownActions = args => (
  <SlatMini
    {...args}
  />
);
WithDropdownActions.storyName = "With dropdown actions";
WithDropdownActions.argTypes = {
  id: { defaultValue: 123 },
  title: { defaultValue: "This is online content" },
  bottomMeta: { defaultValue: ["Provider", "29 mins"] },
  image: { defaultValue: "http://res.cloudinary.com/go1/image/upload/v1557388417/l7jhug2k9n1s4qzw3ai8.png" },
  type: { defaultValue: "Course" },
  dropdownItems: { defaultValue: [
    {
      icon: IconCalendar,
      title: "fake item #01",
      onClick: () => console.log("You have clicked on `fake item #01`"),
    },
    {
      icon: IconCalendar,
      title: "fake item #02",
      onClick: () => console.log("You have clicked on `fake item #02`"),
    },
  ]},
};

export const WithActionRender = () => (
  <SlatMini
    id={123}
    title="This is an offline content"
    bottomMeta={["Provider", "29 mins"]}
    image="https://res.cloudinary.com/go1vn/image/upload/v1537851944/ckvawokvc4k70fd9t1oj.jpg"
    type="Event"
    typeBackground="background"
    actionRenderer={() => (
      <IconPlusCircle color="muted" name="PlusCircle" marginRight={3} />
    )}
  />
);
WithActionRender.storyName = "With actionRender";
WithActionRender.parameters = { controls: { hideNoControlsWarning: true } };

export const WithLink = () => (
  <SlatMini
    id={123}
    title="This is an offline content"
    bottomMeta={["Provider", "29 mins"]}
    image="https://res.cloudinary.com/go1vn/image/upload/v1537851944/ckvawokvc4k70fd9t1oj.jpg"
    type="Event"
    href="/"
    typeBackground="accent"
  />
);
WithLink.storyName = "With link";
WithLink.parameters = { controls: { hideNoControlsWarning: true } };

export const Skeleton = () => <SlatMini skeleton={true} />;
Skeleton.parameters = { controls: { hideNoControlsWarning: true } };
