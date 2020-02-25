import * as React from "react";
import IconBase from "../IconBase";

class InProgressCircleIcon extends IconBase {
  getIconComponent() {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <circle cx={8} cy={8} r={8} />
      </svg>
    );
  }
}

InProgressCircleIcon.displayName = "IconInProgressCircle";

export default InProgressCircleIcon;
