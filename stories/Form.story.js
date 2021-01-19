import React from 'react';
import {storiesOf} from '@storybook/react';
import {TextInput, Form,Field,SubmitButton} from '../src';
storiesOf("Original Go1d/Form", module)
.add('Example Form with field', () => <Form initialValues={{ portalName: "A portal" }} onSubmit={(values, actions) => console.log(values, actions)}>
    <Field
    component={TextInput}
    name="portalName"
    label="Portal name"
    description="The name displayed across the site"
    />
    <SubmitButton>Submit</SubmitButton>
</Form>)
.add('Example Disabled Form with field', () => <Form initialValues={{ portalName: "A portal" }} disabled={true} onSubmit={(values, actions) => console.log(values, actions)}>
    <Field
    component={TextInput}
    name="portalName"
    label="Portal name"
    description="The name displayed across the site"
    />
    <SubmitButton>Create</SubmitButton>
</Form>)
