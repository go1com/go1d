import * as React from "react";

export const green: React.SFC<React.SVGProps<SVGSVGElement>> = (
  props: React.SVGProps<SVGSVGElement>
) => (
  <svg
    viewBox="0 0 49 49"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0">
      <circle cx="24.5" cy="24.5" r="24" fill="#C4C4C4" />
    </mask>
    <g mask={props.mask === "circle" ? "url(#mask0)" : ""}>
      <path
        d="M-33.28 -24.4595C-33.28 -25.84 -32.1609 -26.9592 -30.7804 -26.9592H55.1003C56.4808 -26.9592 57.5999 -25.84 57.5999 -24.4595V49.7152H-33.28V-24.4595Z"
        fill="#15D9AE"
      />
      <path
        opacity="0.5"
        d="M40.9197 49.713L-33.2798 -24.5143V49.713H40.9197Z"
        fill="#33C1B8"
      />
      <path
        opacity="0.35"
        d="M13.8857 49.7132L57.6001 -24.5141V49.7132H13.8857Z"
        fill="#7999CA"
      />
    </g>
  </svg>
);

export const yellow: React.SFC<React.SVGProps<SVGSVGElement>> = (
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
    <g mask={props.mask === "circle" ? "url(#mask0)" : ""}>
      <path
        d="M-11.7551 -9.3959C-11.7551 -10.2561 -11.0578 -10.9534 -10.1976 -10.9534H92.1517C93.0119 -10.9534 93.7092 -10.2561 93.7092 -9.3959V52.7503H-11.7551V-9.3959Z"
        fill="#FFE714"
      />
      <path
        opacity="0.75"
        d="M34.3016 52.749L-11.7556 -8.92164V52.749H34.3016Z"
        fill="#F9BD23"
      />
      <path
        opacity="0.15"
        d="M-11.7554 25.6476L49.7654 -9.78524V25.6476H-11.7554Z"
        fill="#EF535F"
      />
    </g>
  </svg>
);

export const lime: React.SFC<React.SVGProps<SVGSVGElement>> = (
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
    <g mask={props.mask === "circle" ? "url(#mask0)" : ""}>
      <path
        d="M-24.7744 -1.31476C-24.7744 -2.65129 -23.6909 -3.73476 -22.3544 -3.73476H70.4294C71.7659 -3.73476 72.8494 -2.65129 72.8494 -1.31476V55.233H-24.7744V-1.31476Z"
        fill="#D3EF62"
      />
      <path
        opacity="0.15"
        d="M48.1345 -3.73476H-21.3297C-23.2322 -3.73476 -24.7744 -2.19252 -24.7744 -0.290077V54.9194L48.1345 -3.73476Z"
        fill="#31B8DA"
      />
      <path
        opacity="0.1"
        d="M-21.4471 -3.73476H67.3707C69.2732 -3.73476 70.8154 -2.19252 70.8154 -0.290074V52.8327L-21.4471 -3.73476Z"
        fill="#15D9AE"
      />
    </g>
  </svg>
);

export const blue: React.SFC<React.SVGProps<SVGSVGElement>> = (
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
    <g mask={props.mask === "circle" ? "url(#mask0)" : ""}>
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

export const red: React.SFC<React.SVGProps<SVGSVGElement>> = (
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
    <g mask={props.mask === "circle" ? "url(#mask0)" : ""}>
      <path
        d="M-33.0578 1.56195C-33.0578 0.975448 -32.5824 0.5 -31.9959 0.5H55.5086C56.0951 0.5 56.5705 0.97545 56.5705 1.56195V52.7478H-33.0578V1.56195Z"
        fill="#EF535F"
      />
      <mask
        id="mask1"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="-33"
        y="-1"
        width="89"
        height="54"
      >
        <path
          d="M-33 0.0619456C-33 -0.524551 -32.5246 -1 -31.9381 -1H54.9381C55.5245 -1 56 -0.52455 56 0.0619469V53H-33V0.0619456Z"
          fill="#F9BD23"
        />
      </mask>
      <g mask="url(#mask1)">
        <path
          opacity="0.45"
          d="M55.4359 0H-31.2042C-32.2279 0 -33.0578 0.829894 -33.0578 1.85362V52.1893L55.4359 0Z"
          fill="#D80011"
        />
        <path
          opacity="0.75"
          d="M3.01653 0H56V52.4698L3.01653 0Z"
          fill="#BC0C1A"
          fillOpacity="0.4"
        />
      </g>
    </g>
  </svg>
);
