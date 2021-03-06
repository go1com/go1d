import * as React from "react";
import IconBase from "../IconBase";

class IconPlay extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path
          fillRule="evenodd"
          d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm3.331-8.588L6.97 4.515a.566.566 0 0 0-.358-.119.566.566 0 0 0-.358.12.541.541 0 0 0-.332.204.623.623 0 0 0-.11.375v5.81c0 .148.033.276.102.384a.873.873 0 0 0 .255.264.56.56 0 0 0 .188.076c.045.006.108.009.187.009.068 0 .14-.017.213-.051.074-.034.145-.068.213-.102l4.362-2.914a.521.521 0 0 0 .23-.256c.04-.102.06-.21.06-.323a.627.627 0 0 0-.085-.307 1.217 1.217 0 0 0-.205-.273z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
}

IconPlay.displayName = "IconPlay";

export default IconPlay;
