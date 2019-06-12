import React from 'react';
import {storiesOf} from '@storybook/react';
import { LineProgress } from '../src';

storiesOf('Line Progress Bar', module)
  .add('with percent', () => <div style={{ width: '50%' }}>
      <LineProgress percent={50} />
    </div>
  )
  ;
