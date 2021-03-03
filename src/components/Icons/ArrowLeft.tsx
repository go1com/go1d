import * as React from "react";
import IconBase from "../IconBase";

class IconArrowLeft extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path d="M8.354 3.687a.5.5 0 0 0-.707-.707L2.98 7.646A.504.504 0 0 0 2.833 8c0 .14.057.265.15.356l4.664 4.664a.5.5 0 0 0 .707-.707L4.54 8.5h8.126a.5.5 0 0 0 0-1H4.54l3.813-3.813z" />
      </svg>
    );
  }
}

IconArrowLeft.displayName = "IconArrowLeft";

export default IconArrowLeft;
