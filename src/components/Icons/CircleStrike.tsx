import * as React from "react";
import IconBase from "../IconBase";

class IconCircleStrike extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path
          fillRule="evenodd"
          d="M8 1.833a6.167 6.167 0 1 0 0 12.334A6.167 6.167 0 0 0 8 1.833zM.833 8a7.167 7.167 0 1 1 14.334 0A7.167 7.167 0 0 1 .833 8z"
          clipRule="evenodd"
        />
        <path
          fillRule="evenodd"
          d="M2.933 2.933a.5.5 0 0 1 .707 0l9.427 9.427a.5.5 0 1 1-.707.707L2.933 3.64a.5.5 0 0 1 0-.707z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
}

IconCircleStrike.displayName = "IconCircleStrike";

export default IconCircleStrike;
