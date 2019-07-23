import * as React from "react";
import Iframe from "react-iframe";
import { IIframe } from "react-iframe/types";

export type IFrameProps = IIframe;

const IFrame: React.SFC<IFrameProps> = props => {
  return <Iframe height="100%" width="100%" {...props} />;
};

IFrame.displayName = "IFrame";

export default IFrame;
