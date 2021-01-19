import React from 'react';
import moment from 'moment';
import { storiesOf } from '@storybook/react';
import { DateRange } from '../src';
import { isHappoRun } from 'happo-plugin-storybook/register';

// Skipp DateRange picker for Happo since we are not able to achieve consistent screenshots for it for following reasons:
// 1. A Focus into the date range, causes a blinking cursor
// 2. The Picker displays the current month, which can't be influenced in the current implementation
if (!isHappoRun()) {
  storiesOf("Original Go1d/DateRange", module)
    .add('Basic Datepicker', () => <DateRange />)
    .add('Default Value', () => (
      <DateRange
        defaultValue={{
          startDate: new moment("2019-12-05"),
          endDate: new moment("2019-12-15"),
        }}
      />
    ))
    .add('Controlled Value', () => (
      <DateRange
        value={{
          startDate: new moment("2019-12-05"),
          endDate: new moment("2019-12-15"),
        }}
      />
    ))
}
