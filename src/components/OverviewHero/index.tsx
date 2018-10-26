import * as React from "react";

import foundations from "../../foundations";
import formatDuration from "../../utils/durationFormatter";
import Container from "../Container";
import Icon from "../Icon";
import Text from "../Text";
import View, { Props as ViewProps } from "../View";

export interface Props extends ViewProps {
  title: string;
  subtitle?: React.ReactNode;
  backgroundImage?: string;
  breadcrumb?: React.ReactNode;
  contentWidth?: "narrow" | "normal" | "wide" | "full";
  author?: React.ReactNode;
  duration?: number;
  ctaCard?: React.ReactNode;
}

const OverviewHero: React.SFC<Props> = ({
  children,
  backgroundImage,
  title,
  subtitle,
  breadcrumb,
  contentWidth,
  author,
  duration,
  ctaCard,
  color = "contrast",
  ...props
}: Props) => (
  <View flexDirection="column">
    <View
      mode="dark"
      paddingX={8}
      paddingBottom={6}
      paddingTop={9}
      display="flex"
      flexDirection="row"
      alignItems="center"
      color={color}
      position="relative"
      {...props}
    >
      <View
        css={{
          height: "100%",
          width: "100%",
          position: "absolute",
          overflow: "hidden",
          left: 0,
          top: 0,
        }}
      >
        <View
          backgroundColor="accent"
          backgroundOpacity={
            backgroundImage ? "heroOverlayAccent" : "heroOverlayAccentNoImage"
          }
          opacity="heroOverlayImage"
          css={{
            zIndex: 0,
            backgroundImage: backgroundImage
              ? `url(${backgroundImage})`
              : undefined,
            backgroundPosition: "center",
            backgroundSize: "cover",
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            top: 0,
            height: "100%",
            width: "100%",
            filter: "blur(12px)",
            backgroundBlendMode: "multiply",
            transform: "scale(1.2)",
          }}
        />
      </View>
      <Container
        contain={contentWidth ? contentWidth : "wide"}
        paddingX={4}
        css={{
          zIndex: 1,
        }}
        flexDirection="row"
      >
        <View flexGrow={1} flexShrink={2} paddingRight={6}>
          {breadcrumb && (
            <View flexDirection="row" alignItems="center">
              <Icon name="ChevronLeft" size={1} marginRight={2} />
              <Text fontSize={1}>{breadcrumb}</Text>
            </View>
          )}
          <View marginY={2}>
            <Text element="h1" fontSize={5}>
              {title}
            </Text>
          </View>
          <Text fontSize={2}>{subtitle}</Text>
          <View flexDirection="row" marginTop={5} alignItems="center">
            {author && (
              <View flexDirection="row" alignItems="center" marginRight={5}>
                <Text fontSize={3} color="default">
                  {author}
                </Text>
              </View>
            )}
            {duration && (
              <View flexDirection="row" alignItems="center">
                <Icon name="Clock" color="subtle" marginRight={3} />
                <Text fontSize={3} color="default">
                  {formatDuration(duration)}
                </Text>
              </View>
            )}
          </View>
        </View>
        <View
          alignItems="flex-end"
          flexGrow={1}
          mode="light"
          css={{
            position: "relative",
            background: "transparent",
            [foundations.breakpoints.sm]: {
              minWidth: 250,
            },
            [foundations.breakpoints.md]: {
              minWidth: 300,
            },
            [foundations.breakpoints.lg]: {
              minWidth: 360,
            },
          }}
        >
          {ctaCard}
        </View>
      </Container>
    </View>
    <View padding={8}>
      <Container
        contain={contentWidth ? contentWidth : "wide"}
        paddingX={4}
        flexDirection="row"
        alignItems="flex-start"
      >
        <View flexGrow={1}>{children}</View>
      </Container>
    </View>
  </View>
);

export default OverviewHero;
