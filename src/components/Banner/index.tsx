import * as React from "react";

import { tint } from "../../foundations";
import ButtonMinimal from "../ButtonFilled";
import Theme from "../Theme";
import View, { ViewProps } from "../View";

import IconCross from "../Icons/Cross";
import IconDanger from "../Icons/Danger";
import IconSuccess from "../Icons/Success";
import IconWarning from "../Icons/Warning";

export interface BannerProps extends ViewProps {
  type: "success" | "warning" | "danger" | "note";
  close?: (evt: React.SyntheticEvent) => void;
  floating?: boolean;
  customColor?: string;
}

const IconMap = {
  note: IconDanger,
  warning: IconWarning,
  danger: IconDanger,
  success: IconSuccess,
};

const Banner: React.SFC<BannerProps> = ({
  type,
  children,
  close,
  floating,
  customColor = type,
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
              floating
                ? colors.background
                : tint(colors[customColor], tintLevel)
            }`,
            borderLeft: `4px solid ${colors[customColor]}`,
            transition: "all 0.2s linear",
          }}
          {...props}
        >
          <IconElement color={customColor} marginTop={1} />
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
              <IconCross color={customColor} />
            </ButtonMinimal>
          )}
        </View>
      )}
    </Theme.Consumer>
  );
};

export default Banner;
