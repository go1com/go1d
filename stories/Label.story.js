import React from 'react'; 
import {storiesOf} from '@storybook/react'; 
import {Label} from '../src'; 
storiesOf("Original Go1d/Label", module) 
.add('Label', () => <Label>
Portal Name
</Label>) 
.add('Label with status', () => <Label
    statusText="unavailable"
    statusColor="danger"
>
Portal Name
</Label>) 
