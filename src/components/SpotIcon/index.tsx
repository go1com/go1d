import * as React from "react";

import { colors } from "../../foundations";
import * as SpotIcons from "../SpotIcons";
import Theme from "../Theme";
import View, { ViewProps } from "../View";

export interface SpotIconProps extends ViewProps {
  name: string;
  size?: number | number[];
}

const SpotIcon: React.SFC<SpotIconProps> = ({
  name,
  size = 4,
  ...props
}: SpotIconProps) => {
  const SpotIconComponent = SpotIcons[name];
  if (!SpotIconComponent) {
    return null;
  }

  return (
    <Theme.Consumer>
      {({ type, breakpoints }) => (
        <View
          element={SpotIconComponent}
          color={colors.accent}
          {...props}
          css={[
            {
              ...Object.keys(breakpoints).reduce(
                (acc, bpKey, Index) => ({
                  ...acc,
                  [breakpoints[bpKey]]: {
                    width: type.scale[bpKey][size[Index] || size] || "1em",
                    height: type.scale[bpKey][size[Index] || size] || "1em",
                  },
                }),
                {}
              ),
              fill: "none",
            },
          ]}
        />
      )}
    </Theme.Consumer>
  );
};

SpotIcon.displayName = "Icon";

export default SpotIcon;
