import * as React from "react";
import { cleanup, render } from "react-testing-library";
import EventDate from "./index";

afterEach(cleanup);

const props = {
  start: "2019-06-28T00:25:00+00:00",
  location: {
    title: "Some place",
  },
};

const mock = jest.fn();

it("renders without crashing without any optional props", () => {
  render(<EventDate {...props} />);
});

it("renders without crashing with full options", () => {
  render(
    <EventDate
      title="course 1"
      start="2019-06-28T11:05:00+00:00"
      end="2019-06-28T12:25:00+00:00"
      location={{
        thoroughfare: "High St Kensington",
        title: "UNSW Sydney Campus",
        locality: "Sydney",
        administrative_area: "NSW",
        country: "AU",
      }}
      active={true}
      onClick={mock}
      availableSeats={10}
      showAttendees={true}
      bigDate={true}
      limit={20}
    />
  );
});

it("renders without crashing with no availability", () => {
  render(
    <EventDate
      title="course 1"
      start="2019-06-28T12:25:00+00:00"
      end="2019-06-28T013:05:00+00:00"
      mapLink={true}
      location={{
        is_online: "1",
        thoroughfare: "High St Kensington",
        title: "UNSW Sydney Campus",
        locality: "Sydney",
        administrative_area: "NSW",
        country: "AU",
        latitude: 100,
      }}
      active={true}
      onClick={mock}
      availableSeats={0}
      showAttendees={true}
      bigDate={true}
      limit={20}
    />
  );
});

it("renders with customized formatter", () => {
  const formatter = (start: string | Date, end: string | Date) =>
    `${start} - ${end}`;

  const wrapper = render(
    <EventDate
      title="course 1"
      start="2021-01-04"
      end="2021-01-05"
      mapLink={true}
      location={{
        is_online: "1",
        thoroughfare: "High St Kensington",
        title: "UNSW Sydney Campus",
        locality: "Sydney",
        administrative_area: "NSW",
        country: "AU",
        latitude: 100,
      }}
      active={true}
      onClick={mock}
      availableSeats={0}
      showAttendees={true}
      bigDate={true}
      limit={20}
      timeFormatter={formatter}
    />
  );

  expect(wrapper.queryByText("2021-01-04 - 2021-01-05")).not.toBeNull();
});
