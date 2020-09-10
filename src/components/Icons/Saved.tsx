import * as React from "react";
import IconBase from "../IconBase";

class IconSaved extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path
          fillRule="evenodd"
          d="M3.37 2.037c.344-.344.81-.537 1.297-.537h6.666a1.833 1.833 0 0 1 1.834 1.833V14a.5.5 0 0 1-.79.407L8 11.28l-4.376 3.126a.5.5 0 0 1-.79-.407V3.333c0-.486.193-.952.536-1.296z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
}

IconSaved.displayName = "IconSaved";

export default IconSaved;
