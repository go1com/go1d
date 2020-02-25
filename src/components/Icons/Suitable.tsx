import * as React from "react";
import IconBase from "../IconBase";

class SuitableIcon extends IconBase {
  getIconComponent() {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path
          fillRule="evenodd"
          d="M8 3a4.84 4.84 0 00-1.951.394 4.867 4.867 0 00-1.594 1.065 5.146 5.146 0 00-1.071 1.587 4.893 4.893 0 00-.332 1.204H1a.75.75 0 000 1.5h2.053c.06.416.17.814.33 1.194.264.61.62 1.14 1.072 1.592.452.45.983.807 1.594 1.07A4.84 4.84 0 008 13a4.84 4.84 0 001.951-.394 5.054 5.054 0 001.594-1.07 5.06 5.06 0 001.071-1.592c.161-.38.271-.778.331-1.194H15a.75.75 0 000-1.5h-2.052a4.89 4.89 0 00-.332-1.204 5.145 5.145 0 00-1.071-1.587A4.867 4.867 0 009.95 3.394 4.84 4.84 0 008 3zm2.329 3.203a.561.561 0 00-.39.155l-2.71 2.72-1.163-1.173L6.06 7.9a.561.561 0 00-.39-.154.561.561 0 00-.389.154l-.004.005a.545.545 0 000 .787l1.561 1.57.005.005a.525.525 0 00.385.15.526.526 0 00.385-.15l.004-.004 3.104-3.114a.545.545 0 000-.787l-.004-.004a.561.561 0 00-.39-.155z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
}

SuitableIcon.displayName = "IconSuitable";

export default SuitableIcon;
