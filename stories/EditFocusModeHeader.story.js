import React from 'react';
import { EditFocusModeHeader } from '../src';
import { Pill, Tab, Text, View } from "../src";
import IconCheck from "../src/components/Icons/Check";
import IconEdit from "../src/components/Icons/Edit";
import IconEye from "../src/components/Icons/Eye";
import IconTrash from "../src/components/Icons/Trash";

export default {
  title: 'Original Go1d/EditFocusModeHeader',
  component: EditFocusModeHeader,
};

const Template = (args) => <EditFocusModeHeader returnHref="#test" title="How to Sell" {...args} />;
export const Main = Template.bind({});
Main.args = {
  avatar: "https://cdn.vox-cdn.com/thumbor/abJntvIS6kRynnDJ-P2eAgZEu1A=/148x0:1768x1080/920x613/filters:focal(148x0:1768x1080)/cdn.vox-cdn.com/uploads/chorus_image/image/46147742/cute-success-kid-1920x1080.0.0.jpg",
  returnHref: "#test",
  title: "How to Sell",
  subtitle: (
    <View flexDirection="row" alignItems="center">
      <View marginRight={4}>
        <Text
          textTransform="uppercase"
          fontWeight="semibold"
          fontSize={1}
          color="subtle"
        >
          Interactive
        </Text>
      </View>
      <View marginRight={4}>
        <Pill
          color="faded"
          fontSize={1}
          fontWeight="semibold"
          paddingX={3}
          paddingY={1}
        >
          Published
        </Pill>
      </View>
      <View marginRight={4} flexDirection="row" alignItems="center">
        <IconCheck size={1} color="accent" marginRight={2} />
        <Text fontSize={1}>Saved</Text>
      </View>
    </View>
  ),
  headerSuffixItems: [
    {
      title: "Done",
      href: "#testing",
      icon: IconCheck,
    },
    {
      title: "Visibility and Access",
      href: "#testing",
      icon: IconEye,
      iconColor: "muted",
    },
    {
      title: "MenuItem1",
      href: "#testing",
      icon: IconEdit,
    },
    {
      title: "DeleteMenuItem",
      href: "#testing",
      icon: IconTrash,
      color: "danger"
    }
  ],
  tabs: (
    <React.Fragment>
    <Tab href="/overview" >
      Overview
    </Tab>
    <Tab href="/content" isSelected={true}>
      Content
    </Tab>
    <Tab href="/import">
      Import
    </Tab>
  </React.Fragment>)
};
