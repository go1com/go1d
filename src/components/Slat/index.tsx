import * as React from "react";
import mapTypeToIcon from "../../utils/mapTypeToIcon";
import safeInvoke from "../../utils/safeInvoke";
import Avatar from "../Avatar";
import ButtonMinimal from "../ButtonMinimal";
import { IconProps } from "../IconBase";
import { IconPlaylist } from "../Icons";
import MoreMenu from "../MoreMenu";
import { Item as DropdownItem } from "../MoreMenu/DropdownMenuItem";
import Skeleton from "../SlatSkeleton";
import Text from "../Text";
import Theme from "../Theme";
import View, { ViewProps } from "../View";

interface PrimaryActionItem {
  icon?: React.ComponentType<IconProps>;
  href?: any;
  color?: string;
  iconColor?: string;
  onClick?: (evt: React.SyntheticEvent) => void;
  actionRenderer?: () => React.ReactChild;
}

export interface SlatProps extends ViewProps {
  id?: number;
  title?: string;
  supportingText?: string;
  meta?: {
    image?: string;
    subtitle: string[];
    data: string[];
  };
  thumbnail?: string;
  type?: string;
  primaryActionItems?: PrimaryActionItem[];
  secondaryActionItems?: DropdownItem[];
  skeleton?: boolean;
  href?: string;
}

const getItemTypeBadge = (type: string) => {
  switch (type) {
    case "playlist":
      return IconPlaylist;
    default:
      return null;
  }
};

const Slat: React.SFC<SlatProps> = ({
  id,
  meta,
  title,
  supportingText,
  thumbnail,
  type = "li",
  primaryActionItems = [],
  secondaryActionItems = [],
  skeleton = false,
  href,
  ...props
}: SlatProps) => {
  if (skeleton) {
    return <Skeleton />;
  }

  const ItemTypeBadge = getItemTypeBadge(type);
  const ItemEmptyIcon = mapTypeToIcon(type, { color: "subtle" });

  const onClickPrimaryAction = onItemClick => (e: React.SyntheticEvent) => {
    safeInvoke(onItemClick);
    if (href) {
      e.stopPropagation();
      e.preventDefault();
    }
  };

  const Thumbnail = (
    <Theme.Consumer>
      {({ breakpoints, spacing }) => {
        return (
          <View
            borderRadius={[4, 5, 5]}
            alignItems="start"
            backgroundColor="delicate"
            height={[80, 128, 128]}
            width={[80, 128, 128]}
            css={{
              overflow: "hidden",
              backgroundImage: thumbnail ? `url(${thumbnail})` : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
            }}
          >
            {!thumbnail && (
              <View
                alignItems="center"
                justifyContent="center"
                height="100%"
                width="100%"
                opacity="IconEmpty"
              >
                {ItemEmptyIcon}
              </View>
            )}
            {ItemTypeBadge && thumbnail && (
              <View
                alignItems="center"
                justifyContent="center"
                backgroundColor="contrast"
                width={[32, 48, 48]}
                height={[32, 48, 48]}
                position="absolute"
                css={{
                  left: 0,
                  bottom: 0,
                  borderBottomLeftRadius: spacing[5],
                  borderTopRightRadius: spacing[5],
                  [breakpoints.sm]: {
                    borderBottomLeftRadius: spacing[4],
                    borderTopRightRadius: spacing[4],
                  },
                }}
              >
                <ItemTypeBadge color="background" size={[3, 4, 4]} />
              </View>
            )}
          </View>
        );
      }}
    </Theme.Consumer>
  );

  return (
    <Theme.Consumer>
      {({ colors, spacing }) => {
        return (
          <View
            data-testid="slat"
            element={href ? "a" : "div"}
            href={href}
            flexDirection="row"
            color="default"
            padding={4}
            borderRadius={5}
            css={{
              textDecoration: "none",
              ":hover": href
                ? {
                    backgroundColor: colors.soft,
                  }
                : {},
              ":focus": href
                ? {
                    border: `2px solid ${colors.successLow}`,
                    padding: spacing[4] - 2,
                  }
                : {},
            }}
            {...props}
          >
            <View
              paddingRight={[0, 4, 4]}
              flexShrink={1}
              flexGrow={1}
              width="100%"
              flexDirection="column"
              justifyContent="center"
            >
              <View
                alignItems={["center", "normal", "normal"]}
                flexDirection={["row", "column", "column"]}
                marginBottom={3}
              >
                <View flexGrow={1} flexShrink={1} paddingRight={[3, 0, 0]}>
                  {title && (
                    <Text
                      lineClamp={2}
                      fontSize={3}
                      fontWeight="medium"
                      paddingBottom={3}
                    >
                      {title}
                    </Text>
                  )}
                  {supportingText && (
                    <Text fontSize={2} lineClamp={2} color="subtle">
                      {supportingText}
                    </Text>
                  )}
                </View>
                <View display={["flex", "none", "none"]}>{Thumbnail}</View>
              </View>
              <View
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
              >
                {meta && (
                  <View flexDirection="row" alignItems="center" flexBasis="50%">
                    <Avatar
                      fullName={meta.subtitle[0]}
                      scaleSize={1}
                      backgroundColor="faded"
                      src={meta.image}
                    />
                    <View paddingLeft={3}>
                      <Text fontWeight="medium" ellipsis={true} fontSize={1}>
                        {meta.subtitle.join(" ･ ")}
                      </Text>
                      <Text color="subtle" fontSize={1} ellipsis={true}>
                        {meta.data.join(" ･ ")}
                      </Text>
                    </View>
                  </View>
                )}
                {(!!primaryActionItems.length ||
                  !!secondaryActionItems.length) && (
                  <View flexDirection="row">
                    <View flexDirection="row" flexGrow={1} alignItems="center">
                      {!!primaryActionItems.length && (
                        <View>
                          {primaryActionItems.map(
                            (
                              { actionRenderer, onClick: onItemClick, ...rest },
                              i
                            ) => (
                              <>
                                {typeof actionRenderer === "function" &&
                                  actionRenderer()}
                                {!actionRenderer && (
                                  <ButtonMinimal
                                    key={`${id}_primary_action_${i}`}
                                    aria-label="primary-action"
                                    onClick={onClickPrimaryAction(onItemClick)}
                                    {...rest}
                                  />
                                )}
                              </>
                            )
                          )}
                        </View>
                      )}
                      {!!secondaryActionItems.length && (
                        <MoreMenu
                          itemList={secondaryActionItems}
                          isButtonFilled={false}
                          marginLeft={3}
                        />
                      )}
                    </View>
                  </View>
                )}
              </View>
            </View>
            <View display={["none", "flex", "flex"]}>{Thumbnail}</View>
          </View>
        );
      }}
    </Theme.Consumer>
  );
};

export default Slat;
