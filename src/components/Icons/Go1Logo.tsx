import * as React from "react";
import IconBase from "../IconBase";

class IconGo1Logo extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path d="M11.635 9.532H16v-.946h-1.642V4.993c0-.596-.39-.993-.987-.993v.936h-1.718v.946h.807c.455 0 .788-.228.911-.587v3.29h-1.736v.947zM9.11 8.644H7.98a.987.987 0 01-.996-.983v-.85c0-.539.437-.983.997-.983h1.13a.989.989 0 011.005.982v.851a.99.99 0 01-1.006.983zM5.96 7.233c0 1.429 1.044 2.393 2.487 2.393h.2c1.442 0 2.495-.964 2.495-2.393 0-1.429-1.055-2.391-2.498-2.391h-.199c-1.441 0-2.485.964-2.485 2.391zm-2.411 5.06H1.813c-.466 0-.798-.284-.798-.673v-.076c0-.397.332-.69.798-.69H3.55c.465 0 .806.293.806.69v.076c0 .389-.34.672-.806.672zm-.323-3.99h-1.11c-.54 0-.978-.407-.978-.936V6.78a.96.96 0 01.978-.956h1.11c.541 0 .978.416.978.956v.576c0 .54-.437.946-.977.946zm2.153 3.252c0-1.031-.712-1.636-2.191-1.636h-1.86c-.229 0-.37-.143-.37-.322 0-.19.143-.33.37-.33h1.405c1.452 0 2.496-.918 2.496-2.26v-2.09c-.408 0-.76.255-.912.606-.379-.427-.959-.681-1.698-.681h-.153c-1.309 0-2.353.888-2.353 2.203 0 .672.276 1.181.73 1.523-.483.14-.826.529-.826 1.03 0 .463.285.832.713.993-.455.254-.731.652-.731 1.192 0 .908.892 1.493 2.638 1.493h.105c1.746 0 2.637-.614 2.637-1.72z" />
      </svg>
    );
  }
}

IconGo1Logo.displayName = "IconGo1Logo";

export default IconGo1Logo;
