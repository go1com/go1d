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
          color={color === "background" ? "subtle" : "contrast"}
          iconColor={color === "background" ? "muted" : "contrast"}
          fontWeight="bold"
          css={[
            {
              background: `${colors.gradients.warmOverlay}, ${colors[color]}`,
              boxShadow: shadows.soft,
              textShadow: mode === "dark" && shadows.text,
              "&:hover, &:focus": {
                background: `${colors.gradients.lightWarmOverlay}, ${colors[color]}`,
                boxShadow: shadows.strong,
                transform: "translateY(-1px)",
              },
              "&:active": {
                background: `${colors.gradients.darkWarmOverlay}, ${colors[color]}`,
                boxShadow: shadows.crisp,
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
