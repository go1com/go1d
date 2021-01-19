import React from 'react'; 
import {storiesOf} from '@storybook/react'; 
import {Avatar} from '../src'; 
storiesOf("Original Go1d/Avatar", module) 
.add('Avatar with an image', () => <Avatar src="https://i.imgur.com/Ee55uvc.jpg" fullName="Leslie Knope" />) 
.add('Avatar without an image', () => <Avatar fullName="Leslie Knope" />) 
.add('Avatar without an image and name', () => <Avatar />) 
.add('Avatar with a different size', () => <Avatar fullName="Willy Wonka" size={4} />) 
.add('Avatar with different colors', () => <Avatar fullName="Leslie Knope" backgroundColor="subtle" color="background" size={4} />) 
