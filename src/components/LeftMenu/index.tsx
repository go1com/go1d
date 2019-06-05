import * as React from "react";
import { Transition } from "react-transition-group";
import ButtonMinimal from "../ButtonMinimal";
import Icon from "../Icon";
import Text from "../Text";
import Theme from "../Theme";
import View, { ViewProps } from "../View";

export interface LeftMenuProps extends ViewProps {
  showMenuButton?: boolean;
  onMenuButtonClick?: () => void;
  title: string;
  allowCollapsable?: boolean;
}

/**
 * Menu
 */
const menuTransition = {
  closedMenu: "80px",
  openedMenu: "242px",
};

const LeftMenu: React.SFC<LeftMenuProps> = ({
  showMenuButton = false,
  allowCollapsable = true,
  onMenuButtonClick,
  children,
  title,
  ...props
}: LeftMenuProps) => (
  <Theme.Consumer>
    {({ colors, animation }) => (
      <View
        position="static"
        backgroundColor="contrast"
        color="soft"
        minHeight="100vh"
        paddingY={5}
        width={
          showMenuButton ? menuTransition.openedMenu : menuTransition.closedMenu
        }
        css={{
          overflowX: "hidden",
        }}
        {...props}
      >
        <View flexDirection="row" alignItems="center" marginBottom={4}>
          <View marginX={5}>
            <Icon name="Go1Logo" size={5} />
          </View>
          <Transition
            in={showMenuButton}
            timeout={animation.subtle}
            unmountOnExit={true}
            mountOnEnter={true}
          >
            <View marginLeft={-2} marginBottom={1}>
              <Text
                css={{
                  opacity: showMenuButton ? 1 : 0,
                  alignSelf: "center",
                  lineHeight: 0.9,
                }}
                color="lightest"
                fontSize={3}
              >
                {title}
              </Text>
            </View>
          </Transition>
          <Transition
            in={showMenuButton && allowCollapsable}
            timeout={animation.subtle}
            unmountOnExit={true}
            mountOnEnter={true}
          >
            <ButtonMinimal
              element="button"
              backgroundColor="contrast"
              color="muted"
              marginLeft="auto"
              paddingY={0}
              height="24px"
              css={{
                opacity: showMenuButton ? 1 : 0,
                "svg, span": {
                  transition: "none",
                },
                "&:hover, &:focus": {
                  color: colors.faded,
                  backgroundColor: "transparent",
                },
              }}
              onClick={onMenuButtonClick}
            >
              <Icon name="ChevronLeft" size={4} />
            </ButtonMinimal>
          </Transition>
        </View>
        {children}
      </View>
    )}
  </Theme.Consumer>
);

LeftMenu.displayName = "LeftMenu";

export default LeftMenu;
