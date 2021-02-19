import { DisplayProperty, TextTransformProperty } from "csstype";
import * as React from "react";
import {
  FontWeight,
  Leading,
  Tracking,
} from "../../foundations/foundation-types";
import applyArray from "../../utils/applyArray";
import Base, { BaseProps } from "../Base";
import Theme from "../Theme";

export interface TextProps extends BaseProps {
  display?: DisplayProperty | DisplayProperty[];
  fontWeight?: FontWeight | FontWeight[];
  fontFamily?: string | string[];
  fontStyle?: string | string[];
  lineHeight?: Leading | Leading[];
  fontSize?: number | number[];
  color?: string | string[];
  textTransform?: TextTransformProperty | TextTransformProperty[];
  letterSpacing?: Tracking | Tracking[];
  ellipsis?: boolean;
  lineClamp?: number;
  transition?: string | string[];
  textDecoration?: string | string[];
}

const Text: React.SFC<TextProps> = ({
  element = "span",
  display,
  fontWeight,
  fontFamily,
  fontStyle,
  lineHeight = "ui",
  fontSize = 2,
  letterSpacing = "normal",
  color = "inherit",
  textAlign,
  textTransform,
  transition = "subtle",
  ellipsis = false,
  lineClamp,
  textDecoration,
  css,
  ...props
}: TextProps) => (
  <Theme.Consumer>
    {({ colors, type, breakpoints, transitions }) => (
      <Base
        element={element}
        css={[
          {
            color: applyArray(color, colors) || color,
            fontFamily: fontFamily
              ? applyArray(fontFamily, type.family)
              : type.family.sansSerif,
            fontStyle,
            display,
            textAlign,
            textTransform,
            fontWeight: applyArray(fontWeight, type.weight),
            lineHeight: applyArray(lineHeight, type.leading),
            transition: applyArray(transition, transitions),
            letterSpacing: applyArray(letterSpacing, type.tracking),
            fontSize: [
              type.scale.sm[fontSize[0] || fontSize],
              type.scale.md[fontSize[1] || fontSize],
              type.scale.lg[fontSize[2] || fontSize],
            ],
            wordWrap: "break-word",
            textDecoration,
          },
          ellipsis && {
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            overflow: "hidden",
          },
          lineClamp && {
            display: "-webkit-box",
            overflow: "hidden",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: lineClamp,
            maxHeight:
              lineClamp *
              type.scale.sm[fontSize[0] || fontSize] *
              applyArray(lineHeight, type.leading),
            [breakpoints.md]: {
              maxHeight:
                lineClamp *
                type.scale.md[fontSize[0] || fontSize] *
                applyArray(lineHeight, type.leading),
            },
            [breakpoints.lg]: {
              maxHeight:
                lineClamp *
                type.scale.lg[fontSize[0] || fontSize] *
                applyArray(lineHeight, type.leading),
            },
          },
          css,
        ]}
        {...props}
      />
    )}
  </Theme.Consumer>
);

Text.displayName = "Text";

export default Text;
