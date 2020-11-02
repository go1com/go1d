import * as React from "react";
import IconBase from "../IconBase";

class IconCaretDown extends IconBase {
  getIconComponent(props) {
    return (
      <div>
        <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
          <path d="M12 6c0-.28-.22-.5-.5-.5h-7a.495.495 0 0 0-.37.83l3.5 4c.09.1.22.17.37.17s.28-.07.37-.17l3.5-4c.08-.09.13-.2.13-.33z" />
        </svg>
      </div>
    );
  }
}

IconCaretDown.displayName = "IconCaretDown";

export default IconCaretDown;
