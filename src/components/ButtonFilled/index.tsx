import * as React from "react";
import { isDark } from "../../foundations";
import Button, { ButtonProps } from "../Button";
import Theme from "../Theme";

export interface ButtonFilledProps extends ButtonProps {
  color?: string;
}

const customModes = {
  accent: "dark",
  danger: "dark",
  success: "dark",
  background: "light",
};

const textColor = (color, accentColor) => {
  if (color === "background") {
    return "subtle";
  } else if (color === "accent") {
    return isDark(accentColor) ? "complementary" : "background";
  } else {
    return "contrast";
  }
};

const ButtonFilled: React.SFC<ButtonFilledProps> = ({
  color = "background",
  children,
  css,
  ...props
}: ButtonFilledProps) => (
  <Theme.Consumer>
    {({ colors, shadows }) => {
      const mode = customModes[color]
        ? customModes[color]
        : isDark(colors[color])
        ? "dark"
        : "light";
      return (
        <Button
          mode={mode}
          backgroundColor={color}
          border={1}
          color={textColor(color, colors.accent)}
          iconColor={textColor(color, colors.accent)}
          fontWeight="bold"
          css={[
            {
              background: `${colors.gradients.warmOverlay}, ${colors[color]}`,
              borderColor: `${
                color === "background" ? colors.faded : colors[color]
              }`,
              textShadow: mode === "dark" && shadows.text,
              "&:hover, &:focus": {
                background: `${colors.gradients.lightWarmOverlay}, ${colors[color]}`,
                borderColor: `${
                  color === "background" ? colors.thin : colors[color]
                }`,
                transform: "translateY(-1px)",
              },
              "&:active": {
                background: `${colors.gradients.darkWarmOverlay}, ${colors[color]}`,
                borderColor: `${
                  color === "background" ? colors.subtle : colors[color]
                }`,
                transform: "translateY(1px)",
              },
            },
            css,
          ]}
          {...props}
        >
          {children}
        </Button>
      );
    }}
  </Theme.Consumer>
);

ButtonFilled.displayName = "ButtonFilled";

export default ButtonFilled;
