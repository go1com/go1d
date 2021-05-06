import * as React from "react";
import MoreMenu from "../MoreMenu";
import Text from "../Text";
import View, { ViewProps } from "../View";
import Skeleton from "./components/Skeleton";
import mapTypeToIcon from "./mapTypeToIcon";

export interface Props extends ViewProps {
  title?: string;
  supportingText?: string;
  type?: string;
  skeleton?: boolean;
  thumbnail?: string;
  metadata?: string[];
  customActionItems?: React.ReactNode[];
  moreMenuItems?: any[];
}

const Card = ({
  title,
  supportingText,
  type,
  skeleton,
  css,
  thumbnail,
  metadata,
  customActionItems = [],
  moreMenuItems = [],
  ...props
}: Props) => {
  if (skeleton) {
    return <Skeleton />;
  }

  return (
    <View
      height="100%"
      width="100%"
      css={[
        css,
        {
          textDecoration: "none",
          "&:hover, &:focus": {
            "[data-role='action']": {
              display: "flex",
            },
          },
        },
      ]}
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
          backgroundImage: thumbnail ? `url(${thumbnail})` : undefined,
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
          display={["flex", "none", "none"]}
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
            <MoreMenu itemList={moreMenuItems} marginLeft={3} />
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
        >
          {title}
        </Text>
      )}
      {supportingText && (
        <Text
          fontWeight="normal"
          marginTop={3}
          fontSize={1}
          color="default"
          lineClamp={1}
        >
          {supportingText}
        </Text>
      )}
      {metadata && (
        <Text fontWeight="normal" marginTop={3} fontSize={0} color="thin">
          {metadata.join(" ⋅ ")}
        </Text>
      )}
    </View>
  );
};

Card.displayName = "Card";

export default Card;
