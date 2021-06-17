import React from "react";
import { Prose } from "../src";

const defaultValue = "<h2>Heading 2</h2><b>This is bold text</b><br /><img src='https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?h=100' alt='Here be image' title='Here be image' />"

export default {
  title: "Athletic/Prose",
  component: Prose,
  argTypes: {
    HTML: {
      defaultValue: defaultValue,
    },
    expandable: { table: { disable: true } }
  },
  parameters: {
    design: [
      {
        name: 'Guidelines',
        type: 'link',
        url: 'https://www.figma.com/file/BxQA6qbzRwjSA2AXWnO0f9/Components?node-id=5834%3A1',
        label: 'See Prose designs in Figma',
      },
    ],
  }
};

export const PlainHtml = args => (
  <Prose HTML={defaultValue} {...args} />
);
PlainHtml.storyName = "Plain containing HTML";

export const Javascript = () => (
  <Prose HTML="<script>document.write('Hello World!');</script> Script tags wont show up" />
);
Javascript.storyName = "Prose containing JavaScript";
Javascript.parameters = {
  docs: {
    description: {
      story: 'Does not allow banned tags such as `script`',
    },
  },
};

export const Link = () => (
  <Prose HTML="Hello from the world of <a href='#Test' target='_blank' norel='badtag'>Hello World!</a>" />
);
Link.storyName = "Prose containing a link";
Link.parameters = {
  docs: {
    description: {
      story: 'Does not allow banned attributes such as `norel`',
    },
  },
};

export const Expandable = () => (
  <Prose lineClamp={3} expandable HTML="“The <strong>empathetic explorer</strong> thinking habit can help you explore the experiences people have with compliance in their daily work. You can also hear first hand about their attitudes towards compliance. This approach can help you uncover what is important to individuals in their work and how to make compliance programs more engaging and memorable.” — Michelle Ockers" />
);
Expandable.storyName = "Expandable prose";
Expandable.parameters = {
  docs: {
    description: {
      story: 'Line clamp with show more/less button',
    },
  },
};

