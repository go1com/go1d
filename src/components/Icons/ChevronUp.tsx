import * as React from "react";
import IconBase from "../IconBase";

class IconChevronUp extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path d="M13.74 11.254a.85.85 0 01-.603.246.85.85 0 01-.602-.246L8 6.594l-4.535 4.66a.85.85 0 01-.602.246.85.85 0 01-.602-.246.855.855 0 010-1.232l5.137-5.255a.826.826 0 01.311-.205A.884.884 0 018 4.5c.08 0 .177.02.291.062.114.04.217.11.311.205l5.137 5.255a.855.855 0 010 1.232z" />
      </svg>
    );
  }
}

IconChevronUp.displayName = "IconChevronUp";

export default IconChevronUp;
