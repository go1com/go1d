import * as React from "react";
import IconBase from "../IconBase";

class IconChevronDown extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path d="M13.74 4.746a.85.85 0 0 0-.603-.246.85.85 0 0 0-.602.246L8 9.406l-4.535-4.66a.85.85 0 0 0-.602-.246.85.85 0 0 0-.602.246.855.855 0 0 0 0 1.232l5.137 5.255a.825.825 0 0 0 .311.205c.114.041.21.062.291.062.08 0 .177-.02.291-.062a.825.825 0 0 0 .311-.205l5.137-5.255a.855.855 0 0 0 0-1.232z" />
      </svg>
    );
  }
}

IconChevronDown.displayName = "IconChevronDown";

export default IconChevronDown;
