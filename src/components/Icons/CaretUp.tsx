import * as React from "react";
import IconBase from "../IconBase";

class IconCaretUp extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path d="M11.87 9.67s.01 0 0 0l-3.5-4A.498.498 0 0 0 8 5.5c-.15 0-.28.07-.37.17l-3.5 4a.495.495 0 0 0 .37.83h7a.495.495 0 0 0 .37-.83z" />
      </svg>
    );
  }
}

IconCaretUp.displayName = "IconCaretUp";

export default IconCaretUp;
