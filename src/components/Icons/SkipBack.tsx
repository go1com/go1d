import * as React from "react";
import IconBase from "../IconBase";

class SkipBackIcon extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path
          fillRule="evenodd"
          d="M12.36 2.13a.594.594 0 01.964.464v10.812a.594.594 0 01-.964.464L5.602 8.464a.594.594 0 010-.928L12.36 2.13zM12.137 4a.082.082 0 00-.134-.064l-5 4a.082.082 0 000 .128l5 4a.082.082 0 00.134-.064V4z"
          clipRule="evenodd"
        />
        <path d="M2.676 3.27a.594.594 0 011.187 0v9.46a.594.594 0 11-1.187 0V3.27z" />
      </svg>
    );
  }
}

SkipBackIcon.displayName = "IconSkipBack";

export default SkipBackIcon;
