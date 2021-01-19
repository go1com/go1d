import React from 'react'; 
import {storiesOf} from '@storybook/react'; 
import {TagToggle,View} from '../src'; 
storiesOf("Original Go1d/TagToggle", module) 
.add('Tag Toggle', () => <React.Fragment>
    <View flexDirection="row">
      <TagToggle label="Mad Skillz" />
      <TagToggle label="Mad Skillz" />
      <TagToggle label="Mad Skillz" />
      <TagToggle label="Mad Skillz" />
    </View>
    <View flexDirection="row" alignItems="center" marginTop={5}>
      <TagToggle label="OK Skillz" size="sm" />
      <TagToggle label="Sick Skillz" size="md" />
      <TagToggle label="Mad Skillz" size="lg" />
    </View>
</React.Fragment>) 
