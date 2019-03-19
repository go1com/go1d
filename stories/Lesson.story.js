import React from 'react'; 
import {storiesOf} from '@storybook/react'; 
import {Lesson} from '../src'; 
storiesOf("Lesson", module) 
.add('Basic Lesson', () => <Lesson title="Design Thinking" type="video" duration={80} />) 
