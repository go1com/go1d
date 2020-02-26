import * as React from "react";
import IconBase from "../IconBase";

class IconRelevant extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path
          fillRule="evenodd"
          d="M8 1.25a.75.75 0 01.53.22l4.584 4.583a.75.75 0 11-1.06 1.06L8 3.062 3.947 7.114a.75.75 0 11-1.06-1.061L7.47 1.47A.75.75 0 018 1.25zm-.53 6.636a.75.75 0 011.06 0l4.584 4.584a.75.75 0 11-1.061 1.06L8 9.477 3.947 13.53a.75.75 0 01-1.06-1.06L7.47 7.886z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
}

IconRelevant.displayName = "IconRelevant";

export default IconRelevant;
