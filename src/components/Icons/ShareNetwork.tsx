import * as React from "react";
import Theme from "../Theme";

interface Props {
  size: number;
  color: string;
  css: Interpolation;
}

const ShareNetwork: React.SFC<Props> = ({
  size,
  color = "currentcolor",
  ...props
}: Props) => (
  <svg {...props} viewBox="0 0 16 16" fill={color}>
    <path d="M12.6379 10.1725C12.2403 10.1725 11.8655 10.2549 11.5133 10.4196C11.1612 10.5843 10.8601 10.7973 10.6102 11.0586L6.74228 8.79233C6.74228 8.64466 6.75648 8.51118 6.78488 8.39191C6.81328 8.27263 6.82748 8.13916 6.82748 7.99148C6.82748 7.85516 6.81044 7.72453 6.77636 7.59957C6.74228 7.47462 6.7082 7.3383 6.67412 7.19063L10.525 4.94143C10.8204 5.2027 11.147 5.41285 11.5048 5.57189C11.8626 5.73092 12.2403 5.81044 12.6379 5.81044C13.4331 5.81044 14.1175 5.52645 14.6912 4.95847C15.2648 4.39048 15.5517 3.70891 15.5517 2.91374C15.5517 2.1072 15.2648 1.41995 14.6912 0.85197C14.1175 0.283987 13.4331 0 12.6379 0C11.8427 0 11.1583 0.283987 10.5847 0.85197C10.011 1.41995 9.72418 2.1072 9.72418 2.91374C9.72418 3.05005 9.74121 3.18069 9.77529 3.30564C9.80937 3.4306 9.84345 3.56691 9.87753 3.71459L5.94143 5.96379C5.69151 5.70252 5.39049 5.49237 5.03834 5.33333C4.68619 5.1743 4.31133 5.09478 3.91374 5.09478C3.11856 5.09478 2.43415 5.37877 1.86049 5.94675C1.28683 6.51473 1 7.1963 1 7.99148C1 8.79802 1.28683 9.48526 1.86049 10.0532C2.43415 10.6212 3.11856 10.9052 3.91374 10.9052C4.31133 10.9052 4.68619 10.8229 5.03834 10.6581C5.39049 10.4934 5.69151 10.2861 5.94143 10.0362L9.80937 12.2854C9.80937 12.4331 9.79517 12.5666 9.76677 12.6858C9.73837 12.8051 9.72418 12.9386 9.72418 13.0863C9.72418 13.8814 10.011 14.5658 10.5847 15.1395C11.1583 15.7132 11.8427 16 12.6379 16C13.4331 16 14.1175 15.7132 14.6912 15.1395C15.2648 14.5658 15.5517 13.8814 15.5517 13.0863C15.5517 12.2911 15.2648 11.6067 14.6912 11.033C14.1175 10.4594 13.4331 10.1725 12.6379 10.1725ZM12.6379 1.44835C13.0355 1.44835 13.3763 1.59034 13.6603 1.87433C13.9443 2.15833 14.0863 2.50479 14.0863 2.91374C14.0863 3.31133 13.9443 3.65211 13.6603 3.9361C13.3763 4.22009 13.0355 4.36209 12.6379 4.36209C12.2403 4.36209 11.8995 4.22009 11.6155 3.9361C11.3316 3.65211 11.1896 3.31133 11.1896 2.91374C11.1896 2.50479 11.3316 2.15833 11.6155 1.87433C11.8995 1.59034 12.2403 1.44835 12.6379 1.44835ZM3.91374 9.45687C3.51615 9.45687 3.17537 9.31488 2.89137 9.03088C2.60738 8.74689 2.46539 8.40043 2.46539 7.99148C2.46539 7.59389 2.60738 7.25311 2.89137 6.96912C3.17537 6.68512 3.51615 6.54313 3.91374 6.54313C4.31133 6.54313 4.65211 6.68512 4.9361 6.96912C5.22009 7.25311 5.36209 7.59389 5.36209 7.99148C5.36209 8.40043 5.22009 8.74689 4.9361 9.03088C4.65211 9.31488 4.31133 9.45687 3.91374 9.45687ZM12.6379 14.5346C12.2403 14.5346 11.8995 14.3926 11.6155 14.1086C11.3316 13.8246 11.1896 13.4838 11.1896 13.0863C11.1896 12.9386 11.2066 12.808 11.2407 12.6944C11.2748 12.5808 11.3259 12.4672 11.394 12.3536C11.5076 12.1377 11.6809 11.9645 11.9137 11.8339C12.1466 11.7032 12.388 11.6379 12.6379 11.6379C13.0355 11.6379 13.3763 11.7799 13.6603 12.0639C13.9443 12.3479 14.0863 12.6887 14.0863 13.0863C14.0863 13.4838 13.9443 13.8246 13.6603 14.1086C13.3763 14.3926 13.0355 14.5346 12.6379 14.5346Z M12.6379 10.1725C12.2403 10.1725 11.8655 10.2549 11.5133 10.4196C11.1612 10.5843 10.8601 10.7973 10.6102 11.0586L6.74228 8.79233C6.74228 8.64466 6.75648 8.51118 6.78488 8.39191C6.81328 8.27263 6.82748 8.13916 6.82748 7.99148C6.82748 7.85516 6.81044 7.72453 6.77636 7.59957C6.74228 7.47462 6.7082 7.3383 6.67412 7.19063L10.525 4.94143C10.8204 5.2027 11.147 5.41285 11.5048 5.57189C11.8626 5.73092 12.2403 5.81044 12.6379 5.81044C13.4331 5.81044 14.1175 5.52645 14.6912 4.95847C15.2648 4.39048 15.5517 3.70891 15.5517 2.91374C15.5517 2.1072 15.2648 1.41995 14.6912 0.85197C14.1175 0.283987 13.4331 0 12.6379 0C11.8427 0 11.1583 0.283987 10.5847 0.85197C10.011 1.41995 9.72418 2.1072 9.72418 2.91374C9.72418 3.05005 9.74121 3.18069 9.77529 3.30564C9.80937 3.4306 9.84345 3.56691 9.87753 3.71459L5.94143 5.96379C5.69151 5.70252 5.39049 5.49237 5.03834 5.33333C4.68619 5.1743 4.31133 5.09478 3.91374 5.09478C3.11856 5.09478 2.43415 5.37877 1.86049 5.94675C1.28683 6.51473 1 7.1963 1 7.99148C1 8.79802 1.28683 9.48526 1.86049 10.0532C2.43415 10.6212 3.11856 10.9052 3.91374 10.9052C4.31133 10.9052 4.68619 10.8229 5.03834 10.6581C5.39049 10.4934 5.69151 10.2861 5.94143 10.0362L9.80937 12.2854C9.80937 12.4331 9.79517 12.5666 9.76677 12.6858C9.73837 12.8051 9.72418 12.9386 9.72418 13.0863C9.72418 13.8814 10.011 14.5658 10.5847 15.1395C11.1583 15.7132 11.8427 16 12.6379 16C13.4331 16 14.1175 15.7132 14.6912 15.1395C15.2648 14.5658 15.5517 13.8814 15.5517 13.0863C15.5517 12.2911 15.2648 11.6067 14.6912 11.033C14.1175 10.4594 13.4331 10.1725 12.6379 10.1725ZM12.6379 1.44835C13.0355 1.44835 13.3763 1.59034 13.6603 1.87433C13.9443 2.15833 14.0863 2.50479 14.0863 2.91374C14.0863 3.31133 13.9443 3.65211 13.6603 3.9361C13.3763 4.22009 13.0355 4.36209 12.6379 4.36209C12.2403 4.36209 11.8995 4.22009 11.6155 3.9361C11.3316 3.65211 11.1896 3.31133 11.1896 2.91374C11.1896 2.50479 11.3316 2.15833 11.6155 1.87433C11.8995 1.59034 12.2403 1.44835 12.6379 1.44835ZM3.91374 9.45687C3.51615 9.45687 3.17537 9.31488 2.89137 9.03088C2.60738 8.74689 2.46539 8.40043 2.46539 7.99148C2.46539 7.59389 2.60738 7.25311 2.89137 6.96912C3.17537 6.68512 3.51615 6.54313 3.91374 6.54313C4.31133 6.54313 4.65211 6.68512 4.9361 6.96912C5.22009 7.25311 5.36209 7.59389 5.36209 7.99148C5.36209 8.40043 5.22009 8.74689 4.9361 9.03088C4.65211 9.31488 4.31133 9.45687 3.91374 9.45687ZM12.6379 14.5346C12.2403 14.5346 11.8995 14.3926 11.6155 14.1086C11.3316 13.8246 11.1896 13.4838 11.1896 13.0863C11.1896 12.9386 11.2066 12.808 11.2407 12.6944C11.2748 12.5808 11.3259 12.4672 11.394 12.3536C11.5076 12.1377 11.6809 11.9645 11.9137 11.8339C12.1466 11.7032 12.388 11.6379 12.6379 11.6379C13.0355 11.6379 13.3763 11.7799 13.6603 12.0639C13.9443 12.3479 14.0863 12.6887 14.0863 13.0863C14.0863 13.4838 13.9443 13.8246 13.6603 14.1086C13.3763 14.3926 13.0355 14.5346 12.6379 14.5346Z" />
  </svg>
);

ShareNetwork.displayName = "ShareNetwork";

export default ShareNetwork;
