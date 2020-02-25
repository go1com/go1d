import * as React from "react";
import IconBase from "../IconBase";

class LearningIcon extends IconBase {
  getIconComponent() {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path d="M13.77 0H4.02c-.67 0-1.26.25-1.77.76-.5.5-.75 1.1-.75 1.78v10.9c0 .7.25 1.3.75 1.8s1.1.76 1.77.76h9.75a.7.7 0 00.54-.2.75.75 0 00.19-.53V.73c0-.22-.06-.4-.2-.53a.72.72 0 00-.53-.2zM4.02 1.45h9.04v9.46H4.02c-.18 0-.36.02-.54.05a1.7 1.7 0 00-.54.23V2.54a1 1 0 01.33-.76c.22-.22.47-.33.75-.33zm0 13.08c-.28 0-.53-.1-.75-.32a1.04 1.04 0 010-1.52 1 1 0 01.75-.34h9.04v2.18H4.02z" />
      </svg>
    );
  }
}

LearningIcon.displayName = "IconLearning";

export default LearningIcon;
