import * as React from "react";

const OnlineCourse: React.SFC<React.SVGProps<SVGSVGElement>> = (
  props: React.SVGProps<SVGSVGElement>
) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path
      fillRule="evenodd"
      d="M4.36 15.9a.5.5 0 00-.477.65l1.985 6.35h12.264l1.985-6.35a.5.5 0 00-.477-.65H4.36zm-1.432.947A1.5 1.5 0 014.36 14.9h15.28a1.5 1.5 0 011.431 1.947L18.869 23.9H5.132l-2.204-7.053z"
      clipRule="evenodd"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      d="M.1 23.401a.5.5 0 01.5-.5h22.8a.5.5 0 010 1H.6a.5.5 0 01-.5-.5zM7.873 4.229a4.127 4.127 0 118.254 0 4.127 4.127 0 01-8.254 0zM12 1.1a3.127 3.127 0 100 6.255A3.127 3.127 0 0012 1.1z"
      clipRule="evenodd"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 20.292a1.295 1.295 0 100-2.59 1.295 1.295 0 000 2.59z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      d="M8.647 10.012a5.646 5.646 0 016.705 0 5.646 5.646 0 012.043 2.878.5.5 0 11-.955.295 4.647 4.647 0 00-8.88 0 .5.5 0 01-.955-.295 5.646 5.646 0 012.042-2.878z"
      clipRule="evenodd"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

OnlineCourse.displayName = "IconOnlineCourse";

export default OnlineCourse;
