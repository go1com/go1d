import React from 'react';
import {storiesOf} from '@storybook/react';
import { CircleProgress } from '../src';

storiesOf('Original Go1d/CircleProgress', module)
  .add('with percentage', () => <CircleProgress progress={50} size={100} lineWidth={50} showProgress={true} />)
  .add('with no percentage', () => <CircleProgress progress={75} size={20} lineWidth={50} showProgress={false} />)
  ;
