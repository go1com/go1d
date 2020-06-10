import * as React from "react";
import IconBase from "../IconBase";

class IconCheckCircleOutline extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path d="M11.04 6.332a.5.5 0 10-.747-.664l-3.182 3.58-1.404-1.58a.5.5 0 10-.747.664l1.777 2a.5.5 0 00.748 0l3.555-4z" />
        <path
          fillRule="evenodd"
          d="M8 .833a7.167 7.167 0 100 14.334A7.167 7.167 0 008 .833zM1.833 8a6.167 6.167 0 1112.334 0A6.167 6.167 0 011.833 8z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
}

IconCheckCircleOutline.displayName = "IconCheckCircleOutline";

export default IconCheckCircleOutline;
