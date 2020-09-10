import * as React from "react";
import IconBase from "../IconBase";

class IconPlaylist extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path
          fillRule="evenodd"
          d="M1 2.438C1 2.196 1.196 2 1.438 2h13.124c.242 0 .438.196.438.438v3.5a.438.438 0 0 1-.438.437H1.438A.438.438 0 0 1 1 5.937v-3.5zm.875.437V5.5h12.25V2.875H1.875zM1 9.438C1 9.195 1.196 9 1.438 9h13.124a.438.438 0 0 1 0 .875H1.438A.438.438 0 0 1 1 9.437zm0 3.5c0-.242.196-.438.438-.438h13.124a.438.438 0 0 1 0 .875H1.438A.438.438 0 0 1 1 12.937z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
}

IconPlaylist.displayName = "IconPlaylist";

export default IconPlaylist;
