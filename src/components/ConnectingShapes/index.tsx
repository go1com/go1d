import * as React from "react";
import { generateUuid } from "../../utils/generateUuid";
import Text from "../Text";
import View, { ViewProps } from "../View";
import Connector, { Props as ConnectorProps } from "./Connector";

export interface ConnectingShapesProps {
  content: any[];
  colorBorderShape?: string | null;
  colorShape?: string;
  colorText?: string;
  borderShape?: number;
  containerProps?: ViewProps;
  connectorProps?: ConnectorProps;
}

const ConnectingShapes = ({
  content = [],
  colorText,
  colorShape,
  colorBorderShape,
  borderShape = 2,
  containerProps,
  connectorProps,
}: ConnectingShapesProps) => {
  const [connectorId, setConnectorId] = React.useState<string>("");
  React.useEffect(() => setConnectorId(generateUuid()), []);
  const shapeWords = [];
  content.forEach((item, index) => {
    if (shapeWords.length > 0) {
      shapeWords.push(
        <View
          flexDirection="row"
          justifyContent="center"
          key={`ShapeWords_${index}`}
        >
          <Connector
            key={`Shape_${index}`}
            fillColor={colorShape}
            strokeColor={colorBorderShape}
            borderShape={borderShape}
            isVertical={true}
            size={2}
            space={6}
            idCustom={`mask_id_${connectorId}`}
            {...connectorProps}
          />
        </View>
      );
    }
    shapeWords.push(
      <View
        key={`TextInShape_${index}`}
        borderRadius={5}
        paddingY={4}
        paddingX={[4, 5]}
        alignItems="center"
        borderColor={colorBorderShape || colorShape}
        backgroundColor={colorShape}
        border={borderShape}
        minWidth="96px" // ensures short words like "a" are wider than connector
        {...containerProps}
      >
        {typeof item === "string" ? (
          <Text
            fontFamily="serif"
            fontWeight="semibold"
            fontSize={7}
            color={colorText}
          >
            {item}
          </Text>
        ) : (
          item
        )}
      </View>
    );
  });

  return (
    <View alignItems="center" key="Shape_Word">
      {shapeWords}
    </View>
  );
};

export default ConnectingShapes;
