import * as React from "react";

import ButtonMinimal from "../ButtonFilled";
import Theme from "../Theme";
import View, { ViewProps } from "../View";

import IconCross from "../Icons/Cross";
import IconDanger from "../Icons/Danger";
import IconInfo from "../Icons/Info";
import IconSuccess from "../Icons/Success";
import IconWarning from "../Icons/Warning";
import Row from "../Row";

export interface BannerProps extends ViewProps {
  status: "success" | "warning" | "danger" | "note";
  close?: (evt: React.SyntheticEvent) => void;
  floating?: boolean;
  css?: any;
}

const IconMap = {
  note: IconInfo,
  warning: IconWarning,
  danger: IconDanger,
  success: IconSuccess,
};

export const getColors = (colors, status, floating = false) => {
  let cssColor;

  switch (status) {
    case "warning":
      cssColor = {
        background: colors.warningHighest,
        element: colors.warningMid,
      };
      break;
    case "danger":
      cssColor = {
        background: colors.dangerHighest,
        element: colors.dangerLow,
      };
      break;
    case "note":
      cssColor = {
        background: colors.noteHighest,
        element: colors.noteMid,
      };
      break;
    default:
      cssColor = {
        background: colors.successHighest,
        element: colors.successMid,
      };
      break;
  }

  if (floating) {
    cssColor.background = colors.background;
  }

  return cssColor;
};

const Banner: React.SFC<BannerProps> = ({
  status,
  children,
  close,
  floating,
  css,
  ...props
}) => {
  const IconElement = IconMap[status];
  return (
    <Theme.Consumer>
      {({ colors }) => {
        const contentColors = getColors(colors, status, floating);
        return (
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
              backgroundColor: `${contentColors.background}`,
              borderLeft: `4px solid ${contentColors.element}`,
              transition: "all 0.2s linear",
              ...css,
            }}
            {...props}
          >
            <View paddingTop={1}>
              <IconElement size={4} color={status} />
            </View>
            <View
              paddingTop={[1, 2, 2]}
              flexWrap="wrap"
              flexGrow={1}
              flexShrink={1}
              paddingLeft={3}
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
              <View paddingLeft={[4, 5]} paddingTop={[1, 2, 2]}>
                <ButtonMinimal
                  aria-label="Close Banner"
                  borderRadius={3}
                  boxShadow="none"
                  css={{
                    borderColor: contentColors.background,
                    backgroundColor: contentColors.background,
                    "&:hover, &:focus, &:active": {
                      backgroundColor: contentColors.background,
                      borderColor: contentColors.background,
                    },
                  }}
                  width={24}
                  height={24}
                  paddingX={0}
                  paddingY={0}
                  onClick={close}
                  data-testid="close"
                >
                  <IconCross size={4} color="subtle" />
                </ButtonMinimal>
              </View>
            )}
          </Row>
        );
      }}
    </Theme.Consumer>
  );
};

export default Banner;
