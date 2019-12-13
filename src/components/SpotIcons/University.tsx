import * as React from "react";

const University: React.SFC<React.SVGProps<SVGSVGElement>> = (
  props: React.SVGProps<SVGSVGElement>
) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path
      fillRule="evenodd"
      d="M12.945 3.412a2.005 2.005 0 011.58 0l8.327 3.57a1.253 1.253 0 010 2.302l-8.327 3.57-.197-.46.195.46a2.015 2.015 0 01-1.577-.002L3.004 8.59a.5.5 0 010-.92l9.941-4.258zm1.188 8.521l8.325-3.568-8.325 3.568zm0 0a1.018 1.018 0 01-.795 0L4.47 8.13l8.869-3.8c.253-.108.539-.108.792 0l8.327 3.57"
      clipRule="evenodd"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      d="M7.716 11.568a.5.5 0 01.5.5v5.116c0 .096.053.184.139.227l4.93 2.465c.284.141.616.141.899 0l4.93-2.465c.001 0 0 0 0 0a.253.253 0 00.14-.226v-5.117a.5.5 0 111 0v5.116c0 .475-.267.909-.691 1.121L14.63 20.77a2.005 2.005 0 01-1.792 0l-4.932-2.465a1.253 1.253 0 01-.691-1.121v-5.116a.5.5 0 01.5-.5zM4 7.632a.5.5 0 01.5.5V13.4a.5.5 0 01-1 0V8.132a.5.5 0 01.5-.5z"
      clipRule="evenodd"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      d="M4 12.96a.5.5 0 01.467.321l2.5 6.5a.5.5 0 01-.467.68h-5a.5.5 0 01-.467-.68l2.5-6.5a.5.5 0 01.467-.32zm-1.772 6.5h3.544L4 14.855 2.228 19.46z"
      clipRule="evenodd"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

University.displayName = "IconUniversity";

export default University;
