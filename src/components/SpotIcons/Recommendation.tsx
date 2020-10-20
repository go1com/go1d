import * as React from "react";

const Recommendation: React.SFC<React.SVGProps<SVGSVGElement>> = (
  props: React.SVGProps<SVGSVGElement>
) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <g transform="matrix(1,0,0,1,0,0)">
      <path
        d="M15.3,11.568a1.6,1.6,0,0,1-1.531.932H12.164c-1.664,0-1.166-1-3.666-1v-3h.337C10.291,8.5,11.159,6.821,12,5c.275-.6,1.5-1,1.5.28V7.5h2.62a.661.661,0,0,1,.624.666Z"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M19.961,14.631l2.878,4.984c.275.476.056.791-.487.7l-2.865-.484L18.5,22.559c-.188.517-.571.553-.852.079L14.893,18"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.039,14.631,1.161,19.615c-.275.476-.056.791.487.7l2.865-.484L5.849,23.5,9.1,18"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20,8.5a2.781,2.781,0,0,0-1.755-2.586,2.784,2.784,0,0,0-3.658-3.658,2.783,2.783,0,0,0-5.173,0A2.784,2.784,0,0,0,5.753,5.914a2.782,2.782,0,0,0,0,5.172,2.784,2.784,0,0,0,3.658,3.658,2.783,2.783,0,0,0,5.173,0,2.784,2.784,0,0,0,3.658-3.658A2.781,2.781,0,0,0,20,8.5Z"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  </svg>
);

Recommendation.displayName = "IconRecommendation";

export default Recommendation;
