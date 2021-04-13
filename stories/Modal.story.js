import React from "react";
import { Modal, ButtonFilled, MoreMenu, Text, View } from "../src";
import { IconPlus } from "../src/components/Icons";
import { IconTrash } from "../src/components/Icons";
import { Flipflop } from "libreact/lib/Flipflop";

export default {
  title: "Athletic/Modal",
  component: Modal,
  argTypes: {
    isOpen: { control: { disable: true } },
    headerIcon: { control: { disable: true } },
    moreMenu: { control: { disable: true } },
  }
};

export const Main = args => (
  <Flipflop>{({on, flip, flop}) => <React.Fragment>
    <ButtonFilled color='accent' onClick={flip}>Open modal</ButtonFilled>
    <Modal
      title="Create new user"
      moreMenu={
        <MoreMenu
          itemList={[
              {
                title: "Add",
                icon: IconPlus,
                iconColor: "muted"
              },
              {
                title: "Delete",
                color: "danger",
                icon: IconTrash,
                iconColor: "danger",
              },
            ]}
          isButtonFilled={false}
        />
      }
      {...args}
      onRequestClose={flop}
      isOpen={on}
    >
    <Text>Some text about the creation of the user goes here.</Text>
    <View flexDirection="row" justifyContent="space-between" marginTop={5}>
      <ButtonFilled onClick={flop}>Cancel</ButtonFilled>
      <ButtonFilled onClick={flop} color='accent'>Create</ButtonFilled>
      </View>
    </Modal>
  </React.Fragment>}</Flipflop>
);

