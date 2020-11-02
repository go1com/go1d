import * as React from "react";
import IconBase from "../IconBase";

class IconCaretRight extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path d="M10.666 8c0-.15-.07-.28-.17-.37l-4-3.5a.495.495 0 0 0-.83.37v7a.495.495 0 0 0 .83.37l4-3.5c.1-.09.17-.22.17-.37z" />
      </svg>
    );
  }
}

IconCaretRight.displayName = "IconCaretRight";

export default IconCaretRight;
