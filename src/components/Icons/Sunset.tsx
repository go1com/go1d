import * as React from "react";
import IconBase from "../IconBase";

class IconSunset extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path
          fillRule="evenodd"
          d="M5.29 5.123a3.833 3.833 0 016.543 2.71.5.5 0 01-1 0 2.834 2.834 0 00-5.666 0 .5.5 0 11-1 0c0-1.016.404-1.991 1.122-2.71zM.166 10.5a.5.5 0 01.5-.5h14.666a.5.5 0 010 1H.667a.5.5 0 01-.5-.5z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
}

IconSunset.displayName = "IconSunset";

export default IconSunset;
