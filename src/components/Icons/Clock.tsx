import * as React from "react";
import IconBase from "../IconBase";

class ClockIcon extends IconBase {
  getIconComponent() {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path d="M8 0C6.886 0 5.845.21 4.878.631a7.786 7.786 0 00-2.55 1.706A8.243 8.243 0 00.614 4.878 8.002 8.002 0 000 8a7.92 7.92 0 00.614 3.121c.42.979.992 1.829 1.714 2.55a8.084 8.084 0 002.55 1.715c.967.42 2.008.631 3.122.631 1.114 0 2.155-.21 3.121-.631a8.083 8.083 0 002.55-1.714 8.083 8.083 0 001.715-2.55A7.92 7.92 0 0016 8a8.001 8.001 0 00-.614-3.122 8.242 8.242 0 00-1.714-2.541A7.786 7.786 0 0011.122.63 7.735 7.735 0 008 0zm0 14.55c-.91 0-1.763-.17-2.559-.512a6.573 6.573 0 01-2.08-1.398 6.572 6.572 0 01-1.4-2.081A6.426 6.426 0 011.45 8c0-.91.17-1.763.512-2.559a6.572 6.572 0 011.398-2.08 6.572 6.572 0 012.081-1.4A6.426 6.426 0 018 1.45c.91 0 1.763.17 2.559.512.796.34 1.49.807 2.08 1.398a6.573 6.573 0 011.4 2.081c.34.796.511 1.65.511 2.559 0 .91-.17 1.763-.512 2.559a6.573 6.573 0 01-1.398 2.08 6.573 6.573 0 01-2.081 1.4A6.427 6.427 0 018 14.55zm.733-6.84V3.633a.687.687 0 00-.204-.52A.733.733 0 008 2.917a.733.733 0 00-.529.196.687.687 0 00-.204.52V8c0 .114.02.21.06.29.039.08.093.154.161.222l2.184 2.183c.08.08.167.137.264.17.097.035.18.052.247.052a.766.766 0 00.512-.222.703.703 0 000-1.023L8.733 7.71z" />
      </svg>
    );
  }
}

ClockIcon.displayName = "IconClock";

export default ClockIcon;
