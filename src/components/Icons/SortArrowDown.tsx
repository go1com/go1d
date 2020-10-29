import * as React from "react";
import IconBase from "../IconBase";

class IconSortArrowDown extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path d="M.54 0h6.92c.48 0 .72.639.381 1.012l-3.46 3.814a.504.504 0 0 1-.761 0L.159 1.012C-.181.64.059 0 .539 0z" />
      </svg>
    );
  }
}

IconSortArrowDown.displayName = "IconSortArrowDown";

export default IconSortArrowDown;
