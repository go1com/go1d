import * as React from "react";
import Theme from "../Theme";

interface Props {
  size: number;
  color: string;
  css: Interpolation;
}

const Home: React.SFC<Props> = ({
  size,
  color = "currentcolor",
  ...props
}: Props) => (
  <svg {...props} viewBox="0 0 15 16" fill={color}>
    <path d="M14.2468 5.24255L7.71064 0.170213C7.56312 0.056737 7.40709 0 7.24255 0C7.07801 0 6.93901 0.056737 6.82553 0.170213L0.289362 5.24255C0.187234 5.32199 0.113475 5.41277 0.0680851 5.51489C0.0226949 5.61702 0 5.71915 0 5.82128V13.8213C0 14.434 0.209927 14.9504 0.629787 15.3702C1.04965 15.7901 1.56595 16 2.17872 16H12.3574C12.9702 16 13.4865 15.7901 13.9064 15.3702C14.3262 14.9504 14.5362 14.434 14.5362 13.8213V5.82128C14.5362 5.71915 14.5135 5.61702 14.4681 5.51489C14.4227 5.41277 14.3489 5.32199 14.2468 5.24255ZM8.71489 14.5362H5.82128V8.73191H8.71489V14.5362ZM13.0723 13.8213C13.0723 14.0369 13.0071 14.2099 12.8766 14.3404C12.7461 14.4709 12.5731 14.5362 12.3574 14.5362H10.1787V8C10.1787 7.7844 10.1106 7.61135 9.97447 7.48085C9.8383 7.35035 9.66241 7.28511 9.44681 7.28511H5.08936C4.87376 7.28511 4.69787 7.35035 4.5617 7.48085C4.42553 7.61135 4.35745 7.7844 4.35745 8V14.5362H2.17872C1.96312 14.5362 1.79007 14.4709 1.65957 14.3404C1.52908 14.2099 1.46383 14.0369 1.46383 13.8213V6.19574L7.26809 1.68511L13.0723 6.19574V13.8213Z M14.2468 5.24255L7.71064 0.170213C7.56312 0.056737 7.40709 0 7.24255 0C7.07801 0 6.93901 0.056737 6.82553 0.170213L0.289362 5.24255C0.187234 5.32199 0.113475 5.41277 0.0680851 5.51489C0.0226949 5.61702 0 5.71915 0 5.82128V13.8213C0 14.434 0.209927 14.9504 0.629787 15.3702C1.04965 15.7901 1.56595 16 2.17872 16H12.3574C12.9702 16 13.4865 15.7901 13.9064 15.3702C14.3262 14.9504 14.5362 14.434 14.5362 13.8213V5.82128C14.5362 5.71915 14.5135 5.61702 14.4681 5.51489C14.4227 5.41277 14.3489 5.32199 14.2468 5.24255ZM8.71489 14.5362H5.82128V8.73191H8.71489V14.5362ZM13.0723 13.8213C13.0723 14.0369 13.0071 14.2099 12.8766 14.3404C12.7461 14.4709 12.5731 14.5362 12.3574 14.5362H10.1787V8C10.1787 7.7844 10.1106 7.61135 9.97447 7.48085C9.8383 7.35035 9.66241 7.28511 9.44681 7.28511H5.08936C4.87376 7.28511 4.69787 7.35035 4.5617 7.48085C4.42553 7.61135 4.35745 7.7844 4.35745 8V14.5362H2.17872C1.96312 14.5362 1.79007 14.4709 1.65957 14.3404C1.52908 14.2099 1.46383 14.0369 1.46383 13.8213V6.19574L7.26809 1.68511L13.0723 6.19574V13.8213Z" />
  </svg>
);

Home.displayName = "Home";

export default Home;
