import * as React from "react";
import IconBase from "../IconBase";

class CreditCardIcon extends IconBase {
  getIconComponent() {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path d="M14.667 1.48c.366 0 .68.133.941.399.261.266.392.586.392.959v10.321c0 .373-.13.693-.392.96a1.272 1.272 0 01-.941.398H1.333c-.366 0-.68-.133-.941-.399A1.32 1.32 0 010 13.16V2.838c0-.373.13-.693.392-.96.26-.265.575-.398.941-.398h13.334zM1.333 2.566a.254.254 0 00-.187.081.263.263 0 00-.08.191v1.901h13.867V2.838a.264.264 0 00-.079-.191.254.254 0 00-.187-.08H1.333zm13.334 10.865a.254.254 0 00.187-.081.264.264 0 00.08-.191v-5.16H1.066v5.16c0 .074.026.137.079.191.053.054.115.08.187.08h13.334zM2.133 12.344v-1.086h2.134v1.086H2.133zm3.2 0v-1.086h3.2v1.086h-3.2z" />
      </svg>
    );
  }
}

CreditCardIcon.displayName = "IconCreditCard";

export default CreditCardIcon;
