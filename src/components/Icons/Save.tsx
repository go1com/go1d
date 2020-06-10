import * as React from "react";
import IconBase from "../IconBase";

class IconSave extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path
          fillRule="evenodd"
          d="M4.667 2.5a.833.833 0 00-.834.833v9.695L7.71 10.26a.5.5 0 01.582 0l3.876 2.768V3.333a.833.833 0 00-.834-.833H4.667zM3.37 2.037c.344-.344.81-.537 1.297-.537h6.666a1.833 1.833 0 011.834 1.833V14a.5.5 0 01-.79.407L8 11.28l-4.376 3.126a.5.5 0 01-.79-.407V3.333c0-.486.193-.952.536-1.296z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
}

IconSave.displayName = "IconSave";

export default IconSave;
