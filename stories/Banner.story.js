import React from 'react'; 
import {storiesOf} from '@storybook/react'; 
import {Banner,Text,Link} from '../src'; 
storiesOf("Original Go1d/Banner", module) 
.add('Type success', () => <Banner
  type="success"
  close={() => alert('close event')}
>
  <Text fontWeight="semibold">Success! </Text>
  <Text>
    This is a message <Link css={{ display: 'inline', fontWeight: '600', textDecoration: 'underline' }} href="https://foo.com">read more</Link>.
  </Text>
</Banner>) 
.add('Type warning', () => <Banner
  type="warning"
  close={() => alert('close event')}
>
  <Text fontWeight="semibold">Warning! </Text>
  <Text>
    This is a message <Link css={{ display: 'inline', fontWeight: '600', textDecoration: 'underline' }} href="https://foo.com">read more</Link>.
  </Text>
</Banner>) 
.add('Type danger', () => <Banner
  type="danger"
  close={() => alert('close event')}
>
  <Text fontWeight="semibold">Danger! </Text>
  <Text>
    This is a message <Link css={{ display: 'inline', fontWeight: '600', textDecoration: 'underline' }} href="https://foo.com">read more</Link>.
  </Text>
</Banner>) 
