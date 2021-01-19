import React from 'react'; 
import {storiesOf} from '@storybook/react'; 
import {RichTextInput,Form,Field,ButtonFilled} from '../src'; 
storiesOf("Original Go1d/RichTextInput", module) 
.add('Rich Text Input in Field', () => 

<Form initialValues={{}} onSubmit={(values, actions) => console.log(values, actions)}>
    <Field
    component={RichTextInput}
    name="description"
    label="Description"
    placeholder="Description"
    />
    <ButtonFilled type="submit" color="accent">Submit</ButtonFilled>
</Form>) 
