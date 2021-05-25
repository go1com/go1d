import React from "react";
import { ButtonFilled, Card, Link, View } from "../src";
import IconSave from '../src/components/Icons/Save';
import IconPlus from '../src/components/Icons/Plus';
import IconTrash from '../src/components/Icons/Trash';

export default {
  title: "Athletic/Card/DefaultCard",
  component: Card,
};

export const Base = args => <View width={213}><Card {...args} /></View>;

Base.parameters = { controls: { hideNoControlsWarning: true } };

export const Skeleton = () => <View width={213}><Card skeleton={true} /></View>;

Skeleton.parameters = { controls: { hideNoControlsWarning: true } };

export const AlmostAllTheProps = args => (
  <View width={213}>
    <Card
      element={Link}
      href="https://go1.com"
      title="Learning item title"
      type="course"
      subTitle="Go1 Learning"
      metadata={["Course", "45 mins"]}
      thumbnail="https://res.cloudinary.com/go1/image/fetch/w_1024,h_300,c_thumb,g_auto/https://udemy-images.udemy.com/course/750x422/435262_c617.jpg"
      hasFocusState
      hasHoverState
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
      {...args}
    />
  </View>
);
AlmostAllTheProps.storyName = "Almost all the Props with the link";

export const EmptyThumbnailCard = () => (
  <View flexDirection="row" flexWrap="wrap">
    <View width={213} padding={3}>
      <Card
        title="Audio item title"
        type="audio"
        subTitle="Go1 Learning"
        metadata={["Audio", "45 mins"]}
      />
    </View>
    <View width={213} padding={3}>
      <Card
        title="Award item title"
        type="award"
        subTitle="Go1 Learning"
        metadata={["Award", "45 mins"]}
      />
    </View>
    <View width={213} padding={3}>
      <Card
        title="Course item title"
        type="course"
        subTitle="Go1 Learning"
        metadata={["Course", "45 mins"]}
      />
    </View>
    <View width={213} padding={3}>
      <Card
        title="Document item title"
        type="document"
        subTitle="Go1 Learning"
        metadata={["Document", "45 mins"]}
      />
    </View>
    <View width={213} padding={3}>
      <Card
        title="Integration item title"
        type="integration"
        subTitle="Go1 Learning"
        metadata={["Integration", "45 mins"]}
      />
    </View>
    <View width={213} padding={3}>
      <Card
        title="Interactive item title"
        type="interactive"
        subTitle="Go1 Learning"
        metadata={["Interactive", "45 mins"]}
      />
    </View>
    <View width={213} padding={3}>
      <Card
        title="Link item title"
        type="link"
        subTitle="Go1 Learning"
        metadata={["Link", "45 mins"]}
      />
    </View>
    <View width={213} padding={3}>
      <Card
        title="Text item title"
        type="text"
        subTitle="Go1 Learning"
        metadata={["Text", "45 mins"]}
      />
    </View>
    <View width={213} padding={3}>
      <Card
        title="Video item title"
        type="video"
        subTitle="Go1 Learning"
        metadata={["Video", "45 mins"]}
      />
    </View>
  </View>
);

EmptyThumbnailCard.storyName = "Empty thumbnail card";
EmptyThumbnailCard.parameters = { controls: { hideNoControlsWarning: true } };

export const MultipleCard = () => (
  <View flexDirection="row" justifyContent="space-between">
    <View width={213}>
    <Card
      title="Learning item title"
      type="course"
      subTitle="Go1 Learning"
      metadata={["Course", "45 mins"]}
      thumbnail="https://res.cloudinary.com/go1/image/fetch/w_1024,h_300,c_thumb,g_auto/https://udemy-images.udemy.com/course/750x422/435262_c617.jpg"
      customActionItemsRenderer={actionProps => <ButtonFilled icon={IconSave} onClick={(e) => { e.preventDefault(); console.log("action!"); }} {...actionProps} />}
      hasFO
      hasHoverState
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
      title="Donec rutrum congue leo eget malesuada. Sed porttitor lectus nibh. Donec rutrum congue leo eget malesuada. Sed porttitor lectus nibh."
      type="video"
      subTitle="Donec rutrum congue leo eget malesuada. Sed porttitor lectus nibh."
      metadata={["Video", "45 mins"]}
      customActionItemsRenderer={actionProps => <ButtonFilled icon={IconSave} onClick={(e) => { e.preventDefault(); console.log("action!"); }} {...actionProps} />}
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
      title="Document title"
      type="document"
      subTitle="Go1 Learning"
      metadata={["Document", "45 mins"]}
      customActionItemsRenderer={actionProps => <ButtonFilled icon={IconSave} onClick={(e) => { e.preventDefault(); console.log("action!"); }} {...actionProps} />}
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
MultipleCard.parameters = { controls: { hideNoControlsWarning: true } };

export const MultipleCard1 = () => (
  <View flexDirection="column" alignItems="center">
    <View width={320} marginBottom={4}>
    <Card
      title="Learning item title"
      type="course"
      subTitle="Go1 Learning"
      metadata={["Course", "45 mins"]}
      thumbnail="https://res.cloudinary.com/go1/image/fetch/w_1024,h_300,c_thumb,g_auto/https://udemy-images.udemy.com/course/750x422/435262_c617.jpg"
      customActionItemsRenderer={actionProps => <ButtonFilled icon={IconSave} onClick={(e) => { e.preventDefault(); console.log("action!"); }} {...actionProps} />}
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
      title="Donec rutrum congue leo eget malesuada. Sed porttitor lectus nibh. Donec rutrum congue leo eget malesuada. Sed porttitor lectus nibh."
      type="video"
      subTitle="Donec rutrum congue leo eget malesuada. Sed porttitor lectus nibh."
      metadata={["Video", "45 mins"]}
      customActionItemsRenderer={actionProps => <ButtonFilled icon={IconSave} onClick={(e) => { e.preventDefault(); console.log("action!"); }} {...actionProps} />}
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
      title="Document title"
      type="document"
      subTitle="Go1 Learning"
      metadata={["Document", "45 mins"]}
      customActionItemsRenderer={actionProps => <ButtonFilled icon={IconSave} onClick={(e) => { e.preventDefault(); console.log("action!"); }} {...actionProps} />}
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
MultipleCard1.parameters = { controls: { hideNoControlsWarning: true } };
