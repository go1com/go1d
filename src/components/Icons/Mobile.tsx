import * as React from "react";
import IconBase from "../IconBase";

class IconMobile extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path
          fillRule="evenodd"
          d="M4.667 2.083a.583.583 0 00-.583.584v10.666c0 .322.26.584.583.584h6.667a.583.583 0 00.583-.584V2.667a.583.583 0 00-.583-.584H4.667zm-2.083.584c0-1.15.932-2.084 2.083-2.084h6.667c1.15 0 2.083.933 2.083 2.084v10.666c0 1.15-.933 2.084-2.083 2.084H4.667a2.083 2.083 0 01-2.083-2.084V2.667z"
          clipRule="evenodd"
        />
        <path
          fillRule="evenodd"
          d="M7.25 12a.75.75 0 01.75-.75h.007a.75.75 0 010 1.5H8a.75.75 0 01-.75-.75z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
}

IconMobile.displayName = "IconMobile";

export default IconMobile;
