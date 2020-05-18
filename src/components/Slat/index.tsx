import * as React from "react";
import foundations from "../../foundations";
import formatPrice from "../../utils/priceFormatter";
import ContentType from "../ContentType";
import MoreMenu from "../MoreMenu";
import { Item as DropdownItem } from "../MoreMenu/DropdownMenuItem";
import Skeleton from "../SlatSkeleton";
import Text from "../Text";
import Theme from "../Theme";
import View, { ViewProps } from "../View";

import { IconProps } from "../IconBase";
import EmptyIcon from "../Icons/Empty";

export interface SlatProps extends ViewProps {
  id?: number;
  topMeta?: string[];
  title?: string;
  description?: string;
  currency?: string;
  price?: number;
  priceSuffix?: string;
  bottomMeta?: Array<{
    icon?: React.ComponentType<IconProps>;
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
  priceSuffix = "",
  tax,
  bottomMeta,
  image,
  type = "Course",
  typeBackground = "background",
  actionRenderer,
  dropdownItems,
  skeleton = false,
  ...props
}: SlatProps) => {
  if (skeleton) {
    return <Skeleton />;
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
                backgroundPosition: "center",
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
                  <EmptyIcon size={7} color="default" />
                </View>
              )}
              {type && (
                <ContentType
                  type={type}
                  text={type}
                  background={typeBackground}
                  css={{
                    position: "absolute",
                    bottom: 10,
                    left: 10,
                  }}
                />
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
                    {dropdownItems && dropdownItems.length > 0 && (
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
                    {bottomMeta.map(({ icon: IconElement, text }, i) => (
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
                        {IconElement && (
                          <IconElement marginRight={3} color="muted" />
                        )}
                        {text}
                      </Text>
                    ))}
                  </View>
                )}
                {currency && price && (
                  <View
                    flexDirection="row"
                    css={{
                      [breakpoints.sm]: {
                        alignSelf: "flex-start",
                      },
                    }}
                  >
                    <Text color="accent" fontWeight="semibold">
                      {`
                        ${
                          typeof price === "number"
                            ? formatPrice(currency, price, tax)
                            : price
                        }
                       ${priceSuffix}`}
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
