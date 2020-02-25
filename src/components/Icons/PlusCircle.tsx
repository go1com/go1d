import * as React from "react";
import IconBase from "../IconBase";

class PlusCircleIcon extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path d="M8 0C6.886 0 5.845.21 4.878.63a7.787 7.787 0 00-2.55 1.704 8.234 8.234 0 00-1.714 2.54A7.986 7.986 0 000 7.99c0 1.114.205 2.153.614 3.119.42.977.992 1.826 1.714 2.547a8.085 8.085 0 002.55 1.713c.967.42 2.008.63 3.122.63 1.114 0 2.155-.21 3.121-.63a8.085 8.085 0 002.55-1.713 8.076 8.076 0 001.715-2.547c.41-.966.614-2.005.614-3.119a7.985 7.985 0 00-.614-3.118 8.233 8.233 0 00-1.714-2.539A7.786 7.786 0 0011.122.63 7.742 7.742 0 008 0zm0 14.535c-.91 0-1.763-.17-2.559-.512a6.572 6.572 0 01-2.08-1.397 6.564 6.564 0 01-1.4-2.079 6.413 6.413 0 01-.511-2.556c0-.908.17-1.76.512-2.555a6.564 6.564 0 011.398-2.08A6.572 6.572 0 015.441 1.96 6.432 6.432 0 018 1.448c.91 0 1.763.17 2.559.512.796.34 1.49.806 2.08 1.397a6.566 6.566 0 011.4 2.079 6.43 6.43 0 01.511 2.555c0 .91-.17 1.761-.512 2.556a6.565 6.565 0 01-1.398 2.08 6.573 6.573 0 01-2.081 1.396A6.432 6.432 0 018 14.535zm2.917-7.26H8.733v-2.18c0-.227-.068-.406-.204-.537A.733.733 0 008 4.362a.733.733 0 00-.529.196c-.136.13-.204.31-.204.537v2.18H5.083a.704.704 0 00-.52.197.702.702 0 00-.196.52c0 .227.065.406.196.536.13.13.304.196.52.196h2.184v2.181c0 .216.068.392.204.528a.716.716 0 00.529.205.716.716 0 00.529-.205.714.714 0 00.204-.528v-2.18h2.184c.216 0 .39-.066.52-.197.13-.13.196-.31.196-.537a.702.702 0 00-.196-.52.704.704 0 00-.52-.195z" />
      </svg>
    );
  }
}

PlusCircleIcon.displayName = "IconPlusCircle";

export default PlusCircleIcon;
