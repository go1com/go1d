import * as React from "react";

import { breakpoints, colors, type } from "../../foundations";
import * as SpotIcons from "../SpotIcons";
import View, { ViewProps } from "../View";
import * as SpotIconBackgrounds from "./SpotIconBackgrounds";

export interface SpotIconProps extends ViewProps {
  name: string;
  size?: number | number[];
  background?: string;
  backgroundType?: "circle" | "square";
}

const SpotIcon: React.SFC<SpotIconProps> = ({
  name,
  size = 4,
  background,
  backgroundType = "circle",
  ...props
}: SpotIconProps) => {
  const SpotIconComponent = SpotIcons[name];
  if (!SpotIconComponent) {
    return null;
  }

  const ratio = 2;

  let SpotIconBackground;
  let iconStyle = {};
  let spotIconStyle = {};

  if (background) {
    const style = {
      ...Object.keys(breakpoints).reduce(
        (acc, bpKey, Index) => ({
          ...acc,
          [breakpoints[bpKey]]: {
            width: ratio * type.scale[bpKey][size[Index] || size] || "1em",
            height: ratio * type.scale[bpKey][size[Index] || size] || "1em",
          },
        }),
        {}
      ),
    };
    iconStyle = {
      position: "relative",
      alignItems: "center",
      justifyContent: "center",
      ...style,
    };
    spotIconStyle = {
      color: "background",
      position: "absolute",
    };

    if (background in SpotIconBackgrounds) {
      SpotIconBackground = SpotIconBackgrounds[background];
    } else {
      SpotIconBackground = () => (
        <View
          css={{
            borderRadius: `${backgroundType === "square" ? 0 : "50%"}`,
            ...style,
          }}
          backgroundColor={background}
        />
      );
    }
  }

  return (
    <View css={iconStyle}>
      {background && (
        <View element={SpotIconBackground} mask={backgroundType} />
      )}

      <View
        element={SpotIconComponent}
        color={colors.accent}
        {...spotIconStyle}
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
    </View>
  );
};

SpotIcon.displayName = "SpotIcon";

export default SpotIcon;
