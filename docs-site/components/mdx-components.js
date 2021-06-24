import Heading from '@go1d/go1d/build/components/Heading'
import Text from '@go1d/go1d/build/components/Text'
import Link from "@go1d/go1d/build/components/Link";
import View from "@go1d/go1d/build/components/View";
import LiveEdit from './LiveEdit';
import CodeBlock from './CodeBlock';

const components = {
  h1({ children }) {
    return <Heading
      color="accent"
      semanticElement="h1"
      visualHeadingLevel="Heading 1"
      marginTop={5}
      >{children}</Heading>;
  },
  h2({ children }) {
    return <Heading
      color="default"
      semanticElement="h2"
      visualHeadingLevel="Heading 2"
      marginTop={5}
      >{children}</Heading>;
  },
  h3({ children }) {
    return <Heading
      color="default"
      semanticElement="h3"
      visualHeadingLevel="Heading 3"
      marginTop={5}
      >{children}</Heading>;
  },
  h4({ children }) {
    return <Heading
      color="default"
      semanticElement="h4"
      visualHeadingLevel="Heading 4"
      marginTop={5}
      >{children}</Heading>;
  },
  h5({ children }) {
    return <Heading
      color="default"
      semanticElement="h5"
      visualHeadingLevel="Heading 5"
      marginTop={5}
      >{children}</Heading>;
  },
  h6({ children }) {
    return <Heading
      color="default"
      semanticElement="h6"
      visualHeadingLevel="Heading 6"
      marginTop={5}
      >{children}</Heading>;
  },
  p({ children }) {
    return <Text
      color="default"
      element="p"
      marginY={5}
      fontSize={2}
      fontWeight="normal"
      fontFamily="sansSerif"
      lineHeight="paragraph"
      >{children}</Text>;
  },
  pre({ children }) {
    return (
      <View
        marginY={2}
        padding={5}
        backgroundColor="background"
        borderRadius={2}
        borderColor="delicate"
        border={1}
        element="pre"
      >
        <Text
          color="noteLow"
          element="div"
          fontSize={2}
          fontWeight="normal"
          fontFamily="mono"
          lineHeight="paragraph"
          css={{
            code: {
              whiteSpace: "pre-wrap",
              overflowWrap: "break-word",
              wordBreak: "break-word",
            }
          }}
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
  code({ children, className = '' }) {
    const language = className.replace(/language-/, '');

    if (language === 'react') {
      return <LiveEdit code={children.trim()} noInline />;
    }
    else if (language === 'react-inline') {
      return <LiveEdit code={children.trim()} />;
    }
    else if (language === 'sh') {
      return <CodeBlock code={children.trim()} language="bash" />;
    }

    return <CodeBlock code={children.trim()} language={language} />;
  },
};

export default components;
