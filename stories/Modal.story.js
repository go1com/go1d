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
  },
  parameters: {
    design: [
      {
        name: 'Guidelines',
        type: 'link',
        url: 'https://www.figma.com/file/BxQA6qbzRwjSA2AXWnO0f9/Components?node-id=3371%3A1072',
        label: 'See Modal designs in Figma',
      },
    ],
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

export const ModalWithNoHeader = args => (
  <Flipflop>{({on, flip, flop}) => <React.Fragment>
    <ButtonFilled color='accent' onClick={flip}>Open modal</ButtonFilled>
    <Modal
      onRequestClose={flop}
      isOpen={on}
      {...args}
    >
      <View flexGrow={1} borderRadius={2} css={{ backgroundImage: "url(https://res.cloudinary.com/go1/image/fetch/w_1024,h_300,c_thumb,g_auto/https://udemy-images.udemy.com/course/750x422/435262_c617.jpg)" }} />
    </Modal>
  </React.Fragment>}</Flipflop>
);
ModalWithNoHeader.storyName = "Modal with no Header";
ModalWithNoHeader.argTypes = {
  contentPadding: { defaultValue: 0 },
};

