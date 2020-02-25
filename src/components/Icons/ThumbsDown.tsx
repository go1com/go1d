import * as React from "react";
import IconBase from "../IconBase";

class ThumbsDownIcon extends IconBase {
  getIconComponent() {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path d="M15.88 2.124c-.069-.628-.332-1.139-.788-1.533A2.387 2.387 0 0013.482 0H3.236C2.69 0 2.215.177 1.815.531a2.39 2.39 0 00-.77 1.302L.017 8.411a2.252 2.252 0 00.428 1.619c.354.497.822.785 1.405.865h3.803v2.193c0 .8.285 1.484.856 2.056A2.824 2.824 0 008.582 16a.861.861 0 00.403-.103.468.468 0 00.248-.325l2.707-6.15h1.456a2.41 2.41 0 001.627-.591c.457-.394.72-.9.788-1.516V2.193c.034 0 .054-.012.06-.035l.009-.034zm-5.105 6.493l-2.638 5.927a1.726 1.726 0 01-.737-.531 1.319 1.319 0 01-.291-.857v-2.929a.706.706 0 00-.197-.523.706.706 0 00-.523-.197H2.073a.812.812 0 01-.454-.3.609.609 0 01-.128-.505l1.028-6.578a.881.881 0 01.248-.47.643.643 0 01.471-.198h7.538v7.16zm3.649-1.388a.893.893 0 01-.335.574.943.943 0 01-.608.231h-1.25V1.456h1.25c.217-.034.42.029.608.189.189.16.3.365.335.616V7.23z" />
      </svg>
    );
  }
}

ThumbsDownIcon.displayName = "IconThumbsDown";

export default ThumbsDownIcon;
