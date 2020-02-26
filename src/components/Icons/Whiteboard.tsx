import * as React from "react";
import IconBase from "../IconBase";

class IconWhiteboard extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path
          fillRule="evenodd"
          d="M5.164 15.164a.703.703 0 11-.995-.995l2.133-2.132H2.666A2.037 2.037 0 01.63 10V2.667C.63 1.542 1.542.63 2.666.63h10.667c1.125 0 2.037.912 2.037 2.037V10a2.037 2.037 0 01-2.037 2.037H9.698l2.132 2.132a.703.703 0 01-.994.995L8 12.328l-2.836 2.836zm2.83-4.534h5.338a.63.63 0 00.63-.63V2.667a.63.63 0 00-.63-.63H2.666a.63.63 0 00-.63.63V10c0 .348.282.63.63.63h5.327z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
}

IconWhiteboard.displayName = "IconWhiteboard";

export default IconWhiteboard;
