import * as React from "react";

import * as PatternIcons from "../PatternIcons";
import View, { ViewProps } from "../View";

export interface PatternIconProps extends ViewProps {
  name: "Forest" | "Gold" | "Lime" | "Ocean" | "Ruby";
  size?: number;
}

const PatternIcon: React.SFC<PatternIconProps> = ({
  name,
  size = 49,
  children,
  ...props
}: PatternIconProps) => {
  const IconComponent = PatternIcons[name];
  if (!IconComponent) {
    return null;
  }

  return (
    <View
      position="relative"
      width={size}
      height={size}
      alignItems="center"
      justifyContent="center"
    >
      <View element={IconComponent} {...props} />
      {children}
    </View>
  );
};

PatternIcon.displayName = "PatternIcon";

export default PatternIcon;
