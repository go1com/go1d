import React from 'react'; 
import {storiesOf} from '@storybook/react'; 
import {TagSelector} from '../src'; 
storiesOf("Original Go1d/TagSelector", module) 
.add('Basic Tag Selector', () => <TagSelector
  options={["Tag 1"]}
/>) 
