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
import IconChevronUp from "../Icons/ChevronUp";
import MultiSelect from "../MultiSelect";
import TR from "../Table/TR";
import Text from "../Text";
import Theme from "../Theme";
import View, { ViewProps } from "../View";

export interface DataTableProps extends ViewProps {
  /** Component shown if there is no results */
  emptyState?: React.ReactNode;
  /** The height of a row. When using autoRowHeight, you can supply this for a more accurate initial estimate */
  rowHeight?: number;
  /** The total number of rows that can be loaded. Used for autoloading. */
  rowCount: number;
  /** Function to render a row */
  rowRenderer?: ListRowRenderer;
  /*
   * A header row. Rendered inside a TR component. This is ignored if you supply a columns array.
   */
  header?: React.ReactNodeArray;
  footer?: React.ReactNode;
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

  /**
   * an array representing the columns that should be rendered in this table. each entry in the array contains a header renderer and a cell renderer.
   * eg. { headerRenderer: () => <TH text="Column Heading" />, cellRenderer: () => <TD>Row cell</TD> }
   */
  columns?: DataTableColumn[];

  /**
   * If we wish to allow a user to have control over what columns are showing, then supply a true to this prop.
   */
  dynamicColumns?: boolean;

  /**
   * If the component is supplied an array of initialColumns, then only display the columns with columnIdentifier contained in this array
   */
  initialColumns?: string[];
}

export interface DataTableColumn {
  columnIdentifier?: string;
  columnSelectorLabel?: string;
  cellRenderer: any;
  headerRenderer: any;
}

/**
 * This component renders a table. It can do this in one of two ways. Either by supplying columns (which each include a header and cell renderer), or by supplying a function to render each row out and an array of headers. This uses the TR and TH components from the Table component.
 */
class DataTable extends React.Component<DataTableProps, any> {
  public listEl: List;
  public header: HTMLElement;

  public cache: CellMeasurerCache;
  public loaderRef: React.RefObject<InfiniteLoader> = React.createRef();

  constructor(props) {
    super(props);
    this.cache = new CellMeasurerCache({
      defaultHeight: this.props.rowHeight || 50,
      fixedWidth: true,
    });
    this.state = {
      columnsToDisplay: [],
    };

    // if the prop has been given to instruct dynamic columns support, determine which columns will be showed
    const { columns, dynamicColumns, initialColumns } = this.props;
    if (dynamicColumns) {
      if (initialColumns && initialColumns.length > 0) {
        // if we have been supplied a list of initial columns, get them into the same order as the columns array
        this.state = {
          columnsToDisplay: columns
            .filter(column => initialColumns.includes(column.columnIdentifier))
            .map(column => {
              return column.columnIdentifier;
            }),
        };
      }
    }
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
  public resetTableData(reload = true) {
    if (this.loaderRef.current) {
      this.loaderRef.current.resetLoadMoreRowsCache(reload);
    }
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

  @autobind
  public getColumnsToDisplayObjects(): DataTableColumn[] {
    const { columns } = this.props;
    if (columns === undefined) {
      return [];
    }

    // if the columnsToDisplay string array is empty, then display all columns.
    const { columnsToDisplay } = this.state;
    if (columnsToDisplay === undefined || columnsToDisplay.length === 0) {
      return columns;
    }

    // but if there are entries in the columnsToDisplay string array, we only want to render those columns
    return columnsToDisplay.map(identifier =>
      columns.find(({ columnIdentifier }) => columnIdentifier === identifier)
    );
  }

  @autobind
  public headersRenderer(args: any) {
    const HeaderOptions = {
      ...this.props,
      ...args,
    };

    return this.getColumnsToDisplayObjects().map(column => {
      return column.headerRenderer(HeaderOptions);
    });
  }

  @autobind
  public columnsRenderer(args: any) {
    // when calling to renderer columns, pass in all props which have been collected together by implementing components,
    // aswell as the args which come from the react row renderer callback.
    return (
      <TR style={args.style} key={args.key}>
        {this.getColumnsToDisplayObjects().map(column => {
          return column.cellRenderer({ ...this.props, ...args });
        })}
      </TR>
    );
  }

  /**
   * Render a select component which has an entry for each of the column array.
   */
  @autobind
  public renderColumnSelector() {
    const { columns } = this.props;
    const { columnsToDisplay } = this.state;
    const options = columns.map(column => {
      return {
        value: column.columnIdentifier || "No identifier supplied",
        label: column.columnSelectorLabel || "No label supplied",
      };
    });
    return (
      <MultiSelect
        label="Columns"
        width="155px"
        closeOnSelect={false}
        options={options}
        defaultValue={columnsToDisplay}
        onChange={this.handleColumnChange}
      />
    );
  }

  /**
   * When the column selection changes we want to update the columnsToDisplay, in the same order as the columns are supplied, so they are not changing order all the time.
   * @param evt
   */
  @autobind
  public handleColumnChange(evt) {
    const { columns } = this.props;
    this.setState({
      columnsToDisplay: columns
        .filter(({ columnIdentifier }) =>
          evt.target.value.includes(columnIdentifier)
        )
        .map(({ columnIdentifier }) => columnIdentifier),
    });
  }

  public render() {
    const {
      rowHeight,
      rowRenderer,
      rowCount,
      columns,
      header,
      footer,
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
      dynamicColumns,
      ...viewProps
    } = this.props;

    let renderFunction = rowRenderer;

    // if we have a columns array, then we can iterate through each column rendering a cell
    if (columns) {
      renderFunction = this.columnsRenderer;
    }

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
            <View
              flexDirection="row"
              justifyContent="space-between"
              alignItems="flex-end"
              marginBottom={4}
            >
              <View>
                {typeof total === "string" ? (
                  <View>
                    <Text fontSize={3}>{total}</Text>
                  </View>
                ) : (
                  total
                )}
              </View>
              {dynamicColumns && <View>{this.renderColumnSelector()}</View>}
            </View>
            <View
              display="block"
              position="relative"
              css={[
                {
                  ".ReactVirtualized__Grid": {
                    outline: "none",
                  },
                },
                css,
              ]}
            >
              {(header || columns) && (
                <TR
                  position="sticky"
                  backgroundColor={viewProps.backgroundColor || "background"}
                  css={{ top: 0 }}
                  zIndex={zIndex.sticky}
                  innerRef={this.setHeader}
                >
                  {columns && this.headersRenderer(this.props)}
                  {!columns && header}
                </TR>
              )}
              <Loader {...this.props} innerRef={this.loaderRef}>
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
                        {footer && (
                          <View
                            position="absolute"
                            display="block"
                            width={
                              hideScrollButton ? "100%" : "calc(100% - 48px)"
                            }
                            css={{ bottom: 0 }}
                          >
                            {footer}
                          </View>
                        )}
                        {!hideScrollButton && scrollTop > 0 && (
                          <ButtonFilled
                            onClick={this.scrollToTop}
                            position="sticky"
                            marginTop={4}
                            marginLeft="auto"
                            css={{ bottom: spacing[4] }}
                          >
                            <IconChevronUp />
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
  innerRef?: React.RefObject<InfiniteLoader>;
}> = ({
  infiniteLoad,
  isRowLoaded,
  loadMoreRows,
  rowCount,
  children,
  innerRef,
}) => {
  if (infiniteLoad) {
    return (
      <InfiniteLoader
        ref={innerRef}
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
