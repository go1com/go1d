import * as React from "react";
import IconBase from "../IconBase";

class PhoneIcon extends IconBase {
  getIconComponent() {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path d="M14.098 9.422a8.905 8.905 0 01-1.902-.428 2.06 2.06 0 00-1.215-.078 2.515 2.515 0 00-1.114.591l-.514.514a13.352 13.352 0 01-1.85-1.499 9.873 9.873 0 01-1.507-1.875l.514-.514c.285-.286.476-.645.574-1.08.097-.433.077-.85-.06-1.25a6.954 6.954 0 01-.283-.925 7.916 7.916 0 01-.163-.977A2.068 2.068 0 005.842.54 2.181 2.181 0 004.385 0H1.97a2.127 2.127 0 00-.805.266 2.381 2.381 0 00-.651.54 1.993 1.993 0 00-.394.744c-.08.28-.12.568-.12.865.057.583.148 1.165.274 1.748a15.952 15.952 0 001.2 3.357c.262.537.547 1.051.856 1.542.297.457.616.897.96 1.32a14.098 14.098 0 002.329 2.329c.422.342.862.662 1.319.96.491.33 1.005.627 1.542.89a14.2 14.2 0 001.653.685c.565.194 1.133.354 1.704.48.583.137 1.17.228 1.765.274h.205c.297 0 .583-.054.857-.163.274-.108.502-.271.685-.488.183-.217.337-.454.463-.71.125-.258.188-.535.188-.832v-2.192c0-.549-.18-1.031-.54-1.448a2.154 2.154 0 00-1.362-.745zm.446 2.193v2.192a.737.737 0 01-.052.291.617.617 0 01-.17.223.597.597 0 01-.232.171.97.97 0 01-.351.052 15.094 15.094 0 01-1.576-.257 12.192 12.192 0 01-1.525-.446c-.502-.182-1-.388-1.49-.616a14.36 14.36 0 01-1.405-.805 9.789 9.789 0 01-1.2-.84c-.387-.308-.756-.64-1.104-.993a13.998 13.998 0 01-.985-1.114 15.57 15.57 0 01-.874-1.216c-.297-.457-.56-.925-.788-1.405-.24-.48-.448-.97-.625-1.473a15.458 15.458 0 01-.454-1.542c-.114-.514-.2-1.039-.257-1.576a.69.69 0 01.051-.274l.103-.24c.069-.068.154-.134.257-.197a.614.614 0 01.326-.094h2.192c.183 0 .34.066.472.197.13.131.22.288.265.471.034.366.103.74.206 1.122.102.383.228.74.377 1.07a.989.989 0 01-.155.806l-.942.874a.679.679 0 00-.214.402.782.782 0 00.06.471c.274.491.582.96.925 1.405.331.445.694.865 1.088 1.26.394.393.814.761 1.259 1.104.445.331.914.634 1.405.908.148.08.305.111.47.094a.557.557 0 00.403-.231l.96-.96a.877.877 0 01.377-.205.584.584 0 01.428.069c.365.137.73.248 1.096.334.366.085.731.168 1.096.248a.78.78 0 01.403.248c.12.132.18.289.18.472z" />
      </svg>
    );
  }
}

PhoneIcon.displayName = "IconPhone";

export default PhoneIcon;
