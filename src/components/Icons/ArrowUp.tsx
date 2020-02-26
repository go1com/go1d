import * as React from "react";
import IconBase from "../IconBase";

class IconArrowUp extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path d="M15.7 7.3l-7-7C8.6.2 8.5.1 8.4.1c-.3-.1-.5-.1-.8 0-.1 0-.2.1-.3.2l-7 7c-.4.4-.4 1 0 1.4s1 .4 1.4 0L7 3.4V15c0 .6.4 1 1 1s1-.4 1-1V3.4l5.3 5.3c.2.2.4.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4z" />
      </svg>
    );
  }
}

IconArrowUp.displayName = "IconArrowUp";

export default IconArrowUp;
