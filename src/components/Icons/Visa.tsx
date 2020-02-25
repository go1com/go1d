import * as React from "react";
import IconBase from "../IconBase";

class VisaIcon extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path d="M13.058 7.316s.211 1.033.259 1.25h-.928c.092-.247.444-1.208.444-1.208-.005.008.092-.253.148-.414l.077.372zM16 3.113v9.778c0 .736-.597 1.333-1.333 1.333H1.333A1.334 1.334 0 010 12.891V3.113C0 2.377.597 1.78 1.333 1.78h13.334c.736 0 1.333.597 1.333 1.333zM4.236 10.091L5.992 5.78h-1.18L3.718 8.724 3.6 8.127l-.389-1.983c-.064-.275-.261-.353-.505-.364H.908l-.02.086c.44.111.831.272 1.173.475l.995 3.75h1.18zm2.622.006l.7-4.317H6.442l-.698 4.317h1.114zm3.886-1.411c.006-.492-.294-.867-.936-1.175-.391-.198-.63-.331-.63-.534.005-.183.203-.372.641-.372.364-.008.631.078.831.164l.1.047.153-.933a2.775 2.775 0 00-1-.184c-1.103 0-1.878.59-1.884 1.428-.008.62.556.964.978 1.172.43.212.578.35.578.537-.006.288-.35.422-.67.422-.444 0-.683-.07-1.047-.23l-.147-.07-.155.97c.26.119.744.224 1.244.23 1.172.003 1.936-.578 1.944-1.472zm3.923 1.41l-.9-4.316h-.864c-.267 0-.47.078-.584.358l-1.658 3.959h1.172l.234-.648H13.5c.033.153.133.648.133.648h1.034z" />
      </svg>
    );
  }
}

VisaIcon.displayName = "IconVisa";

export default VisaIcon;
