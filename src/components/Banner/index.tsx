import * as React from "react";

import { tint } from "../../foundations";
import ButtonMinimal from "../ButtonFilled";
import Icon from "../Icon";
import Theme from "../Theme";
import View, { ViewProps } from "../View";

export interface BannerProps extends ViewProps {
  type: "success" | "warning" | "danger";
  close?: (evt: React.SyntheticEvent) => void;
  floating?: boolean;
}

const Banner: React.SFC<BannerProps> = ({
  type,
  children,
  close,
  floating,
  ...props
}: BannerProps) => {
  const iconType = type.charAt(0).toUpperCase() + type.slice(1);
  const tintLevel = type === "success" ? 0.1 : type === "warning" ? 0.2 : 0.2;
  return (
    <Theme.Consumer>
      {({ colors }) => (
        <View
          padding={4}
          marginY={3}
          borderRadius={2}
          boxShadow={floating && "distant"}
          flexDirection="row"
          justifyContent="flex-start"
          data-testid="banner"
          maxWidth="100%"
          css={{
            backgroundColor: `${
              floating ? colors.background : tint(colors[type], tintLevel)
            }`,
            borderLeft: `4px solid ${colors[type]}`,
            transition: "all 0.2s linear",
          }}
          {...props}
        >
          <Icon name={iconType} color={type} marginTop={1} />
          <View
            flexWrap="wrap"
            flexGrow={1}
            paddingX={5}
            width="90%"
            maxWidth="90%"
            alignItems={floating ? "center" : "left"}
            css={{
              "*": {
                maxWidth: "100%", // IE11 fix
              },
            }}
          >
            {children}
          </View>
          {close && (
            <ButtonMinimal
              borderRadius={10}
              boxShadow="none"
              size="sm"
              height="1.05rem"
              onClick={close}
              data-testid="close"
              paddingX={1}
              paddingY={1}
            >
              <Icon name="Cross" color={type} />
            </ButtonMinimal>
          )}
        </View>
      )}
    </Theme.Consumer>
  );
};

export default Banner;
