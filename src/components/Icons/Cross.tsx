import * as React from "react";
import IconBase from "../IconBase";

class CrossIcon extends IconBase {
  getIconComponent() {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path d="M9.204 7.99l3.535-3.543a.83.83 0 000-1.206.86.86 0 00-.602-.241.86.86 0 00-.602.241L8 6.804 4.465 3.241A.86.86 0 003.863 3 .86.86 0 003 3.844a.83.83 0 00.26.603L6.797 7.99l-3.535 3.543a.829.829 0 000 1.206c.094.093.184.16.27.2a.79.79 0 00.332.061.79.79 0 00.331-.06.972.972 0 00.27-.201L8 9.196l3.535 3.543c.094.093.197.16.311.2a.9.9 0 00.291.061.9.9 0 00.602-.261.829.829 0 000-1.206L9.204 7.99z" />
      </svg>
    );
  }
}

CrossIcon.displayName = "IconCross";

export default CrossIcon;
