import React from 'react';
import {storiesOf} from '@storybook/react';
import {ButtonFilled} from "../src";

storiesOf('Original Go1d/ButtonFilled', module)
  .add('with text', () => <ButtonFilled>This is a filled button</ButtonFilled>)
  .add('with some emoji', () => (
    <ButtonFilled><span role="img" aria-label="so cool">😀 😎 👍 💯</span></ButtonFilled>
  ));
