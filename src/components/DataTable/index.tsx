import * as React from "react";
import {
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
  InfiniteLoader,
  List,
  ListRowRenderer,
  WindowScroller,
} from "react-virtualized";
import { autobind } from "../../utils/decorators";
import safeInvoke from "../../utils/safeInvoke";
import ButtonFilled from "../ButtonFilled";
import Icon from "../Icon";
import TR from "../Table/TR";
import Text from "../Text";
import Theme from "../Theme";
import View, { ViewProps } from "../View";

export interface DataTableProps extends ViewProps {
  /** Component shown if there is no results */
  emptyState?: React.ReactNode;
  /** The hieght of a row. When using autoRowHeight, you can supply this for a more accurate initial estimate */
  rowHeight?: number;
  /** The total number of rows that can be loaded. Used for autoloading. */
  rowCount: number;
  /** Function to render a row */
  rowRenderer: ListRowRenderer;
  /*
   * A header row. Rendered inside a TR component
   */
  header?: React.ReactNodeArray;
  /** A string to display the total number of results */
  total?: React.ReactNode;
  /** Used to scroll directly to a row. When using autoRowHeight, the height wont be populated yet, so it is important to also specify a rowHeight */
  scrollToIndex?: number;
  /** *Experimental* Automatically measures the row height. Due to the measurement method, this is not suggested for data sets of over 250 items */
  autoRowHeight?: boolean;
  /**
   * If set, will use an infinite loader. The following props will be required for correct functionality:
   * isRowLoaded, loadMoreRows, rowCount
   */
  infiniteLoad?: boolean;

  /**
   * Function to check if a row has been loaded. Used in conjunction with infiniteLoad
   */
  isRowLoaded?: ({ index }) => boolean;

  /**
   * Function to load the required rows. Used in conjunction with infiniteLoad
   */
  loadMoreRows?: ({ startIndex, stopIndex }) => Promise<any>;

  /**
   * A callback that returns the top row rendered. Triggers when the top rendered row changes.
   */
  scrollCallback?: ({ row }) => void;

  /**
   * Hide the scroll to top of page button
   */
  hideScrollButton?: boolean;
  scrollElement?: any;
  isListLoading?: boolean;
}

class DataTable extends React.Component<DataTableProps, {}> {
  public listEl: List;
  public header: HTMLElement;

  public cache: CellMeasurerCache;

  constructor(props) {
    super(props);
    this.cache = new CellMeasurerCache({
      defaultHeight: this.props.rowHeight || 50,
      fixedWidth: true,
    });
  }

  @autobind
  public setHeader(ref: HTMLElement) {
    this.header = ref;
  }

  @autobind
  public rowsReturn(onRowsRendered) {
    return args => {
      safeInvoke(this.props.scrollCallback, {
        row: args.startIndex,
      });
      safeInvoke(onRowsRendered, args);
    };
  }

  @autobind
  public scrollToTop() {
    safeInvoke(this.props.scrollCallback, { row: 0 });
    if (this.props.scrollElement) {
      this.props.scrollElement.scrollTo({ top: 0 });
    } else {
      scrollTo({
        top: 0,
      });
    }
  }

  public render() {
    const {
      rowHeight,
      rowRenderer,
      rowCount,
      header,
      total,
      css,
      emptyState,
      autoRowHeight,
      infiniteLoad,
      isRowLoaded,
      loadMoreRows,
      scrollToIndex,
      scrollCallback,
      hideScrollButton,
      scrollElement,
      isListLoading = false,
      ...viewProps
    } = this.props;

    let renderFunction = rowRenderer;

    if (this.props.autoRowHeight) {
      const oldRenderFunction = renderFunction;
      renderFunction = ({ ...args }) => (
        <CellMeasurer
          cache={this.cache}
          parent={args.parent}
          rowIndex={args.index}
          columnIndex={0}
          key={args.key}
        >
          {oldRenderFunction({ ...args })}
        </CellMeasurer>
      );
    }

    return (
      <Theme.Consumer>
        {({ zIndex, spacing }) => (
          <React.Fragment>
            {total && typeof total === "string" ? (
              <View marginBottom={4}>
                <Text fontSize={3}>{total}</Text>
              </View>
            ) : (
              total
            )}
            <View
              display="block"
              css={[
                {
                  ".ReactVirtualized__Grid": {
                    outline: "none",
                  },
                },
                css,
              ]}
            >
              {header && (
                <TR
                  position="sticky"
                  backgroundColor={viewProps.backgroundColor || "background"}
                  css={{ top: 0 }}
                  zIndex={zIndex.sticky}
                  innerRef={this.setHeader}
                >
                  {header}
                </TR>
              )}
              <Loader {...this.props}>
                {({ registerChild, onRowsRendered }) => (
                  <WindowScroller scrollElement={scrollElement || undefined}>
                    {({ height, isScrolling, onChildScroll, scrollTop }) => (
                      <React.Fragment>
                        <View display="block" {...viewProps}>
                          <AutoSizer disableHeight={true}>
                            {({ width }) => (
                              <div ref={registerChild}>
                                <List
                                  autoHeight={true}
                                  height={height}
                                  onRowsRendered={this.rowsReturn(
                                    onRowsRendered
                                  )}
                                  ref={el => {
                                    this.listEl = el;
                                  }}
                                  rowCount={rowCount}
                                  rowHeight={
                                    autoRowHeight
                                      ? this.cache.rowHeight
                                      : rowHeight
                                  }
                                  rowRenderer={renderFunction}
                                  deferredMeasurementCache={
                                    autoRowHeight ? this.cache : null
                                  }
                                  scrollTop={scrollTop}
                                  onScroll={onChildScroll}
                                  overscanRowCount={5}
                                  scrollToAlignment="start"
                                  isScrolling={isScrolling}
                                  width={width}
                                  scrollToIndex={scrollToIndex}
                                />
                              </div>
                            )}
                          </AutoSizer>
                          {!isListLoading &&
                            emptyState &&
                            rowCount <= 0 &&
                            emptyState}
                        </View>
                        {!hideScrollButton &&
                          scrollTop > 0 && (
                            <ButtonFilled
                              color="contrast"
                              onClick={this.scrollToTop}
                              position="sticky"
                              marginTop={4}
                              marginLeft="auto"
                              css={{ bottom: spacing[4] }}
                            >
                              <Icon name="ChevronUp" color="background" />
                            </ButtonFilled>
                          )}
                      </React.Fragment>
                    )}
                  </WindowScroller>
                )}
              </Loader>
            </View>
          </React.Fragment>
        )}
      </Theme.Consumer>
    );
  }
}

export default DataTable;

const Loader: React.SFC<{
  infiniteLoad?: boolean;
  isRowLoaded?: (obj: any) => boolean;
  loadMoreRows?: (obj: any) => Promise<any>;
  rowCount: number;
  children: any;
}> = ({ infiniteLoad, isRowLoaded, loadMoreRows, rowCount, children }) => {
  if (infiniteLoad) {
    return (
      <InfiniteLoader
        isRowLoaded={infiniteLoad && isRowLoaded}
        loadMoreRows={infiniteLoad && loadMoreRows}
        rowCount={rowCount}
        threshold={2}
      >
        {children}
      </InfiniteLoader>
    );
  }

  return children({});
};
