import * as React from "react";
import { cleanup, render } from "react-testing-library";
import Options from "./";

afterEach(cleanup);

it("renders with minimal props", () => {
  const container = React.createRef();
  render(
    <Options
      options={[]}
      getItemProps={jest.fn()}
      searchTerm="test"
      innerRef={container}
      firstSelectableOptionIndex={0}
      highlightedIndex={0}
      container={{} as any}
      style={{}}
      createAvailable={false}
      renderCreateOption={jest.fn(() => (
        <div />
      ))}
      handleSearchChange={jest.fn()}
      renderSearch={jest.fn(() => (
        <div />
      ))}
      optionRenderer={jest.fn(() => (
        <div />
      ))}
      statusRenderer={jest.fn(() => (
        <div />
      ))}
      scheduleUpdate={jest.fn()}
    />
  );
});

it("renders with different props", () => {
  const container = React.createRef();
  render(
    <Options
      options={[]}
      getItemProps={jest.fn()}
      searchTerm=""
      innerRef={container}
      firstSelectableOptionIndex={0}
      highlightedIndex={0}
      container={{} as any}
      style={{}}
      createAvailable={true}
      renderCreateOption={jest.fn(() => (
        <div />
      ))}
      handleSearchChange={jest.fn()}
      renderSearch={jest.fn(() => (
        <div />
      ))}
      optionRenderer={jest.fn(() => (
        <div />
      ))}
      statusRenderer={jest.fn(() => (
        <div />
      ))}
      scheduleUpdate={jest.fn()}
    />
  );
});
