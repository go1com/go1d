import { Interpolation } from "emotion";
import * as React from "react";
import Text from "../Text";
import Theme from "../Theme";
import View, { Props as ViewProps } from "../View";

const sizes = {
  sm: 1,
  md: 2,
  lg: 3,
};

export interface Props extends ViewProps {
  size?: string;
  color?: string;
  backgroundColor?: string;
  css?: Interpolation;
  children: React.ReactNode;
}

const Button: React.SFC<Props> = ({
  size = "md",
  color = "subtle",
  backgroundColor = "lightest",
  children,
  css,
  ...props
}: Props) => (
  <Theme.Consumer>
    {({ colors, type }) => (
      <View
        element="button"
        flexDirection="row"
        alignItems="center"
        paddingY={size === "lg" ? 3 : 2}
        paddingX={size === "lg" ? 4 : 3}
        backgroundColor={backgroundColor}
        color={color}
        borderRadius={1}
        css={[
          {
            cursor: "pointer",
            "&:disabled": {
              opacity: 0.5,
              pointerEvents: "none",
            },
          },
          css,
        ]}
        {...props}
      >
        <Text
          lineHeight="ui"
          fontWeight="bold"
          fontSize={sizes[size]}
          color="inherit"
        >
          {children}
        </Text>
      </View>
    )}
  </Theme.Consumer>
);

Button.displayName = "Button";

export default Button;