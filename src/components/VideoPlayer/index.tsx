import * as React from "react";
import ReactPlayer, { ReactPlayerProps } from "react-player";
import safeInvoke from "../../utils/safeInvoke";

interface Dimensions {
  width: number;
  height: number;
}

export interface VideoPlayerProps extends ReactPlayerProps {
  onPlayerLoaded?: (player: any | null) => any;
  onVideoDimensions?: (data: Dimensions) => any;
}

interface Base {
  predicate: (url: string, player: any) => boolean;
}

interface Video extends Base {
  type: "video";
  player?: HTMLVideoElement;
}

// interface Youtube extends Base {
//   type: "youtube";
//   player?: object;
// }

interface Vimeo extends Base {
  type: "vimeo";
  player?: {
    getVideoWidth: () => Promise<number>;
    getVideoHeight: () => Promise<number>;
  };
}

type VideoType = Video | Vimeo;

const SupportedRatioVendors: VideoType[] = [
  {
    type: "vimeo",
    predicate: url => /http(s)?:\/\/(www.)?vimeo/.test(url),
  },
  {
    type: "video",
    predicate: (url, player) => url && player instanceof HTMLVideoElement,
  },
  // {
  //   type: "youtube",
  //   predicate: url => /http(s)?:\/\/(www.)?youtube/.test(url),
  // },
];

export class VideoPlayer extends React.Component<VideoPlayerProps> {
  private videoRef = React.createRef<ReactPlayer>();

  public render() {
    const { onVideoDimensions, onPlayerLoaded, onReady, ...props } = this.props;

    return (
      <ReactPlayer
        height="100%"
        width="100%"
        onReady={this.onReady}
        ref={this.videoRef}
        {...props}
      />
    );
  }

  private getVendorPlayer(url: string, player: any | null): VideoType | null {
    for (const vendor of SupportedRatioVendors) {
      if (vendor.predicate(url, player)) {
        return {
          ...vendor,
          player,
        };
      }
    }

    return null;
  }

  private getDimensions(video: VideoType): Promise<Dimensions> {
    switch (video.type) {
      case "vimeo":
        return Promise.all([
          video.player.getVideoWidth(),
          video.player.getVideoHeight(),
        ]).then(([width, height]) => ({
          width,
          height,
        }));
      case "video":
      default:
        return Promise.resolve({
          width: video.player.videoWidth,
          height: video.player.videoHeight,
        });
    }
  }

  private onReady = () => {
    const player = this.videoRef.current.getInternalPlayer();
    const vendor = this.getVendorPlayer(this.props.url as string, player);

    if (player) {
      safeInvoke(this.props.onPlayerLoaded, player);
    }

    if (vendor && vendor.player) {
      this.getDimensions(vendor).then(dimensions => {
        safeInvoke(this.props.onVideoDimensions, dimensions);
        safeInvoke(this.props.onReady);
      });
      return;
    }

    safeInvoke(this.props.onReady);
  };
}
