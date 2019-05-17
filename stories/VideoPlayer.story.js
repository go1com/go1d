import React from 'react';
import {storiesOf} from '@storybook/react';
import { VideoPlayer } from '../src';

storiesOf('VideoPlayer', module)
  .add('with specific URL', () => <div style={{ width: '50%' }}>
      <VideoPlayer url="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" controls />
    </div>
  )
  .add('with vendor link', () => <div style={{ width: '50%' }}>
      <VideoPlayer url="https://vimeo.com/243556536" />
    </div>
  )
  ;
