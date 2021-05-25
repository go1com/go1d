import React from "react";
import { ButtonFilled, Link, CardListIndex, View } from "../src";
import IconSave from "../src/components/Icons/Save";

export default {
  title: "Athletic/Card/CardListIndex",
  component: CardListIndex,
};

export const Base = args => <View width={215}><CardListIndex {...args} /></View>;

export const Skeleton = () => <View width={215}><CardListIndex skeleton={true} /></View>;
Skeleton.parameters = { controls: { hideNoControlsWarning: true } };

export const AlmostAllTheProps = args => (
  <View width={215}>
    <CardListIndex
      title="Test Title"
      thumbnail="https://res.cloudinary.com/go1/image/fetch/w_1024,h_300,c_thumb,g_auto/https://udemy-images.udemy.com/course/750x422/435262_c617.jpg"
      subTitle="Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui."
      hasFocusState
      hasHoverState
      {...args}
    />
  </View>
);
AlmostAllTheProps.storyName = "Almost all the Props";

export const EmptyThumnail = args => (
  <View width={215}>
    <CardListIndex
      {...args}
      href="https://go1.com"
      title="Test Title"
      subTitle="Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui."
    />
  </View>
);
EmptyThumnail.storyName = "Empty thumnail";

export const CardListIndexWithActionAndLink = () => (
  <View flexDirection="row" justifyContent="space-around">
    <View width={215}>
      <CardListIndex
        href="https://go1.com"
        element={Link}
        title="Community in L&D: Emerging Stronger"
        subTitle="If you’re not a morning person, you can just try waking up thirty minutes earlier than your normal time. You’ll be amazed by how much you can get done in that bit of time. If you don’t want to use it to work, use it to do a bit of exercise or eat a healthy breakfast. This kind of routine will also contribute to your productivity during the day."
        thumbnail="https://res.cloudinary.com/go1/image/fetch/w_300,h_300,f_auto,c_fill/https://res.cloudinary.com/go1developers/image/upload/v1605253189/oq6h31garsrwhhor7hk1.png"
        customActionItemsRenderer={({ ref, ...restProps }) => <ButtonFilled innerRef={ref} icon={IconSave} onClick={(e) => { e.preventDefault(); console.log("action!"); }} {...restProps} />}
        hasHoverState
        hasFocusState
      />
    </View>
    <View width={215}>
      <CardListIndex
        title="Test Title"
        href="https://go1.com"
        element={Link}
        subTitle="Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui."
        thumbnail="https://res.cloudinary.com/go1/image/fetch/w_300,h_300,f_auto,c_fill/https://res.cloudinary.com/go1/image/upload/v1616042815/fgvrr5m0cqvt4nnalxus.jpg"
        customActionItemsRenderer={({ ref, ...restProps }) => <ButtonFilled innerRef={ref} icon={IconSave} onClick={(e) => { e.preventDefault(); console.log("action!"); }} {...restProps} />}
        hasHoverState
        hasFocusState
      />
    </View>
    <View width={215}>
      <CardListIndex
        title="Controlling Leadership Versus Servant Leadership"
        href="https://go1.com"
        element={Link}
        thumbnail="https://res.cloudinary.com/go1/image/upload/v1550558733/qvys3eiqmbtywssyggkh.png"
        subTitle="Welcome to the ‘Controlling Leadership Versus Servant Leadership’ video lesson meant to cover how servant leadership compares to the command-and-control style of leadership. This lesson is the last of three in the ‘Leveraging Servant Leadership for Your Team’ video course, which is meant to describe to leaders the benefits of a serving mindset for securing the success of their teams. By juxtaposing the command-and-control approach with the"
        customActionItemsRenderer={({ ref, ...restProps }) => <ButtonFilled innerRef={ref} icon={IconSave} onClick={(e) => { e.preventDefault(); console.log("action!"); }} {...restProps} />}
        hasHoverState
        hasFocusState
      />
    </View>
  </View>
);
CardListIndexWithActionAndLink.storyName = "CardListIndex with custom action and link";
CardListIndexWithActionAndLink.parameters = { controls: { hideNoControlsWarning: true } };
