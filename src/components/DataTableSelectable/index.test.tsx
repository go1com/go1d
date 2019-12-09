import * as React from "react";
import { cleanup, render } from "react-testing-library";
import TD from "../Table/TD";
import TR from "../Table/TR";
import DataTableSelectable from "./";

afterEach(cleanup);
const createRows = ({ index, checkBox }) => checkBox;
const mainAction = jest.fn();

it("renders without crashing without any optional props", () => {
  render(
    <DataTableSelectable
      rowHeight={10}
      rowCount={2}
      rowRenderer={createRows}
      mainAction={mainAction}
      mainActionText="ACTION"
    />
  );
});

it("renders without crashing using a row renderer approach", () => {
  const ref: React.RefObject<DataTableSelectable> = React.createRef();
  const mapRowToId = row => row * 100;

  const wrapper = render(
    <DataTableSelectable
      ref={ref}
      mapRowToId={mapRowToId}
      mainAction={mainAction}
      mainActionText="ACTION"
      disabled={true}
      autoRowHeight={true}
      rowCount={10}
      scrollToIndex={4}
      hideScrollButton={true}
      rowRenderer={createRows}
      total="Many things"
      header={[
        <TR key="0">
          <TD>
            <span>yo</span>
          </TD>
        </TR>,
      ]}
    />
  );

  const button: HTMLInputElement = wrapper.container.querySelector(
    "input[name=SelectAll]"
  );
  if (button) {
    button.click();
    button.click();
  } else {
    expect(button).toBeDefined();
  }

  ref.current.updateRows({ target: { name: "0", checked: true } });
  expect(Array.from(ref.current.state.selectedItems)).toEqual([0]);

  ref.current.updateRows({ target: { name: "0", checked: false } });
  expect(Array.from(ref.current.state.selectedItems)).toEqual([]);

  ref.current.onAllSelectChange();
  expect(ref.current.state.allSelected).toBe(true);
  expect(ref.current.state.invertSelection).toBe(true);

  ref.current.updateRows({ target: { name: "1", checked: false } });
  expect(ref.current.state.allSelected).toBe(false);
  expect(ref.current.state.invertSelection).toBe(true);
  expect(Array.from(ref.current.state.selectedItems)).toEqual([]);
  expect(Array.from(ref.current.state.unselectedItems)).toEqual([1]);

  ref.current.updateRows({ target: { name: "1", checked: true } });
  expect(ref.current.state.allSelected).toBe(false);
  expect(ref.current.state.invertSelection).toBe(true);
  expect(Array.from(ref.current.state.selectedItems)).toEqual([]);
  expect(Array.from(ref.current.state.unselectedItems)).toEqual([]);

  expect(mainAction).toBeCalledTimes(0);
});

it("renders without crashing using a columns approach", () => {
  const ref: React.RefObject<DataTableSelectable> = React.createRef();
  const mapRowToId = row => row * 100;

  const wrapper = render(
    <DataTableSelectable
      ref={ref}
      mapRowToId={mapRowToId}
      mainAction={mainAction}
      mainActionText="ACTION"
      disabled={true}
      autoRowHeight={true}
      rowCount={10}
      scrollToIndex={4}
      hideScrollButton={true}
      columns={[]}
      total="Many things"
    />
  );

  const button: HTMLInputElement = wrapper.container.querySelector(
    "input[name=SelectAll]"
  );
  if (button) {
    button.click();
    button.click();
  } else {
    expect(button).toBeDefined();
  }

  ref.current.updateRows({ target: { name: "0", checked: true } });
  expect(Array.from(ref.current.state.selectedItems)).toEqual([0]);

  ref.current.updateRows({ target: { name: "0", checked: false } });
  expect(Array.from(ref.current.state.selectedItems)).toEqual([]);

  ref.current.onAllSelectChange();
  expect(ref.current.state.allSelected).toBe(true);
  expect(ref.current.state.invertSelection).toBe(true);

  ref.current.updateRows({ target: { name: "1", checked: false } });
  expect(ref.current.state.allSelected).toBe(false);
  expect(ref.current.state.invertSelection).toBe(true);
  expect(Array.from(ref.current.state.selectedItems)).toEqual([]);
  expect(Array.from(ref.current.state.unselectedItems)).toEqual([1]);

  ref.current.updateRows({ target: { name: "1", checked: true } });
  expect(ref.current.state.allSelected).toBe(false);
  expect(ref.current.state.invertSelection).toBe(true);
  expect(Array.from(ref.current.state.selectedItems)).toEqual([]);
  expect(Array.from(ref.current.state.unselectedItems)).toEqual([]);

  expect(mainAction).toBeCalledTimes(0);
});

class LoadMocker {
  public rowsLoaded = 0;

  public isRowLoaded = ({ index }) => index <= this.rowsLoaded;
  public async loadMoreRows(): Promise<any> {
    this.rowsLoaded += 10;
    return {};
  }
}

it("renders without crashing with infinite loading", () => {
  const loadMocker = new LoadMocker();

  render(
    <DataTableSelectable
      mainAction={mainAction}
      disabled={true}
      mainActionText="ACTION"
      infiniteLoad={true}
      autoRowHeight={true}
      rowHeight={50}
      loadMoreRows={loadMocker.loadMoreRows}
      isRowLoaded={loadMocker.isRowLoaded}
      rowCount={100}
      scrollToIndex={4}
      rowRenderer={createRows}
      total="Many things"
      header={[
        <TR key="0">
          <TD>
            <span>yo</span>
          </TD>
        </TR>,
      ]}
    />
  );
});
