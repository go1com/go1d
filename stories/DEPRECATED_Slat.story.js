import React from "react";
import { DEPRECATED_Slat as Slat, View, Text } from "../src";
import { IconCalendar, IconMapPin, IconImport } from "../src/components/Icons";

export default {
  title: "Athletic/DEPRECATED_Slat",
  component: Slat,
  parameters: {
    docs: {
      description: {
        component: "Upgrade to Slat component instead."
      }
    }
  }
};

export const WithDropdownActions = args => (
  <Slat
    {...args}
    id={123}
    topMeta={["one", "two"]}
    title="This is test title"
    description="This is the test description"
    currency="AUD"
    price={100}
    bottomMeta={[
      {
        icon: "Calendar",
        text: "1.30pm - 2.30pm",
      },
      {
        icon: "MapPin",
        text: "Underwood, QLD, Australia",
      },
    ]}
    image="https://res.cloudinary.com/go1vn/image/upload/v1537851944/ckvawokvc4k70fd9t1oj.jpg"
    type="Event"
    typeBackground="background"
    dropdownItems={[
      {
        icon: IconCalendar,
        title: "fake item",
        onClick: () => console.log("foo"),
      },
      {
        icon: IconCalendar,
        title: "fake item2",
        onClick: () => console.log("foo2"),
      },
    ]}
  />
);

WithDropdownActions.storyName = "With dropdown actions";

export const WithActionRenderer = args => (
  <Slat
    id={123}
    topMeta={["one", "two"]}
    title="This is test title"
    description="This is the test description"
    currency="AUD"
    price={100}
    bottomMeta={[
      {
        icon: IconCalendar,
        text: "1.30pm - 2.30pm",
      },
      {
        icon: IconMapPin,
        text: "Underwood, QLD, Australia",
      },
    ]}
    image="https://res.cloudinary.com/go1vn/image/upload/v1537851944/ckvawokvc4k70fd9t1oj.jpg"
    type="Event"
    typeBackground="background"
    actionRenderer={() => (
      <View flexDirection="row">
        <IconImport marginRight={3} color="accent" />
        <Text color="accent">Import</Text>
      </View>
    )}
  />
);

WithActionRenderer.storyName = "With actionRenderer";

export const WithImpliedLinkWrapperAndActiveHoverStates = args => (
  <Slat
    id={123}
    topMeta={[
      "one",
      "two try to get top meta Truncate String with Ellipsis with a very very very very very very very very very long text",
    ]}
    title="This is test title try to get title to Truncate String with Ellipsis with a very very very very very very very very very long text"
    description="This is the test description try to get description to Truncate String with Ellipsis with a very very very very very very very very very long text"
    currency="AUD"
    price={100}
    bottomMeta={[
      {
        icon: IconCalendar,
        text: "1.30pm - 2.30pm",
      },
      {
        icon: IconMapPin,
        text: "Underwood, QLD, Australia",
      },
    ]}
    image="https://res.cloudinary.com/go1vn/image/upload/v1537851944/ckvawokvc4k70fd9t1oj.jpg"
    type="Event"
    typeBackground="background"
  />
);

WithImpliedLinkWrapperAndActiveHoverStates.storyName = "With implied link wrapper and active/hover states";

export const Skeleton = args => <Slat skeleton={true} />;
