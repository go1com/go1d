import * as React from "react";
import IconBase from "../IconBase";

class IconExplore extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path
          fillRule="evenodd"
          d="M8 1.833a6.167 6.167 0 1 0 0 12.334A6.167 6.167 0 0 0 8 1.833zM.833 8a7.167 7.167 0 1 1 14.334 0A7.167 7.167 0 0 1 .833 8z"
          clipRule="evenodd"
        />
        <path
          fillRule="evenodd"
          d="M11.18 4.82a.5.5 0 0 1 .121.511l-1.413 4.24a.5.5 0 0 1-.317.317L5.331 11.3a.5.5 0 0 1-.632-.632l1.413-4.24a.5.5 0 0 1 .317-.317l4.24-1.413a.5.5 0 0 1 .511.12zM6.982 6.982l-1.018 3.054 3.054-1.018 1.018-3.054-3.054 1.018z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
}

IconExplore.displayName = "IconExplore";

export default IconExplore;
