import * as React from "react";
import IconBase from "../IconBase";

class IconSuitable extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path
          fillRule="evenodd"
          d="M8 3a4.84 4.84 0 0 0-1.951.394 4.867 4.867 0 0 0-1.594 1.065 5.146 5.146 0 0 0-1.071 1.587 4.893 4.893 0 0 0-.332 1.204H1a.75.75 0 0 0 0 1.5h2.053c.06.416.17.814.33 1.194.264.61.62 1.14 1.072 1.592.452.45.983.807 1.594 1.07A4.84 4.84 0 0 0 8 13a4.84 4.84 0 0 0 1.951-.394 5.054 5.054 0 0 0 1.594-1.07 5.06 5.06 0 0 0 1.071-1.592c.161-.38.271-.778.331-1.194H15a.75.75 0 0 0 0-1.5h-2.052a4.89 4.89 0 0 0-.332-1.204 5.145 5.145 0 0 0-1.071-1.587A4.867 4.867 0 0 0 9.95 3.394 4.84 4.84 0 0 0 8 3zm2.329 3.203a.561.561 0 0 0-.39.155l-2.71 2.72-1.163-1.173L6.06 7.9a.561.561 0 0 0-.39-.154.561.561 0 0 0-.389.154l-.004.005a.545.545 0 0 0 0 .787l1.561 1.57.005.005a.525.525 0 0 0 .385.15.526.526 0 0 0 .385-.15l.004-.004 3.104-3.114a.545.545 0 0 0 0-.787l-.004-.004a.561.561 0 0 0-.39-.155z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
}

IconSuitable.displayName = "IconSuitable";

export default IconSuitable;
