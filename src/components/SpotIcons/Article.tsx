import * as React from "react";

const Article: React.SFC<React.SVGProps<SVGSVGElement>> = (
  props: React.SVGProps<SVGSVGElement>
) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path
      fillRule="evenodd"
      d="M3 6.2a1 1 0 011-1h5a1 1 0 011 1v5a1 1 0 01-1 1H4a1 1 0 01-1-1v-5zm6 0H4v5h5v-5zm2-.5a.5.5 0 01.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5zm0 3a.5.5 0 01.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5zm0 3a.5.5 0 01.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5zm-8 3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm0 3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z"
      clipRule="evenodd"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      d="M1.5 2.2a.5.5 0 00-.5.5v17a2.5 2.5 0 002.5 2.5h14.55A3.49 3.49 0 0117 19.7v-17a.5.5 0 00-.5-.5h-15zm19 21h-17A3.5 3.5 0 010 19.7v-17a1.5 1.5 0 011.5-1.5h15A1.5 1.5 0 0118 2.7v17a2.5 2.5 0 005 0v-15a.5.5 0 011 0v15a3.5 3.5 0 01-3.5 3.5z"
      clipRule="evenodd"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      d="M20.5 4.2a.5.5 0 01.5.5v15.5a.5.5 0 11-1 0V4.7a.5.5 0 01.5-.5z"
      clipRule="evenodd"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

Article.displayName = "IconArticle";

export default Article;
