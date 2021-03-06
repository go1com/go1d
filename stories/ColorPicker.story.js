import React from "react";
import { ColorPicker } from "../src";

export default {
  title: "Athletic/ColorPicker",
  component: ColorPicker,
  parameters: {
    docs: {
      description: {
        component: 'This is a color picker'
      }
    },
    design: [
      {
        name: 'Guidelines',
        type: 'link',
        url: 'https://www.figma.com/file/BxQA6qbzRwjSA2AXWnO0f9/Components?node-id=4070%3A3',
        label: 'See Color Picker designs in Figma',
      },
    ],
  }
};

export const ColorPickerDefault = args => (
  <ColorPicker color="#114954" {...args} />
);

export const ColorPickerAsControlled = args => {
  const [color, setColor] = React.useState('#114954')

  function handleChange(value) {
    setColor(value)
  }

  return (
    <ColorPicker color={color} onChange={handleChange} {...args} />
  )
};

ColorPickerAsControlled.storyName = 'ColorPicker as controlled component';

export const ColorPickerCustomized = args => (
  <ColorPicker color="#114954" inputProps={{ label: 'My color' }} wrapperProps={{ width: 300 }} {...args} />
);

ColorPickerCustomized.storyName = 'ColorPicker can be customizable';
