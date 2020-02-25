import * as React from "react";
import IconBase from "../IconBase";

class RetryIcon extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path d="M8 16A8 8 0 108 0a8 8 0 000 16zM8 4.8a3.2 3.2 0 000 6.4.8.8 0 010 1.6 4.8 4.8 0 114.6-6.1v-.1a.8.8 0 111.5.7L13 9a.8.8 0 01-1 .3l-1.7-.8A.8.8 0 0111 7a3.2 3.2 0 00-3-2.2z" />
      </svg>
    );
  }
}

RetryIcon.displayName = "IconRetry";

export default RetryIcon;
