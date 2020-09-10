import * as React from "react";
import IconBase from "../IconBase";

class IconComments extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path d="M14.93 2.897c.714.895 1.07 1.869 1.07 2.92 0 1.054-.356 2.027-1.068 2.92-.712.895-1.684 1.601-2.915 2.12-1.23.519-2.57.778-4.017.778-.651 0-1.318-.06-2-.181a9.555 9.555 0 0 1-3.158 1.454 9.594 9.594 0 0 1-.978.182H1.83a.355.355 0 0 1-.233-.091.376.376 0 0 1-.13-.239.233.233 0 0 1-.012-.073c0-.027.002-.052.006-.074a.24.24 0 0 1 .023-.069l.028-.056a.509.509 0 0 1 .04-.063.482.482 0 0 1 .045-.057.878.878 0 0 0 .052-.056 7.949 7.949 0 0 1 .307-.335c.136-.145.234-.256.295-.336.06-.08.146-.19.255-.33.11-.14.205-.285.285-.437.08-.151.157-.318.232-.5-.94-.544-1.678-1.216-2.216-2.011C.269 7.568 0 6.719 0 5.818c0-1.053.356-2.027 1.068-2.92.712-.894 1.684-1.6 2.915-2.12C5.213.26 6.553 0 7.999 0c1.447 0 2.786.26 4.017.778 1.231.52 2.203 1.226 2.915 2.12zm5.432 5.83c0 .909-.269 1.759-.807 2.55-.538.792-1.276 1.46-2.215 2.006.075.182.153.349.233.5.079.152.174.297.284.438.11.14.195.25.255.329.06.08.16.191.296.335a7.86 7.86 0 0 1 .306.335c.023.027.04.046.052.057a.49.49 0 0 1 .045.057.511.511 0 0 1 .04.063l.028.056a.241.241 0 0 1 .023.069.448.448 0 0 1 .006.073.231.231 0 0 1-.012.074.42.42 0 0 1-.148.25.343.343 0 0 1-.25.08 9.548 9.548 0 0 1-.977-.182 9.557 9.557 0 0 1-3.159-1.454c-.681.12-1.348.181-2 .181-2.052 0-3.84-.5-5.363-1.5.44.03.773.046 1 .046 1.22 0 2.39-.17 3.512-.511 1.12-.341 2.12-.83 3-1.466.946-.697 1.673-1.5 2.18-2.41a5.833 5.833 0 0 0 .5-4.612c.978.537 1.75 1.212 2.319 2.022.568.81.852 1.682.852 2.614z" />
      </svg>
    );
  }
}

IconComments.displayName = "IconComments";

export default IconComments;
