import * as React from "react";
import IconBase from "../IconBase";

class IconReport extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path
          fillRule="evenodd"
          d="M7.75 5.75a.5.5 0 0 1 .5.5V15a.5.5 0 0 1-1 0V6.25a.5.5 0 0 1 .5-.5zM13 .5a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-1 0V1a.5.5 0 0 1 .5-.5zM2.5 11a.5.5 0 0 1 .5.5V15a.5.5 0 0 1-1 0v-3.5a.5.5 0 0 1 .5-.5z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
}

IconReport.displayName = "IconReport";

export default IconReport;
