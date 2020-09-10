import * as React from "react";
import IconBase from "../IconBase";

class IconShare extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path
          fillRule="evenodd"
          d="M2.667 7.583c.23 0 .416.187.416.417v5.333A.917.917 0 0 0 4 14.25h8a.917.917 0 0 0 .917-.917V8a.417.417 0 1 1 .833 0v5.333a1.75 1.75 0 0 1-1.75 1.75H4a1.75 1.75 0 0 1-1.75-1.75V8c0-.23.187-.417.417-.417zm5.038-6.544a.417.417 0 0 1 .59 0l2.666 2.666a.417.417 0 0 1-.589.59L8 1.923 5.628 4.295a.417.417 0 0 1-.59-.59L7.706 1.04z"
          clipRule="evenodd"
        />
        <path
          fillRule="evenodd"
          d="M8 .917c.23 0 .417.186.417.416V10a.417.417 0 0 1-.834 0V1.333c0-.23.187-.416.417-.416z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
}

IconShare.displayName = "IconShare";

export default IconShare;
