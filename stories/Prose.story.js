import React from "react";
import { Prose } from "../src";

export default {
  title: "Original Go1d/Prose",
  component: Prose,
};

export const PlainHtml = args => (
  <Prose {...args} HTML="<h2>Heading 2</h2><b>This is bold text</b><br /><img src='https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?h=100' alt='Here be image' title='Here be image' />" />
);

PlainHtml.storyName = "Plain HTML";

export const Javascript = args => (
  <Prose HTML="<script>document.write('Hello World!');</script> Script tags wont show up" />
);
export const Link = args => (
  <Prose HTML="Hello from the world of <a href='#Test' target='_blank' norel='badtag'>Hello World!</a>" />
);
