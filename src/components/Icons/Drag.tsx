import * as React from "react";
import IconBase from "../IconBase";

class DragIcon extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path d="M4 3a1 1 0 011-1h6a1 1 0 110 2H5a1 1 0 01-1-1zm0 5a1 1 0 011-1h6a1 1 0 110 2H5a1 1 0 01-1-1zm0 5a1 1 0 011-1h6a1 1 0 110 2H5a1 1 0 01-1-1z" />
      </svg>
    );
  }
}

DragIcon.displayName = "IconDrag";

export default DragIcon;
