import * as React from "react";
import IconBase from "../IconBase";

class IconQuiz extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path d="M7 10v.4h1.4v-.6l.7-.4.8-.8c.2-.3.3-.6.3-1 0-.5-.2-1-.6-1.2-.4-.3-1-.5-1.6-.5-.9 0-1.7.2-2.4.7l.6 1.2c.6-.3 1.2-.5 1.6-.5.2 0 .4 0 .5.2.1 0 .2.1.2.3 0 .1 0 .3-.2.4l-.5.4a2 2 0 00-.7.6L7 10zm0 1.4c-.2.1-.3.3-.3.6s.1.5.3.7l.7.2c.3 0 .5 0 .7-.2.2-.2.3-.4.3-.7 0-.3-.1-.5-.3-.6-.1-.2-.4-.3-.7-.3-.3 0-.6.1-.7.3z" />
        <path d="M11.6 1.4h.7a2 2 0 011.6.7c.4.4.6 1 .6 1.5v10.2c0 .6-.2 1.1-.6 1.6a2 2 0 01-1.6.6H3.7a2 2 0 01-1.6-.6c-.4-.5-.6-1-.6-1.6V3.6a2 2 0 012.2-2.2h.7c0-.3.1-.7.4-1 .3-.3.6-.4 1-.4h4.4c.4 0 .7.1 1 .4.3.3.4.7.4 1zm-1.4 0H5.8V3h4.4V1.4zm2.7 13l.2-.6V3.6l-.2-.5a.7.7 0 00-.6-.2h-.7c0 .4-.1.8-.4 1-.3.3-.6.5-1 .5H5.8c-.4 0-.7-.2-1-.5-.3-.2-.4-.6-.4-1h-.7c-.2 0-.4 0-.6.2l-.2.5v10.2l.2.5c.2.2.4.2.6.2h8.6c.2 0 .4 0 .6-.2z" />
      </svg>
    );
  }
}

IconQuiz.displayName = "IconQuiz";

export default IconQuiz;
