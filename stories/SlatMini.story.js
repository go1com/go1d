import React from "react";
import { SlatMini } from "../src";
import { IconCalendar, IconPlusCircle } from "../src/components/Icons";

export default {
  title: "Original Go1d/SlatMini",
  component: SlatMini
};

export const WithDropdownActions = () => (
  <SlatMini
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

WithDropdownActions.story = {
  name: "With dropdown actions",
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

WithActionRender.story = {
  name: "With actionRender",
};

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

WithLink.story = {
  name: "With link",
};

export const Skeleton = () => <SlatMini skeleton={true} />;
