import React from 'react';
import { EventDate } from '../src';

export default {
  title: 'Original Go1d/EventDate',
  component: EventDate,
};

const Template = (args) => (
<EventDate
  {...args}
/>
)

export const Main = Template.bind({});
Main.args = {
  active: true,
  onClick: ( () => console.log('clicked') ),
  title: "course 1",
  start: "2019-06-28T00:25:00+00:00",
  end: "2019-06-28T01:25:00+00:00",
  location: {
    thoroughfare: "High St Kensington",
    title: "UNSW Sydney Campus",
    locality: "Sydney",
    administrative_area: "NSW",
    country: "AU",
  },
};

