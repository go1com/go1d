import * as React from "react";
import { cleanup, render } from "react-testing-library";
import TD from "../Table/TD";
import TR from "../Table/TR";
import View from "../View";
import DataTable from "./";

afterEach(cleanup);
const createRows = ({ index }) => <div>{index}</div>;

it("renders without crashing without any optional props", () => {
  render(<DataTable rowHeight={10} rowCount={2} rowRenderer={createRows} />);
});

it("renders without crashing with optional props", () => {
  render(
    <DataTable
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
    <DataTable
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

it("scrolls when told to", () => {
  const loadMocker = new LoadMocker();
  const fn = jest.fn();
  const ref: React.RefObject<DataTable> = React.createRef();

  render(
    <DataTable
      ref={ref}
      autoRowHeight={true}
      rowHeight={50}
      scrollCallback={fn}
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

  ref.current.scrollToTop();

  expect(fn).toBeCalled();
});

it("scrolls when told to with custom scroller", () => {
  const loadMocker = new LoadMocker();
  const fn = jest.fn();
  const sfn = jest.fn();
  const ref: React.RefObject<DataTable> = React.createRef();
  const scroller: any = React.createRef();

  render(
    <View innerRef={scroller}>
      <DataTable
        ref={ref}
        autoRowHeight={true}
        rowHeight={50}
        scrollCallback={fn}
        // tslint:disable-next-line:jsx-no-lambda
        scrollElement={(() => {
          if (scroller.current) {
            scroller.current.scrollTo = sfn;
            return scroller.current;
          }
          const elem = document.createElement("div");
          elem.scrollTo = sfn;
          return elem;
        })()}
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
    </View>
  );

  ref.current.scrollToTop();

  expect(fn).toBeCalled();
  expect(sfn).toBeCalled();
});
