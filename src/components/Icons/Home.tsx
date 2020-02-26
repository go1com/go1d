import * as React from "react";
import IconBase from "../IconBase";

class IconHome extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path d="M14.247 5.243L7.71.17A.756.756 0 007.243 0a.567.567 0 00-.417.17L.289 5.243A.713.713 0 000 5.82v8c0 .613.21 1.13.63 1.55.42.42.936.629 1.549.629h10.178c.613 0 1.13-.21 1.55-.63.42-.42.63-.936.63-1.549v-8a.714.714 0 00-.29-.579zm-5.532 9.293H5.82V8.732h2.894v5.804zm4.357-.715a.702.702 0 01-.195.52.702.702 0 01-.52.195H10.18V8a.686.686 0 00-.205-.52.731.731 0 00-.527-.195H5.089a.731.731 0 00-.527.196.686.686 0 00-.205.519v6.536H2.18a.702.702 0 01-.52-.196.702.702 0 01-.195-.519V6.196l5.804-4.51 5.804 4.51v7.625z" />
      </svg>
    );
  }
}

IconHome.displayName = "IconHome";

export default IconHome;
