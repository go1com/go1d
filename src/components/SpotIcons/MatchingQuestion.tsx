import * as React from "react";

const MatchingQuestion: React.SFC<React.SVGProps<SVGSVGElement>> = (
  props: React.SVGProps<SVGSVGElement>
) => (
  <svg fill="currentColor" viewBox="0 0 48 48" {...props}>
    <path
      d="M21 20.0002C21 20.0002 18 13.0002 12 13.0002H1"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M47 13.0002H36C26 13.0002 22 35.0002 12 35.0002H1"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M25.9993 28.9996C25.9993 28.9996 29.9993 34.9996 35.9993 34.9996H46.9993"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M43 6.99841L47 12.9984L43 18.9984"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M43 28.9978L47 34.9978L43 40.9978"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

MatchingQuestion.displayName = "IconMatchingQuestion";

export default MatchingQuestion;
