import * as React from "react";
import IconBase from "../IconBase";

class IconActivity extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path d="M15.3 6.6h-3l-.3.1c-.2 0-.2.2-.3.4l-1.5 4.4L6.5.5 6.2.1a.7.7 0 00-.8 0l-.2.4-2 6H.6l-.5.2-.2.6c0 .2 0 .4.2.5l.5.2h3l.3-.1c.2-.1.2-.3.3-.4L5.8 3l3.7 11c0 .2.1.3.3.4a.7.7 0 00.8 0l.2-.4 2-6h2.5l.5-.2.2-.5c0-.3 0-.5-.2-.6a.6.6 0 00-.5-.2z" />
      </svg>
    );
  }
}

IconActivity.displayName = "IconActivity";

export default IconActivity;
