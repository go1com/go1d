import * as React from "react";
import IconBase from "../IconBase";

class IconBriefcase extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path d="M13.817 3.4h-2.184v-.717c0-.625-.207-1.145-.622-1.56C10.596.708 10.075.5 9.45.5h-2.9c-.625 0-1.146.208-1.56.623-.416.415-.623.935-.623 1.56V3.4H2.183c-.625 0-1.145.21-1.56.63C.208 4.453 0 4.97 0 5.584v7.284c0 .614.208 1.131.623 1.552.415.42.935.631 1.56.631h11.634c.625 0 1.145-.21 1.56-.631.415-.42.623-.938.623-1.552V5.583c0-.614-.207-1.131-.623-1.552-.415-.42-.935-.631-1.56-.631zm-8-.717c0-.227.065-.406.196-.537.13-.13.31-.196.537-.196h2.9c.227 0 .406.065.537.196.131.13.196.31.196.537V3.4H5.817v-.717zm4.366 2.184V13.6H5.817V4.867h4.366zm-8.733 8V5.583a.7.7 0 0 1 .196-.52c.13-.13.31-.196.537-.196h2.184V13.6H2.183c-.227 0-.406-.068-.537-.204a.733.733 0 0 1-.196-.53zm13.1 0a.732.732 0 0 1-.196.528c-.13.137-.31.205-.537.205h-2.184V4.867h2.184c.227 0 .406.065.537.196.13.13.196.304.196.52v7.284z" />
      </svg>
    );
  }
}

IconBriefcase.displayName = "IconBriefcase";

export default IconBriefcase;
