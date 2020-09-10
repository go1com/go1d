import * as React from "react";
import IconBase from "../IconBase";

class IconCopyright extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path
          fillRule="evenodd"
          d="M8 1.455a6.545 6.545 0 1 0 0 13.09 6.545 6.545 0 0 0 0-13.09zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"
          clipRule="evenodd"
        />
        <path d="M10.458 6.024a3 3 0 1 0-.065 4.024" />
      </svg>
    );
  }
}

IconCopyright.displayName = "IconCopyright";

export default IconCopyright;
