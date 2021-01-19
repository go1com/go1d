import React from 'react';
import {storiesOf} from '@storybook/react';
import {DatePicker} from '../src';
storiesOf("Original Go1d/DatePicker", module)
.add('Basic Datepicker', () => <DatePicker id="id1" allowBlank  defaultValue={new Date("2019-06-07")}/>)
.add('Date Supplied', () => <DatePicker id="id2" defaultValue={new Date("2019-06-07")} />)
.add('Disabled Datepicker', () => <DatePicker id="id3" disabled  defaultValue={new Date("2019-06-07")}/>)
.add('Sizes', () => <React.Fragment>
    <DatePicker id="id4" size="sm"  defaultValue={new Date("2019-06-07")}/>
    <br />
    <DatePicker id="id4" size="md"  defaultValue={new Date("2019-06-07")}/>
    <br />
    <DatePicker id="id4" size="lg"  defaultValue={new Date("2019-06-07")}/>
</React.Fragment>)
.add('Basic Datepicker with Time', () => <DatePicker id="id5" time={true} defaultValue={new Date("2019-06-07 10:00")} />)
