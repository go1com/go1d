import Heading from '@go1d/go1d/build/components/Heading'
import Text from '@go1d/go1d/build/components/Text'
import Link from "@go1d/go1d/build/components/Link";
import View from "@go1d/go1d/build/components/View";

const components = {
  h1({ children }) {
    return <Heading
      color="accent"
      semanticElement="h1"
      visualHeadingLevel="Heading 1"
      >{children}</Heading>;
  },
  h2({ children }) {
    return <Heading
      color="default"
      semanticElement="h2"
      visualHeadingLevel="Heading 2"
      >{children}</Heading>;
  },
  h3({ children }) {
    return <Heading
      color="default"
      semanticElement="h3"
      visualHeadingLevel="Heading 3"
      >{children}</Heading>;
  },
  h4({ children }) {
    return <Heading
      color="default"
      semanticElement="h4"
      visualHeadingLevel="Heading 4"
      >{children}</Heading>;
  },
  h5({ children }) {
    return <Heading
      color="default"
      semanticElement="h5"
      visualHeadingLevel="Heading 5"
      >{children}</Heading>;
  },
  h6({ children }) {
    return <Heading
      color="default"
      semanticElement="h6"
      visualHeadingLevel="Heading 6"
      >{children}</Heading>;
  },
  p({ children }) {
    return <Text
      color="default"
      element="p"
      fontSize={2}
      fontWeight="normal"
      fontFamily="sansSerif"
      lineHeight="paragraph"
      >{children}</Text>;
  },
  pre({ children }) {
    return (
      <View
        marginY={5}
        padding={5}
        backgroundColor="noteHigh"
        element="pre"
      >
        <Text
          color="noteLow"
          element="code"
          fontSize={2}
          fontWeight="normal"
          fontFamily="mono"
          lineHeight="paragraph"
        >{children}</Text>
      </View>
    );
  },
  inlineCode({ children }) {
    return (
      <Text
        color="noteLow"
        element="code"
        fontSize={2}
        fontWeight="normal"
        fontFamily="mono"
        lineHeight="paragraph"
      >{children}</Text>
    );
  },
};

export default components;
