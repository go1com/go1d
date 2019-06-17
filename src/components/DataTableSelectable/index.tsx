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

  /** A mapping of row numbers to id. Usually this takes the form of the function row => data[row].id */
  mapRowToId?: (row: number) => number;
  rowRenderer: (props: RowRendererProps) => React.ReactNode;
  disabled?: boolean;
  mainIconName?: string;
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

interface State {
  allSelected: boolean;
  invertSelection: boolean;
  selectedItems: Set<number>;
  unselectedItems: Set<number>;
}

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
  public rowRenderer(highlight: string) {
    return (props: ListRowProps) => {
      const selected = this.state.invertSelection
        ? !this.state.unselectedItems.has(props.index)
        : this.state.selectedItems.has(props.index);

      const checkboxTD = (
        <TD
          key={-1}
          width="30px"
          flexShrink={0}
          flexGrow={0}
          css={{ "box-sizing": "content-box" }}
        >
          <Checkbox
            name={String(props.index)}
            value={selected}
            onChange={this.updateRows}
          />
        </TD>
      );

      const style = { ...props.style };
      if (selected) {
        style.backgroundColor = highlight;
      }

      return this.props.rowRenderer({
        checkBox: checkboxTD,
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
      mainIconName,
      rowCount,
      prefixRow,
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

    const headerWithSelectAll = [
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
      />,
      ...(header || []),
    ];

    return (
      <Theme.Consumer>
        {({ colors }) => (
          <DataTable
            {...props}
            ref={this.ref}
            rowCount={rowCount}
            rowRenderer={this.rowRenderer(colors.highlight)}
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
