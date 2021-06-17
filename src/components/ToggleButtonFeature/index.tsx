import merge = require("lodash/merge");
import * as React from "react";
import { ButtonFilledProps } from "../ButtonFilled";
import ButtonFilled from "../ButtonFilled";

/**
 * This component is almost always used in a list, such as a list of feedback options.
 */
const ToggleButtonFeature: React.SFC<ButtonFilledProps> = ({
  size = "md",
  sizeStyles,
  children,
  css,
  ...props
}: ButtonFilledProps) => {
  const sizeStylesDefault = {
    lg: {
      height: 96,
      paddingX: 3,
      paddingY: 3,
      iconSize: 5,
      iconMargin: 2,
    },
    md: {
      height: 80,
      paddingX: 3,
      paddingY: 3,
      iconSize: 4,
      iconMargin: 2,
    },
    sm: {
      height: 64,
      paddingX: 3,
      paddingY: 3,
      iconSize: 3,
      iconMargin: 2,
    },
  };
  const sizeStylesMerged = merge(sizeStylesDefault, sizeStyles);
  const { height } = sizeStylesMerged[size];
  return (
    <ButtonFilled
      size={size}
      minWidth={height}
      sizeStyles={sizeStylesMerged}
      flexDirection="column"
      css={css}
      {...props}
    >
      {children}
    </ButtonFilled>
  );
};

ToggleButtonFeature.displayName = "ToggleButtonFeature";

export default ToggleButtonFeature;
