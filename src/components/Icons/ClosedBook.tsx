import * as React from "react";
import IconBase from "../IconBase";

class IconClosedBook extends IconBase {
  getIconComponent(props) {
    return (
      <svg width={14} height={16} viewBox="0 0 14 16" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.83792 12.0099C2.47373 12.0099 2.1263 12.1516 1.8716 12.4009C1.61723 12.6498 1.4761 12.9855 1.4761 13.3334C1.4761 13.5771 1.27858 13.7746 1.03493 13.7746C0.791271 13.7746 0.59375 13.5771 0.59375 13.3334C0.59375 12.7453 0.832542 12.1832 1.25442 11.7703C1.67597 11.3577 2.24575 11.1275 2.83792 11.1275H12.5741C12.8178 11.1275 13.0153 11.325 13.0153 11.5687C13.0153 11.8123 12.8178 12.0099 12.5741 12.0099H2.83792Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.83792 1.4219C2.47373 1.4219 2.1263 1.5636 1.8716 1.81289C1.61723 2.06186 1.4761 2.3975 1.4761 2.74543V13.3334C1.4761 13.6813 1.61723 14.0172 1.8716 14.2662C2.1263 14.5155 2.47373 14.6572 2.83792 14.6572H12.1329V1.4219H2.83792ZM2.83792 0.539551C2.24575 0.539551 1.67597 0.769706 1.25442 1.18231C0.832542 1.59523 0.59375 2.1573 0.59375 2.74543V13.3334C0.59375 13.9215 0.832542 14.4839 1.25442 14.8968C1.67597 15.3094 2.24575 15.5396 2.83792 15.5396H12.5741C12.8178 15.5396 13.0153 15.342 13.0153 15.0984V0.980727C13.0153 0.737072 12.8178 0.539551 12.5741 0.539551H2.83792Z"
        fill="currentColor"
      />
    </svg>
    );
  }
}

IconClosedBook.displayName = "IconClosedBook";

export default IconClosedBook;
