import * as React from "react";
import IconBase from "../IconBase";

class IconClosedBook extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path d="M2.667 13a1.667 1.667 0 0 1 1.666-1.667h9" />
        <path d="M4.333 1.333h9v13.334h-9A1.667 1.667 0 0 1 2.667 13V3a1.667 1.667 0 0 1 1.666-1.667z" />
      </svg>
    );
  }
}

IconClosedBook.displayName = "IconClosedBook";

export default IconClosedBook;
