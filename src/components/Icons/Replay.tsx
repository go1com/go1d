import * as React from "react";
import IconBase from "../IconBase";

class IconReplay extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path
          fillRule="evenodd"
          d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM7.838 4.039a4 4 0 1 1-3.216 5.29.444.444 0 1 1 .839-.295 3.11 3.11 0 1 0 .736-3.236l-.01.01-1.015.954H6.42a.444.444 0 1 1 0 .889H4.05a.443.443 0 0 1-.444-.439V4.836a.444.444 0 1 1 .888 0v1.343l1.08-1.015A4 4 0 0 1 7.838 4.04z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
}

IconReplay.displayName = "IconReplay";

export default IconReplay;
