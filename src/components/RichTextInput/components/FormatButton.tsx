import * as React from "react";
import { Colors } from "../../../foundations/foundation-types";
import Button from "../../Button";
import { IconProps } from "../../IconBase";

export interface FormatButtonProps {
  icon: React.ComponentType<IconProps>;
  type: string;
  active: boolean;
  colors: Colors;
  onClick: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
}

export const FormatButton = React.forwardRef(
  (
    { type, icon, onClick, active, colors, ...props }: FormatButtonProps,
    ref
  ) => {
    return (
      <Button
        innerRef={ref}
        color="accent"
        data-value={type}
        onClick={onClick}
        active={active}
        icon={icon}
        css={[
          {
            svg: {
              color: colors.subtle,
            },
            "&:hover": {
              color: colors.contrast,
              svg: {
                color: colors.contrast,
              },
            },
            "&:focus, &:active": {
              color: colors.accent,
              svg: {
                color: colors.accent,
              },
            },
          },
          active
            ? {
                svg: {
                  color: colors.accent,
                },
              }
            : {},
        ]}
        {...props}
      />
    );
  }
);
