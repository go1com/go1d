import * as React from "react";
import Theme from "../Theme";

interface Props {
  size: number;
  color: string;
  css: Interpolation;
}

const Trash: React.SFC<Props> = ({
  size,
  color = "currentcolor",
  ...props
}: Props) => (
  <svg {...props} viewBox="0 0 16 16" fill={color}>
    <path d="M14.569 2.91374H11.6552V2.18104C11.6552 1.56762 11.4479 1.05077 11.0333 0.630458C10.6187 0.210151 10.099 0 9.47418 0H6.57748C5.95269 0 5.433 0.210151 5.01837 0.630458C4.60374 1.05077 4.39643 1.56762 4.39643 2.18104V2.91374H1.48269C1.26686 2.91374 1.09079 2.97905 0.954473 3.10969C0.818157 3.24033 0.75 3.41356 0.75 3.62939C0.75 3.85659 0.818157 4.0355 0.954473 4.16613C1.09079 4.29677 1.26686 4.36209 1.48269 4.36209H2.21539V13.819C2.21539 14.4324 2.4227 14.9492 2.83733 15.3695C3.25195 15.7898 3.77165 16 4.39643 16H11.6552C12.28 16 12.7997 15.7898 13.2143 15.3695C13.629 14.9492 13.8363 14.4324 13.8363 13.819V4.36209H14.569C14.7848 4.36209 14.9609 4.29677 15.0972 4.16613C15.2335 4.0355 15.3017 3.85659 15.3017 3.62939C15.3017 3.41356 15.2335 3.24033 15.0972 3.10969C14.9609 2.97905 14.7848 2.91374 14.569 2.91374ZM5.84478 2.18104C5.84478 1.96521 5.9101 1.78914 6.04074 1.65282C6.17137 1.51651 6.35028 1.44835 6.57748 1.44835H9.47418C9.70137 1.44835 9.88028 1.51651 10.0109 1.65282C10.1416 1.78914 10.2069 1.96521 10.2069 2.18104V2.91374H5.84478V2.18104ZM12.3879 13.819C12.3879 14.0348 12.3226 14.208 12.192 14.3387C12.0613 14.4693 11.8824 14.5346 11.6552 14.5346H4.39643C4.16924 14.5346 3.99033 14.4693 3.85969 14.3387C3.72906 14.208 3.66374 14.0348 3.66374 13.819V4.36209H12.3879V13.819ZM6.57748 6.54313C6.35028 6.54313 6.17137 6.60845 6.04074 6.73908C5.9101 6.86972 5.84478 7.04863 5.84478 7.27583V11.6379C5.84478 11.8537 5.9101 12.027 6.04074 12.1576C6.17137 12.2882 6.35028 12.3536 6.57748 12.3536C6.79331 12.3536 6.96654 12.2882 7.09718 12.1576C7.22781 12.027 7.29313 11.8537 7.29313 11.6379V7.27583C7.29313 7.04863 7.22781 6.86972 7.09718 6.73908C6.96654 6.60845 6.79331 6.54313 6.57748 6.54313ZM9.47418 6.54313C9.25834 6.54313 9.08511 6.60845 8.95447 6.73908C8.82384 6.86972 8.75852 7.04863 8.75852 7.27583V11.6379C8.75852 11.8537 8.82384 12.027 8.95447 12.1576C9.08511 12.2882 9.25834 12.3536 9.47418 12.3536C9.70137 12.3536 9.88028 12.2882 10.0109 12.1576C10.1416 12.027 10.2069 11.8537 10.2069 11.6379V7.27583C10.2069 7.04863 10.1416 6.86972 10.0109 6.73908C9.88028 6.60845 9.70137 6.54313 9.47418 6.54313Z M14.569 2.91374H11.6552V2.18104C11.6552 1.56762 11.4479 1.05077 11.0333 0.630458C10.6187 0.210151 10.099 0 9.47418 0H6.57748C5.95269 0 5.433 0.210151 5.01837 0.630458C4.60374 1.05077 4.39643 1.56762 4.39643 2.18104V2.91374H1.48269C1.26686 2.91374 1.09079 2.97905 0.954473 3.10969C0.818157 3.24033 0.75 3.41356 0.75 3.62939C0.75 3.85659 0.818157 4.0355 0.954473 4.16613C1.09079 4.29677 1.26686 4.36209 1.48269 4.36209H2.21539V13.819C2.21539 14.4324 2.4227 14.9492 2.83733 15.3695C3.25195 15.7898 3.77165 16 4.39643 16H11.6552C12.28 16 12.7997 15.7898 13.2143 15.3695C13.629 14.9492 13.8363 14.4324 13.8363 13.819V4.36209H14.569C14.7848 4.36209 14.9609 4.29677 15.0972 4.16613C15.2335 4.0355 15.3017 3.85659 15.3017 3.62939C15.3017 3.41356 15.2335 3.24033 15.0972 3.10969C14.9609 2.97905 14.7848 2.91374 14.569 2.91374ZM5.84478 2.18104C5.84478 1.96521 5.9101 1.78914 6.04074 1.65282C6.17137 1.51651 6.35028 1.44835 6.57748 1.44835H9.47418C9.70137 1.44835 9.88028 1.51651 10.0109 1.65282C10.1416 1.78914 10.2069 1.96521 10.2069 2.18104V2.91374H5.84478V2.18104ZM12.3879 13.819C12.3879 14.0348 12.3226 14.208 12.192 14.3387C12.0613 14.4693 11.8824 14.5346 11.6552 14.5346H4.39643C4.16924 14.5346 3.99033 14.4693 3.85969 14.3387C3.72906 14.208 3.66374 14.0348 3.66374 13.819V4.36209H12.3879V13.819ZM6.57748 6.54313C6.35028 6.54313 6.17137 6.60845 6.04074 6.73908C5.9101 6.86972 5.84478 7.04863 5.84478 7.27583V11.6379C5.84478 11.8537 5.9101 12.027 6.04074 12.1576C6.17137 12.2882 6.35028 12.3536 6.57748 12.3536C6.79331 12.3536 6.96654 12.2882 7.09718 12.1576C7.22781 12.027 7.29313 11.8537 7.29313 11.6379V7.27583C7.29313 7.04863 7.22781 6.86972 7.09718 6.73908C6.96654 6.60845 6.79331 6.54313 6.57748 6.54313ZM9.47418 6.54313C9.25834 6.54313 9.08511 6.60845 8.95447 6.73908C8.82384 6.86972 8.75852 7.04863 8.75852 7.27583V11.6379C8.75852 11.8537 8.82384 12.027 8.95447 12.1576C9.08511 12.2882 9.25834 12.3536 9.47418 12.3536C9.70137 12.3536 9.88028 12.2882 10.0109 12.1576C10.1416 12.027 10.2069 11.8537 10.2069 11.6379V7.27583C10.2069 7.04863 10.1416 6.86972 10.0109 6.73908C9.88028 6.60845 9.70137 6.54313 9.47418 6.54313Z" />
  </svg>
);

Trash.displayName = "Trash";

export default Trash;
