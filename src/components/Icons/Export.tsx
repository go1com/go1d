import * as React from "react";
import IconBase from "../IconBase";

class IconExport extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path
          fillRule="evenodd"
          d="M2 9.5a.5.5 0 01.5.5v2.667a.833.833 0 00.833.833h9.334a.833.833 0 00.833-.833V10a.5.5 0 011 0v2.667a1.833 1.833 0 01-1.833 1.833H3.333A1.833 1.833 0 011.5 12.667V10a.5.5 0 01.5-.5z"
          clipRule="evenodd"
        />
        <path
          fillRule="evenodd"
          d="M4.313 6.313a.5.5 0 01.707 0L8 9.293l2.98-2.98a.5.5 0 11.707.707l-3.334 3.334a.5.5 0 01-.707 0L4.313 7.02a.5.5 0 010-.707z"
          clipRule="evenodd"
        />
        <path
          fillRule="evenodd"
          d="M8 1.5a.5.5 0 01.5.5v8a.5.5 0 01-1 0V2a.5.5 0 01.5-.5z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
}

IconExport.displayName = "IconExport";

export default IconExport;
