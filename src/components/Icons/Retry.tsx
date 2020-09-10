import * as React from "react";
import IconBase from "../IconBase";

class IconRetry extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM8 4.8a3.2 3.2 0 0 0 0 6.4.8.8 0 0 1 0 1.6 4.8 4.8 0 1 1 4.6-6.1v-.1a.8.8 0 1 1 1.5.7L13 9a.8.8 0 0 1-1 .3l-1.7-.8A.8.8 0 0 1 11 7a3.2 3.2 0 0 0-3-2.2z" />
      </svg>
    );
  }
}

IconRetry.displayName = "IconRetry";

export default IconRetry;
