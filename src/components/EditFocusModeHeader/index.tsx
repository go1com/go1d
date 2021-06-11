import takeRight = require("lodash/takeRight");
import * as React from "react";
import Avatar from "../Avatar";
import ButtonFilled, { ButtonFilledProps } from "../ButtonFilled";
import ButtonMinimal, { ButtonMinimalProps } from "../ButtonMinimal";
import MoreMenu from "../MoreMenu";
import { Item as SuffixItemProps } from "../MoreMenu/DropdownMenuItem";
import TabNavigation from "../TabNavigation";
import Text from "../Text";
import View from "../View";

import { IconProps } from "../IconBase";
import IconCross from "../Icons/Cross";
import IconDocument from "../Icons/Document";

export interface EditFocusModeHeaderProps {
  returnHref?: any;
  returnOnClick?: (evt: React.SyntheticEvent) => void;
  headerSuffixItems?: Array<SuffixItemProps | null>;
  returnIconName?: never; // Removed
  returnIcon?: React.ComponentType<IconProps>;
  title: string;
  subtitle?: string | React.ReactNode;
  avatar?: string;
  tabs?: React.ReactNode;
}
const hideOnMobile = ["none", "flex", "flex"];

/**
 * Focus Mode Header is a minimalistic header designed to allow the content of the screen to take up as much space as possible.
 */
const EditFocusModeHeader = ({
  returnHref,
  returnOnClick,
  headerSuffixItems,
  returnIcon,
  subtitle,
  title,
  avatar,
  tabs,
}: EditFocusModeHeaderProps) => {
  const ReturnIconElement = returnIcon || IconCross;

  return (
    <React.Fragment>
      <View flexDirection="row" borderBottom={1} borderColor="soft">
        <ButtonMinimal
          borderRadius={0}
          href={returnHref}
          onClick={returnOnClick}
          paddingY={0}
          paddingX={0}
          borderRight={[0, 1, 1]}
          borderColor="soft"
          width={[50, 64, 64]}
          height="auto"
        >
          <ReturnIconElement size={3} />
        </ButtonMinimal>
        <View
          flexGrow={1}
          alignItems="center"
          paddingX={[1, 6, 6]}
          flexDirection="row"
          flexShrink={1}
        >
          {avatar && (
            <View
              justifyContent="center"
              marginRight={4}
              display={hideOnMobile}
            >
              <Avatar icon={IconDocument} src={avatar} scaleSize={1} />
            </View>
          )}
          <View flexShrink={1}>
            <View marginBottom={1}>
              <Text
                ellipsis={true}
                fontSize={3}
                fontWeight="semibold"
                lineHeight="display"
              >
                {title}
              </Text>
            </View>
            {subtitle && <View>{subtitle}</View>}
          </View>
        </View>
        {headerSuffixItems && (
          <React.Fragment>
            <View
              marginLeft="auto"
              flexDirection="row-reverse"
              alignItems="center"
              display={hideOnMobile}
            >
              <FirstHeaderSuffixNode {...headerSuffixItems[0]} />
              {headerSuffixItems[1] && (
                <SecondHeaderSuffixNode {...headerSuffixItems[1]} />
              )}
              {headerSuffixItems[2] && (
                <MoreMenu
                  isButtonFilled={false}
                  itemList={takeRight(
                    headerSuffixItems,
                    headerSuffixItems.length - 2
                  )}
                />
              )}
            </View>

            {/* Mobile view */}
            <View
              marginLeft="auto"
              flexDirection="row-reverse"
              alignItems="center"
              display={["flex", "none", "none"]}
            >
              <FirstHeaderSuffixNode {...headerSuffixItems[0]} />
              {headerSuffixItems[1] && (
                <MoreMenu
                  isButtonFilled={false}
                  itemList={takeRight(
                    headerSuffixItems,
                    headerSuffixItems.length - 1
                  )}
                />
              )}
            </View>
          </React.Fragment>
        )}
      </View>
      {tabs && (
        <TabNavigation
          borderTop={0}
          paddingLeft={[0, 8, 8]}
          paddingRight={[0, 8, 8]}
        >
          <View paddingLeft={[4, 6, 6]} flexDirection="row">
            {tabs}
          </View>
        </TabNavigation>
      )}
    </React.Fragment>
  );
};

export default EditFocusModeHeader;

const FirstHeaderSuffixNode: React.SFC<ButtonFilledProps> = ({
  title,
  css = {},
  ...props
}: ButtonFilledProps) => (
  <ButtonFilled
    borderRadius={0}
    height={65}
    color="accent"
    marginLeft={2}
    iconMargin={[0, 3, 3]}
    paddingX={[5, 4, 4]}
    {...props}
    css={[
      {
        marginBottom: "-1px", // can not use marginBottomProp as -2px is too much
        boxShadow: "none",
        ":hover, :focus": {
          transform: "none",
          boxShadow: "none",
        },
      },
      css,
    ]}
  >
    <Text display={hideOnMobile}>{title}</Text>
  </ButtonFilled>
);

const SecondHeaderSuffixNode: React.SFC<ButtonMinimalProps> = ({
  title,
  ...props
}) => <ButtonMinimal {...props}>{title}</ButtonMinimal>;
