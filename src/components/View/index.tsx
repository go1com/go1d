import {
  AlignItemsProperty,
  DisplayProperty,
  FlexDirectionProperty,
  FlexWrapProperty,
  Globals,
  JustifyContentProperty,
  OverflowProperty,
  PositionProperty,
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
}

function applySize(n) {
  if (!n) {
    return null;
  }

  if (Array.isArray(n)) {
    return n.map(applySize);
  }

  return isNaN(n) ? n : n > 1 ? n : n * 100 + "%";
}

const View: React.SFC<ViewProps> = ({
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
  transition = "subtle",
  css,
  ...props
}: ViewProps) => {
  return (
    <Provider mode={mode}>
      <Theme.Consumer>
        {({
          spacing: s,
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
                borderRadius: applyArray(borderRadius, s),
                borderStyle: "solid",
                borderTopWidth: borderTop,
                borderRightWidth: borderRight,
                borderBottomWidth: borderBottom,
                borderLeftWidth: borderLeft,
                borderColor: applyArray(borderColor, colors),
                boxShadow: applyArray(boxShadow, shadows),
                transition: applyArray(transition, transitions),
                textAlign,
              },
              css,
            ]}
            {...props}
          />
        )}
      </Theme.Consumer>
    </Provider>
  );
};

View.displayName = "View";

export default View;
