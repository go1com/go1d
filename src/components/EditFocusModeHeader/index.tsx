import takeRight = require("lodash/takeRight");
import * as React from "react";
import Avatar from "../Avatar";
import ButtonFilled, { ButtonFilledProps } from "../ButtonFilled";
import ButtonMinimal, { ButtonMinimalProps } from "../ButtonMinimal";
import Icon from "../Icon";
import MoreMenu from "../MoreMenu";
import { Item as SuffixItemProps } from "../MoreMenu/DropdownMenuItem";
import TabNavigation from "../TabNavigation";
import Text from "../Text";
import View from "../View";

export interface EditFocusModeHeaderProps {
  returnHref?: any;
  returnOnClick?: (evt: React.SyntheticEvent) => void;
  headerSuffixItems?: Array<SuffixItemProps | null>;
  returnIconName?: string;
  title: string;
  subtitle?: string | React.ReactNode;
  avatar?: string;
  avatarType?: "square" | "circle";
  tabs?: React.ReactNode;
}

const EditFocusModeHeader = ({
  returnHref,
  returnOnClick,
  headerSuffixItems,
  returnIconName = "Cross",
  subtitle,
  title,
  avatar,
  avatarType = "square",
  tabs,
}: EditFocusModeHeaderProps) => (
  <React.Fragment>
    <View flexDirection="row" borderBottom={1} borderColor="soft">
      <ButtonMinimal
        borderRadius={0}
        href={returnHref}
        onClick={returnOnClick}
        paddingY={0}
        paddingX={0}
        borderRight={1}
        borderColor="soft"
        width={64}
        height="auto"
      >
        <Icon name={returnIconName} size={3} />
      </ButtonMinimal>
      <View
        flexGrow={1}
        alignItems="center"
        paddingX={6}
        flexDirection="row"
        flexShrink={1}
      >
        {avatar && (
          <View justifyContent="center" marginRight={4}>
            <Avatar
              iconName="Document"
              src={avatar}
              size={3}
              avatarType={avatarType}
            />
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
        <View marginLeft="auto" flexDirection="row-reverse" alignItems="center">
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
      )}
    </View>
    {tabs && (
      <TabNavigation borderTop={0}>
        <View paddingLeft={6} flexDirection="row">
          {tabs}
        </View>
      </TabNavigation>
    )}
  </React.Fragment>
);

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
    {title}
  </ButtonFilled>
);

const SecondHeaderSuffixNode: React.SFC<ButtonMinimalProps> = ({
  title,
  ...props
}) => <ButtonMinimal {...props}>{title}</ButtonMinimal>;
