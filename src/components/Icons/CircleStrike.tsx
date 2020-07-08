import * as React from "react";
import IconBase from "../IconBase";

class IconCircleStrike extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path
          fillRule="evenodd"
          d="M8 1.833a6.167 6.167 0 100 12.334A6.167 6.167 0 008 1.833zM.833 8a7.167 7.167 0 1114.334 0A7.167 7.167 0 01.833 8z"
          clipRule="evenodd"
        />
        <path
          fillRule="evenodd"
          d="M2.933 2.933a.5.5 0 01.707 0l9.427 9.427a.5.5 0 11-.707.707L2.933 3.64a.5.5 0 010-.707z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
}

IconCircleStrike.displayName = "IconCircleStrike";

export default IconCircleStrike;
