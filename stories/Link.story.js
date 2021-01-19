import React from 'react'; 
import {storiesOf} from '@storybook/react'; 
import {Link,Text,Provider} from '../src'; 
storiesOf("Original Go1d/Link", module) 
.add('Default link', () => <Link href="#testing">
  Link text
</Link>) 
.add('Link with Text inside', () => <Link href="#testing">
  <Text>Hello world</Text>
</Link>) 
.add('Link with Text with different pseudo element focus color & active color', () => <Link href="#testing" hoverFocusColor="success" activeColor="warning">
  <Text>Hello world</Text>
</Link>) 
.add('Overriden link', () => <Provider linkComponent={({ href, children}) => <a href={href + "-custom"}>{children} + {href}</a>}>
  <Link href="#testing">
    Link text
  </Link>
</Provider>) 
