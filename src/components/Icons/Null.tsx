import * as React from "react";
import IconBase from "../IconBase";

class IconNull extends IconBase {
  getIconComponent(props) {
    return <svg fill="currentColor" viewBox="0 0 16 16" {...props} />;
  }
}

IconNull.displayName = "IconNull";

export default IconNull;
