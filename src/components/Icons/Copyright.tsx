import * as React from "react";
import IconBase from "../IconBase";

class CopyrightIcon extends IconBase {
  getIconComponent() {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path
          fillRule="evenodd"
          d="M8 1.455a6.545 6.545 0 100 13.09 6.545 6.545 0 000-13.09zM0 8a8 8 0 1116 0A8 8 0 010 8z"
          clipRule="evenodd"
        />
        <path d="M10.458 6.024a3 3 0 10-.065 4.024" />
      </svg>
    );
  }
}

CopyrightIcon.displayName = "IconCopyright";

export default CopyrightIcon;
