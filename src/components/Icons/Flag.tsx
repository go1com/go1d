import * as React from "react";
import IconBase from "../IconBase";

class IconFlag extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path d="M14.1.8h-.4l-.4.1-.5.3c-.4.2-1 .2-1.8.2-.5 0-1 0-1.4-.2a353.7 353.7 0 0 1-2.8-1L5.1 0C4 0 3.1.1 2.6.4l-.9.5-.1.3-.1.2v13.9c0 .2 0 .4.2.5l.5.2c.2 0 .4 0 .6-.2l.1-.5v-4.8l.8-.2 1.4-.1c.5 0 1 0 1.4.2a163.7 163.7 0 0 0 4.5 1.2c1.1 0 2-.1 2.5-.4l.9-.5.1-.2V1.1L14 .8zm-1 9l-.7.2-1.4.2-1.4-.2a352.9 352.9 0 0 1-2.8-1c-.5-.2-1-.3-1.7-.3A7.4 7.4 0 0 0 3 9V1.8l.8-.2 1.4-.2A163.7 163.7 0 0 0 11 3a7.4 7.4 0 0 0 2.2-.3v7.2z" />
      </svg>
    );
  }
}

IconFlag.displayName = "IconFlag";

export default IconFlag;
