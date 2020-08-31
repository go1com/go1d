import * as React from "react";
import IconBase from "../IconBase";

class IconPlaylistPlus extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path
          fillRule="evenodd"
          d="M9.115 10.254a.5.5 0 01.5-.5H15a.5.5 0 010 1H9.615a.5.5 0 01-.5-.5zM.5 8.504a.5.5 0 01.5-.5h6.462a.5.5 0 110 1H1a.5.5 0 01-.5-.5zm0 3.769a.5.5 0 01.5-.5h6.462a.5.5 0 110 1H1a.5.5 0 01-.5-.5z"
          clipRule="evenodd"
        />
        <path
          fillRule="evenodd"
          d="M12.308 7.062a.5.5 0 01.5.5v5.384a.5.5 0 11-1 0V7.562a.5.5 0 01.5-.5zM.5 1.1A.5.5 0 011 .6h14a.5.5 0 01.5.5v3.769a.5.5 0 01-.5.5H1a.5.5 0 01-.5-.5v-3.77zm1 .5v2.769h13v-2.77h-13z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
}

IconPlaylistPlus.displayName = "IconPlaylistPlus";

export default IconPlaylistPlus;
