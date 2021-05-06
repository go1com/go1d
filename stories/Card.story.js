import React from "react";
import { ButtonFilled, Card, View } from "../src";
import IconSaved from '../src/components/Icons/Saved';
import IconPlus from '../src/components/Icons/Plus';
import IconTrash from '../src/components/Icons/Trash';

export default {
  title: "Athletic/Card",
  component: Card,
};

export const Base = () => <View width={213}><Card /></View>;

export const Skeleton = () => <View width={213}><Card skeleton={true} /></View>;

export const AlmostAllTheProps = args => (
  <View width={213}>
    <Card
      {...args}
      title="Learning item title"
      type="Course"
      supportingText="Go1 Learning"
      metadata={["Course", "45 mins"]}
      thumbnail="https://res.cloudinary.com/go1/image/fetch/w_1024,h_300,c_thumb,g_auto/https://udemy-images.udemy.com/course/750x422/435262_c617.jpg"
      customActionItems={[<ButtonFilled icon={IconSaved} />]}
      moreMenuItems={[
        {
          title: "Add",
          href: "#testing",
          icon: IconPlus,
          iconColor: "muted"
        },
        {
          title: "Delete",
          href: "#testing",
          color: "danger",
          icon: IconTrash,
          target:"_blank",
          rel:"noopener noreferrer",
        },
      ]}
    />
  </View>
);
AlmostAllTheProps.storyName = "Almost all the Props";

export const MultipleCard = args => (
  <View flexDirection="row" justifyContent="space-between">
    <View width={213}>
    <Card
      {...args}
      title="Learning item title"
      type="Course"
      supportingText="Go1 Learning"
      metadata={["Course", "45 mins"]}
      thumbnail="https://res.cloudinary.com/go1/image/fetch/w_1024,h_300,c_thumb,g_auto/https://udemy-images.udemy.com/course/750x422/435262_c617.jpg"
      customActionItems={[<ButtonFilled icon={IconSaved} />]}
      moreMenuItems={[
        {
          title: "Add",
          href: "#testing",
          icon: IconPlus,
          iconColor: "muted"
        },
        {
          title: "Delete",
          href: "#testing",
          color: "danger",
          icon: IconTrash,
          target:"_blank",
          rel:"noopener noreferrer",
        },
      ]}
    />
    </View>
    <View width={213}>
    <Card
      {...args}
      title="Donec rutrum congue leo eget malesuada. Sed porttitor lectus nibh. Donec rutrum congue leo eget malesuada. Sed porttitor lectus nibh."
      type="video"
      supportingText="Donec rutrum congue leo eget malesuada. Sed porttitor lectus nibh."
      metadata={["Video", "45 mins"]}
      customActionItems={[<ButtonFilled icon={IconSaved} />]}
      moreMenuItems={[
        {
          title: "Add",
          href: "#testing",
          icon: IconPlus,
          iconColor: "muted"
        },
        {
          title: "Delete",
          href: "#testing",
          color: "danger",
          icon: IconTrash,
          target:"_blank",
          rel:"noopener noreferrer",
        },
      ]}
    />
    </View>
    <View width={213}>
    <Card
      {...args}
      title="Document title"
      type="document"
      supportingText="Go1 Learning"
      metadata={["Document", "45 mins"]}
      customActionItems={[<ButtonFilled icon={IconSaved} />]}
      moreMenuItems={[
        {
          title: "Add",
          href: "#testing",
          icon: IconPlus,
          iconColor: "muted"
        },
        {
          title: "Delete",
          href: "#testing",
          color: "danger",
          icon: IconTrash,
          target:"_blank",
          rel:"noopener noreferrer",
        },
      ]}
    />
    </View>
  </View>
);
MultipleCard.storyName = "Multiple card on row";

export const MultipleCard1 = args => (
  <View flexDirection="column" alignItems="center">
    <View width={320} marginBottom={4}>
    <Card
      {...args}
      title="Learning item title"
      type="Course"
      supportingText="Go1 Learning"
      metadata={["Course", "45 mins"]}
      thumbnail="https://res.cloudinary.com/go1/image/fetch/w_1024,h_300,c_thumb,g_auto/https://udemy-images.udemy.com/course/750x422/435262_c617.jpg"
      customActionItems={[<ButtonFilled icon={IconSaved} />]}
      moreMenuItems={[
        {
          title: "Add",
          href: "#testing",
          icon: IconPlus,
          iconColor: "muted"
        },
        {
          title: "Delete",
          href: "#testing",
          color: "danger",
          icon: IconTrash,
          target:"_blank",
          rel:"noopener noreferrer",
        },
      ]}
    />
    </View>
    <View width={320} marginBottom={4}>
    <Card
      {...args}
      title="Donec rutrum congue leo eget malesuada. Sed porttitor lectus nibh. Donec rutrum congue leo eget malesuada. Sed porttitor lectus nibh."
      type="video"
      supportingText="Donec rutrum congue leo eget malesuada. Sed porttitor lectus nibh."
      metadata={["Video", "45 mins"]}
      customActionItems={[<ButtonFilled icon={IconSaved} />]}
      moreMenuItems={[
        {
          title: "Add",
          href: "#testing",
          icon: IconPlus,
          iconColor: "muted"
        },
        {
          title: "Delete",
          href: "#testing",
          color: "danger",
          icon: IconTrash,
          target:"_blank",
          rel:"noopener noreferrer",
        },
      ]}
    />
    </View>
    <View width={320} marginBottom={4}>
    <Card
      {...args}
      title="Document title"
      type="document"
      supportingText="Go1 Learning"
      metadata={["Document", "45 mins"]}
      customActionItems={[<ButtonFilled icon={IconSaved} />]}
      moreMenuItems={[
        {
          title: "Add",
          href: "#testing",
          icon: IconPlus,
          iconColor: "muted"
        },
        {
          title: "Delete",
          href: "#testing",
          color: "danger",
          icon: IconTrash,
          target:"_blank",
          rel:"noopener noreferrer",
        },
      ]}
    />
    </View>
  </View>
);
MultipleCard1.storyName = "Multiple card on column";
