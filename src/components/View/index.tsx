import {
  AlignItemsProperty,
  DisplayProperty,
  FlexDirectionProperty,
  FlexWrapProperty,
  Globals,
  JustifyContentProperty,
  OverflowProperty,
  PositionProperty,
  TextAlignProperty,
} from "csstype";
import * as React from "react";
import { opacify } from "../../foundations";
import { Opacities, Shadows, ZIndex } from "../../foundations/foundation-types";
import applyArray from "../../utils/applyArray";
import Base, { BaseProps } from "../Base";
import Provider from "../Provider";
import Theme from "../Theme";

type WidthProperty = Globals | "auto" | number | string | null;
type HeightProperty = Globals | "auto" | number | string | null;
type FlexBasisProperty = Globals | "auto" | number | string | null;

export interface ViewProps extends BaseProps {
  mode?: "light" | "dark";
  display?: DisplayProperty | DisplayProperty[];
  flexDirection?: FlexDirectionProperty | FlexDirectionProperty[];
  flexWrap?: FlexWrapProperty | FlexWrapProperty[];
  alignItems?: AlignItemsProperty | AlignItemsProperty[];
  justifyContent?: JustifyContentProperty | JustifyContentProperty[];
  flexGrow?: number | number[];
  flexShrink?: number | number[];
  flexBasis?: FlexBasisProperty | FlexBasisProperty[];
  position?: PositionProperty | PositionProperty[];
  overflow?: OverflowProperty | OverflowProperty[];
  opacity?: Opacities | Opacities[] | "";
  color?: string | string[];
  backgroundColor?: string | string[];
  backgroundOpacity?: Opacities | "";
  borderRadius?: number | number[];
  width?: WidthProperty | WidthProperty[];
  minWidth?: WidthProperty | WidthProperty[];
  minHeight?: HeightProperty | HeightProperty[];
  height?: HeightProperty | HeightProperty[];
  maxWidth?: WidthProperty | WidthProperty[];
  maxHeight?: HeightProperty | HeightProperty[];
  zIndex?: ZIndex | ZIndex[] | number | "";
  boxShadow?: Shadows | Shadows[] | "";
  borderColor?: string | string[];
  border?: number | number[];
  borderTop?: number | number[];
  borderRight?: number | number[];
  borderBottom?: number | number[];
  borderLeft?: number | number[];
  transition?: string | string[];
  textAlign?: TextAlignProperty | TextAlignProperty[];
  tid?: string;
}

function applySize(n) {
  if (n === undefined || n === null) {
    return null;
  }

  if (Array.isArray(n)) {
    return n.map(applySize);
  }

  if (!isNaN(n) && n <= 1 && n > 0) {
    return n * 100 + "%";
  }

  return n;
}

/**
 * The `View` component is the most fundamental component for building a user interface with Go1d. The `View` component uses flex box via props to define the layout. Read [A Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).
 *
 * All Go1d components except `Text` should be built using `View`. It uses styling props connected to our foundations. You can use it where you would usually use a `div`.
 */
class View extends React.Component<ViewProps> {
  public static displayName = "View";

  public render() {
    const {
      element = "div",
      mode,
      display = "flex",
      flexDirection = "column",
      flexWrap,
      alignItems,
      justifyContent,
      flexGrow = 0,
      flexShrink = 0,
      flexBasis = "auto",
      position,
      overflow,
      opacity,
      borderColor,
      border = 0,
      borderTop = border,
      borderRight = border,
      borderBottom = border,
      borderLeft = border,
      color = mode ? "default" : "inherit",
      backgroundColor = mode && "background",
      backgroundOpacity,
      borderRadius,
      whiteSpace,
      width,
      // fix flexbox bugs
      minHeight = 0,
      minWidth = 0,
      height,
      maxWidth = "100%",
      maxHeight = "none",
      zIndex,
      boxShadow,
      textAlign = "inherit",
      transition,
      css,
      ...props
    } = this.props;

    return (
      <Provider mode={mode}>
        <Theme.Consumer>
          {({
            radius: br,
            colors,
            shadows,
            transitions,
            opacities,
            zIndex: zi,
          }) => (
            <Base
              element={element}
              css={[
                {
                  display,
                  alignItems,
                  justifyContent,
                  flexDirection,
                  flexWrap,
                  flexGrow,
                  flexBasis: applySize(flexBasis),
                  flexShrink,
                  position,
                  overflow,
                  opacity: applyArray(opacity, opacities),
                  height: applySize(height),
                  width: applySize(width),
                  maxWidth: maxWidth ? applySize(maxWidth) : "100%",
                  maxHeight: maxHeight ? applySize(maxHeight) : "none",
                  minHeight: applySize(minHeight),
                  minWidth: applySize(minWidth),
                  zIndex: applyArray(zIndex, zi) || zIndex,
                  color: applyArray(color, colors) || color,
                  backgroundColor:
                    opacities[backgroundOpacity] < 1
                      ? opacify(
                          applyArray(backgroundColor, colors),
                          opacities[backgroundOpacity]
                        )
                      : applyArray(backgroundColor, colors),
                  borderRadius: applyArray(borderRadius, br),
                  borderStyle: "solid",
                  borderTopWidth: borderTop,
                  borderRightWidth: borderRight,
                  borderBottomWidth: borderBottom,
                  borderLeftWidth: borderLeft,
                  borderColor: applyArray(borderColor, colors),
                  boxShadow: applyArray(boxShadow, shadows),
                  transition: applyArray(transition, transitions),
                  textAlign,
                  whiteSpace,
                },
                css,
              ]}
              {...props}
            />
          )}
        </Theme.Consumer>
      </Provider>
    );
  }
}

export default View;
