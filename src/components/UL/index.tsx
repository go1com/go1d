import * as React from "react";

import { IconProps } from "../IconBase";
import View, { ViewProps } from "../View";

export interface ULProps extends ViewProps {
  iconName?: never;
  icon?: React.ComponentType<IconProps>;
  iconColor?: string;
  fontSize?: number;
}

const UL: React.SFC<ULProps> = ({
  icon,
  iconColor = "accent",
  color,
  fontSize = 2,
  paddingY = 5,
  paddingX = 6,
  children,
  ...props
}: ULProps) => {
  return (
    <View
      element="ul"
      paddingY={paddingY}
      paddingX={paddingX}
      css={{ listStyle: "none", margin: 0 }}
      {...props}
    >
      {React.Children.map(children, (child: React.ReactElement<any>, i) => {
        const childIcon = child.props.icon ? child.props.icon : icon;
        const childIconColor = child.props.iconColor
          ? child.props.iconColor
          : iconColor;

        return React.cloneElement(child as React.ReactElement<any>, {
          icon: childIcon,
          iconColor: childIconColor,
          fontSize,
          color,
        });
      })}
    </View>
  );
};

export default UL;
