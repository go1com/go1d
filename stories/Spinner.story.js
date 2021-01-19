import React from 'react'; 
import {storiesOf} from '@storybook/react'; 
import {Spinner} from '../src'; 
storiesOf("Original Go1d/Spinner", module) 
.add('Spinner', () => <Spinner size={5}/>) 
