import * as React from "react";
import mapTypeToIcon from "../../utils/mapTypeToIcon";
import { IconProps } from "../IconBase";
import MoreMenu from "../MoreMenu";
import Text, { TextProps } from "../Text";
import Theme from "../Theme";
import View, { ViewProps } from "../View";
import Skeleton from "./components/Skeleton";

export interface Props extends ViewProps {
  title?: string;
  subTitle?: string;
  type?: string;
  skeleton?: boolean;
  thumbnail?: string;
  ratioThumbnail?: number;
  metadata?: string[];
  customActionItems?: React.ReactNode[];
  moreMenuItems?: any[];

  thumbnailStyle?: object;

  subTitleStyle?: TextProps;

  badgeIcon?: React.ComponentType<IconProps>;
  badgeIconProps?: IconProps;
  badgeIconContainer?: ViewProps;
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
  customActionItems = [],
  moreMenuItems = [],
  subTitleStyle,
  badgeIcon: BadgeIcon,
  badgeIconProps,
  badgeIconContainer,
  ...props
}: Props) => {
  const { spacing } = React.useContext(Theme);
  const [showAction, setShowAction] = React.useState(false);
  const onMouseEnterCard = () => {
    setShowAction(true);
  };
  const onMouseLeaveCard = () => {
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

  return (
    <View
      height="100%"
      width="100%"
      onMouseEnter={onMouseEnterCard}
      onMouseLeave={onMouseLeaveCard}
      {...props}
    >
      <View
        alignItems="center"
        justifyContent="center"
        backgroundColor="delicate"
        borderRadius={5}
        width="100%"
        css={{
          overflow: "hidden",
          backgroundImage: thumbnail ? `url(${thumbnail})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          maxWidth: "100%",
          paddingTop: `${ratioThumbnail * 100}%`,
        }}
      >
        <View style={{ position: "absolute", top: "50%", left: "50%" }}>
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
          display={[
            "flex",
            showAction ? "flex" : "none",
            showAction ? "flex" : "none",
          ]}
          flexDirection="row"
          position="absolute"
          data-role="action"
          css={{
            top: spacing[4],
            right: spacing[4],
          }}
        >
          {customActionItems}
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
            alignItems="center"
            justifyContent="center"
            width={56}
            height={56}
            {...badgeIconContainer}
            css={{
              position: "absolute",
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
