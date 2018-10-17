import * as React from "react";

import Icon from "../Icon";
import Link from "../Link";
import Text from "../Text";
import Theme from "../Theme";
import View, { Props as ViewProps } from "../View";

export interface Props extends ViewProps {
  title: string;
  subtitle?: React.ReactNode;
  backgroundImage?: string;
  breadcrumbHref?: string;
  breadcrumbTitle?: string;
  author?: React.ReactNode;
  duration?: string;
  ctaCard?: React.ReactNode;
}

const OverviewHero: React.SFC<Props> = ({
  children,
  padding,
  backgroundImage,
  title,
  subtitle,
  breadcrumbHref,
  breadcrumbTitle,
  author,
  duration,
  ctaCard,
  ...props
}: Props) => (
  <Theme.Consumer>
    {() => (
      <View flexDirection="column">
        <View
          {...props}
          padding={padding}
          paddingX={8}
          paddingBottom={6}
          paddingTop={9}
          display="flex"
          flexDirection="row"
          alignItems="center"
          color={props.color ? props.color : 'background'}
          css={{
            position: "relative",
            overflow: "hidden",
          }}
        >
          <View
            backgroundColor="muted"
            css={{
              zIndex: -1,
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
              "-webkit-filter": "opacity(64%) blur(12px)",
              filter: "opacity(64%) blur(12px)",
              "-webkit-transform": "scale(1.2)",
              transform: "scale(1.2)",
            }}
          />
          <View flexGrow={1}>
            {breadcrumbTitle &&
              breadcrumbHref && (
                <Link href={breadcrumbHref}>
                  <View flexDirection="row" alignItems="center">
                    <Icon
                      name="ChevronLeft"
                      color="background"
                      size={1}
                      marginRight={2}
                    />
                    <Text color="background" fontSize={1}>
                      {breadcrumbTitle}
                    </Text>
                  </View>
                </Link>
              )}
            <Text element="h1" fontSize={5}>
              {title}
            </Text>
            <Text fontSize={2}>{subtitle}</Text>
            <View flexDirection="row" marginTop={5} alignItems="center">
              {author && (
                <View flexDirection="row" alignItems="center" marginRight={5}>
                  {author}
                </View>
              )}
              {duration && (
                <View flexDirection="row" alignItems="center">
                  <Icon name="Clock" color="muted" marginRight={3} />
                  {duration}
                </View>
              )}
            </View>
          </View>
        </View>
        <View flexDirection="row" padding={8}>
          <View flexGrow={1} flexShrink={1}>
            {children}
          </View>
          <View
            alignItems="flex-end"
            width="300px"
            css={{
              position: "relative",
              top: -250,
              right: 0,
            }}
          >
            {ctaCard}
          </View>
        </View>
      </View>
    )}
  </Theme.Consumer>
);

export default OverviewHero;
