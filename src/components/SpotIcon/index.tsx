import * as React from "react";

import { breakpoints, colors, type } from "../../foundations";
import * as SpotIcons from "../SpotIcons";
import View, { ViewProps } from "../View";
import * as SpotIconBackgrounds from "./SpotIconBackgrounds";

export interface SpotIconProps extends ViewProps {
  name: string;
  size?: number | number[];
  background?: string | "red" | "blue" | "yellow" | "lime" | "green";
  backgroundType?: "circle" | "square";
  backgroundSize?: number | number[];
}

const getSize = (bpKey, Index, backgroundSize, ratio, size) => {
  if (!backgroundSize && !size) {
    return "1em";
  }
  const sizeChosen = backgroundSize || size;
  const sizePx = type.scale[bpKey][sizeChosen[Index] || sizeChosen];
  if (backgroundSize) {
    return sizePx;
  }
  return ratio * sizePx;
};

const SpotIcon: React.SFC<SpotIconProps> = ({
  name,
  size = 4,
  background,
  backgroundType = "circle",
  backgroundSize,
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
  let spotIconCss = {};

  if (background) {
    const style = {
      ...Object.keys(breakpoints).reduce(
        (acc, bpKey, Index) => ({
          ...acc,
          [breakpoints[bpKey]]: {
            width: getSize(bpKey, Index, backgroundSize, ratio, size),
            height: getSize(bpKey, Index, backgroundSize, ratio, size),
          },
        }),
        {}
      ),
    };
    iconStyle = {
      position: "relative",
      ...style,
    };
    spotIconStyle = {
      color: "background",
      position: "absolute",
    };
    spotIconCss = {
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      margin: "auto",
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
            ...spotIconCss,
          },
        ]}
      />
    </View>
  );
};

SpotIcon.displayName = "SpotIcon";

export default SpotIcon;
