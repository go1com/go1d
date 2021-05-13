import React from "react";
import { Theme, Table, TR, TH, TD, Text } from "../../../src/";

export const TypeScale = ({ colors = [], ...props }) => (
  <Theme.Consumer>
    {({ type }) => (
      <Table
        rows={type.scale.lg.map((val, key) => (
          <TR key={key}>
            <TD>
              <Text>{key}</Text>
            </TD>
            <TD>
              <Text>
                {val}
                px
              </Text>
            </TD>
            <TD>
              <Text>
                {type.scale.md[key]}
                px
              </Text>
            </TD>
            <TD>
              <Text>
                {type.scale.sm[key]}
                px
              </Text>
            </TD>
          </TR>
        ))}
        header={[
          <TH key="a" text="Typescale" />,
          <TH key="b" text="Large screen" />,
          <TH key="c" text="Medium screen" />,
          <TH key="d" text="Small screen" />,
        ]}
      />
    )}
  </Theme.Consumer>
);

export default TypeScale;
