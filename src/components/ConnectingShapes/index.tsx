import * as React from "react";
import Text from "../Text";
import View from "../View";
import Connector from "./Connector";

interface ConnectingShapesProps {
  text: any;
  colorBorderShape?: string | null;
  colorShape?: string;
  colorText?: string;
}

const ConnectingShapes = ({
  text,
  colorText,
  colorShape,
  colorBorderShape,
}: ConnectingShapesProps) => {
  const shapeWords = [];
  text.split(" ").forEach((word, index) => {
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
            size={2}
            space={6}
            idCustom={`mask_id_${index}`}
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
        border={2}
        minWidth="96px" // ensures short words like "a" are wider than connector
      >
        <Text
          fontFamily="serif"
          fontWeight="semibold"
          fontSize={7}
          color={colorText}
        >
          {word}
        </Text>
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
