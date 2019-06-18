import React from 'react';
import {storiesOf} from '@storybook/react';
import { VideoPlayer } from '../src';

storiesOf('VideoPlayer', module)
  .add('with specific URL', () => <div style={{ width: '50%', minHeight: '320px' }}>
      <VideoPlayer url="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" onVideoDimensions={data => console.log(data)} />
    </div>
  ).add('with YouTube video', () => <div style={{ width: '50%', minHeight: '320px' }}>
      <VideoPlayer url="https://www.youtube.com/watch?v=qEBtvP7P5GE" onVideoDimensions={data => console.log(data)} />
    </div>
  )
  .add('with Vimeo video', () => <div style={{ width: '50%', minHeight: '320px' }}>
      <VideoPlayer url="http://vimeo.com/315931008" onVideoDimensions={data => console.log(data)} />
    </div>
  )
  ;
