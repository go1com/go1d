import * as React from "react";
import IconBase from "../IconBase";

class InProgressIcon extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path
          fillRule="evenodd"
          d="M8 14A6 6 0 108 2a6 6 0 000 12zm0 2A8 8 0 108 0a8 8 0 000 16z"
          clipRule="evenodd"
          opacity={0.3}
        />
        <path d="M14 8a6 6 0 01-6 6v2A8 8 0 108 0v2a6 6 0 016 6z" />
      </svg>
    );
  }
}

InProgressIcon.displayName = "IconInProgress";

export default InProgressIcon;
