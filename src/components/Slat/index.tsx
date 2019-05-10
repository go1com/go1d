import * as React from "react";
import foundations from "../../foundations";
import formatPrice from "../../utils/priceFormatter";
import Icon from "../Icon";
import MoreMenu from "../MoreMenu";
import { Item as DropdownItem } from "../MoreMenu/DropdownMenuItem";
import Skeleton from "../SlatSkeleton";
import Text from "../Text";
import Theme from "../Theme";
import View, { ViewProps } from "../View";

export interface SlatProps extends ViewProps {
  id?: number;
  topMeta?: string[];
  title?: string;
  description?: string;
  currency?: string;
  price?: number;
  bottomMeta?: Array<{
    icon?: string;
    text: string;
  }>;
  image?: string;
  type?: string;
  typeBackground?: string;
  actionRenderer?: () => React.ReactChild;
  dropdownItems?: DropdownItem[];
  tax?: {
    amount?: number;
    included?: boolean;
  };
}

const Slat: React.SFC<SlatProps> = ({
  id,
  topMeta,
  title,
  description,
  currency,
  price,
  tax,
  bottomMeta,
  image,
  type,
  typeBackground = "background",
  actionRenderer,
  dropdownItems,
  skeleton = false,
  ...props
}: SlatProps) => {
  if (skeleton) {
    return <Skeleton />;
  }

  let icon;
  switch (type) {
    case "event":
      icon = "Calendar";
      break;
    case "course":
      icon = "Course";
      break;
    default:
      icon = "Course";
  }

  return (
    <Theme.Consumer>
      {({ breakpoints, colors, spacing, hoverStyle }) => {
        return (
          <View
            borderRadius={2}
            boxShadow="crisp"
            flexDirection="row"
            marginBottom={4}
            color="default"
            css={[
              {
                background: `${colors.background}`,
                overflow: "hidden",
                textDecoration: "none",
                [breakpoints.sm]: {
                  flexDirection: "column",
                },
              },
              !dropdownItems && !actionRenderer && hoverStyle,
            ]}
            {...props}
          >
            <View
              padding={3}
              alignItems="start"
              backgroundColor="default"
              backgroundOpacity={image ? "none" : "emptyBackground"}
              css={{
                overflow: "hidden",
                backgroundImage: image ? `url(${image})` : undefined,
                backgroundSize: "cover",
                position: "relative",
                height: 142,
                width: 221,
                [breakpoints.sm]: {
                  height: 100,
                  width: "100%",
                },
              }}
            >
              {!image && (
                <View
                  alignItems="center"
                  justifyContent="center"
                  height="100%"
                  width="100%"
                  opacity="emptyIcon"
                >
                  <Icon size={7} name="Empty" color="default" />
                </View>
              )}
              {type && (
                <View
                  flexDirection="row"
                  padding={2}
                  borderRadius={1}
                  color={
                    typeBackground === "background" ? "contrast" : "background"
                  }
                  backgroundColor={typeBackground}
                  css={{
                    position: "absolute",
                    bottom: 10,
                    left: 10,
                  }}
                >
                  <View paddingRight={2}>
                    <Icon name={icon} />
                  </View>
                  <Text
                    color={
                      typeBackground === "background"
                        ? "contrast"
                        : "background"
                    }
                    fontSize={1}
                  >
                    {type && type.toUpperCase()}
                  </Text>
                </View>
              )}
            </View>
            <View
              paddingY={4}
              paddingX={5}
              flexShrink={1}
              flexGrow={1}
              width="100%"
              flexDirection="column"
              justifyContent="space-between"
            >
              <View
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
              >
                {topMeta && (
                  <View
                    flexDirection="row"
                    maxWidth={dropdownItems && "90%"}
                    css={{
                      [breakpoints.sm]: {
                        marginBottom: spacing[2],
                        maxWidth: "90%",
                      },
                    }}
                  >
                    <Text ellipsis={true} color="subtle" fontSize={1}>
                      {topMeta.join(" / ")}
                    </Text>
                  </View>
                )}
                {(actionRenderer || dropdownItems) && (
                  <View
                    flexDirection="row"
                    marginTop={[-7, -1]}
                    css={{
                      marginRight: "-10px",
                      [breakpoints.sm]: {
                        marginRight: "-15px",
                      },
                    }}
                  >
                    {actionRenderer && actionRenderer()}
                    {dropdownItems &&
                      dropdownItems.length > 0 && (
                        <MoreMenu
                          itemList={dropdownItems}
                          isButtonFilled={false}
                          height="30px"
                          marginTop={-2}
                          paddingY={2}
                        />
                      )}
                  </View>
                )}
              </View>
              {title && (
                <Text
                  fontSize={3}
                  fontWeight="semibold"
                  ellipsis={true}
                  css={{
                    [breakpoints.sm]: {
                      wordWrap: "break-word",
                      whiteSpace: "initial",
                      lineHeight: 1.2,
                      maxHeight: "2.4rem",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      display: "-webkit-box",
                      fontSize: foundations.type.scale.sm[2],
                      marginBottom: spacing[1],
                      order: -1,
                      maxWidth: "90%",
                    },
                  }}
                >
                  {title}
                </Text>
              )}
              {description && (
                <Text
                  fontSize={2}
                  ellipsis={true}
                  marginBottom={4}
                  color="subtle"
                  css={{
                    [breakpoints.sm]: {
                      display: "none",
                    },
                  }}
                >
                  {description}
                </Text>
              )}
              <View
                flexDirection="row"
                justifyContent="space-between"
                alignItems="flex-end"
                css={{
                  [breakpoints.sm]: {
                    flexDirection: "column",
                    alignItems: "flex-start",
                  },
                }}
              >
                {bottomMeta && (
                  <View
                    flexDirection="row"
                    flexGrow={1}
                    alignItems="flex-end"
                    css={{
                      [breakpoints.sm]: {
                        flexDirection: "column",
                        alignItems: "flex-start",
                      },
                    }}
                  >
                    {bottomMeta.map((meta, i) => (
                      <Text
                        display="flex"
                        marginRight={5}
                        color="subtle"
                        fontSize={1}
                        key={`${id}_bottom_meta_${i}`}
                        css={{
                          [breakpoints.sm]: {
                            marginTop: spacing[3],
                            marginBottom: spacing[3],
                          },
                        }}
                      >
                        {meta.icon && (
                          <Icon
                            name={meta.icon}
                            marginRight={3}
                            color="muted"
                          />
                        )}
                        {meta.text}
                      </Text>
                    ))}
                  </View>
                )}
                {currency &&
                  price > 0 && (
                    <View
                      flexDirection="row"
                      css={{
                        [breakpoints.sm]: {
                          alignSelf: "flex-start",
                        },
                      }}
                    >
                      <Text color="accent" fontWeight="semibold">
                        {formatPrice(currency, price, tax)}
                      </Text>
                    </View>
                  )}
              </View>
            </View>
          </View>
        );
      }}
    </Theme.Consumer>
  );
};

export default Slat;
