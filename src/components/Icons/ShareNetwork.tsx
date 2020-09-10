import * as React from "react";
import IconBase from "../IconBase";

class IconShareNetwork extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path d="M12.638 10.172c-.398 0-.772.083-1.125.248a2.984 2.984 0 0 0-.903.639L6.742 8.792c0-.147.014-.28.043-.4a1.732 1.732 0 0 0-.009-.792 10.732 10.732 0 0 1-.102-.41l3.851-2.249c.295.262.622.472.98.63.358.16.735.24 1.133.24.795 0 1.48-.285 2.053-.853.574-.568.86-1.25.86-2.044 0-.807-.286-1.494-.86-2.062A2.817 2.817 0 0 0 12.638 0c-.795 0-1.48.284-2.053.852a2.794 2.794 0 0 0-.86 2.062c0 .136.016.267.05.392s.068.26.103.409L5.94 5.964a2.867 2.867 0 0 0-.903-.63 2.7 2.7 0 0 0-1.124-.24c-.795 0-1.48.285-2.054.853C1.287 6.515 1 7.197 1 7.99c0 .807.287 1.494.86 2.062a2.817 2.817 0 0 0 2.054.852 2.62 2.62 0 0 0 1.124-.247 3.15 3.15 0 0 0 .903-.622l3.868 2.25c0 .147-.014.28-.042.4-.029.12-.043.253-.043.4 0 .795.287 1.48.86 2.053.574.574 1.259.861 2.054.861.795 0 1.48-.287 2.053-.86.574-.574.86-1.259.86-2.054 0-.795-.286-1.48-.86-2.053-.574-.574-1.258-.86-2.053-.86zm0-8.724c.398 0 .738.142 1.022.426.284.284.426.63.426 1.04 0 .397-.142.738-.426 1.022a1.394 1.394 0 0 1-1.022.426c-.398 0-.739-.142-1.022-.426a1.395 1.395 0 0 1-.426-1.022c0-.41.142-.756.426-1.04a1.394 1.394 0 0 1 1.022-.426zM3.914 9.457c-.398 0-.739-.142-1.023-.426a1.414 1.414 0 0 1-.426-1.04c0-.397.142-.738.426-1.022a1.394 1.394 0 0 1 1.023-.426c.397 0 .738.142 1.022.426.284.284.426.625.426 1.022 0 .41-.142.756-.426 1.04a1.394 1.394 0 0 1-1.022.426zm8.724 5.078c-.398 0-.739-.142-1.022-.426a1.395 1.395 0 0 1-.426-1.023c0-.147.017-.278.05-.392a1.55 1.55 0 0 1 .154-.34 1.27 1.27 0 0 1 .52-.52 1.46 1.46 0 0 1 .724-.196c.398 0 .738.142 1.022.426.284.284.426.625.426 1.022 0 .398-.142.739-.426 1.023a1.394 1.394 0 0 1-1.022.426z" />
      </svg>
    );
  }
}

IconShareNetwork.displayName = "IconShareNetwork";

export default IconShareNetwork;
