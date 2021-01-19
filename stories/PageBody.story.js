import React from 'react'; 
import {storiesOf} from '@storybook/react'; 
import {PageBody,View,Text} from '../src'; 
storiesOf("Original Go1d/PageBody", module) 
.add('Lightmode page body', () => <PageBody>
  <View marginBottom={5}>
    <Text element="h2" fontSize={4} fontWeight="semibold">Reports</Text>
  </View>
  <View backgroundColor="background" padding={5} borderRadius={2}>
    Market place dashboard
  </View>
</PageBody>) 
