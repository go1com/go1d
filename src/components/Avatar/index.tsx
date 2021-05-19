import * as React from "react";
import { IconProps } from "../IconBase";
import IconUser from "../Icons/User";
import Text from "../Text";
import Theme from "../Theme";
import View, { ViewProps } from "../View";

export type ScaleSizeType = 1 | 2 | 3;

export interface AvatarProps extends ViewProps {
  fullName?: string;
  scaleSize?: ScaleSizeType;
  src?: string;
  icon?: React.ComponentType<IconProps>;
  skeleton?: boolean;
}

const MAXIMUM_SCALE_SIZE: ScaleSizeType = 3;
const DEFAULT_SCALE_SIZE: ScaleSizeType = MAXIMUM_SCALE_SIZE;

const scaleDownRatio: Record<ScaleSizeType, object> = {
  1: {
    sm: { size: 0, font: 0 },
    md: { size: 0, font: 0 },
    lg: { size: 0, font: 0 },
  },
  2: {
    sm: { size: 1, font: 1 },
    md: { size: 1, font: 1 },
    lg: { size: 0, font: 0 },
  },
  3: {
    sm: { size: 2, font: 3 },
    md: { size: 1, font: 1 },
    lg: { size: 0, font: 0 },
  },
};

const Avatar: React.SFC<AvatarProps> = ({
  src,
  fullName,
  scaleSize = DEFAULT_SCALE_SIZE,
  icon,
  skeleton = false,
  placeHolderVisibilityType = "text",
  ...props
}: AvatarProps) => {
  const names = `${fullName}`.split(" ");
  const displayName = `${names[0].charAt(0)}${
    names.length > 1 ? names[names.length - 1].charAt(0) : ""
  }`;

  const IconElement = icon || IconUser;

  const constrainSize = Size => {
    let constrained = Math.abs(Math.trunc(Size)) || DEFAULT_SCALE_SIZE;

    if (constrained > MAXIMUM_SCALE_SIZE) {
      constrained = MAXIMUM_SCALE_SIZE;
    }

    return constrained + 1;
  };

  const getBreakPointSizeStyles = breakPoints =>
    Object.keys(breakPoints).reduce((acc, bpKey) => {
      const SizeKey = constrainSize(scaleSize);
      const BorderRadius =
        (SizeKey - scaleDownRatio[scaleSize][bpKey].size) * 4;
      const Size = (SizeKey - scaleDownRatio[scaleSize][bpKey].size) * 16;

      return {
        ...acc,
        [breakPoints[bpKey]]: {
          width: Size,
          height: Size,
          borderRadius: BorderRadius,
        },
      };
    }, {});

  const getBreakPointFontSizeStyles = (breakPoints, typeScale) =>
    Object.keys(breakPoints).reduce((acc, bpKey) => {
      const SizeKey = constrainSize(scaleSize);
      const FontSize =
        (SizeKey <= 2 ? SizeKey - 1 : SizeKey) -
        scaleDownRatio[scaleSize][bpKey].font;

      return {
        ...acc,
        [breakPoints[bpKey]]: {
          fontSize: typeScale[bpKey][FontSize],
        },
      };
    }, {});

  const getBreakPointIconSizeStyles = breakPoints =>
    Object.keys(breakPoints).reduce((acc, bpKey) => {
      const SizeKey = constrainSize(scaleSize);
      const IconSize = (SizeKey - scaleDownRatio[scaleSize][bpKey].size) * 8;

      return {
        ...acc,
        [breakPoints[bpKey]]: {
          width: IconSize,
          height: IconSize,
        },
      };
    }, {});

  return (
    <Theme.Consumer>
      {({ breakpoints, type }) => (
        <View
          css={{
            verticalAlign: "middle",
            textAlign: "center",
            position: "relative",
            ...getBreakPointSizeStyles(breakpoints),
          }}
          position="relative"
          justifyContent="center"
          backgroundColor="delicate"
          {...props}
        >
          {!skeleton && (
            <React.Fragment>
              {fullName ? (
                <Text
                  fontWeight="bold"
                  color={props.color || "subtle"}
                  css={{
                    textTransform: "uppercase",
                    ...getBreakPointFontSizeStyles(breakpoints, type.scale),
                  }}
                >
                  {displayName}
                </Text>
              ) : (
                <View alignItems="center">
                  <IconElement
                    css={{ ...getBreakPointIconSizeStyles(breakpoints) }}
                    color="subtle"
                  />
                </View>
              )}

              {src && (
                <View
                  position="absolute"
                  css={{
                    top: 0,
                    left: 0,
                    verticalAlign: "middle",
                    backgroundSize: "cover",
                    backgroundImage: `url('${src}')`,
                    backgroundPosition: "center",
                    ...getBreakPointSizeStyles(breakpoints),
                  }}
                />
              )}
            </React.Fragment>
          )}
        </View>
      )}
    </Theme.Consumer>
  );
};

Avatar.displayName = "Avatar";

export default Avatar;
