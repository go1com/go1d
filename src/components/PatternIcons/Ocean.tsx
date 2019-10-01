import * as React from "react";

const Ocean: React.SFC<React.SVGProps<SVGSVGElement>> = (
  props: React.SVGProps<SVGSVGElement>
) => (
  <svg
    viewBox="0 0 49 49"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <mask
      id="mask0"
      mask-type="alpha"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="49"
      height="49"
    >
      <circle cx="24.5" cy="24.5" r="24" fill="#C4C4C4" />
    </mask>
    <g mask="url(#mask0)">
      <path
        d="M-5 -4.76028C-5 -6.07504 -3.93417 -7.14087 -2.61941 -7.14087H86.6528C87.9676 -7.14087 89.0334 -6.07504 89.0334 -4.76028V49.6582H-5V-4.76028Z"
        fill="#7999CA"
      />
      <path
        d="M-5 -4.76028C-5 -6.07504 -3.93417 -7.14087 -2.61941 -7.14087H86.6528C87.9676 -7.14087 89.0334 -6.07504 89.0334 -4.76028V49.6582H-5V-4.76028Z"
        fill="#7999CA"
      />
      <g style={{ mixBlendMode: "multiply" }} opacity="0.5">
        <path
          d="M53.3245 -7.14087H-1.54987C-3.45532 -7.14087 -5 -5.59619 -5 -3.69073V49.6582L53.3245 -7.14087Z"
          fill="#31B8DA"
        />
      </g>
      <g style={{ mixBlendMode: "multiply" }} opacity="0.35">
        <path
          d="M89.0334 -6.84331V48.8031L-4.99997 8.63055V-6.84331H89.0334Z"
          fill="#7999CA"
        />
      </g>
    </g>
  </svg>
);

Ocean.displayName = "IconOcean";

export default Ocean;
