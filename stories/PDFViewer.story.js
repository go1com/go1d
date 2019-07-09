import React from 'react';
import {storiesOf} from '@storybook/react';
import {PDFViewer} from '../src';
storiesOf("PDF Viewer", module)
.add('Default', () =>
  <div style={{height: '600px'}}>
    <PDFViewer
      url="https://res.cloudinary.com/go1vn/raw/upload/v1562213629/p8awhdl5btkrayrwt23u.pdf"
    />
  </div>
)
