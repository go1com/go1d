import * as React from "react";
import IconBase from "../IconBase";

class ThumbsUpIcon extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path d="M15.335 5.964a2.994 2.994 0 00-.647-.571 1.837 1.837 0 00-.8-.298h-3.717V2.914c0-.807-.283-1.494-.851-2.062A2.808 2.808 0 007.259 0a.805.805 0 00-.4.11.493.493 0 00-.248.333l-2.692 6.1H2.181c-.625 0-1.144.21-1.56.63C.208 7.594 0 8.112 0 8.725v5.095c0 .613.207 1.13.622 1.55.415.42.934.631 1.559.631h10.394c.545 0 1.017-.176 1.414-.528.398-.352.653-.784.767-1.295l1.022-6.543a2.35 2.35 0 00-.443-1.67zM3.63 14.534H2.181c-.227 0-.406-.065-.537-.195a.703.703 0 01-.196-.52V8.724c0-.216.066-.392.196-.528s.31-.205.537-.205h1.448v6.544zm9.662-.579a.678.678 0 01-.247.426.738.738 0 01-.469.154H5.078V7.412l2.624-5.878c.295.102.54.275.732.52.194.243.29.53.29.86V5.81c0 .228.065.407.196.537.13.13.304.196.52.196h4.294c.113 0 .21.031.29.094.079.062.153.128.22.196a.414.414 0 01.12.255c.012.103.017.188.017.256l-1.09 6.611z" />
      </svg>
    );
  }
}

ThumbsUpIcon.displayName = "IconThumbsUp";

export default ThumbsUpIcon;
