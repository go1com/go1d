import * as React from "react";
import ReactPlayer, { ReactPlayerProps } from "react-player";

export type Props = ReactPlayerProps;

const VideoPlayer: React.SFC<Props> = props => {
  return <ReactPlayer height="100%" width="100%" controls={true} {...props} />;
};

VideoPlayer.displayName = "VideoPlayer";

export default VideoPlayer;
