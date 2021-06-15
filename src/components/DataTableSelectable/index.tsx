import * as React from "react";
import { ListRowProps } from "react-virtualized";
import { autobind } from "../../utils/decorators";
import Checkbox from "../Checkbox";
import DataTable, { DataTableProps } from "../DataTable";
import TD from "../Table/TD";
import TH from "../Table/TH";
import Theme from "../Theme";

interface RowRendererProps extends ListRowProps {
  checkBox: React.ReactNode;
}

export interface DataTableSelectableProps
  extends Pick<DataTableProps, Exclude<keyof DataTableProps, "rowRenderer">> {
  /** Action to take when the button is clicked */
  mainAction?: (evt: {
    allSelected: boolean;
    invertSelection: boolean;
    selectedItems: number[];
    unselectedItems: number[];
  }) => void;

  /** Text to go on the main action button */
  mainActionText?: string;

  /**
   * an array representing the columns that should be rendered in this table. each entry in the array contains a header renderer and a cell renderer.
   * eg. { headerRenderer: () => <TH text="Column Heading" />, cellRenderer: () => <TD>Row cell</TD> }
   */
  columns?: DataTableColumn[];

  /** A mapping of row numbers to id. Usually this takes the form of the function row => data[row].id */
  mapRowToId?: (row: number) => number;
  rowRenderer?: (props: RowRendererProps) => React.ReactNode;
  disabled?: boolean;
  mainIconName?: never; // No longer used
  prefixRow?: (
    SelectedCount: number,
    SelectedData: {
      selectedItems: number[];
      unselectedItems: number[];
      allSelected: boolean;
      invertSelection: boolean;
      totalResults: number;
    },
    clearSelection: () => void
  ) => React.ReactNode;
}

export interface DataTableColumn {
  cellRenderer: any;
  headerRenderer: any;
}

interface State {
  allSelected: boolean;
  invertSelection: boolean;
  selectedItems: Set<number>;
  unselectedItems: Set<number>;
}

/**
 * This component extends the Data Table component to add the ability to select rows.
 */
class DataTableSelectable extends React.Component<
  DataTableSelectableProps,
  State
> {
  public static defaultProps = {
    mapRowToId: (row: number) => row,
  };

  public ref: React.RefObject<DataTable>;

  public get header() {
    return this.ref.current.header;
  }

  constructor(props) {
    super(props);

    this.state = {
      allSelected: false,
      invertSelection: false,
      selectedItems: new Set<number>(),
      unselectedItems: new Set<number>(),
    };

    this.ref = React.createRef();
  }

  @autobind
  public getSelectAllHeader() {
    const { invertSelection, unselectedItems, selectedItems } = this.state;
    const { rowCount, disabled } = this.props;

    const selected = invertSelection
      ? rowCount - unselectedItems.size
      : selectedItems.size;

    return (
      <TH
        key={-1}
        width="30px"
        flexGrow={0}
        flexShrink={0}
        css={{ "box-sizing": "content-box" }}
        text={
          !!selected ? (
            <Checkbox
              name="SelectAll"
              value={this.state.allSelected}
              onChange={this.onAllSelectChange}
              disabled={disabled}
            />
          ) : (
            ""
          )
        }
      />
    );
  }

  @autobind
  public getCheckboxTD(props: any) {
    const selected = this.isThisRowSelected(props.index);

    return (
      <TD
        key={-1}
        width="30px"
        flexShrink={0}
        flexGrow={0}
        css={{
          "box-sizing": "content-box",
          backgroundColor: props.style.backgroundColor,
        }}
      >
        <Checkbox
          name={String(props.index)}
          value={selected}
          onChange={this.updateRows}
        />
      </TD>
    );
  }

  @autobind
  public isThisRowSelected(index: number) {
    if (index === undefined) {
      return false;
    }

    return this.state.invertSelection
      ? !this.state.unselectedItems.has(index)
      : this.state.selectedItems.has(index);
  }

  @autobind
  public enhanceColumns(columns, highlight: string) {
    if (columns) {
      // iterate through the cell renderer methods and add in the style prop so that the row highlights properly
      columns.forEach(column => {
        if (column.cellRenderer) {
          column.cellRenderer = this.enhancedCellRender(
            column.cellRenderer,
            highlight
          );
        }
      });

      return columns;
    }

    return [];
  }

  @autobind
  public enhancedCellRender(cellRenderer, highlight: string) {
    return (args: any) => {
      const selected = this.isThisRowSelected(args.index);

      // the props.style attribute here refers to styles for a row. if we apply them to each cell, they end up absolutely
      // positioned on the left. not pretty. for a cell renderer, we just want to pass in the backgroundColor as needed.
      const style: any = {};
      if (selected) {
        style.backgroundColor = highlight;
      }

      return cellRenderer({ ...args, style });
    };
  }

  @autobind
  public rowRenderer(highlight: string) {
    return (props: ListRowProps) => {
      const selected = this.isThisRowSelected(props.index);

      const style = { ...props.style };
      if (selected) {
        style.backgroundColor = highlight;
      }

      return this.props.rowRenderer({
        checkBox: this.getCheckboxTD(props),
        ...props,
        style,
      });
    };
  }

  @autobind
  public resetChecked() {
    this.setState({
      allSelected: false,
      invertSelection: false,
      selectedItems: new Set<number>(),
      unselectedItems: new Set<number>(),
    });
  }

  @autobind
  public updateRows(evt: { target: { name: string; checked: boolean } }) {
    const updateObject = this.state[
      this.state.invertSelection ? "unselectedItems" : "selectedItems"
    ];

    if (evt.target.checked) {
      updateObject[this.state.invertSelection ? "delete" : "add"](
        parseInt(evt.target.name, 10)
      );
    } else {
      updateObject[this.state.invertSelection ? "add" : "delete"](
        parseInt(evt.target.name, 10)
      );
    }

    if (this.state.invertSelection) {
      this.setState({
        allSelected: false,
        unselectedItems: new Set<number>(updateObject),
      });
    } else {
      this.setState({
        allSelected: false,
        selectedItems: new Set<number>(updateObject),
      });
    }
  }

  @autobind
  public clearSelection() {
    this.setState({
      allSelected: false,
      invertSelection: false,
      selectedItems: new Set(),
      unselectedItems: new Set(),
    });
  }

  @autobind
  public resetTableData(reload = true) {
    this.ref.current.resetTableData(reload);
  }

  @autobind
  public onAllSelectChange() {
    this.setState({
      allSelected: !this.state.allSelected,
      invertSelection: !this.state.allSelected,
      selectedItems: new Set(),
      unselectedItems: new Set(),
    });
  }

  public render() {
    const {
      mainAction,
      mapRowToId,
      children,
      rowRenderer,
      total,
      disabled,
      header,
      mainActionText,
      rowCount,
      prefixRow,
      index,
      ...props
    } = this.props;

    const {
      invertSelection,
      unselectedItems,
      selectedItems,
      allSelected,
    } = this.state;

    const selected = invertSelection
      ? rowCount - unselectedItems.size
      : selectedItems.size;

    const headerWithSelectAll = [this.getSelectAllHeader(), ...(header || [])];

    let { columns } = this.props;
    if (columns) {
      columns = [
        {
          headerRenderer: this.getSelectAllHeader,
          cellRenderer: this.getCheckboxTD,
        },
      ].concat(columns);
    }

    return (
      <Theme.Consumer>
        {({ colors }) => (
          <DataTable
            {...props}
            ref={this.ref}
            rowCount={rowCount}
            rowRenderer={rowRenderer && this.rowRenderer(colors.highlight)}
            columns={columns && this.enhanceColumns(columns, colors.highlight)}
            header={headerWithSelectAll}
            total={
              typeof prefixRow === "function" &&
              prefixRow(
                selected,
                {
                  totalResults: rowCount,
                  allSelected,
                  invertSelection: selected === 0 || invertSelection,
                  selectedItems: Array.from(selectedItems).map(row =>
                    this.props.mapRowToId(row)
                  ),
                  unselectedItems: Array.from(unselectedItems).map(row =>
                    this.props.mapRowToId(row)
                  ),
                },
                this.clearSelection
              )
            }
          />
        )}
      </Theme.Consumer>
    );
  }
}

export default DataTableSelectable;
