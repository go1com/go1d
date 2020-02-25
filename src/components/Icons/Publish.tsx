import * as React from "react";
import IconBase from "../IconBase";

class IconPublish extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path d="M14.203 5.59L8.863.25a1.075 1.075 0 00-.135-.114.238.238 0 00-.136-.053A.552.552 0 008.279 0c-.125 0-.257.028-.396.083a.314.314 0 01-.136.084.314.314 0 00-.136.083l-5.34 5.34A.86.86 0 002 6.217c0 .237.09.445.271.626a.86.86 0 001.252 0L7.34 3.004v12.12c0 .264.084.476.25.636.168.16.383.24.647.24.265 0 .48-.08.647-.24.167-.16.25-.372.25-.636V3.004l3.818 3.838c.097.084.205.15.323.198a.822.822 0 00.303.073.823.823 0 00.302-.073 1.19 1.19 0 00.323-.198.86.86 0 00.272-.626.86.86 0 00-.272-.625z" />
      </svg>
    );
  }
}

IconPublish.displayName = "IconPublish";

export default IconPublish;
