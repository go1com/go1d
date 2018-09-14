import * as React from "react";
import Theme from "../Theme";

interface Props {
  size: number;
  color: string;
  css: Interpolation;
}

const Lti: React.SFC<Props> = ({
  size,
  color = "currentcolor",
  ...props
}: Props) => (
  <svg {...props} viewBox="0 0 16 16" fill={color}>
    <path d="M13.9254 3.74627L8.8209 1.19403C8.57214 1.06468 8.29602 1 7.99254 1C7.68905 1 7.39304 1.06468 7.10448 1.19403L2.01493 3.74627C1.69652 3.90547 1.44776 4.13184 1.26866 4.42537C1.08955 4.71891 1 5.04477 1 5.40299V11.4478C1 11.796 1.09204 12.1294 1.27612 12.4478C1.4602 12.7662 1.72637 13.005 2.07463 13.1642L7.1791 15.7164C7.29851 15.7761 7.43284 15.8234 7.58209 15.8582C7.73134 15.893 7.87065 15.9104 8 15.9104C8.1592 15.9104 8.30597 15.893 8.4403 15.8582C8.57463 15.8234 8.70149 15.7761 8.8209 15.7164L13.9254 13.1642C14.2438 13.005 14.5025 12.7736 14.7015 12.4701C14.9005 12.1667 15 11.8259 15 11.4478V5.40299C15 5.04477 14.908 4.71891 14.7239 4.42537C14.5398 4.13184 14.2736 3.90547 13.9254 3.74627ZM7.74627 2.26866C7.77612 2.23881 7.81841 2.22139 7.87313 2.21642C7.92786 2.21144 7.97015 2.20896 8 2.20896C8.0597 2.20896 8.10945 2.21144 8.14925 2.21642C8.18905 2.22139 8.22388 2.23881 8.25373 2.26866L12.9701 4.62687L8 7.1194L3.02985 4.62687L7.74627 2.26866ZM2.58209 12.0896C2.49254 12.0199 2.41791 11.9303 2.35821 11.8209C2.29851 11.7114 2.26866 11.607 2.26866 11.5075V5.65672L7.35821 8.19403V14.4328L2.58209 12.0896ZM13.3433 12.0896L8.64179 14.4328V8.19403L13.7313 5.65672V11.5075C13.7313 11.6368 13.699 11.7488 13.6343 11.8433C13.5697 11.9378 13.4726 12.0199 13.3433 12.0896Z M13.9254 3.74627L8.8209 1.19403C8.57214 1.06468 8.29602 1 7.99254 1C7.68905 1 7.39304 1.06468 7.10448 1.19403L2.01493 3.74627C1.69652 3.90547 1.44776 4.13184 1.26866 4.42537C1.08955 4.71891 1 5.04477 1 5.40299V11.4478C1 11.796 1.09204 12.1294 1.27612 12.4478C1.4602 12.7662 1.72637 13.005 2.07463 13.1642L7.1791 15.7164C7.29851 15.7761 7.43284 15.8234 7.58209 15.8582C7.73134 15.893 7.87065 15.9104 8 15.9104C8.1592 15.9104 8.30597 15.893 8.4403 15.8582C8.57463 15.8234 8.70149 15.7761 8.8209 15.7164L13.9254 13.1642C14.2438 13.005 14.5025 12.7736 14.7015 12.4701C14.9005 12.1667 15 11.8259 15 11.4478V5.40299C15 5.04477 14.908 4.71891 14.7239 4.42537C14.5398 4.13184 14.2736 3.90547 13.9254 3.74627ZM7.74627 2.26866C7.77612 2.23881 7.81841 2.22139 7.87313 2.21642C7.92786 2.21144 7.97015 2.20896 8 2.20896C8.0597 2.20896 8.10945 2.21144 8.14925 2.21642C8.18905 2.22139 8.22388 2.23881 8.25373 2.26866L12.9701 4.62687L8 7.1194L3.02985 4.62687L7.74627 2.26866ZM2.58209 12.0896C2.49254 12.0199 2.41791 11.9303 2.35821 11.8209C2.29851 11.7114 2.26866 11.607 2.26866 11.5075V5.65672L7.35821 8.19403V14.4328L2.58209 12.0896ZM13.3433 12.0896L8.64179 14.4328V8.19403L13.7313 5.65672V11.5075C13.7313 11.6368 13.699 11.7488 13.6343 11.8433C13.5697 11.9378 13.4726 12.0199 13.3433 12.0896Z" />
  </svg>
);

Lti.displayName = "Lti";

export default Lti;
