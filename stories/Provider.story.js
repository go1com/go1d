import React from 'react'; 
import {storiesOf} from '@storybook/react'; 
import {Provider,PageBody,View,Text,Link} from '../src'; 
storiesOf("Original Go1d/Provider", module) 
.add('Default props with light mode', () => <Provider>
  <PageBody>
    <View marginBottom={5}>
      <Text element="h2" fontSize={4} fontWeight="semibold">Reports</Text>
    </View>
    <View backgroundColor="background" padding={5} borderRadius={2}>
      Market place dashboard
      <Link href="/components/provider">Link to open reports</Link>
    </View>
  </PageBody>
</Provider>) 
.add('Custom link and dark mode specified', () => <Provider mode="dark" linkComponent={() => <div>custom link</div>}>
  <PageBody>
    <View marginBottom={5}>
      <Text element="h2" fontSize={4} fontWeight="semibold">Reports</Text>
    </View>
    <View backgroundColor="background" padding={5} borderRadius={2}>
      Market place dashboard
      <Link href="/components/provider">Open reports</Link>
    </View>
  </PageBody>
</Provider>) 
