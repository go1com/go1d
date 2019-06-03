import * as React from "react";
import ReactPlayer, { ReactPlayerProps } from "react-player";

export type Props = ReactPlayerProps & {
  innerRef?: React.RefObject<any>;
};

const VideoPlayer: React.SFC<Props> = ({ innerRef, ...props }) => {
  return <ReactPlayer height="100%" width="100%" {...props} ref={innerRef} />;
};

VideoPlayer.displayName = "VideoPlayer";

export default VideoPlayer;
