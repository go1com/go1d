import * as React from "react";
import IconBase from "../IconBase";

class IconAudio extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path
          fillRule="evenodd"
          d="M8 2.75A5.25 5.25 0 0 0 2.75 8v4a.75.75 0 0 1-1.5 0V8a6.75 6.75 0 0 1 13.5 0v4a.75.75 0 0 1-1.5 0V8A5.25 5.25 0 0 0 8 2.75z"
          clipRule="evenodd"
        />
        <path
          fillRule="evenodd"
          d="M1.25 9.333a.75.75 0 0 1 .75-.75h2a2.083 2.083 0 0 1 2.083 2.084v2A2.083 2.083 0 0 1 4 14.75h-.667a2.083 2.083 0 0 1-2.083-2.083V9.333zm1.5.75v2.584a.583.583 0 0 0 .583.583H4a.583.583 0 0 0 .583-.583v-2A.583.583 0 0 0 4 10.083H2.75zm9.25 0a.583.583 0 0 0-.583.584v2a.583.583 0 0 0 .583.583h.667a.583.583 0 0 0 .583-.583v-2.584H12zm-1.473-.89c.39-.39.92-.61 1.473-.61h2a.75.75 0 0 1 .75.75v3.334a2.083 2.083 0 0 1-2.083 2.083H12a2.083 2.083 0 0 1-2.083-2.083v-2c0-.553.22-1.083.61-1.473z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
}

IconAudio.displayName = "IconAudio";

export default IconAudio;
