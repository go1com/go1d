import React from "react";
import { Autocomplete } from "../src";
import View from "../src/components/View/";
import Text from "../src/components/Text/";
import Avatar from "../src/components/Avatar/";

export default {
  title: "Athletic/Autocomplete",
  component: Autocomplete,
  decorators: [
    (Story) => <div style={{ minHeight: '214px' }}><Story/></div>
  ],
};

export const BaseAutocomplete = args => (
  <Autocomplete
    lookupMethod={() => {
      // pass a method to request options
      const options = [
        { label: "foo1", value: "foo1" },
        { label: "foo2", value: "foo2" },
        { label: "foo3", value: "foo3" },
      ];

      // modify implementation state options
      // eg. this.setState({ options });
    }}
    // this would come from the implementation-level state
    // eg. this.state.options
    options={[
      { label: "foo1", value: "foo1" },
      { label: "foo2", value: "foo2" },
      { label: "foo3", value: "foo3" },
    ]}
    onSelectOption={() => {
      console.log("this method fires when user makes a selection");
    }}
    inputProps={{
      fontSize: 1,
    }}
    labelProps={{
      fontSize: 1,
    }}
    flexGrow={1}
    {...args}
  />
);
BaseAutocomplete.storyName = "Base";

export const WithOptionCustomRenderer = args => (
  <Autocomplete
    lookupMethod={() => {
      // pass a method to request options
      const options = [
       {
        label: "foo1",
        value: "foo1",
        description: "9 members ⋅ 1 learning",
        image: "https://i.imgur.com/Ee55uvc.jpg",
       },
       {
        label: "foo2",
        value: "foo2",
        description: "1 members ⋅ 10 learning",
        image: "https://i.imgur.com/Ee55uvc.jpg",
       },
      ];

      // modify implementation state options
      // eg. this.setState({ options });
    }}
    // this would come from the implementation-level state
    // eg. this.state.options
    options={[
      {
        label: "foo1",
        value: "foo1",
        description: "9 members ⋅ 1 learning",
        image: "https://i.imgur.com/Ee55uvc.jpg",
      },
      {
        label: "foo2",
        value: "foo2",
        description: "1 members ⋅ 10 learning",
        image: "https://i.imgur.com/Ee55uvc.jpg",
      },
    ]}
    onSelectOption={() => {
      console.log("this method fires when user makes a selection");
    }}
    dropdownProps={{
      maxWidth: "100%",
      width: "100%",
    }}
 optionRenderer={item => {
  const { label, displayProps: { description, image } } = item;
  return (
   <View
    display="flex"
    flexDirection="row"
    alignItems="center"
   >
    <View marginRight={3}>
     <Avatar src={image} fullName="Leslie Knope" size={4} />
    </View>
    <View>
     <View marginBottom={0}>
      <Text
       fontWeight="semibold"
       color="default"
       lineHeight="display"
       fontSize={3}
      >
       {label}
      </Text>
     </View>
     {description && (
      <View>
       <Text color="subtle" lineHeight="display">
        {description}
       </Text>
      </View>
     )}
    </View>
   </View>
  );
 }}
 optionFormatter={option => {
  return {
    label: option.label,
    value: option.value,
    displayProps: {
      image: option.image,
      description: option.description,
    },
   };
  }
 }
    inputProps={{
      fontSize: 1,
    }}
    labelProps={{
      fontSize: 1,
    }}
    flexGrow={1}
    {...args}
  />
);
