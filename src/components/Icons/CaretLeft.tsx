import * as React from "react";
import IconBase from "../IconBase";

class IconCaretLeft extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path d="M9.834 4c-.13 0-.24.05-.33.13l-4 3.5c-.1.09-.17.22-.17.37s.07.28.17.37l4 3.5a.495.495 0 0 0 .83-.37v-7c0-.28-.22-.5-.5-.5z" />
      </svg>
    );
  }
}

IconCaretLeft.displayName = "IconCaretLeft";

export default IconCaretLeft;
