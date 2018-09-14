import * as React from "react";
import Theme from "../Theme";

interface Props {
  size: number;
  color: string;
}

const ThumbsUp: React.SFC<Props> = ({
  size,
  color = "currentcolor",
  ...props
}: Props) => (
  <svg {...props} viewBox="0 0 16 16" fill={color}>
    <path d="M15.3355 5.96379C15.1537 5.74796 14.9379 5.55769 14.688 5.39297C14.4381 5.22826 14.1711 5.12886 13.8871 5.09478C13.8076 5.09478 13.7451 5.09478 13.6997 5.09478C13.6542 5.09478 13.5918 5.09478 13.5122 5.09478H10.1725V2.91374C10.1725 2.1072 9.88854 1.41995 9.32055 0.85197C8.75257 0.283987 8.06532 0 7.25879 0C7.12247 0 6.989 0.0369183 6.85836 0.110756C6.72772 0.184594 6.64537 0.295349 6.61129 0.443024L3.91906 6.54313H2.18104C1.55626 6.54313 1.03657 6.75328 0.621938 7.17359C0.207311 7.5939 0 8.11075 0 8.72417V13.819C0 14.4324 0.207311 14.9492 0.621938 15.3695C1.03657 15.7898 1.55626 16 2.18104 16H12.5751C13.1203 16 13.5918 15.8239 13.9894 15.4718C14.3869 15.1196 14.6425 14.688 14.7561 14.1768L15.7785 7.63365C15.8126 7.3383 15.7927 7.04863 15.7188 6.76464C15.645 6.48065 15.5172 6.2137 15.3355 5.96379ZM3.62939 14.5346H2.18104C1.95385 14.5346 1.77494 14.4693 1.6443 14.3387C1.51367 14.208 1.44835 14.0348 1.44835 13.819V8.72417C1.44835 8.50834 1.51367 8.33227 1.6443 8.19595C1.77494 8.05964 1.95385 7.99148 2.18104 7.99148H3.62939V14.5346ZM13.2907 13.9553C13.2567 14.137 13.1743 14.279 13.0437 14.3813C12.913 14.4835 12.7568 14.5346 12.5751 14.5346H5.07774V7.41214L7.70181 1.53355C7.99716 1.63578 8.24139 1.80902 8.4345 2.05325C8.62762 2.29748 8.72417 2.58431 8.72417 2.91374V5.81044C8.72417 6.03763 8.78949 6.21654 8.92013 6.34718C9.05076 6.47781 9.224 6.54313 9.43983 6.54313H13.5974C13.6315 6.54313 13.6542 6.54313 13.6656 6.54313C13.677 6.54313 13.6997 6.54313 13.7338 6.54313C13.8474 6.54313 13.9439 6.57437 14.0234 6.63685C14.1029 6.69933 14.1768 6.76464 14.2449 6.8328C14.3131 6.90096 14.3529 6.98616 14.3642 7.08839C14.3756 7.19063 14.3813 7.27582 14.3813 7.34398L13.2907 13.9553Z M15.3355 5.96379C15.1537 5.74796 14.9379 5.55769 14.688 5.39297C14.4381 5.22826 14.1711 5.12886 13.8871 5.09478C13.8076 5.09478 13.7451 5.09478 13.6997 5.09478C13.6542 5.09478 13.5918 5.09478 13.5122 5.09478H10.1725V2.91374C10.1725 2.1072 9.88854 1.41995 9.32055 0.85197C8.75257 0.283987 8.06532 0 7.25879 0C7.12247 0 6.989 0.0369183 6.85836 0.110756C6.72772 0.184594 6.64537 0.295349 6.61129 0.443024L3.91906 6.54313H2.18104C1.55626 6.54313 1.03657 6.75328 0.621938 7.17359C0.207311 7.5939 0 8.11075 0 8.72417V13.819C0 14.4324 0.207311 14.9492 0.621938 15.3695C1.03657 15.7898 1.55626 16 2.18104 16H12.5751C13.1203 16 13.5918 15.8239 13.9894 15.4718C14.3869 15.1196 14.6425 14.688 14.7561 14.1768L15.7785 7.63365C15.8126 7.3383 15.7927 7.04863 15.7188 6.76464C15.645 6.48065 15.5172 6.2137 15.3355 5.96379ZM3.62939 14.5346H2.18104C1.95385 14.5346 1.77494 14.4693 1.6443 14.3387C1.51367 14.208 1.44835 14.0348 1.44835 13.819V8.72417C1.44835 8.50834 1.51367 8.33227 1.6443 8.19595C1.77494 8.05964 1.95385 7.99148 2.18104 7.99148H3.62939V14.5346ZM13.2907 13.9553C13.2567 14.137 13.1743 14.279 13.0437 14.3813C12.913 14.4835 12.7568 14.5346 12.5751 14.5346H5.07774V7.41214L7.70181 1.53355C7.99716 1.63578 8.24139 1.80902 8.4345 2.05325C8.62762 2.29748 8.72417 2.58431 8.72417 2.91374V5.81044C8.72417 6.03763 8.78949 6.21654 8.92013 6.34718C9.05076 6.47781 9.224 6.54313 9.43983 6.54313H13.5974C13.6315 6.54313 13.6542 6.54313 13.6656 6.54313C13.677 6.54313 13.6997 6.54313 13.7338 6.54313C13.8474 6.54313 13.9439 6.57437 14.0234 6.63685C14.1029 6.69933 14.1768 6.76464 14.2449 6.8328C14.3131 6.90096 14.3529 6.98616 14.3642 7.08839C14.3756 7.19063 14.3813 7.27582 14.3813 7.34398L13.2907 13.9553Z" />
  </svg>
);

ThumbsUp.displayName = "ThumbsUp";

export default ThumbsUp;
