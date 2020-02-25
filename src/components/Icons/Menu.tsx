import * as React from "react";
import IconBase from "../IconBase";

class MenuIcon extends IconBase {
  getIconComponent() {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path d="M15.2 6.8H.8c-.2 0-.4.1-.6.2-.1.2-.2.3-.2.6 0 .2.1.4.2.6.2.1.4.2.6.2h14.4c.2 0 .4-.1.6-.2.1-.2.2-.4.2-.6 0-.3-.1-.4-.2-.6-.2-.1-.4-.2-.6-.2zM.8 3.6h14.4c.2 0 .4-.1.6-.2.1-.2.2-.4.2-.6 0-.3-.1-.4-.2-.6-.2-.1-.4-.2-.6-.2H.8c-.2 0-.4.1-.6.2-.1.2-.2.3-.2.6 0 .2.1.4.2.6.2.1.4.2.6.2zm14.4 8H.8c-.2 0-.4.1-.6.2-.1.2-.2.3-.2.6 0 .2.1.4.2.6.2.1.4.2.6.2h14.4c.2 0 .4-.1.6-.2.1-.2.2-.4.2-.6 0-.3-.1-.4-.2-.6-.2-.1-.4-.2-.6-.2z" />
      </svg>
    );
  }
}

MenuIcon.displayName = "IconMenu";

export default MenuIcon;
