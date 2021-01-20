import React from "react";
import {
  OverviewHero,
  View,
  Link,
  Text,
  Avatar,
  OverviewCtaCard,
  ButtonFilled,
} from "../src";
import { IconVideo, IconCourse } from "../src/components/Icons";

export default {
  title: "Original Go1d/OverviewHero",
  component: OverviewHero,
};

export const OverviewHeroWithRequiredPropsOnlyTitle = () => (
  <OverviewHero title="Interaction Design" />
);

OverviewHeroWithRequiredPropsOnlyTitle.story = {
  name: "Overview hero with required props only (title)",
};

export const OverviewHeroWithBackgroundBreadcrumbAndSubtitle = () => (
  <OverviewHero
    title="Interaction Design"
    backgroundImage="https://images.unsplash.com/photo-1539512110726-6d89c892f117?fit=crop&w=589"
    subtitle={
      <View flexDirection="row" alignItems="center">
        <IconVideo marginRight={3} />
        VIDEO
      </View>
    }
    breadcrumb={<Link to="/back">Back</Link>}
  >
    <Text>
      This course will provide you with the skills and knowledge to design,
      build, test and launch digital products that are intuitive, user-friendly
      and accessible.
    </Text>
  </OverviewHero>
);

OverviewHeroWithBackgroundBreadcrumbAndSubtitle.story = {
  name: "Overview hero with background, breadcrumb and subtitle",
};

export const OverviewHeroWithAllProps = () => (
  <OverviewHero
    title="Interaction Design"
    backgroundImage="https://images.unsplash.com/photo-1539512110726-6d89c892f117?fit=crop&w=589"
    subtitle={
      <View flexDirection="row" alignItems="center">
        <IconCourse marginRight={3} />
        COURSE
      </View>
    }
    breadcrumb={<Link to="/back">Back</Link>}
    author={
      <View flexDirection="row" alignItems="center">
        <Avatar
          size={4}
          src="https://i.imgur.com/Ee55uvc.jpg"
          fullName="Leslie Knope"
          marginRight={3}
        />
        Leslie Knope
      </View>
    }
    contentWidth="wide"
    duration={1360}
    ctaCard={
      <OverviewCtaCard
        backgroundImage="https://images.unsplash.com/photo-1539512110726-6d89c892f117?fit=crop&w=589"
        buttonLabel="Import"
        onButtonClick
        width="280"
        marginLeft={3}
      />
    }
  >
    <Text>
      This course will provide you with the skills and knowledge to design,
      build, test and launch digital products that are intuitive, user-friendly
      and accessible.
    </Text>
  </OverviewHero>
);

OverviewHeroWithAllProps.story = {
  name: "Overview hero with all props",
};

export const KitchenSink = () => (
  <OverviewHero
    title="Interaction Design"
    backgroundImage="https://images.unsplash.com/photo-1539512110726-6d89c892f117?fit=crop&w=589"
    subtitle={
      <View flexDirection="row" alignItems="center">
        <IconCourse marginRight={3} />
        COURSE
      </View>
    }
    breadcrumb={<Link to="/back">Back</Link>}
    author={
      <View flexDirection="row" alignItems="center">
        <Avatar
          size={4}
          src="https://i.imgur.com/Ee55uvc.jpg"
          fullName="Leslie Knope"
          marginRight={3}
        />
        Leslie Knope
      </View>
    }
    contentWidth="wide"
    duration={1360}
    ctaCard={
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
              COURSE
            </Text>
          </View>
        }
        title="Cooking with charcoal"
      />
    }
  >
    <Text>
      This course will provide you with the skills and knowledge to design,
      build, test and launch digital products that are intuitive, user-friendly
      and accessible.
    </Text>
  </OverviewHero>
);

KitchenSink.story = {
  name: "Kitchen sink",
};
