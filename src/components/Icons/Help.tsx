import * as React from "react";

const Help: React.SFC<React.SVGProps<SVGSVGElement>> = (
  props: React.SVGProps<SVGSVGElement>
) => (
  <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
    <path d="M8 1.45455C4.38505 1.45455 1.45455 4.38505 1.45455 8C1.45455 11.615 4.38505 14.5455 8 14.5455C11.615 14.5455 14.5455 11.615 14.5455 8C14.5455 4.38505 11.615 1.45455 8 1.45455ZM0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8Z" />
    <path d="M8.18781 5.10861C7.84925 5.05053 7.50106 5.11416 7.20491 5.2882C6.90877 5.46225 6.68377 5.73549 6.56978 6.05953C6.43649 6.43843 6.02128 6.63754 5.64238 6.50425C5.26348 6.37097 5.06437 5.95575 5.19766 5.57685C5.42564 4.92877 5.87563 4.38229 6.46792 4.03419C7.06021 3.6861 7.75659 3.55885 8.43371 3.675C9.11083 3.79114 9.725 4.14318 10.1674 4.66876C10.6098 5.19427 10.852 5.85938 10.851 6.54629C10.8506 7.65919 10.0255 8.39413 9.43623 8.78696C9.11941 8.99817 8.80776 9.15348 8.57819 9.25551C8.46236 9.30699 8.36484 9.34605 8.29456 9.37282C8.25936 9.38623 8.23082 9.39662 8.21005 9.40401L8.18479 9.41285L8.17675 9.4156L8.17391 9.41656L8.1728 9.41693C8.17258 9.417 8.17189 9.41723 7.94722 8.74324L8.1728 9.41693C7.79175 9.54395 7.37897 9.33832 7.25195 8.95727C7.1251 8.57673 7.33032 8.16545 7.71039 8.03784C7.7106 8.03777 7.71018 8.03791 7.71039 8.03784C7.71061 8.03777 7.71109 8.0376 7.71153 8.03745L7.72276 8.03351C7.73395 8.02954 7.75229 8.02288 7.77675 8.01356C7.82579 7.99488 7.89871 7.96576 7.98744 7.92633C8.16695 7.84654 8.40076 7.72912 8.62939 7.5767C9.13092 7.24235 9.39645 6.88665 9.39645 6.54547C9.39696 6.20196 9.27589 5.86828 9.05467 5.60549C8.83345 5.3427 8.52637 5.16668 8.18781 5.10861ZM7.71153 8.03745C7.71157 8.03744 7.71149 8.03747 7.71153 8.03745V8.03745Z" />
    <circle cx="8.00031" cy="11.5455" r="0.818182" />
  </svg>
);

Help.displayName = "IconHelp";

export default Help;
