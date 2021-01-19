import React from 'react'; 
import {storiesOf} from '@storybook/react'; 
import {CourseModule,Lesson} from '../src'; 
storiesOf("Original Go1d/CourseModule", module) 
.add('Base', () => <CourseModule title="Test Title">
  <Lesson title="This is a test lesson" type="resource" />
</CourseModule>) 
.add('Duration is optional', () => <CourseModule duration={75} title="Test Title">
  <Lesson title="This is a test lesson" type="resource" />
</CourseModule>) 
.add('Default Closed', () => <CourseModule defaultOpen={false} title="Test Title">
  <Lesson title="This is a test lesson" type="resource" />
  <Lesson title="This is a test lesson" type="resource" />
  <Lesson title="This is a test lesson" type="resource" />
</CourseModule>) 
.add('No Toggle', () => <CourseModule collapsible={false} title="Test Title">
  <Lesson title="This is a test lesson" type="resource" />
  <Lesson title="This is a test lesson" type="resource" />
  <Lesson title="This is a test lesson" type="resource" />
</CourseModule>) 
