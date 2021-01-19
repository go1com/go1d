import React from 'react';
import {storiesOf} from '@storybook/react';
import {Prose} from '../src';
storiesOf("Original Go1d/Prose", module)
.add('Plain HTML', () => <Prose HTML="<h2>Heading 2</h2><b>This is bold text</b><br /><img src='https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?h=100' alt='Here be image' title='Here be image' />" />)
.add('Javascript', () => <Prose HTML="<script>document.write('Hello World!');</script> Script tags wont show up" />)
.add('Link', () => <Prose HTML="Hello from the world of <a href='#Test' target='_blank' norel='badtag'>Hello World!</a>" />)
