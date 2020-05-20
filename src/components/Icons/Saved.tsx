import * as React from "react";
import IconBase from "../IconBase";

class IconSaved extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path
          fillRule="evenodd"
          d="M2.628.628A2.144 2.144 0 014.144 0h8.366a2.144 2.144 0 012.144 2.144v13.385a.47.47 0 01-.745.383l-5.582-3.987-5.583 3.987A.47.47 0 012 15.53V2.144c0-.569.226-1.114.628-1.516z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
}

IconSaved.displayName = "IconSaved";

export default IconSaved;
