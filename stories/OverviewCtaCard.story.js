import React from "react";
import {
  OverviewCtaCard,
  View,
  Button,
  ButtonFilled,
  Avatar,
  Text,
} from "../src";
import { IconCourse, IconChevronRight } from "../src/components/Icons";

export default {
  title: "Original Go1d/OverviewCtaCard",
  component: OverviewCtaCard
};

export const OverviewCtaCardWithNoProps = args => (
  <View
    css={{
      position: "relative",
      minHeight: 60,
    }}
  >
    <OverviewCtaCard {...args} />
  </View>
);

OverviewCtaCardWithNoProps.storyName = "Overview CTA card with no props";

export const OverviewCtaCardWithImageAndCtaButton = args => (
  <View
    css={{
      position: "relative",
      minHeight: 480,
    }}
  >
    <OverviewCtaCard
      backgroundImage="https://images.unsplash.com/photo-1539512110726-6d89c892f117?fit=crop&w=589"
      title="Cooking with charcoal"
      ctaButton={<ButtonFilled color="accent">Enquire to enrol</ButtonFilled>}
    />
  </View>
);

OverviewCtaCardWithImageAndCtaButton.storyName = "Overview CTA card with image and CTA button";

export const OverviewCtaCardWithPriceAndCtaButton = args => (
  <View
    css={{
      position: "relative",
      minHeight: 425,
    }}
  >
    <OverviewCtaCard
      title="Cooking with charcoal"
      price="49"
      currency="SEK"
      ctaButton={<ButtonFilled color="accent">Enquire to enrol</ButtonFilled>}
      ctaAlt={(
        <>
            <Text fontSize={3} fontWeight="semibold">Included in Go1 Content Hub</Text>
            <Text fontWeight="semibold" color="subtle">Starting from $12 per user for teams</Text>
            <Button marginBottom={4} paddingTop={0} icon={IconChevronRight} flexDirection="row-reverse" justifyContent="flex-end" paddingLeft={0} color="accent" href="google.com">Learn more</Button>
            <ButtonFilled>Try it free</ButtonFilled>
          </>
        )}
    />
  </View>
);
OverviewCtaCardWithPriceAndCtaButton.storyName = "Overview CTA card with price and CTA button";

export const OverviewCtaCardWithPropsAndCtaButton = args => (
  <View
    css={{
      position: "relative",
      minHeight: 520,
    }}
  >
    <OverviewCtaCard
      author={
        <View flexDirection="row" alignItems="center">
          <Avatar
            size={5}
            src="https://i.imgur.com/Ee55uvc.jpg"
            fullName="Leslie Knope"
            marginRight={3}
          />
          By Leslie Knope
        </View>
      }
      backgroundImage="https://images.unsplash.com/photo-1539512110726-6d89c892f117?fit=crop&w=589"
      ctaButton={<ButtonFilled color="accent">Enrol</ButtonFilled>}
      currency="JPY"
      dislikes="2"
      duration="90"
      enrolled="3"
      likes="10"
      price="99"
      subtitle={
        <View flexDirection="row" alignItems="center">
          <IconCourse size={1} marginRight={3} />
          <Text fontSize={1} color="subtle">
            Course
          </Text>
        </View>
      }
      title="Cooking with charcoal"
    />
  </View>
);
OverviewCtaCardWithPropsAndCtaButton.storyName = "Overview CTA card with props and CTA button";
OverviewCtaCardWithPropsAndCtaButton.parameters = {
  docs: {
    description: {
      story: 'Different properties are displayed in different positions and shown/hidden based on screen width.',
    },
  },
};

export const OverviewCtaCardWithCustomChildren = args => (
  <View
    css={{
      position: "relative",
      minHeight: 320,
    }}
  >
    <OverviewCtaCard
      title="Cooking with charcoal"
      backgroundImage="https://images.unsplash.com/photo-1539512110726-6d89c892f117?fit=crop&w=589"
    >
      <Text fontSize={1}>Part of your subscription</Text>
    </OverviewCtaCard>
  </View>
);
OverviewCtaCardWithCustomChildren.storyName = "Overview CTA card with custom children";

export const OverviewCtaCardWithContentHub = args => (
  <View position="relative">
    <OverviewCtaCard
      position="relative"
      ctaAlt={(
        <>
          <Text fontSize={3} fontWeight="semibold">Included in Go1 Content Hub</Text>
          <Text fontWeight="semibold" color="subtle">Starting from $12 per user for teams</Text>
          <Button marginBottom={4} paddingTop={0} icon={IconChevronRight} flexDirection="row-reverse" justifyContent="flex-end" paddingLeft={0} color="accent" href="google.com">Learn more</Button>
          <ButtonFilled>Try it free</ButtonFilled>
        </>
      )}
      author={
        <View flexDirection="row" alignItems="center">
          <Avatar
            size={5}
            src="https://i.imgur.com/Ee55uvc.jpg"
            fullName="Leslie Knope"
            marginRight={3}
          />
          By Leslie Knope
        </View>
      }
      backgroundImage="https://images.unsplash.com/photo-1539512110726-6d89c892f117?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=10cd46d36ba78d30891de50e25907fe6&auto=format&fit=crop&w=2089&q=80"
      ctaButton={(
        <ButtonFilled color="accent">Enrol</ButtonFilled>
      )}
      currency="JPY"
      dislikes="2"
      duration="90"
      enrolled="3"
      likes="10"
      price="99"
      subtitle={
        <View flexDirection="row" alignItems="center">
          <IconCourse size={1} marginRight={3} />
          <Text fontSize={1} color="subtle">Course</Text>
        </View>
      }
      title="Cooking with charcoal"
    />
  </View>
);
OverviewCtaCardWithContentHub.storyName = "Overview CTA card with Content Hub";
OverviewCtaCardWithContentHub.parameters = {
  docs: {
    description: {
      story: 'Different properties are displayed in different positions and shown/hidden based on screen width.',
    },
  },
};

