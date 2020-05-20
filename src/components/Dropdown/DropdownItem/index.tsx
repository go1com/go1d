import * as React from "react";
import { Colors } from "../../../foundations/foundation-types";
import ButtonMinimal, { ButtonMinimalProps } from "../../ButtonMinimal";
import Text from "../../Text";
import Theme from "../../Theme";
import View from "../../View";

interface Item extends ButtonMinimalProps {
  title: string;
  description: string;
  hoverColor?: keyof Colors;
}

interface Props {
  item: Item;
  index: number;
  getItemProps: (options: any) => any;
}

export default ({ item, index, getItemProps }: Props) => {
  const {
    color,
    href,
    title,
    description,
    icon: IconElement,
    css,
    hoverColor = "highlight",
    onClick,
    ...itemProps
  } = item;
  return (
    <Theme.Consumer>
      {({ colors }) => (
        <ButtonMinimal
          key={index}
          href={item.href}
          {...getItemProps({
            key: index,
            item,
            index,
          })}
          height="auto"
          color={item.color || "default"}
          justifyContent="flex-start"
          paddingTop={3}
          paddingRight={4}
          paddingBottom={3}
          paddingLeft={4}
          borderRadius={0}
          iconColor="muted"
          css={[
            {
              "&:hover, &:focus": {
                backgroundColor: colors[hoverColor],
              },
              "&:active": {
                backgroundColor: colors[hoverColor],
              },
            },
            css,
          ]}
          {...itemProps}
        >
          <View flexDirection="row" alignItems="center">
            {IconElement && <IconElement iconColor="subtle" size={4} />}
            <View marginLeft={3}>
              <Text fontWeight="semibold">{title}</Text>
              <Text fontSize={2} fontWeight="normal" color="subtle">
                {description}
              </Text>
            </View>
          </View>
        </ButtonMinimal>
      )}
    </Theme.Consumer>
  );
};
