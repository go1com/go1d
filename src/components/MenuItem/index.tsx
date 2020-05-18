import * as React from "react";
import { Transition } from "react-transition-group";
import { IconProps } from "../IconBase";
import Link from "../Link";
import Text from "../Text";
import Theme from "../Theme";
import View, { ViewProps } from "../View";

export interface MenuItemProps extends ViewProps {
  collapsed?: boolean;
  active?: boolean;
  iconName?: never;
  icon: React.ComponentType<IconProps>;
  href: string;
}

const MenuItem: React.SFC<MenuItemProps> = ({
  collapsed = false,
  active = false,
  children,
  icon: IconElement,
  href,
  ...props
}: MenuItemProps) => (
  <Theme.Consumer>
    {({ colors, animation }) => (
      <Link
        href={href}
        hoverFocusColor="faded"
        css={{
          flexShrink: 0,
        }}
      >
        <View
          flexDirection="row"
          alignItems="center"
          backgroundColor={active ? "highlight" : "contrast"}
          color={active ? "faded" : "subtle"}
          paddingY={4}
          paddingLeft={4}
          flexGrow={1}
          css={{
            "svg, span, div": {
              transition: "none",
            },
            "&:hover, &:focus": {
              color: colors.faded,
              backgroundColor: colors.default,
            },
          }}
          {...props}
        >
          <View
            color={colors.muted}
            marginLeft={3}
            marginRight={5}
            css={{
              transition: "none",
            }}
          >
            <IconElement size={4} />
          </View>
          <Transition
            in={collapsed}
            timeout={animation.subtle}
            unmountOnExit={true}
            mountOnEnter={true}
          >
            <View marginLeft={1} flexGrow={1}>
              <Text
                fontWeight="normal"
                fontSize={2}
                css={{
                  opacity: collapsed ? 1 : 0,
                }}
              >
                {children}
              </Text>
            </View>
          </Transition>
        </View>
      </Link>
    )}
  </Theme.Consumer>
);

MenuItem.displayName = "MenuItem";
export default MenuItem;
