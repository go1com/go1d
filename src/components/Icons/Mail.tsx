import * as React from "react";
import IconBase from "../IconBase";

class MailIcon extends IconBase {
  getIconComponent() {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path d="M13.82 1.5H2.18A2.12 2.12 0 000 3.68v8.74a2.12 2.12 0 002.18 2.18h11.64A2.12 2.12 0 0016 12.42V3.68a2.12 2.12 0 00-2.18-2.18zM2.18 2.97h11.64a.7.7 0 01.38.1c.1.07.2.18.28.32L8 7.91 1.52 3.4a.84.84 0 01.28-.32.7.7 0 01.38-.1zm11.64 10.18H2.18a.73.73 0 01-.53-.2.73.73 0 01-.2-.53V5.07l6.1 4.3.24.1a.5.5 0 00.21.05.5.5 0 00.21-.05l.23-.1 6.11-4.3v7.35c0 .22-.07.4-.2.53a.73.73 0 01-.53.2z" />
      </svg>
    );
  }
}

MailIcon.displayName = "IconMail";

export default MailIcon;
