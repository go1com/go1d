import React from 'react';
import {storiesOf} from '@storybook/react';
import {TextInput, Field,Banner,Form,ButtonFilled} from '../src';
storiesOf("Original Go1d/Field", module)
.add('Base', () => <Banner type="warning">
    This component is required to be wrapped in a Form component otherwise it will fail to render
</Banner>)
.add('Example field and Form', () => <Form initialValues={{ portalName: "A portal" }} onSubmit={(values, actions) => console.log(values, actions)}>
    <Field
    component={TextInput}
    name="portalName"
    label="Portal name"
    description="The name displayed across the site"
    />
    <ButtonFilled type="submit" color="accent">Submit</ButtonFilled>
</Form>)
.add('Example Required Field', () => <Form initialValues={{ portalName: "A portal" }} onSubmit={(values, actions) => actions.submit()}>
    <Field
    required={true}
    component={TextInput}
    name="portalName"
    label="Portal name"
    placeholder="Leslie Knope"
    />
    <ButtonFilled type="submit" color="accent">Submit</ButtonFilled>
</Form>)
