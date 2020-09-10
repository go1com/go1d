import * as React from "react";
import IconBase from "../IconBase";

class IconGrid extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path
          fillRule="evenodd"
          d="M.5 1A.5.5 0 0 1 1 .5h5.444a.5.5 0 0 1 .5.5v5.444a.5.5 0 0 1-.5.5H1a.5.5 0 0 1-.5-.5V1zm1 .5v4.444h4.444V1.5H1.5zM9.056 1a.5.5 0 0 1 .5-.5H15a.5.5 0 0 1 .5.5v5.444a.5.5 0 0 1-.5.5H9.556a.5.5 0 0 1-.5-.5V1zm1 .5v4.444H14.5V1.5h-4.444zm-1 8.056a.5.5 0 0 1 .5-.5H15a.5.5 0 0 1 .5.5V15a.5.5 0 0 1-.5.5H9.556a.5.5 0 0 1-.5-.5V9.556zm1 .5V14.5H14.5v-4.444h-4.444zM.5 9.556a.5.5 0 0 1 .5-.5h5.444a.5.5 0 0 1 .5.5V15a.5.5 0 0 1-.5.5H1a.5.5 0 0 1-.5-.5V9.556zm1 .5V14.5h4.444v-4.444H1.5z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
}

IconGrid.displayName = "IconGrid";

export default IconGrid;
