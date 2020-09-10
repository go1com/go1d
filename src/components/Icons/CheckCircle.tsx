import * as React from "react";
import IconBase from "../IconBase";

class IconCheckCircle extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path
          fillRule="evenodd"
          d="M.833 8a7.167 7.167 0 1 1 14.334 0A7.167 7.167 0 0 1 .833 8zM11 5.626a.5.5 0 0 1 .041.706l-3.555 4a.5.5 0 0 1-.748 0l-1.777-2a.5.5 0 0 1 .747-.664l1.404 1.58 3.182-3.58A.5.5 0 0 1 11 5.626z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
}

IconCheckCircle.displayName = "IconCheckCircle";

export default IconCheckCircle;
