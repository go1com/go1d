import * as React from "react";
import Theme from "../Theme";

interface Props {
  size: number;
  color: string;
  css: Interpolation;
}

const Clock: React.SFC<Props> = ({
  size,
  color = "currentcolor",
  ...props
}: Props) => (
  <svg {...props} viewBox="0 0 17 17" fill={color}>
    <path d="M8 0C6.88557 0 5.84506 0.210375 4.87846 0.63113C3.90049 1.04051 3.05047 1.60909 2.32836 2.33689C1.60625 3.06468 1.03483 3.91186 0.614073 4.87846C0.204689 5.85644 0 6.89694 0 8C0 9.11443 0.204689 10.1549 0.614073 11.1215C1.03483 12.0995 1.60625 12.9495 2.32836 13.6716C3.05047 14.3937 3.90049 14.9652 4.87846 15.3859C5.84506 15.8067 6.88557 16.0171 8 16.0171C9.11443 16.0171 10.1549 15.8067 11.1215 15.3859C12.0995 14.9652 12.9495 14.3937 13.6716 13.6716C14.3937 12.9495 14.9652 12.0995 15.3859 11.1215C15.7953 10.1549 16 9.11443 16 8C16 6.89694 15.7953 5.85644 15.3859 4.87846C14.9652 3.91186 14.3937 3.06468 13.6716 2.33689C12.9495 1.60909 12.0995 1.04051 11.1215 0.63113C10.1549 0.210375 9.11443 0 8 0ZM8 14.5501C7.09026 14.5501 6.23739 14.3795 5.44136 14.0384C4.64534 13.6972 3.95167 13.231 3.36034 12.6397C2.76901 12.0483 2.30277 11.3547 1.96162 10.5586C1.62047 9.76261 1.44989 8.90974 1.44989 8C1.44989 7.09026 1.62047 6.23739 1.96162 5.44136C2.30277 4.64534 2.76901 3.95167 3.36034 3.36034C3.95167 2.76901 4.64534 2.30277 5.44136 1.96162C6.23739 1.62047 7.09026 1.44989 8 1.44989C8.90974 1.44989 9.76261 1.62047 10.5586 1.96162C11.3547 2.30277 12.0483 2.76901 12.6397 3.36034C13.231 3.95167 13.6972 4.64534 14.0384 5.44136C14.3795 6.23739 14.5501 7.09026 14.5501 8C14.5501 8.90974 14.3795 9.76261 14.0384 10.5586C13.6972 11.3547 13.231 12.0483 12.6397 12.6397C12.0483 13.231 11.3547 13.6972 10.5586 14.0384C9.76261 14.3795 8.90974 14.5501 8 14.5501ZM8.73347 7.71002V3.63326C8.73347 3.4172 8.66525 3.24378 8.52878 3.11301C8.39232 2.98223 8.21606 2.91684 8 2.91684C7.78394 2.91684 7.60768 2.98223 7.47121 3.11301C7.33475 3.24378 7.26652 3.4172 7.26652 3.63326V8C7.26652 8.11372 7.28642 8.21038 7.32623 8.28998C7.36603 8.36958 7.42004 8.4435 7.48827 8.51173L9.67164 10.6951C9.75124 10.7747 9.83937 10.8316 9.93603 10.8657C10.0327 10.8998 10.1151 10.9168 10.1834 10.9168C10.2516 10.9168 10.334 10.8998 10.4307 10.8657C10.5274 10.8316 10.6155 10.7747 10.6951 10.6951C10.8429 10.5473 10.9168 10.3767 10.9168 10.1834C10.9168 9.99005 10.8429 9.81947 10.6951 9.67164L8.73347 7.71002Z M8 0C6.88557 0 5.84506 0.210375 4.87846 0.63113C3.90049 1.04051 3.05047 1.60909 2.32836 2.33689C1.60625 3.06468 1.03483 3.91186 0.614073 4.87846C0.204689 5.85644 0 6.89694 0 8C0 9.11443 0.204689 10.1549 0.614073 11.1215C1.03483 12.0995 1.60625 12.9495 2.32836 13.6716C3.05047 14.3937 3.90049 14.9652 4.87846 15.3859C5.84506 15.8067 6.88557 16.0171 8 16.0171C9.11443 16.0171 10.1549 15.8067 11.1215 15.3859C12.0995 14.9652 12.9495 14.3937 13.6716 13.6716C14.3937 12.9495 14.9652 12.0995 15.3859 11.1215C15.7953 10.1549 16 9.11443 16 8C16 6.89694 15.7953 5.85644 15.3859 4.87846C14.9652 3.91186 14.3937 3.06468 13.6716 2.33689C12.9495 1.60909 12.0995 1.04051 11.1215 0.63113C10.1549 0.210375 9.11443 0 8 0ZM8 14.5501C7.09026 14.5501 6.23739 14.3795 5.44136 14.0384C4.64534 13.6972 3.95167 13.231 3.36034 12.6397C2.76901 12.0483 2.30277 11.3547 1.96162 10.5586C1.62047 9.76261 1.44989 8.90974 1.44989 8C1.44989 7.09026 1.62047 6.23739 1.96162 5.44136C2.30277 4.64534 2.76901 3.95167 3.36034 3.36034C3.95167 2.76901 4.64534 2.30277 5.44136 1.96162C6.23739 1.62047 7.09026 1.44989 8 1.44989C8.90974 1.44989 9.76261 1.62047 10.5586 1.96162C11.3547 2.30277 12.0483 2.76901 12.6397 3.36034C13.231 3.95167 13.6972 4.64534 14.0384 5.44136C14.3795 6.23739 14.5501 7.09026 14.5501 8C14.5501 8.90974 14.3795 9.76261 14.0384 10.5586C13.6972 11.3547 13.231 12.0483 12.6397 12.6397C12.0483 13.231 11.3547 13.6972 10.5586 14.0384C9.76261 14.3795 8.90974 14.5501 8 14.5501ZM8.73347 7.71002V3.63326C8.73347 3.4172 8.66525 3.24378 8.52878 3.11301C8.39232 2.98223 8.21606 2.91684 8 2.91684C7.78394 2.91684 7.60768 2.98223 7.47121 3.11301C7.33475 3.24378 7.26652 3.4172 7.26652 3.63326V8C7.26652 8.11372 7.28642 8.21038 7.32623 8.28998C7.36603 8.36958 7.42004 8.4435 7.48827 8.51173L9.67164 10.6951C9.75124 10.7747 9.83937 10.8316 9.93603 10.8657C10.0327 10.8998 10.1151 10.9168 10.1834 10.9168C10.2516 10.9168 10.334 10.8998 10.4307 10.8657C10.5274 10.8316 10.6155 10.7747 10.6951 10.6951C10.8429 10.5473 10.9168 10.3767 10.9168 10.1834C10.9168 9.99005 10.8429 9.81947 10.6951 9.67164L8.73347 7.71002Z" />
  </svg>
);

Clock.displayName = "Clock";

export default Clock;
