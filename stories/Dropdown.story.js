import React from "react";
import { Dropdown, ButtonFilled, ButtonMinimal, Text, View } from "../src";
import { IconPlus, IconTrash } from "../src/components/Icons";

export default {
  title: "Original Go1d/Dropdown",
  component: Dropdown,
  subcomponents: { ButtonFilled, ButtonMinimal, View, Text }
};

export const BasicDropdown = () => (
  <Dropdown
    placement="bottom"
    renderFunction={(item, index, getItemProps) => (
      <View
        key={index}
        {...getItemProps({
          key: index,
          item,
          index,
        })}
        width={200}
        paddingX={3}
        paddingY={2}
      >
        <Text>{item.title}</Text>
      </View>
    )}
    itemList={[
      {
        title: "Element 0",
      },
      {
        title: "Element 1",
      },
      {
        title: "Element 3",
      },
    ]}
  >
    {({ ref, getToggleButtonProps }) => (
      <View width="70">
        <ButtonFilled {...getToggleButtonProps()} innerRef={ref} color="accent">
          Button
        </ButtonFilled>
      </View>
    )}
  </Dropdown>
);

BasicDropdown.storyName = "Basic dropdown";

export const DropdownWithComplexItems = () => (
  <View>
    <Dropdown
      itemToString={(item) => (item ? item.title : "")}
      renderFunction={(item, index, getItemProps) => (
        <ButtonMinimal
          key={index}
          href={item.href}
          size="lg"
          {...getItemProps({
            key: index,
            item,
            index,
          })}
          color={item.color || "default"}
          icon={item.icon}
          iconColor={item.iconColor}
          css={{
            justifyContent: "flex-start",
          }}
        >
          <Text>{item.title}</Text>
        </ButtonMinimal>
      )}
      itemList={[
        {
          title: "Add",
          href: "#testing",
          icon: IconPlus,
          iconColor: "muted",
        },
        {
          title: "Delete",
          href: "#testing",
          color: "danger",
          icon: IconTrash,
        },
      ]}
      placement="right"
    >
      {({ ref, getToggleButtonProps }) => (
        <View width="70">
          <ButtonFilled
            {...getToggleButtonProps()}
            innerRef={ref}
            color="accent"
          >
            Button
          </ButtonFilled>
        </View>
      )}
    </Dropdown>
  </View>
);

DropdownWithComplexItems.storyName = "Dropdown with complex items";
