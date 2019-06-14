import * as React from "react";
import ButtonMinimal from "../ButtonMinimal";
import Icon from "../Icon";
import SpotIcon from "../SpotIcon";
import Text from "../Text";
import Theme from "../Theme";
import View, { ViewProps } from "../View";

export interface OptionProps extends ViewProps {
  onClick?: (evt: React.SyntheticEvent) => void;
  title: string;
  meta?: string;
  checked?: boolean;
  lines?: number;
  disabled?: boolean;
  actionIcon?: string;
  spotIcon?: string;
}

const Option: React.SFC<OptionProps> = ({
  onClick,
  title,
  meta,
  checked = false,
  disabled = false,
  lines = 2,
  actionIcon,
  spotIcon,
  css,
  ...props
}: OptionProps) => (
  <Theme.Consumer>
    {({ shadows }) => (
      <View
        flexDirection="row"
        alignItems="center"
        justifyContent="stretch"
        height={40 * lines}
        width="100%"
        paddingX={4}
        backgroundColor={
          checked && disabled ? "background" : checked ? "soft" : "background"
        }
        element={!checked ? "button" : "div"}
        borderRadius={2}
        onClick={!checked && onClick}
        opacity={disabled && "disabled"}
        border={1}
        borderColor="soft"
        transition="subtle"
        css={[
          !checked && {
            boxShadow: shadows.crisp,
            "&:hover, &:focus": {
              boxShadow: shadows.strong,
              transform: "translateY(-1px)",
            },
            "&:active": {
              boxShadow: shadows.crisp,
              transform: "translateY(1px)",
            },
          },
          disabled && {
            pointerEvents: "none",
          },
          css,
        ]}
        {...props}
      >
        {spotIcon && (
          <View marginRight={4}>
            <SpotIcon name={spotIcon} />
          </View>
        )}
        <View flexShrink={1} marginRight="auto">
          {title && <Text fontWeight="semibold">{title}</Text>}
          {meta && (
            <Text marginTop={2} element="p" color="subtle" ellipsis={true}>
              {meta}
            </Text>
          )}
        </View>
        {checked && !disabled ? (
          <ButtonMinimal
            onClick={checked && onClick}
            size="sm"
            round={true}
            iconName="Cross"
          />
        ) : (
          <Icon
            name={checked && disabled ? "Success" : actionIcon}
            color={checked && disabled ? "accent" : "subtle"}
            size={2}
          />
        )}
      </View>
    )}
  </Theme.Consumer>
);

Option.displayName = "Option";

export default Option;
