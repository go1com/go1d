import * as React from "react";
import IconBase from "../IconBase";

class IconTeam extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path
          fillRule="evenodd"
          d="M8.166 6a.5.5 0 0 1 .5-.5H13A1.5 1.5 0 0 1 14.5 7v6a1.5 1.5 0 0 1-1.5 1.5H8.666a.5.5 0 0 1-.5-.5V6zm1 .5v7H13a.5.5 0 0 0 .5-.5V7a.5.5 0 0 0-.5-.5H9.166z"
          clipRule="evenodd"
        />
        <path
          fillRule="evenodd"
          d="M1.5 3A1.5 1.5 0 0 1 3 1.5h4.667a1.5 1.5 0 0 1 1.5 1.5v11a.5.5 0 0 1-.5.5H3A1.5 1.5 0 0 1 1.5 13V3zM3 2.5a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h5.167V3a.5.5 0 0 0-.5-.5H3zM10.166 9a.5.5 0 0 1 .5-.5H12a.5.5 0 1 1 0 1h-1.334a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5H12a.5.5 0 1 1 0 1h-1.334a.5.5 0 0 1-.5-.5z"
          clipRule="evenodd"
        />
        <path
          fillRule="evenodd"
          d="M3.5 7a.5.5 0 0 1 .5-.5h2.667a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h2.667a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h2.667a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2.667a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
}

IconTeam.displayName = "IconTeam";

export default IconTeam;
