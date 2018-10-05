import * as React from "react";
import { Props as ViewProps } from "../View";

interface Props extends ViewProps {
  name: string;
  color?: string;
  size?: number;
}

const FullStar: React.SFC<Props> = (props: Props) => (
  <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
    <path d="M15.76 5.417a.57.57 0 0 1 .204.322.514.514 0 0 1 .008.357.615.615 0 0 1-.212.306l-3.345 3.26.798 4.635a.651.651 0 0 1-.289.714 1.08 1.08 0 0 1-.212.11.59.59 0 0 1-.212.042h-.374L8 12.99l-4.126 2.173a.738.738 0 0 1-.433.068.91.91 0 0 1-.365-.136.73.73 0 0 1-.255-.314.65.65 0 0 1-.034-.416l.798-4.635L.24 6.47a.53.53 0 0 1-.212-.306.725.725 0 0 1 .008-.425 1.29 1.29 0 0 1 .263-.356.537.537 0 0 1 .382-.153l4.568-.713L7.355.39C7.457.13 7.672 0 8 0s.543.13.645.39l2.106 4.195 4.635.645c.148.045.272.107.374.187z" />
  </svg>
);

FullStar.displayName = "IconFullStar";

export default FullStar;
