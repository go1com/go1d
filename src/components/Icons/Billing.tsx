import * as React from "react";
import IconBase from "../IconBase";

class IconBilling extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path d="M14 2H2c-.563 0-1.036.193-1.422.578C.193 2.964 0 3.438 0 4v8c0 .573.193 1.05.578 1.43.386.38.86.57 1.422.57h12c.563 0 1.037-.19 1.422-.57.385-.38.578-.857.578-1.43V4c0-.563-.193-1.036-.578-1.422A1.933 1.933 0 0014 2zM2 3.344h12c.198 0 .36.06.484.18a.63.63 0 01.188.476v2H1.328V4a.63.63 0 01.188-.477.671.671 0 01.484-.18zm12 9.328H2a.671.671 0 01-.484-.18c-.125-.12-.188-.284-.188-.492V7.344h13.344V12c0 .208-.063.372-.188.492a.671.671 0 01-.484.18z" />
      </svg>
    );
  }
}

IconBilling.displayName = "IconBilling";

export default IconBilling;
