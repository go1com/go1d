import * as React from "react";
import IconBase from "../IconBase";

class IconCheckSquare extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <g clipPath="url(#clip0)">
          <path
            fillRule="evenodd"
            d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm9.09 5.523a.527.527 0 0 1 .528.516.503.503 0 0 1-.16.368L7.43 10.449a.726.726 0 0 1-.166.11.483.483 0 0 1-.202.037.483.483 0 0 1-.203-.037.726.726 0 0 1-.165-.11L4.668 8.412a.506.506 0 0 1 0-.736.527.527 0 0 1 .368-.147c.14 0 .262.049.368.147l1.657 1.669 3.662-3.674a.526.526 0 0 1 .368-.148z"
            clipRule="evenodd"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <path d="M0 0h16v16H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  }
}

IconCheckSquare.displayName = "IconCheckSquare";

export default IconCheckSquare;
