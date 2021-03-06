import * as React from "react";
import IconBase from "../IconBase";

class IconAddItem extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path d="M15.4 4.9c-.4-1-1-1.8-1.7-2.5S12.1 1.1 11.1.7C10.2.2 9.1 0 8 0S5.8.2 4.9.6c-1 .4-1.8 1-2.6 1.7C1.6 3.1 1 3.9.6 4.9.2 5.9 0 6.9 0 8s.2 2.2.6 3.1c.4 1 1 1.8 1.7 2.5s1.6 1.3 2.6 1.7c1 .4 2 .6 3.1.6s2.2-.2 3.1-.6c1-.4 1.8-1 2.6-1.7.7-.7 1.3-1.6 1.7-2.5.4-1 .6-2 .6-3.1s-.2-2.1-.6-3.1zm-3.2 3.6c-.2.2-.3.2-.6.2H8.7v2.9c0 .2-.1.4-.2.6-.2.2-.3.2-.6.2-.1 0-.2 0-.3-.1-.1 0-.2-.1-.2-.2s-.1 0-.1-.1c-.1-.1-.1-.2-.1-.3V8.8H4c-.1 0-.2-.1-.3-.2s-.1-.2-.1-.3V8c0-.2.1-.4.2-.6.2-.2.3-.2.6-.2h2.9V4.3c0-.2.1-.4.2-.6.1-.1.3-.1.5-.1s.4.1.5.2c.1.1.2.3.2.5v2.9h2.9c.2 0 .4.1.5.2.1.1.2.3.2.5.1.3.1.5-.1.6z" />
      </svg>
    );
  }
}

IconAddItem.displayName = "IconAddItem";

export default IconAddItem;
