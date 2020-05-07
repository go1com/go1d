import * as React from "react";

import { tint } from "../../foundations";
import ButtonMinimal from "../ButtonFilled";
import Theme from "../Theme";
import View, { ViewProps } from "../View";

import DangerIcon from "../Icons/Danger";
import SuccessIcon from "../Icons/Success";
import WarningIcon from "../Icons/Warning";
import CrossIcon from "../Icons/Cross";

export interface BannerProps extends ViewProps {
  type: "success" | "warning" | "danger" | "note";
  close?: (evt: React.SyntheticEvent) => void;
  floating?: boolean;
}

const IconMap = {
  "note": DangerIcon,
  "warning": WarningIcon,
  "danger": DangerIcon,
  "success": SuccessIcon,
}

const Banner: React.SFC<BannerProps> = ({
  type,
  children,
  close,
  floating,
  ...props
}: BannerProps) => {
  const IconElement = IconMap[type];
  const tintLevel = type === "success" ? 0.1 : type === "note" ? 0.1 : 0.2;
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
          <IconElement color={type} marginTop={1} />
          <View
            flexWrap="wrap"
            flexGrow={1}
            paddingX={5}
            maxWidth="95%"
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
              <CrossIcon color={type} />
            </ButtonMinimal>
          )}
        </View>
      )}
    </Theme.Consumer>
  );
};

export default Banner;
