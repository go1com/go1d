import get = require("lodash/get");
import * as React from "react";
import foundations from "../../foundations";
import Icon from "../Icon/index";
import Text from "../Text";
import Theme from "../Theme";
import View, { ViewProps } from "../View";

export interface FeaturedTagProps extends ViewProps {
  size?: "lg" | "md" | "sm";
  color?: string;
  iconColor?: string;
  backgroundColor?: string;
  iconName?: string;
  onClick?: ((evt: React.SyntheticEvent) => void);
}

const interactiveStyles = (colors, passive) => {
  let styles = { background: `${colors.background}` };
  if (!passive) {
    styles = Object.assign(styles, foundations.hoverStyle);
  }
  return styles;
};

const FeaturedTag: React.SFC<FeaturedTagProps> = ({
  size = "md",
  color = "subtle",
  backgroundColor = "background",
  iconName,
  children,
  onClick,
  iconColor = color,
  type = "button",
  css,
  passive = true,
  ...props
}: FeaturedTagProps) => (
  <Theme.Consumer>
    {({ colors }) => (
      <View
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        height={75}
        paddingX={get({ lg: 6, md: 5, sm: 3 }, size)}
        backgroundColor={backgroundColor}
        color={color}
        borderRadius={2}
        onClick={onClick}
        boxShadow="crisp"
        type={type}
        width={get({ lg: 256, md: 256, sm: 176 }, size)}
        css={{
          marginBottom: foundations.spacing[3],
          ...(css as object),
          ...interactiveStyles(colors, passive),
        }}
        {...props}
      >
        {iconName && (
          <Icon
            name={iconName}
            size={get({ lg: 5, md: 4, sm: 3 }, size)}
            marginRight={children && get({ lg: 6, md: 4, sm: 3 }, size)}
            color={iconColor}
          />
        )}
        <Text
          lineHeight="ui"
          fontWeight={"semibold"}
          fontSize={get({ lg: 2, md: 2, sm: 2 }, size)}
          color="inherit"
          css={{
            textAlign: "center",
            width: iconName ? "auto" : "100%",
          }}
        >
          {children}
        </Text>
      </View>
    )}
  </Theme.Consumer>
);

FeaturedTag.displayName = "FeaturedTag";

export default FeaturedTag;
