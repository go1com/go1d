import React, { Component, Fragment } from "react";
import * as Icons from "../../../src/components/Icons";
import SearchInput from "../../../src/components/SearchInput";

class AllIcons extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: "",
    };
    this.updateFilter = this.updateFilter.bind(this);
  }

  updateFilter(evt) {
    this.setState({
      filter: evt.target.value,
    });
  }

  render() {
    const { filter } = this.state;
    return (
      <Fragment>
        <SearchInput
          onChange={this.updateFilter}
          placeholder="Type to filter icons"
        />
        <table style={{ width: "100%" }}>
          <tr>
            <th style={{ "text-align": "left", padding: "0 0 1rem 0" }}>
              Name
            </th>
            <th style={{ "text-align": "left", padding: "0 0 1rem 0" }}>
              Icon
            </th>
          </tr>
          {Object.entries(Icons)
            .map((Key, Component) => {
              if (Key.substr(0, 4).toLowerCase() === "icon") {
                return [Key.substr(4), Component];
              }

              return [Key, Component];
            })
            .filter(
              name =>
                filter && filter.length
                  ? name.toLowerCase().includes(filter.toLowerCase())
                  : true
            )
            .map(([name, IconElement], index) => (
              <tr key={index}>
                <td style={{ padding: "0 0 1rem 0" }}>{name}</td>
                <td style={{ padding: "0 0 1rem 0" }}>
                  <IconElement />
                </td>
              </tr>
            ))}
        </table>
      </Fragment>
    );
  }
}

export default AllIcons;
