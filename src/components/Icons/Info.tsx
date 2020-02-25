import * as React from "react";
import IconBase from "../IconBase";

class InfoIcon extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path d="M8.282.11a7.73 7.73 0 00-3.118.63 7.778 7.778 0 00-2.548 1.704 8.234 8.234 0 00-1.712 2.54A7.993 7.993 0 00.29 8.1c0 1.114.204 2.153.613 3.119a8.08 8.08 0 001.712 2.547 8.075 8.075 0 002.548 1.712c.965.42 2.005.63 3.118.63s2.153-.21 3.118-.63a8.075 8.075 0 002.548-1.712 8.076 8.076 0 001.712-2.547 7.913 7.913 0 00.613-3.119 7.994 7.994 0 00-.613-3.118 8.235 8.235 0 00-1.712-2.539A7.778 7.778 0 0011.4.74 7.727 7.727 0 008.282.11zm0 14.534c-.909 0-1.76-.17-2.556-.51a6.565 6.565 0 01-2.079-1.398 6.566 6.566 0 01-1.397-2.079 6.42 6.42 0 01-.511-2.556c0-.908.17-1.76.511-2.556a6.565 6.565 0 011.397-2.078 6.565 6.565 0 012.08-1.398 6.42 6.42 0 012.555-.51c.909 0 1.76.17 2.556.51a6.572 6.572 0 012.079 1.398 6.565 6.565 0 011.397 2.078 6.42 6.42 0 01.511 2.556c0 .91-.17 1.761-.511 2.556a6.566 6.566 0 01-1.397 2.08 6.565 6.565 0 01-2.08 1.396 6.419 6.419 0 01-2.555.512zm0-7.258a.732.732 0 00-.528.196.687.687 0 00-.205.52v2.913c0 .216.068.392.205.528a.715.715 0 00.528.205.715.715 0 00.528-.205.715.715 0 00.205-.528V8.101a.687.687 0 00-.205-.52.732.732 0 00-.528-.195zm-.511-2.693a.852.852 0 00-.162.222.642.642 0 00-.06.29c0 .102.02.193.06.272.04.08.094.16.162.239.08.068.156.12.23.153a.672.672 0 00.281.051.672.672 0 00.281-.05 1.06 1.06 0 00.23-.154c.068-.08.122-.16.162-.239.04-.08.06-.17.06-.272a.64.64 0 00-.06-.29.852.852 0 00-.162-.222.702.702 0 00-1.022 0z" />
      </svg>
    );
  }
}

InfoIcon.displayName = "IconInfo";

export default InfoIcon;
