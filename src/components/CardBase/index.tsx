import * as React from "react";
import mapTypeToIcon from "../../utils/mapTypeToIcon";
import { IconProps } from "../IconBase";
import MoreMenu from "../MoreMenu";
import Text, { TextProps } from "../Text";
import Theme from "../Theme";
import View, { ViewProps } from "../View";
import Skeleton from "./components/Skeleton";

export interface ActionProps {
  ref: any;
  onFocus: () => void;
  onBlur: () => void;
}
export interface Props extends ViewProps {
  title?: string;
  subTitle?: string;
  type?: string;
  skeleton?: boolean;
  thumbnail?: string;
  ratioThumbnail?: number;
  metadata?: string[];
  moreMenuItems?: any[];
  hasHoverState?: boolean;
  hasFocusState?: boolean;

  subTitleStyle?: TextProps;

  badgeIcon?: React.ComponentType<IconProps>;
  badgeIconProps?: IconProps;
  badgeIconContainer?: ViewProps;
  customActionItemsRenderer?: (actionProps: ActionProps) => React.ReactNode;
}

const Card = ({
  title,
  subTitle,
  type,
  skeleton,
  css,
  thumbnail,
  ratioThumbnail = 1,
  metadata,
  customActionItemsRenderer,
  moreMenuItems = [],
  hasHoverState,
  hasFocusState,
  subTitleStyle,
  badgeIcon: BadgeIcon,
  badgeIconProps,
  badgeIconContainer,
  ...restProps
}: Props) => {
  const { spacing, colors } = React.useContext(Theme);
  const [showAction, setShowAction] = React.useState(false);
  const actionRef = React.useRef(null);
  const handleShowAction = () => {
    setShowAction(true);
  };
  const handleHideAction = () => {
    setShowAction(false);
  };

  const onMoreMenuVisibilityChange = (showMoreMenu: boolean) => {
    if (showMoreMenu) {
      setShowAction(true);
    }
  };

  if (skeleton) {
    return <Skeleton data-testId="skeleton" />;
  }

  const focusProps = hasFocusState && { tabIndex: 0 };

  return (
    <View
      height="100%"
      width="100%"
      onMouseEnter={handleShowAction}
      onMouseLeave={handleHideAction}
      onFocus={handleShowAction}
      onBlur={handleHideAction}
      padding={4}
      borderRadius={5}
      border={2}
      borderColor="transparent"
      css={{
        "&:hover": hasHoverState && {
          backgroundColor: colors.soft,
          borderColor: colors.soft,
        },
        "&:focus": hasFocusState && {
          borderColor: colors.successLow,
        },
        "&:active": hasFocusState && {
          borderColor: colors.successLow,
        },
        ...css,
      }}
      {...focusProps}
      {...restProps}
    >
      <View
        position="relative"
        width="100%"
        alignItems="center"
        justifyContent="center"
        backgroundColor="delicate"
        borderRadius={5}
        transition="subtle"
        css={{
          backgroundImage: thumbnail ? `url(${thumbnail})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          maxWidth: "100%",
          paddingTop: `${ratioThumbnail * 100}%`,
        }}
      >
        <View position="absolute" style={{ top: "50%", left: "50%" }}>
          {!thumbnail &&
            mapTypeToIcon(type, {
              size: 7,
              color: "subtle",
              style: {
                transform: "translate(-50%, -50%)",
              },
            })}
        </View>
        <View
          display="flex"
          flexDirection="row"
          position="absolute"
          transition="subtle"
          data-role="action"
          css={{
            top: spacing[4],
            right: spacing[4],
            visibility: showAction ? "visible" : "hidden",
            opacity: showAction ? 1 : 0,
          }}
        >
          {customActionItemsRenderer?.({
            ref: actionRef,
            onFocus: handleShowAction,
            onBlur: handleHideAction,
          })}
          {moreMenuItems && moreMenuItems.length > 0 && (
            <MoreMenu
              itemList={moreMenuItems}
              marginLeft={3}
              onStateChange={onMoreMenuVisibilityChange}
            />
          )}
        </View>
        {BadgeIcon && (
          <View
            position="absolute"
            alignItems="center"
            justifyContent="center"
            width={56}
            height={56}
            {...badgeIconContainer}
            css={{
              left: 0,
              bottom: 0,
              borderBottomLeftRadius: spacing[6],
              borderTopRightRadius: spacing[6],
              ...(badgeIconContainer && badgeIconContainer.css),
            }}
          >
            <BadgeIcon size={4} {...badgeIconProps} />
          </View>
        )}
      </View>
      {title && (
        <Text
          fontWeight="medium"
          marginTop={4}
          fontSize={2}
          color="contrast"
          lineClamp={2}
        >
          {title}
        </Text>
      )}
      {subTitle && (
        <Text
          fontWeight="normal"
          marginTop={3}
          fontSize={1}
          color="default"
          {...subTitleStyle}
        >
          {subTitle}
        </Text>
      )}
      {metadata && (
        <Text fontWeight="normal" marginTop={3} fontSize={0} color="subtle">
          {metadata.join(" ⋅ ")}
        </Text>
      )}
    </View>
  );
};

Card.displayName = "Card";

export default Card;
