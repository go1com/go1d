import * as React from "react";
import IconBase from "../IconBase";

class IconInProgressCircle extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <circle cx={8} cy={8} r={8} />
      </svg>
    );
  }
}

IconInProgressCircle.displayName = "IconInProgressCircle";

export default IconInProgressCircle;
