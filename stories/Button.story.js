import React from 'react';
import {storiesOf} from '@storybook/react';
import {Button,ButtonFilled,ButtonMinimal,SubmitButton} from '../src';
storiesOf("Button", module)
.add('Filled button in subtle colour', () => <React.Fragment>
    <ButtonFilled>I'm a button</ButtonFilled>
    <br />
    <ButtonFilled size='sm'>I'm a button</ButtonFilled>
    <br />
    <ButtonFilled size='lg'>I'm a button</ButtonFilled>
</React.Fragment>)
.add('Filled button in accent colour', () => <ButtonFilled color='accent'>Call to action</ButtonFilled>)
.add('Filled Icon only button in success colour and round', () => <ButtonFilled round={true} color="success" iconName="Check" />)
.add('Filled button in danger colour', () => <ButtonFilled color='danger'>Danger zone</ButtonFilled>)
.add('Minimal button subtle colour', () => <ButtonMinimal>Minimal button</ButtonMinimal>)
.add('Minimal button subtle colour (Icon and label)', () => <ButtonMinimal iconName="Plus">Minimal button</ButtonMinimal>)
.add('Minimal button in accent colour (Icon only)', () => <ButtonMinimal color='accent' iconName='Plus' />)
.add('Minimal button in accent colour (Icon and label)', () => <ButtonMinimal color='accent' iconName='Plus'>Call to action</ButtonMinimal>)
.add('Minimal button in danger colour', () => <ButtonMinimal color='danger'>Really</ButtonMinimal>)
.add('Submit Button used in a Form', () => <SubmitButton>Create</SubmitButton>)
.add('Unstyled Buttons', () => <React.Fragment>
    <Button>Default</Button>
    <Button color="accent">Accent</Button>
    <Button color='danger'>Danger</Button>
</React.Fragment>)
