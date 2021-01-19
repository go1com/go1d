import React from 'react'; 
import {storiesOf} from '@storybook/react'; 
import {SelectDropdown,View,ButtonFilled} from '../src'; 
storiesOf("Original Go1d/SelectDropdown", module) 
.add('Base', () =>   <SelectDropdown
  options={[
    { "value": "chocolate", label: "Chocolate" },
    { "value": "stawberry", label: "Strawberry" },
    { "value": "vanilla", label: "Vanilla" }
  ]}
  onChange={(selection) => window.alert(`You selected ${selection.label}`)}
  handleSearchChange={(search) => console.log(search)}
  searchPlaceholder="Search for ..."
  closeOnSelection={false}
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
 </SelectDropdown>) 
