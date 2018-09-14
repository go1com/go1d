import * as React from "react";
import Theme from "../Theme";

interface Props {
  size: number;
  color: string;
}

const Document: React.SFC<Props> = ({
  size,
  color = "currentcolor",
  ...props
}: Props) => (
  <svg {...props} viewBox="0 0 16 16" fill={color}>
    <path d="M14.4323 4.80511C14.3984 4.75967 14.373 4.71991 14.3561 4.68584C14.3392 4.65176 14.3138 4.61768 14.2799 4.5836L9.94661 0.221512C9.91276 0.187433 9.87891 0.153355 9.84505 0.119276C9.8112 0.0851968 9.7717 0.0681576 9.72656 0.0681576C9.69271 0.0340786 9.64757 0.0141995 9.59115 0.00851959C9.53472 0.00283994 9.48394 0 9.4388 0H3.66667C3.05729 0 2.54384 0.210151 2.1263 0.630458C1.70877 1.05077 1.5 1.56762 1.5 2.18104V13.819C1.5 14.4324 1.70877 14.9492 2.1263 15.3695C2.54384 15.7898 3.05729 16 3.66667 16H12.3333C12.9427 16 13.4562 15.7898 13.8737 15.3695C14.2912 14.9492 14.5 14.4324 14.5 13.819V5.09478C14.5 5.04934 14.4972 4.99823 14.4915 4.94143C14.4859 4.88463 14.4661 4.83919 14.4323 4.80511ZM10.1667 2.47071L12.0456 4.36209H10.1667V2.47071ZM12.3333 14.5346H3.66667C3.45226 14.5346 3.27734 14.4693 3.14193 14.3387C3.00651 14.208 2.9388 14.0348 2.9388 13.819V2.18104C2.9388 1.96521 3.00651 1.78914 3.14193 1.65282C3.27734 1.51651 3.45226 1.44835 3.66667 1.44835H8.72786V5.09478C8.72786 5.31062 8.79275 5.48385 8.92253 5.61448C9.0523 5.74512 9.22439 5.81044 9.4388 5.81044H13.0612V13.819C13.0612 14.0348 12.9935 14.208 12.8581 14.3387C12.7227 14.4693 12.5477 14.5346 12.3333 14.5346ZM10.8945 7.99148H5.10547C4.89106 7.99148 4.71897 8.05964 4.58919 8.19595C4.45942 8.33227 4.39453 8.50834 4.39453 8.72417C4.39453 8.94001 4.45942 9.11608 4.58919 9.2524C4.71897 9.38871 4.89106 9.45687 5.10547 9.45687H10.8945C11.1089 9.45687 11.281 9.38871 11.4108 9.2524C11.5406 9.11608 11.6055 8.94001 11.6055 8.72417C11.6055 8.50834 11.5406 8.33227 11.4108 8.19595C11.281 8.05964 11.1089 7.99148 10.8945 7.99148ZM10.8945 10.9052H5.10547C4.89106 10.9052 4.71897 10.9705 4.58919 11.1012C4.45942 11.2318 4.39453 11.4107 4.39453 11.6379C4.39453 11.8537 4.45942 12.027 4.58919 12.1576C4.71897 12.2882 4.89106 12.3536 5.10547 12.3536H10.8945C11.1089 12.3536 11.281 12.2882 11.4108 12.1576C11.5406 12.027 11.6055 11.8537 11.6055 11.6379C11.6055 11.4107 11.5406 11.2318 11.4108 11.1012C11.281 10.9705 11.1089 10.9052 10.8945 10.9052ZM5.10547 6.54313H6.5612C6.77561 6.54313 6.9477 6.47781 7.07747 6.34718C7.20725 6.21654 7.27214 6.03763 7.27214 5.81044C7.27214 5.5946 7.20725 5.42137 7.07747 5.29073C6.9477 5.1601 6.77561 5.09478 6.5612 5.09478H5.10547C4.89106 5.09478 4.71897 5.1601 4.58919 5.29073C4.45942 5.42137 4.39453 5.5946 4.39453 5.81044C4.39453 6.03763 4.45942 6.21654 4.58919 6.34718C4.71897 6.47781 4.89106 6.54313 5.10547 6.54313Z M14.4323 4.80511C14.3984 4.75967 14.373 4.71991 14.3561 4.68584C14.3392 4.65176 14.3138 4.61768 14.2799 4.5836L9.94661 0.221512C9.91276 0.187433 9.87891 0.153355 9.84505 0.119276C9.8112 0.0851968 9.7717 0.0681576 9.72656 0.0681576C9.69271 0.0340786 9.64757 0.0141995 9.59115 0.00851959C9.53472 0.00283994 9.48394 0 9.4388 0H3.66667C3.05729 0 2.54384 0.210151 2.1263 0.630458C1.70877 1.05077 1.5 1.56762 1.5 2.18104V13.819C1.5 14.4324 1.70877 14.9492 2.1263 15.3695C2.54384 15.7898 3.05729 16 3.66667 16H12.3333C12.9427 16 13.4562 15.7898 13.8737 15.3695C14.2912 14.9492 14.5 14.4324 14.5 13.819V5.09478C14.5 5.04934 14.4972 4.99823 14.4915 4.94143C14.4859 4.88463 14.4661 4.83919 14.4323 4.80511ZM10.1667 2.47071L12.0456 4.36209H10.1667V2.47071ZM12.3333 14.5346H3.66667C3.45226 14.5346 3.27734 14.4693 3.14193 14.3387C3.00651 14.208 2.9388 14.0348 2.9388 13.819V2.18104C2.9388 1.96521 3.00651 1.78914 3.14193 1.65282C3.27734 1.51651 3.45226 1.44835 3.66667 1.44835H8.72786V5.09478C8.72786 5.31062 8.79275 5.48385 8.92253 5.61448C9.0523 5.74512 9.22439 5.81044 9.4388 5.81044H13.0612V13.819C13.0612 14.0348 12.9935 14.208 12.8581 14.3387C12.7227 14.4693 12.5477 14.5346 12.3333 14.5346ZM10.8945 7.99148H5.10547C4.89106 7.99148 4.71897 8.05964 4.58919 8.19595C4.45942 8.33227 4.39453 8.50834 4.39453 8.72417C4.39453 8.94001 4.45942 9.11608 4.58919 9.2524C4.71897 9.38871 4.89106 9.45687 5.10547 9.45687H10.8945C11.1089 9.45687 11.281 9.38871 11.4108 9.2524C11.5406 9.11608 11.6055 8.94001 11.6055 8.72417C11.6055 8.50834 11.5406 8.33227 11.4108 8.19595C11.281 8.05964 11.1089 7.99148 10.8945 7.99148ZM10.8945 10.9052H5.10547C4.89106 10.9052 4.71897 10.9705 4.58919 11.1012C4.45942 11.2318 4.39453 11.4107 4.39453 11.6379C4.39453 11.8537 4.45942 12.027 4.58919 12.1576C4.71897 12.2882 4.89106 12.3536 5.10547 12.3536H10.8945C11.1089 12.3536 11.281 12.2882 11.4108 12.1576C11.5406 12.027 11.6055 11.8537 11.6055 11.6379C11.6055 11.4107 11.5406 11.2318 11.4108 11.1012C11.281 10.9705 11.1089 10.9052 10.8945 10.9052ZM5.10547 6.54313H6.5612C6.77561 6.54313 6.9477 6.47781 7.07747 6.34718C7.20725 6.21654 7.27214 6.03763 7.27214 5.81044C7.27214 5.5946 7.20725 5.42137 7.07747 5.29073C6.9477 5.1601 6.77561 5.09478 6.5612 5.09478H5.10547C4.89106 5.09478 4.71897 5.1601 4.58919 5.29073C4.45942 5.42137 4.39453 5.5946 4.39453 5.81044C4.39453 6.03763 4.45942 6.21654 4.58919 6.34718C4.71897 6.47781 4.89106 6.54313 5.10547 6.54313Z" />
  </svg>
);

Document.displayName = "Document";

export default Document;
