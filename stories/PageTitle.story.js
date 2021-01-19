import React from 'react'; 
import {storiesOf} from '@storybook/react'; 
import {PageTitle,PageBody,Text,ButtonFilled} from '../src'; 
storiesOf("Original Go1d/PageTitle", module) 
.add('Lightmode page title', () => <PageBody>
  <PageTitle title="The Page Title" />
  <Text>This is standard body content text.</Text>
</PageBody>) 
.add('Lightmode page title with children', () => <PageBody>
  <PageTitle title="The Page Title">
    <ButtonFilled>I'm a button</ButtonFilled>
  </PageTitle>
  <Text>This is standard body content text.</Text>
</PageBody>) 
