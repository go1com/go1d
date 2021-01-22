import React from 'react';
import {storiesOf} from '@storybook/react';
import {Form, PortalUrlField} from "../src";

storiesOf('Original Go1d/PortalUrlField', module)
  .add('PortalUrlField Available', () => <Form initialValues={{ portalName: "A portal" }} onSubmit={(values, actions) => actions.submit()}>
    <PortalUrlField
      name="portalName"
      label="Portal Url"
      suffixValue=".mygo1.com"
      description="This is the description"
      required
      isAvailable={true}
    />
  </Form>,{ info: { propTablesExclude:[Form] } })
  .add('PortalUrlField Not Available', () =>
    <Form initialValues={{ portalName: "A portal" }} onSubmit={(values, actions) => actions.submit()}>
      <PortalUrlField
        name="portalName"
        label="Portal Url"
        suffixValue=".mygo1.com"
        description="This is the description"
        required
        isAvailable={false}
      />
    </Form>,{ info: { propTablesExclude:[Form] } }
  );
