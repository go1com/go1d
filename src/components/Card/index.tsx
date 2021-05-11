import * as React from "react";
import MoreMenu from "../MoreMenu";
import Text from "../Text";
import Theme from "../Theme";
import View, { ViewProps } from "../View";
import Skeleton from "./components/Skeleton";
import mapTypeToIcon from "./mapTypeToIcon";

export interface Props extends ViewProps {
  title?: string;
  providerName?: string;
  type?: string;
  skeleton?: boolean;
  thumbnail?: string;
  metadata?: string[];
  customActionItems?: React.ReactNode[];
  moreMenuItems?: any[];
}

const Card = ({
  title,
  providerName,
  type,
  skeleton,
  css,
  thumbnail,
  metadata,
  customActionItems = [],
  moreMenuItems = [],
  ...props
}: Props) => {
  const { colors } = React.useContext(Theme);
  const [showAction, setShowAction] = React.useState(false);
  const onMouseEnterCard = () => {
    setShowAction(true);
  };
  const onMouseLeaveCard = () => {
    setShowAction(false);
  };

  const onStateMoreMenuChange = (showMoreMenu: boolean) => {
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
          paddingTop: "100%",
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
            top: "16px",
            right: "16px",
          }}
        >
          {customActionItems &&
            customActionItems &&
            customActionItems.map(e => e)}
          {moreMenuItems && moreMenuItems.length > 0 && (
            <MoreMenu
              itemList={moreMenuItems}
              marginLeft={3}
              onStateChange={onStateMoreMenuChange}
            />
          )}
        </View>
      </View>
      {title && (
        <Text
          fontWeight="medium"
          marginTop={4}
          fontSize={2}
          color="contrast"
          lineClamp={2}
          css={{
            "&:hover, &:focus": {
              color: colors.contrast,
            },
          }}
        >
          {title}
        </Text>
      )}
      {providerName && (
        <Text
          fontWeight="normal"
          marginTop={3}
          fontSize={1}
          color="default"
          lineClamp={1}
          css={{
            "&:hover, &:focus": {
              color: colors.default,
            },
          }}
        >
          {providerName}
        </Text>
      )}
      {metadata && (
        <Text
          fontWeight="normal"
          marginTop={3}
          fontSize={0}
          color="thin"
          css={{
            "&:hover, &:focus": {
              color: colors.thin,
            },
          }}
        >
          {metadata.join(" ⋅ ")}
        </Text>
      )}
    </View>
  );
};

Card.displayName = "Card";

export default Card;
