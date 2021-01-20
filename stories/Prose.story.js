import React from "react";
import { Prose } from "../src";

export default {
  title: "Original Go1d/Prose",
};

export const PlainHtml = () => (
  <Prose HTML="<h2>Heading 2</h2><b>This is bold text</b><br /><img src='https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?h=100' alt='Here be image' title='Here be image' />" />
);

PlainHtml.story = {
  name: "Plain HTML",
};

export const Javascript = () => (
  <Prose HTML="<script>document.write('Hello World!');</script> Script tags wont show up" />
);
export const Link = () => (
  <Prose HTML="Hello from the world of <a href='#Test' target='_blank' norel='badtag'>Hello World!</a>" />
);
