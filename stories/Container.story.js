import React from 'react'; 
import {storiesOf} from '@storybook/react'; 
import {Container,View,Text} from '../src'; 
storiesOf("Container", module) 
.add('Lightmode page body', () => <Container backgroundColor="soft" contain="full" paddingX={8} paddingY={6}>
  <View marginBottom={5}>
    <Text element="h2" fontSize={4} fontWeight="semibold">Reports</Text>
  </View>
  <View backgroundColor="background" padding={5} borderRadius={2}>
    Market place dashboard
  </View>
</Container>) 
