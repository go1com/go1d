import * as React from "react";

const TechnologySkills: React.SFC<React.SVGProps<SVGSVGElement>> = (
  props: React.SVGProps<SVGSVGElement>
) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path
      d="M9 22.5C9.90582 21.3562 10.4304 19.9573 10.5 18.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 22.5C14.0942 21.3562 13.5696 19.9573 13.5 18.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.49902 22.5H16.499"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M0.5 15.5H23.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22.5 1.5H1.5C0.947715 1.5 0.5 1.94772 0.5 2.5V17.5C0.5 18.0523 0.947715 18.5 1.5 18.5H22.5C23.0523 18.5 23.5 18.0523 23.5 17.5V2.5C23.5 1.94772 23.0523 1.5 22.5 1.5Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

TechnologySkills.displayName = "IconTechnologySkills";

export default TechnologySkills;
