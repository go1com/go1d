import React from "react";
import { SlatMini } from "../src";
import { IconCalendar, IconPlusCircle } from "../src/components/Icons";

export default {
  title: "Athletic/SlatMini",
  component: SlatMini
};

export const WithDropdownActions = args => (
  <SlatMini
    {...args}
    id={123}
    title="This is an online content"
    bottomMeta={["Provider", "29 mins"]}
    image="http://res.cloudinary.com/go1/image/upload/v1557388417/l7jhug2k9n1s4qzw3ai8.png"
    type="Course"
    dropdownItems={[
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
    ]}
  />
);

WithDropdownActions.storyName = "With dropdown actions";

export const WithActionRender = args => (
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

export const WithLink = args => (
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

export const Skeleton = args => <SlatMini skeleton={true} />;
