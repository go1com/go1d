import React from 'react';
import {storiesOf} from '@storybook/react';
import {Icon} from '../src';
storiesOf("Icon", module)
.add('Base', () => <Icon name="Go1Logo" />)
.add('Colors', () => <Icon name="Go1Logo" color="accent"/>)
.add('Size', () => <React.Fragment>
    <Icon name="Go1Logo" size={1}/> <br />
    <Icon name="Go1Logo" size={4}/> <br />
    <Icon name="Go1Logo" size={7}/> <br />
</React.Fragment>)
