import * as React from "react";

import foundations from "../../foundations";
import formatDuration from "../../utils/durationFormatter";
import Container from "../Container";
import Icon from "../Icon";
import Text from "../Text";
import View, { ViewProps } from "../View";

export interface OverviewHeroProps extends ViewProps {
  title: string | React.ReactNode;
  subtitle?: React.ReactNode;
  backgroundImage?: string;
  breadcrumb?: React.ReactNode;
  contentWidth?: "narrow" | "normal" | "wide" | "full";
  author?: React.ReactNode;
  duration?: number;
  ctaCard?: React.ReactNode;
  childrenWrapper?: boolean;
  childrenWrapperCss?: any;
}

const MobileDisplayBreak = "@media(max-width: 1023px)";

const OverviewHero: React.SFC<OverviewHeroProps> = ({
  children,
  backgroundImage,
  title,
  subtitle,
  breadcrumb,
  contentWidth,
  author,
  duration,
  ctaCard,
  css,
  color = "contrast",
  childrenWrapper = true,
  childrenWrapperCss,
  ...props
}: OverviewHeroProps) => (
  <View flexDirection="column">
    <View
      paddingX={8}
      paddingBottom={6}
      paddingTop={9}
      display="flex"
      flexDirection="row"
      alignItems="center"
      color={color}
      position="relative"
      css={{
        [MobileDisplayBreak]: {
          paddingRight: foundations.spacing[3],
          paddingLeft: foundations.spacing[3],
          paddingTop: foundations.spacing[8],
          paddingBottom: foundations.spacing[0],
        },
        ...(css as object),
      }}
      {...props}
    >
      <View
        mode="dark"
        css={{
          height: "100%",
          width: "100%",
          position: "absolute",
          overflow: "hidden",
          left: 0,
          top: 0,
          [MobileDisplayBreak]: {
            maxHeight: "250px",
          },
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
            [foundations.breakpoints.md]: {
              filter: "blur(12px)",
              backgroundBlendMode: "multiply",
              transform: "scale(1.2)",
            },
          }}
        />
      </View>
      <Container
        contain={contentWidth ? contentWidth : "wide"}
        mode="dark"
        backgroundColor="transparent"
        color="contrast"
        paddingX={4}
        css={{
          zIndex: 1,
          [MobileDisplayBreak]: {
            paddingBottom: 40,
          },
        }}
        flexDirection="row"
      >
        <View
          paddingRight={6}
          css={{
            flex: 1, // IE word warp fix
            [MobileDisplayBreak]: {
              display: "none",
            },
          }}
        >
          {breadcrumb && (
            <View flexDirection="row" alignItems="center">
              <Icon name="ChevronLeft" size={1} marginRight={2} />
              <Text fontSize={1}>{breadcrumb}</Text>
            </View>
          )}
          <View marginY={2}>
            {typeof title === "string" ? (
              <Text element="h1" fontSize={6} fontWeight="bold">
                {title}
              </Text>
            ) : (
              title
            )}
          </View>
          <Text fontSize={3} fontWeight="semibold">
            {subtitle}
          </Text>
          <View flexDirection="row" marginTop={5} alignItems="center">
            {author && (
              <View flexDirection="row" alignItems="center" marginRight={7}>
                <Text fontWeight="semibold" fontSize={3} color="contrast">
                  {author}
                </Text>
              </View>
            )}
            {duration && (
              <View flexDirection="row" alignItems="center">
                <Icon name="Clock" color="default" marginRight={3} />
                <Text fontWeight="semibold" fontSize={3} color="contrast">
                  {formatDuration(duration)}
                </Text>
              </View>
            )}
          </View>
        </View>
        <View
          flexGrow={1}
          mode="light"
          justifyContent="flex-start"
          alignItems="flex-end"
          css={{
            position: "relative",
            background: "transparent",
            [foundations.breakpoints.sm]: {
              width: "100%",
              minWidth: "100%",
            },
            [MobileDisplayBreak]: {
              // When the page goes to single column
              alignItems: "center",
            },
            [foundations.breakpoints.md]: {
              minWidth: 300,
            },
            [foundations.breakpoints.lg]: {
              minWidth: 360,
              maxWidth: 400,
            },
          }}
        >
          {ctaCard}
        </View>
      </Container>
    </View>
    <View
      paddingX={8}
      paddingY={7}
      css={{
        [MobileDisplayBreak]: {
          paddingRight: foundations.spacing[5],
          paddingLeft: foundations.spacing[5],
          paddingTop: foundations.spacing[3],
        },
        ...childrenWrapperCss,
      }}
    >
      {childrenWrapper ? (
        <Container
          contain={contentWidth ? contentWidth : "wide"}
          paddingX={4}
          flexDirection="row"
          alignItems="flex-start"
        >
          <View
            maxWidth={700}
            width="calc(100% - 440px)"
            css={{
              [MobileDisplayBreak]: {
                width: "100%",
                maxWidth: "100%",
              },
            }}
          >
            {children}
          </View>
        </Container>
      ) : (
        children
      )}
    </View>
  </View>
);

export default OverviewHero;
