import * as React from "react";
import Text from "../Text";
import View, { Props as ViewProps } from "../View";

interface Props extends ViewProps {
  color?: string;
  children: React.ReactNode;
}

const Pill: React.SFC<Props> = ({
  color = "faded",
  children,
  ...props
}: Props) => {
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
      <Text size={1}>{children}</Text>
    </View>
  );
};

Pill.displayName = "Pill";

export default Pill;
