import * as React from "react";
import IconBase from "../IconBase";

class MixerIcon extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <g clipPath="url(#clip0)">
          <path
            fillRule="evenodd"
            d="M2.964 1c.53 0 .96.448.96 1v4.667c0 .552-.43 1-.96 1s-.96-.448-.96-1V2c0-.552.43-1 .96-1zm-.96 9.333V14c0 .552.43 1 .96 1s.96-.448.96-1v-3.667h.96c.53 0 .96-.447.96-1 0-.552-.43-1-.96-1h-3.84c-.53 0-.96.448-.96 1 0 .553.43 1 .96 1h.96zM9.044 8c0-.552-.43-1-.96-1s-.96.448-.96 1v6c0 .552.43 1 .96 1s.96-.448.96-1V8zm-.96-7c.53 0 .96.448.96 1v2.334h.96c.53 0 .96.447.96 1 0 .552-.43 1-.96 1h-3.84c-.53 0-.96-.448-.96-1 0-.553.43-1 .96-1h.96V2c0-.552.43-1 .96-1zm4.16 10.666h-.96c-.53 0-.96-.447-.96-1 0-.552.43-1 .96-1h3.84c.53 0 .96.448.96 1 0 .553-.43 1-.96 1h-.96V14c0 .552-.43 1-.96 1s-.96-.448-.96-1v-2.334zM13.205 1c.53 0 .96.448.96 1v6c0 .552-.43 1-.96 1s-.96-.448-.96-1V2c0-.552.43-1 .96-1z"
            clipRule="evenodd"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <path d="M.084 0h16v16h-16V0z" />
          </clipPath>
        </defs>
      </svg>
    );
  }
}

MixerIcon.displayName = "IconMixer";

export default MixerIcon;
