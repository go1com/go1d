import * as React from "react";
import IconBase from "../IconBase";

class TooHardIcon extends IconBase {
  getIconComponent() {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path
          fillRule="evenodd"
          d="M12.701 12.606A4.84 4.84 0 0110.75 13a4.84 4.84 0 01-1.951-.394 4.867 4.867 0 01-1.594-1.065 5.146 5.146 0 01-1.071-1.587 4.893 4.893 0 01-.332-1.204H.75a.75.75 0 010-1.5h5.053c.06-.416.17-.814.33-1.194.264-.61.62-1.14 1.072-1.592.452-.45.983-.807 1.594-1.07A4.84 4.84 0 0110.75 3a4.84 4.84 0 011.951.394c.611.263 1.143.62 1.594 1.07a5.06 5.06 0 011.071 1.592 4.94 4.94 0 01.384 1.95 4.99 4.99 0 01-.384 1.948 5.145 5.145 0 01-1.071 1.587c-.451.454-.983.81-1.594 1.065zM9.475 9.974l1.275-1.285 1.27 1.28.005.005a.492.492 0 00.341.135c.13 0 .246-.047.341-.135l.005-.005a.48.48 0 000-.692l-1.27-1.273 1.27-1.274a.48.48 0 000-.691.534.534 0 00-.151-.11.463.463 0 00-.195-.038.463.463 0 00-.195.038.535.535 0 00-.15.11L10.75 7.312 9.48 6.039a.504.504 0 00-.346-.148.504.504 0 00-.346.148.48.48 0 000 .691l1.27 1.274-1.27 1.273a.48.48 0 000 .692l.005.005a.492.492 0 00.34.135c.13 0 .247-.047.342-.135z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
}

TooHardIcon.displayName = "IconTooHard";

export default TooHardIcon;
