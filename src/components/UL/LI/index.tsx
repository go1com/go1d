import * as React from "react";

import Text from "../../Text";
import View, { ViewProps } from "../../View";

import { IconProps } from "../../IconBase";
import CheckIcon from "../../Icons/Check";

export interface LIProps extends ViewProps {
  iconName?: never; // Removed
  icon?: React.ComponentType<IconProps>;
  iconColor?: string;
  fontSize?: number;
}

const LI: React.SFC<LIProps> = ({
  icon,
  iconColor = "accent",
  children,
  fontSize = 2,
  paddingY = fontSize < 3 ? fontSize + 1 : 4,
  paddingX = 0,
  color,
  ...props
}: LIProps) => {
  const IconElement = icon || CheckIcon;

  return (
    <View
      element="li"
      flexGrow={1}
      textAlign="left"
      flexDirection="row"
      alignItems="flex-start"
      paddingX={0}
      paddingY={0}
      {...props}
    >
      {IconElement && (
        <View marginY={paddingY} paddingTop={2} paddingLeft={paddingX}>
          <IconElement color={iconColor} size={fontSize} />
        </View>
      )}
      <Text
        color={color}
        fontSize={fontSize}
        paddingY={paddingY}
        paddingLeft={4}
        paddingRight={paddingX}
      >
        {children}
      </Text>
    </View>
  );
};

export default LI;
