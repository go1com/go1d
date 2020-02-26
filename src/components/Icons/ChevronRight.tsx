import * as React from "react";
import IconBase from "../IconBase";

class IconChevronRight extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path d="M5.746 2.26a.85.85 0 00-.246.603.85.85 0 00.246.602L10.406 8l-4.66 4.535a.85.85 0 00-.246.602.85.85 0 00.246.602.855.855 0 001.232 0l5.255-5.137a.825.825 0 00.205-.311A.883.883 0 0012.5 8c0-.08-.02-.177-.062-.291a.825.825 0 00-.205-.311L6.978 2.261a.855.855 0 00-1.232 0z" />
      </svg>
    );
  }
}

IconChevronRight.displayName = "IconChevronRight";

export default IconChevronRight;
