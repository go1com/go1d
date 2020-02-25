import * as React from "react";
import IconBase from "../IconBase";

class PortalIcon extends IconBase {
  getIconComponent() {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path
          fillRule="evenodd"
          d="M4.084 1.75v12.5h7.833V1.75H4.084zm9.333 12.5V1a.75.75 0 00-.75-.75H3.334a.75.75 0 00-.75.75v13.25H2a.75.75 0 000 1.5h12a.75.75 0 000-1.5h-.583z"
          clipRule="evenodd"
        />
        <path
          fillRule="evenodd"
          d="M5.25 3.25h5.5v9.5h-5.5v-9.5zm1.5 1.5v6.5h2.5v-6.5h-2.5z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
}

PortalIcon.displayName = "IconPortal";

export default PortalIcon;
