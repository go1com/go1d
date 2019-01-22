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
  fontSize?: number;
  color?: string | string[];
  textTransform?: TextTransformProperty | TextTransformProperty[];
  letterSpacing?: Tracking | Tracking[];
  ellipsis?: boolean;
  transition?: string | string[];
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
              type.scale.sm[fontSize],
              type.scale.md[fontSize],
              type.scale.lg[fontSize],
            ],
            wordWrap: "break-word",
          },
          ellipsis && {
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            overflow: "hidden",
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
