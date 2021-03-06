import * as React from "react";
import IconBase from "../IconBase";

class IconSun extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path
          fillRule="evenodd"
          d="M8 5.14a2.86 2.86 0 1 0 0 5.72 2.86 2.86 0 0 0 0-5.72zM4.073 8a3.927 3.927 0 1 1 7.854 0 3.927 3.927 0 0 1-7.854 0zM8 0c.295 0 .533.239.533.533v1.358a.533.533 0 0 1-1.066 0V.533C7.467.24 7.705 0 8 0zm0 13.576c.295 0 .533.239.533.533v1.358a.533.533 0 0 1-1.066 0v-1.358c0-.294.238-.533.533-.533zM2.342 2.342a.533.533 0 0 1 .754 0l.964.964a.533.533 0 1 1-.754.754l-.964-.964a.533.533 0 0 1 0-.754zm9.598 9.598a.534.534 0 0 1 .754 0l.964.964a.534.534 0 0 1-.754.754l-.964-.964a.534.534 0 0 1 0-.754zM0 8c0-.295.239-.533.533-.533h1.358a.533.533 0 0 1 0 1.066H.533A.533.533 0 0 1 0 8zm13.576 0c0-.295.239-.533.533-.533h1.358a.533.533 0 1 1 0 1.066h-1.358A.533.533 0 0 1 13.576 8zM4.06 11.94a.533.533 0 0 1 0 .754l-.964.964a.533.533 0 0 1-.754-.754l.964-.964a.533.533 0 0 1 .754 0zm9.598-9.598a.533.533 0 0 1 0 .754l-.964.964a.533.533 0 0 1-.754-.754l.964-.964a.533.533 0 0 1 .754 0z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
}

IconSun.displayName = "IconSun";

export default IconSun;
