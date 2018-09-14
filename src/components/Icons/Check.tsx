import * as React from "react";
import Theme from "../Theme";

interface Props {
  size: number;
  color: string;
  css: Interpolation;
}

const Check: React.SFC<Props> = ({
  size,
  color = "currentcolor",
  ...props
}: Props) => (
  <svg {...props} viewBox="0 0 16 16" fill={color}>
    <path d="M14.6859 3.28994C14.4765 3.09665 14.2349 3 13.961 3C13.6872 3 13.4456 3.09665 13.2362 3.28994L6.02564 10.5247L2.76381 7.23866C2.5544 7.04536 2.31279 6.94872 2.03895 6.94872C1.76512 6.94872 1.52351 7.04536 1.3141 7.23866C1.1047 7.44806 1 7.68968 1 7.96351C1 8.23734 1.1047 8.47896 1.3141 8.68836L5.30079 12.6992C5.41354 12.7959 5.52227 12.8683 5.62697 12.9167C5.73167 12.965 5.86456 12.9892 6.02564 12.9892C6.18672 12.9892 6.31961 12.965 6.42431 12.9167C6.52901 12.8683 6.63774 12.7959 6.75049 12.6992L14.6859 4.73964C14.8953 4.53024 15 4.28863 15 4.01479C15 3.74096 14.8953 3.49934 14.6859 3.28994Z M14.6859 3.28994C14.4765 3.09665 14.2349 3 13.961 3C13.6872 3 13.4456 3.09665 13.2362 3.28994L6.02564 10.5247L2.76381 7.23866C2.5544 7.04536 2.31279 6.94872 2.03895 6.94872C1.76512 6.94872 1.52351 7.04536 1.3141 7.23866C1.1047 7.44806 1 7.68968 1 7.96351C1 8.23734 1.1047 8.47896 1.3141 8.68836L5.30079 12.6992C5.41354 12.7959 5.52227 12.8683 5.62697 12.9167C5.73167 12.965 5.86456 12.9892 6.02564 12.9892C6.18672 12.9892 6.31961 12.965 6.42431 12.9167C6.52901 12.8683 6.63774 12.7959 6.75049 12.6992L14.6859 4.73964C14.8953 4.53024 15 4.28863 15 4.01479C15 3.74096 14.8953 3.49934 14.6859 3.28994Z" />
  </svg>
);

Check.displayName = "Check";

export default Check;
