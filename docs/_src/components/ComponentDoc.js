import React from "react";
import { View, Text, Table, TR, TH, TD, Theme } from "../../../src";
import docs from "../../react-docs.json";
import CheckIcon from "../../../src/components/Icons/Check";

const Prop = ({
  name = "",
  type = "",
  flags = {},
  documentation = {},
  fileName,
  inheritedFrom = false,
  previousRow = {},
}) => (
    <React.Fragment>
      {fileName !== previousRow.fileName && (
        <TR>
          <TD>
            {inheritedFrom ? (
              <Text fontWeight="bold">
                Inherited From {inheritedFrom.split(".")[0]}
              </Text>
            ) : (
                <Text fontWeight="bold">Component Props</Text>
              )}
          </TD>
          <TD>
            <Text
              marginLeft="auto"
              element="a"
              target="_blank"
              href={`https://code.go1.com.au/apps/GO1D/blob/master/${fileName}`}
            >
              {fileName}
            </Text>
          </TD>
        </TR>
      )}
      <TR>
        <TD width="20%">
          <Text>{name}</Text>
        </TD>
        <TD>{!flags.isOptional && <CheckIcon marginX="auto" />}</TD>
        <TD width="50%">
          <Text>{type || "N/A"}</Text>
        </TD>
      </TR>
      {documentation.contentsRaw && (
        <TR>
          <TD>
            <Text fontSize={1}>{documentation.contentsRaw}</Text>
          </TD>
        </TR>
      )}
    </React.Fragment>
  );

function flatten(input) {
  const stack = [...input];
  const res = [];
  while (stack.length) {
    // pop value from stack
    const next = stack.pop();
    if (Array.isArray(next)) {
      // push back array items, won't modify the original input
      stack.push(...next);
    } else {
      res.push(next);
    }
  }
  //reverse to restore input order
  return res.reverse();
}

function getExtends(component) {
  if (!docs.typescript[component] || !docs.typescript[component].extends) {
    return [];
  }

  const extend = docs.typescript[component].extends;
  return flatten([extend, extend.map(row => getExtends(row))]);
}

export const ComponentDoc = ({ component = "" }) => {
  if (!docs.typescript[component]) {
    return null;
  }

  // Do Sorting and grouping
  const { properties } = docs.typescript[component];
  properties.sort((a, b) => a.name > b.name);

  const interfaceList = { [component]: [] };
  getExtends(component).forEach(row => {
    interfaceList[row] = [];
  });

  properties.forEach(row => {
    const face = row.inheritedFrom
      ? row.inheritedFrom.split(".")[0]
      : component;
    if (interfaceList[face]) {
      interfaceList[face].push(row);
    }
  });

  return properties.length > 0 ? (
    <Theme.Consumer>
      {({ type }) => (
        <View>
          <View marginY={3}>
            <Text element="h2" fontSize={3} fontWeight="semibold">
              Props &amp; methods
            </Text>
          </View>
          <Table
            css={{
              span: {
                fontFamily: type.family.mono,
              },
            }}
            header={[
              <TH key="name" text="Name" width="20%" />,
              <TH key="required" text="Required" />,
              <TH key="type" text="Type" width="50%" />,
            ]}
            rows={Object.keys(interfaceList).map(key => {
              return interfaceList[key].map((row, index) => (
                <Prop
                  key={row.name}
                  {...row}
                  previousRow={interfaceList[key][index - 1]}
                />
              ));
            })}
          />
        </View>
      )}
    </Theme.Consumer>
  ) : null;
};

export default ComponentDoc;
