import * as React from "react";
import IconBase from "../IconBase";

class ReplayIcon extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path
          fillRule="evenodd"
          d="M16 8A8 8 0 110 8a8 8 0 0116 0zM7.838 4.039a4 4 0 11-3.216 5.29.444.444 0 11.839-.295 3.11 3.11 0 10.736-3.236l-.01.01-1.015.954H6.42a.444.444 0 110 .889H4.05a.443.443 0 01-.444-.439V4.836a.444.444 0 11.888 0v1.343l1.08-1.015A4 4 0 017.838 4.04z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
}

ReplayIcon.displayName = "IconReplay";

export default ReplayIcon;
