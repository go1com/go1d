import * as React from "react";
import IconBase from "../IconBase";

class IrrelevantIcon extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path
          fillRule="evenodd"
          d="M8.333 14.5a.75.75 0 01-.53-.22L3.22 9.697a.75.75 0 011.06-1.06l4.053 4.052 4.053-4.053a.75.75 0 111.06 1.061L8.865 14.28a.75.75 0 01-.53.22zm.531-6.636a.75.75 0 01-1.06 0L3.22 3.28a.75.75 0 111.06-1.06l4.054 4.053 4.053-4.053a.75.75 0 111.06 1.06L8.864 7.864z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
}

IrrelevantIcon.displayName = "IconIrrelevant";

export default IrrelevantIcon;
