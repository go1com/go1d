import { Globals } from "csstype";
import * as React from "react";
import applySpacing from "../../utils/applySpacing";
import Theme from "../Theme";

type PaddingProperty = Globals | number;
type MarginProperty = Globals | "auto" | number | null;

export interface BaseProps {
  element?: string | React.ComponentType;
  tid?: string;
  children?: React.ReactNode;
  innerRef?: any;
  padding?: PaddingProperty | PaddingProperty[];
  paddingX?: PaddingProperty | PaddingProperty[];
  paddingY?: PaddingProperty | PaddingProperty[];
  paddingTop?: PaddingProperty | PaddingProperty[];
  paddingBottom?: PaddingProperty | PaddingProperty[];
  paddingRight?: PaddingProperty | PaddingProperty[];
  paddingLeft?: PaddingProperty | PaddingProperty[];
  // Reset margins by default
  margin?: MarginProperty | MarginProperty[];
  marginX?: MarginProperty | MarginProperty[];
  marginY?: MarginProperty | MarginProperty[];
  marginTop?: MarginProperty | MarginProperty[];
  marginBottom?: MarginProperty | MarginProperty[];
  marginRight?: MarginProperty | MarginProperty[];
  marginLeft?: MarginProperty | MarginProperty[];
  css?: any;
  [key: string]: any;
}

const Base: React.SFC<BaseProps> = ({
  element = "div",
  tid,
  children,
  innerRef,
  padding,
  paddingX = padding,
  paddingY = padding,
  paddingTop = paddingY,
  paddingBottom = paddingY,
  paddingRight = paddingX,
  paddingLeft = paddingX,
  // Reset margins by default
  margin = 0,
  marginX = margin,
  marginY = margin,
  marginTop = marginY,
  marginBottom = marginY,
  marginRight = marginX,
  marginLeft = marginX,
  css = [],
  ...props
}: BaseProps) => {
  const Element: any = element;
  const spreadTID =
    typeof Element === "string" // Continue passing down if not a DOM Node
      ? {
          "data-tid": tid,
        }
      : { tid };

  return (
    <Theme.Consumer>
      {({ spacing: s, mq, emotion }) => (
        <Element
          className={emotion.css(
            mq([
              {
                paddingTop: applySpacing(s, paddingTop),
                paddingBottom: applySpacing(s, paddingBottom),
                paddingRight: applySpacing(s, paddingRight),
                paddingLeft: applySpacing(s, paddingLeft),
                marginTop: applySpacing(s, marginTop),
                marginBottom: applySpacing(s, marginBottom),
                marginRight: applySpacing(s, marginRight),
                marginLeft: applySpacing(s, marginLeft),
              },
              css,
            ])
          )}
          children={children}
          ref={innerRef}
          {...(tid ? spreadTID : {})}
          {...props}
        />
      )}
    </Theme.Consumer>
  );
};

Base.displayName = "Base";

export default Base;
