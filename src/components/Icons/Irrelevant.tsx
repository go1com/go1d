import * as React from "react";
import IconBase from "../IconBase";

class IconIrrelevant extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path
          fillRule="evenodd"
          d="M8.333 14.5a.75.75 0 0 1-.53-.22L3.22 9.697a.75.75 0 0 1 1.06-1.06l4.053 4.052 4.053-4.053a.75.75 0 1 1 1.06 1.061L8.865 14.28a.75.75 0 0 1-.53.22zm.531-6.636a.75.75 0 0 1-1.06 0L3.22 3.28a.75.75 0 1 1 1.06-1.06l4.054 4.053 4.053-4.053a.75.75 0 1 1 1.06 1.06L8.864 7.864z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
}

IconIrrelevant.displayName = "IconIrrelevant";

export default IconIrrelevant;
