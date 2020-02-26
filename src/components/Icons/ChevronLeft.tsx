import * as React from "react";
import IconBase from "../IconBase";

class IconChevronLeft extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path d="M10.254 13.74a.85.85 0 00.246-.603.85.85 0 00-.246-.602L5.594 8l4.66-4.535a.85.85 0 00.246-.602.85.85 0 00-.246-.602.855.855 0 00-1.232 0L3.767 7.398a.826.826 0 00-.205.311A.884.884 0 003.5 8c0 .08.02.177.062.291.04.114.11.217.205.311l5.255 5.137a.855.855 0 001.232 0z" />
      </svg>
    );
  }
}

IconChevronLeft.displayName = "IconChevronLeft";

export default IconChevronLeft;
