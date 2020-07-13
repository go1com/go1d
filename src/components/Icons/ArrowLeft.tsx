import * as React from "react";
import IconBase from "../IconBase";

class IconArrowLeft extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path
          fillRule="evenodd"
          d="M.5 8a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 0 1H1A.5.5 0 0 1 .5 8z"
          clipRule="evenodd"
        />
        <path
          fillRule="evenodd"
          d="M8.354.646a.5.5 0 0 1 0 .708L1.707 8l6.647 6.646a.5.5 0 0 1-.708.708l-7-7a.5.5 0 0 1 0-.708l7-7a.5.5 0 0 1 .708 0z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
}

IconArrowLeft.displayName = "IconArrowLeft";

export default IconArrowLeft;
