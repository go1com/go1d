import * as React from "react";
import IconBase from "../IconBase";

class IconPause extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path
          fillRule="evenodd"
          d="M16 8A8 8 0 110 8a8 8 0 0116 0zM5.455 4.5h1.909v7h-1.91v-7zm3.181 0h1.91v7h-1.91v-7z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
}

IconPause.displayName = "IconPause";

export default IconPause;
