import * as React from "react";
import Theme from "../Theme";

interface Props {
  size: number;
  color: string;
}

const ChevronLeft: React.SFC<Props> = ({
  size,
  color = "currentcolor",
  ...props
}: Props) => (
  <svg {...props} viewBox="0 0 16 16" fill={color}>
    <path d="M10.2537 13.7391C10.4179 13.5652 10.5 13.3645 10.5 13.1371C10.5 12.9097 10.4179 12.709 10.2537 12.5351L5.59384 8L10.2537 3.46488C10.4179 3.29097 10.5 3.0903 10.5 2.86288C10.5 2.63545 10.4179 2.43478 10.2537 2.26087C10.0758 2.08696 9.87048 2 9.63783 2C9.40518 2 9.1999 2.08696 9.02199 2.26087L3.76686 7.39799C3.67106 7.49164 3.60264 7.59532 3.56158 7.70903C3.52053 7.82274 3.5 7.91973 3.5 8C3.5 8.08027 3.52053 8.17726 3.56158 8.29097C3.60264 8.40468 3.67106 8.50836 3.76686 8.60201L9.02199 13.7391C9.1999 13.913 9.40518 14 9.63783 14C9.87048 14 10.0758 13.913 10.2537 13.7391Z M10.2537 13.7391C10.4179 13.5652 10.5 13.3645 10.5 13.1371C10.5 12.9097 10.4179 12.709 10.2537 12.5351L5.59384 8L10.2537 3.46488C10.4179 3.29097 10.5 3.0903 10.5 2.86288C10.5 2.63545 10.4179 2.43478 10.2537 2.26087C10.0758 2.08696 9.87048 2 9.63783 2C9.40518 2 9.1999 2.08696 9.02199 2.26087L3.76686 7.39799C3.67106 7.49164 3.60264 7.59532 3.56158 7.70903C3.52053 7.82274 3.5 7.91973 3.5 8C3.5 8.08027 3.52053 8.17726 3.56158 8.29097C3.60264 8.40468 3.67106 8.50836 3.76686 8.60201L9.02199 13.7391C9.1999 13.913 9.40518 14 9.63783 14C9.87048 14 10.0758 13.913 10.2537 13.7391Z" />
  </svg>
);

ChevronLeft.displayName = "ChevronLeft";

export default ChevronLeft;
