import * as React from "react";

const Course: React.SFC<React.SVGProps<SVGSVGElement>> = (
  props: React.SVGProps<SVGSVGElement>
) => (
  <svg fill="currentColor" viewBox="0 0 48 48" {...props}>
    <path
      d="M16 2H35.172C35.7024 2.00011 36.211 2.2109 36.586 2.586L41.414 7.414C41.7891 7.78899 41.9999 8.29761 42 8.828V36C42 36.5304 41.7893 37.0391 41.4142 37.4142C41.0391 37.7893 40.5304 38 40 38H16C15.4696 38 14.9609 37.7893 14.5858 37.4142C14.2107 37.0391 14 36.5304 14 36V4C14 3.46957 14.2107 2.96086 14.5858 2.58579C14.9609 2.21071 15.4696 2 16 2Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M36 42H12C11.4696 42 10.9609 41.7893 10.5858 41.4142C10.2107 41.0391 10 40.5304 10 40V8"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M32 46H8C7.46957 46 6.96086 45.7893 6.58579 45.4142C6.21071 45.0391 6 44.5304 6 44V12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

Course.displayName = "IconCourse";

export default Course;
