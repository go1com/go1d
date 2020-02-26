import * as React from "react";
import IconBase from "../IconBase";

class IconCompass extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path
          fillRule="evenodd"
          d="M8 2a6 6 0 100 12A6 6 0 008 2zM.667 8a7.333 7.333 0 1114.666 0A7.333 7.333 0 01.667 8z"
          clipRule="evenodd"
        />
        <path
          fillRule="evenodd"
          d="M11.298 4.702c.178.178.24.443.16.682l-1.412 4.24a.667.667 0 01-.422.422l-4.24 1.413a.667.667 0 01-.843-.843l1.413-4.24a.667.667 0 01.422-.422l4.24-1.413a.667.667 0 01.682.16zM7.114 7.114l-.887 2.659 2.66-.887.885-2.659-2.658.887z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
}

IconCompass.displayName = "IconCompass";

export default IconCompass;
