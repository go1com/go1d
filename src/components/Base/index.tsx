import { css as emotion, Interpolation } from "emotion";
import * as React from "react";

export interface Props {
  element?: string | React.ComponentType;
  children?: React.ReactNode;
  css?: Interpolation;
  [key: string]: any;
}

const styleReset: Interpolation = {
  margin: 0,
  padding: 0,
  textDecoration: "none",
  color: "inherit",
  border: "none",
  textAlign: "inherit",
  fontWeight: "inherit",
  fontFamily: "inherit",
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  textSizeAdjust: "100%",
  textRendering: "optimizeLegibility",
  appearance: "none",
  boxSizing: "border-box",
  outline: 0,
};

const Base: React.SFC<Props> = ({
  element: Element = "div",
  children,
  innerRef,
  css = [],
  ...props
}: Props) => (
  <Element
    className={emotion(styleReset, css)}
    children={children}
    ref={innerRef}
    {...props}
  />
);

Base.displayName = "Base";

export default Base;
