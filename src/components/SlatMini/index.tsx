import * as React from "react";
import ContentType from "../ContentType";
import Icon from "../Icon";
import Link from "../Link";
import MoreMenu from "../MoreMenu";
import { Item as DropdownItem } from "../MoreMenu/DropdownMenuItem";
import SlatMiniSkeleton from "../SlatMiniSkeleton";
import Text from "../Text";
import Theme from "../Theme";
import View, { ViewProps } from "../View";

export interface SlatMiniProps extends ViewProps {
  id?: number;
  title?: string;
  bottomMeta?: string[];
  image?: string;
  type?: string;
  href?: string;
  typeBackground?: string;
  actionRenderer?: () => React.ReactChild;
  dropdownItems?: DropdownItem[];
}

const SlatMini: React.SFC<SlatMiniProps> = ({
  id,
  title,
  bottomMeta,
  image,
  type = "Course",
  href,
  typeBackground = "contrast",
  actionRenderer,
  dropdownItems,
  skeleton = false,
  ...props
}: SlatMiniProps) => {
  if (skeleton) {
    return <SlatMiniSkeleton />;
  }

  return (
    <Theme.Consumer>
      {({ breakpoints, colors, spacing }) => {
        return (
          <View
            flexDirection="row"
            marginBottom={4}
            color="default"
            overflow="hidden"
            {...props}
          >
            {/* Render slat image */}
            <View
              element={href ? Link : "div"}
              to={href}
              borderRadius={2}
              padding={3}
              alignItems="start"
              backgroundColor="default"
              backgroundOpacity={image ? "none" : "emptyBackground"}
              height={spacing[8]}
              width={spacing[8]}
              overflow="hidden"
              position="relative"
              css={{
                backgroundImage: image ? `url(${image})` : undefined,
                backgroundSize: "cover",
                backgroundPosition: "center",
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
                <ContentType
                  type={type}
                  background={typeBackground}
                  css={{
                    borderRadius: `0 ${spacing[2]}px 0 ${spacing[2]}px`,
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                  }}
                />
              )}
            </View>

            <View
              paddingLeft={4}
              flexShrink={1}
              flexGrow={1}
              width="100%"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
            >
              {/* Render slat content */}
              <View
                flexGrow={1}
                flexShrink={1}
                paddingRight={actionRenderer || dropdownItems ? 4 : 0}
              >
                {title && (
                  <Text
                    element={href ? Link : "div"}
                    to={href}
                    fontSize={2}
                    marginBottom={2}
                    fontWeight="semibold"
                    lineClamp={2}
                    css={{
                      /* Only set hover color once `href` is valid */
                      ...(href && {
                        "&:hover, &:focus": {
                          color: colors.accent,
                        },
                      }),
                    }}
                  >
                    {title}
                  </Text>
                )}

                {bottomMeta && (
                  <Text
                    color="subtle"
                    display="flex"
                    ellipsis={true}
                    fontSize={1}
                  >
                    {bottomMeta.join(" ⋅ ")}
                  </Text>
                )}
              </View>

              {/* Render slat actions */}
              {(actionRenderer || dropdownItems) && (
                <View flexDirection="row" alignSelf="center" marginRight={4}>
                  {actionRenderer && actionRenderer()}
                  {dropdownItems &&
                    dropdownItems.length > 0 && (
                      <MoreMenu
                        size="sm"
                        iconColor="muted"
                        marginTop={-2}
                        paddingY={2}
                        isButtonFilled={false}
                        itemList={dropdownItems}
                      />
                    )}
                </View>
              )}
            </View>
          </View>
        );
      }}
    </Theme.Consumer>
  );
};

export default SlatMini;
