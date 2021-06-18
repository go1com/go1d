import * as React from "react";
import { FontWeight } from "../../foundations/foundation-types";
import Text from "../Text";
import View, { ViewProps } from "../View";

export interface PillProps extends ViewProps {
  color?: string;
  textColor?: string;
  fontSize?: number;
  fontWeight?: FontWeight;
}

/**
 * The Pill represents a status or label with no interactions, no links, and no hover/focus style.
 */
const Pill: React.SFC<PillProps> = ({
  color = "faded",
  textColor = "default",
  children,
  fontSize,
  fontWeight,
  ...props
}: PillProps) => {
  return (
    <View
      display="inline-flex"
      backgroundColor={color}
      backgroundOpacity={color !== "faded" && "pill"}
      borderRadius={2}
      paddingX={3}
      paddingY={2}
      {...props}
    >
      <Text color={textColor} fontSize={fontSize} fontWeight={fontWeight}>
        {children}
      </Text>
    </View>
  );
};

Pill.displayName = "Pill";

export default Pill;
