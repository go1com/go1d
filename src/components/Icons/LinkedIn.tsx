import * as React from "react";
import IconBase from "../IconBase";

class LinkedInIcon extends IconBase {
  getIconComponent() {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path
          fillRule="evenodd"
          d="M10.99 5.92a3.95 3.95 0 00-3.95 3.95v4.7h1.92v-4.7a2.03 2.03 0 114.05 0v4.7h1.92v-4.7A3.95 3.95 0 0011 5.92zm0-1.07a5.01 5.01 0 00-5.02 5.02v5.22c0 .3.24.54.54.54h2.98c.3 0 .54-.24.54-.54V9.87a.96.96 0 011.92 0v5.22c0 .3.24.54.53.54h2.99c.3 0 .53-.24.53-.54V9.87a5.01 5.01 0 00-5.01-5.02zM0 6.14c0-.3.24-.54.53-.54h2.99c.3 0 .53.24.53.54v8.96c0 .29-.24.53-.53.53H.53A.53.53 0 010 15.1V6.14zm1.07.53v7.9h1.92v-7.9H1.07zm.96-5.23a.96.96 0 100 1.92.96.96 0 000-1.92zM0 2.4a2.03 2.03 0 114.05 0A2.03 2.03 0 010 2.4z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
}

LinkedInIcon.displayName = "IconLinkedIn";

export default LinkedInIcon;
