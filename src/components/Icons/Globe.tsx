import * as React from "react";
import IconBase from "../IconBase";

class IconGlobe extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path
          fillRule="evenodd"
          d="M8 2.083a5.917 5.917 0 100 11.834A5.917 5.917 0 008 2.083zM.583 8a7.417 7.417 0 1114.834 0A7.417 7.417 0 01.583 8z"
          clipRule="evenodd"
        />
        <path
          fillRule="evenodd"
          d="M.583 8a.75.75 0 01.75-.75h13.334a.75.75 0 010 1.5H1.333A.75.75 0 01.583 8z"
          clipRule="evenodd"
        />
        <path
          fillRule="evenodd"
          d="M6.084 8A9.45 9.45 0 008 13.496 9.45 9.45 0 009.917 8 9.45 9.45 0 008 2.504 9.45 9.45 0 006.084 8zM8 1.333L7.446.828a10.95 10.95 0 00-2.862 7.188 10.95 10.95 0 002.862 7.156.75.75 0 001.108 0 10.95 10.95 0 002.863-7.188A10.95 10.95 0 008.554.828L8 1.333z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
}

IconGlobe.displayName = "IconGlobe";

export default IconGlobe;
