import React from "react";
import { Carousel, View, Text } from "../src";

export default {
  title: "Athletic/Carousel",
  component: Carousel, // FIXME: Storybook wants `ExportCarousel`
  subcomponents: { View, Text },
  parameters: {
    docs: {
      description: {
        component: 'Carousels are used to show a fixed number of slides at a number that overflows horizontally (is hidden after X number of slides). This lets users “progressively disclose” as much content as they want, in small chunks at a time. Note: Breakpoints are controlled by the width of their parent component not by the page width.'
      }
    },
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

export const Base = (args) => (
  <Carousel {...args}>
    <View
      css={{
        height: 200,
        minWidth: 150,
        maxWidth: "100%",
        width: 425,
        backgroundColor: "#7732bb",
      }}
    />
    <View
      css={{
        height: 200,
        minWidth: 150,
        maxWidth: "100%",
        width: 425,
        backgroundColor: "#047cc0",
      }}
    />
    <View
      css={{
        height: 200,
        minWidth: 150,
        maxWidth: "100%",
        width: 425,
        backgroundColor: "#e3bc13",
      }}
    />
    <View
      css={{
        height: 200,
        minWidth: 150,
        maxWidth: "100%",
        width: 425,
        backgroundColor: "#db7c00",
      }}
    />
  </Carousel>
);

export const FullWidthOnes = args => (
  <Carousel width={800}>
    <View
      css={{
        height: 200,
        minWidth: 150,
        maxWidth: "100%",
        width: 900,
        backgroundColor: "#7732bb",
      }}
    />
    <View
      css={{
        height: 200,
        minWidth: 150,
        maxWidth: "100%",
        width: 900,
        backgroundColor: "#047cc0",
      }}
    />
    <View
      css={{
        height: 200,
        minWidth: 150,
        maxWidth: "100%",
        width: 900,
        backgroundColor: "#e3bc13",
      }}
    />
    <View
      css={{
        height: 200,
        minWidth: 150,
        maxWidth: "100%",
        width: 900,
        backgroundColor: "#db7c00",
      }}
    />
  </Carousel>
);
FullWidthOnes.storyName = "Full Width ones";

export const MoreProps = args => (
  <Carousel
    clickScrollAmount={2}
    breakpoints={{
      sm: {
        slidesToShow: 1.3,
      },
      md: {
        slidesToShow: 2.75,
      },
      lg: {
        slidesToShow: 4,
      },
    }}
  >
    <View
      css={{
        height: 200,
        minWidth: 150,
        maxWidth: "100%",
        width: 425,
        backgroundColor: "#7732bb",
      }}
    />
    <View
      css={{
        height: 200,
        minWidth: 150,
        maxWidth: "100%",
        width: 425,
        backgroundColor: "#047cc0",
      }}
    />
    <View
      css={{
        height: 200,
        minWidth: 150,
        maxWidth: "100%",
        width: 425,
        backgroundColor: "#e3bc13",
      }}
    />
    <View
      css={{
        height: 200,
        minWidth: 150,
        maxWidth: "100%",
        width: 425,
        backgroundColor: "#db7c00",
      }}
    />
  </Carousel>
);

export const ShorterDuration = args => (
  <Carousel slideAnimationDuration={50}>
    <View
      css={{
        height: 200,
        minWidth: 150,
        maxWidth: "100%",
        width: 425,
        backgroundColor: "#7732bb",
      }}
    />
    <View
      css={{
        height: 200,
        minWidth: 150,
        maxWidth: "100%",
        width: 425,
        backgroundColor: "#047cc0",
      }}
    />
    <View
      css={{
        height: 200,
        minWidth: 150,
        maxWidth: "100%",
        width: 425,
        backgroundColor: "#e3bc13",
      }}
    />
    <View
      css={{
        height: 200,
        minWidth: 150,
        maxWidth: "100%",
        width: 425,
        backgroundColor: "#db7c00",
      }}
    />
  </Carousel>
);

export const WithTitle = args => {
  return (
    <Carousel
      title={
        <Text fontSize={4} fontWeight="semibold" lineHeight="paragraph">
          Title
        </Text>
      }
    >
      <View
        css={{
          height: 200,
          minWidth: 150,
          maxWidth: "100%",
          width: 425,
          backgroundColor: "#7732bb",
        }}
      />
      <View
        css={{
          height: 200,
          minWidth: 150,
          maxWidth: "100%",
          width: 425,
          backgroundColor: "#047cc0",
        }}
      />
      <View
        css={{
          height: 200,
          minWidth: 150,
          maxWidth: "100%",
          width: 425,
          backgroundColor: "#e3bc13",
        }}
      />
      <View
        css={{
          height: 200,
          minWidth: 150,
          maxWidth: "100%",
          width: 425,
          backgroundColor: "#db7c00",
        }}
      />
      <View
        css={{
          height: 200,
          minWidth: 150,
          maxWidth: "100%",
          width: 425,
          backgroundColor: "#7732bb",
        }}
      />
      <View
        css={{
          height: 200,
          minWidth: 150,
          maxWidth: "100%",
          width: 425,
          backgroundColor: "#047cc0",
        }}
      />
      <View
        css={{
          height: 200,
          minWidth: 150,
          maxWidth: "100%",
          width: 425,
          backgroundColor: "#e3bc13",
        }}
      />
      <View
        css={{
          height: 200,
          minWidth: 150,
          maxWidth: "100%",
          width: 425,
          backgroundColor: "#db7c00",
        }}
      />
    </Carousel>
  );
};
WithTitle.storyName = "With title";

