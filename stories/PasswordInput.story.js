import React from 'react'; 
import {storiesOf} from '@storybook/react'; 
import {PasswordInput} from '../src'; 
storiesOf("Original Go1d/PasswordInput", module) 
.add('Basic Password Input', () => <PasswordInput id="Password" placeholder="Pasword" />) 
.add('Password Input Sizes', () => <React.Fragment>
    <PasswordInput id="Small" size="sm" value="Small" />
    <br />
    <PasswordInput id="Medium" size="md" value="Medium" />
    <br />
    <PasswordInput id="Large" size="lg" value="Large" />
</React.Fragment>) 
.add('Password Input with no toggle', () => <PasswordInput id="noToggle" toggleableDisplay={false} />) 
.add('Disabled Password Input', () => <PasswordInput id="Disabled" disabled={true} />) 
