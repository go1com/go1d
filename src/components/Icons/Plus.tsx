import * as React from "react";
import IconBase from "../IconBase";

class IconPlus extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path d="M13.261 7.253H8.757V2.755c0-.234-.07-.418-.212-.553A.756.756 0 0 0 8 2a.756.756 0 0 0-.545.202c-.141.135-.212.32-.212.553v4.498H2.74a.726.726 0 0 0-.537.202.724.724 0 0 0-.202.536c0 .234.067.419.202.554a.726.726 0 0 0 .537.202h4.504v4.498c0 .222.07.404.212.544.14.14.322.211.545.211.223 0 .405-.07.545-.21a.737.737 0 0 0 .212-.545V8.747h4.504a.726.726 0 0 0 .537-.202c.135-.135.202-.32.202-.554a.724.724 0 0 0-.202-.536.726.726 0 0 0-.537-.202z" />
      </svg>
    );
  }
}

IconPlus.displayName = "IconPlus";

export default IconPlus;
