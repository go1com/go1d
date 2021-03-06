import * as React from "react";
import View from "../View";

export interface VisuallyHiddenProps {
  children?: React.ReactNode;
}

/**
 * The Visually Hidden component visually hides content so that you may provide screen readers with meaningful text.
 */
const VisuallyHidden: React.SFC<VisuallyHiddenProps> = ({
  children = "Loading",
}: VisuallyHiddenProps) => (
  <View
    css={{
      position: "absolute",
      height: "1px",
      width: "1px",
      overflow: "hidden",
      clip: "rect(1px, 1px, 1px, 1px)",
    }}
  >
    {children}
  </View>
);
VisuallyHidden.displayName = "VisuallyHidden";

export default VisuallyHidden;
