import React from 'react';
import { storiesOf } from '@storybook/react';
import { ErrorState } from '../src';

storiesOf("Original Go1d/ErrorState", module)
  .add('Base', () => (
    <ErrorState title="No Content">
      This is a description for No Content
    </ErrorState>
  ));
