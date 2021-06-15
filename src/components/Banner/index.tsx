import * as React from "react";

import * as Color from "color";
import ButtonMinimal from "../ButtonFilled";
import Theme from "../Theme";
import View, { ViewProps } from "../View";

import IconCross from "../Icons/Cross";
import IconDanger from "../Icons/Danger";
import IconSuccess from "../Icons/Success";
import IconWarning from "../Icons/Warning";
import Row from "../Row";

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

const getBackgroundColor = (colors, customColor, floating = false) => {
  let cssColor = colors.background;

  if (floating) {
    return cssColor;
  }

  switch (customColor) {
    case "success":
      cssColor = colors.successHigh;
      break;
    case "warning":
      cssColor = colors.warningHigh;
      break;
    case "danger":
      cssColor = colors.dangerHigh;
      break;
    case "note":
      cssColor = colors.noteHigh;
      break;
    default:
      cssColor = Color(colors[customColor])
        .lightness(93)
        .rgb()
        .string();
      break;
  }

  return cssColor;
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
  return (
    <Theme.Consumer>
      {({ colors }) => (
        <Row
          padding={4}
          marginY={3}
          borderRadius={2}
          boxShadow={floating && "distant"}
          flexDirection="row"
          justifyContent="flex-start"
          data-testid="banner"
          maxWidth="100%"
          css={{
            backgroundColor: `${getBackgroundColor(
              colors,
              customColor,
              floating
            )}`,
            borderLeft: `4px solid ${colors[customColor]}`,
            transition: "all 0.2s linear",
          }}
          {...props}
        >
          <IconElement color={customColor} marginTop={1} />
          <View
            flexWrap="wrap"
            flexGrow={1}
            flexShrink={1}
            paddingLeft={[4, 5]}
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
            <View paddingLeft={[4, 5]}>
              <ButtonMinimal
                borderRadius={3}
                boxShadow="none"
                css={{
                  borderColor: `${getBackgroundColor(
                    colors,
                    customColor,
                    floating
                  )}`,
                  backgroundColor: `${getBackgroundColor(
                    colors,
                    customColor,
                    floating
                  )}`,
                  "&:hover, &:focus, &:active": {
                    backgroundColor: `${getBackgroundColor(
                      colors,
                      customColor,
                      floating
                    )}`,
                    borderColor: `${getBackgroundColor(
                      colors,
                      customColor,
                      floating
                    )}`,
                  },
                }}
                size="sm"
                height="1.05rem"
                onClick={close}
                data-testid="close"
                paddingX={1}
                paddingY={1}
              >
                <IconCross color={customColor} />
              </ButtonMinimal>
            </View>
          )}
        </Row>
      )}
    </Theme.Consumer>
  );
};

export default Banner;
