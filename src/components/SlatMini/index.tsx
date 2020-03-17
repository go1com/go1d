import get = require("lodash/get");
import * as React from "react";
import ContentType from "../ContentType";
import Icon from "../Icon";
import MoreMenu from "../MoreMenu";
import { Item as DropdownItem } from "../MoreMenu/DropdownMenuItem";
import SlatMiniSkeleton from "../SlatMiniSkeleton";
import Text from "../Text";
import Theme from "../Theme";
import View, { ViewProps } from "../View";

export interface SlatMiniProps extends ViewProps {
  id?: number;
  title?: string | React.ReactNode;
  bottomMeta?: string[] | string[][];
  image?: string;
  type?: string;
  href?: string;
  typeBackground?: string;
  actionRenderer?: () => React.ReactChild;
  dropdownItems?: DropdownItem[];
  size?: "lg" | "md" | "sm";
  imageOverlayRenderer?: () => React.ReactNode;
}

const SlatMini: React.SFC<SlatMiniProps> = ({
  id,
  title,
  bottomMeta = [],
  image,
  type,
  href,
  typeBackground = "contrast",
  actionRenderer,
  dropdownItems,
  skeleton = false,
  size = "md",
  imageOverlayRenderer,
  ...props
}: SlatMiniProps) => {
  if (skeleton) {
    return <SlatMiniSkeleton />;
  }

  const bottomMetaRender = () => {
    if (bottomMeta && Array.isArray(bottomMeta)) {
      let renderContent: string[] = [];
      (bottomMeta as any[]).forEach(metaGroup => {
        if (Array.isArray(metaGroup)) {
          renderContent.push(metaGroup.join(" ⋅ "));
        }
      });

      if (!renderContent.length) {
        renderContent = [bottomMeta.join(" ⋅ ")];
      }

      return renderContent.map((content, i) => {
        return (
          <Text
            key={i}
            color="subtle"
            display="block"
            ellipsis={true}
            fontSize={1}
          >
            {content}
          </Text>
        );
      });
    }

    return null;
  };

  const imageSize = get({ lg: 9, md: 8, sm: 7 }, size);
  const iconSize = imageSize - 1;

  return (
    <Theme.Consumer>
      {({ colors, spacing }) => {
        return (
          <View
            flexDirection="row"
            marginBottom={4}
            color="default"
            overflow="hidden"
            data-testid="slatmini"
            {...props}
          >
            {/* Render slat image */}
            <View
              element={href ? "a" : "div"}
              href={href}
              borderRadius={2}
              padding={3}
              alignItems="start"
              backgroundColor="default"
              backgroundOpacity={image ? "none" : "emptyBackground"}
              height={spacing[imageSize]}
              width={spacing[imageSize]}
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
                  <Icon size={iconSize} name="Empty" color="default" />
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

              {imageOverlayRenderer && imageOverlayRenderer()}
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
                flexBasis="100%"
                paddingRight={actionRenderer || dropdownItems ? 4 : 0}
              >
                {title && (
                  <Text
                    element={href ? "a" : "div"}
                    href={href}
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

                {bottomMetaRender()}
              </View>

              {/* Render slat actions */}
              {(actionRenderer || dropdownItems) && (
                <View flexDirection="row" alignSelf="center" marginRight={4}>
                  {actionRenderer && actionRenderer()}
                  {dropdownItems && dropdownItems.length > 0 && (
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
