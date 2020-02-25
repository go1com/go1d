import * as React from "react";
import { ViewProps } from "../View";

import * as Icons from "../Icons";

export interface IconProps extends ViewProps {
  name: string;
  color?: string;
  size?: number | number[];
}

const Icon: React.SFC<IconProps> = ({ name, ...props }: IconProps) => {
  const IconComponent = Icons[name];
  if (!IconComponent) {
    return null;
  }

  return <IconComponent {...props} />;
};

Icon.displayName = "Icon";

export default Icon;
