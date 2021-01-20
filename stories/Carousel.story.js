import React from "react";
import { Carousel, View, Text } from "../src";

export default {
  title: "Original Go1d/Carousel",
};

export const Base = () => (
  <Carousel>
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

export const FullWidthOnes = () => (
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

FullWidthOnes.story = {
  name: "Full Width ones",
};

export const MoreProps = () => (
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

export const ShorterDuration = () => (
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

export const WithTitle = () => {
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

WithTitle.story = {
  name: "With title",
};
