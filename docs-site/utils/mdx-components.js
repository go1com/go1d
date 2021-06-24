import Heading from '@go1d/go1d/build/components/Heading'
import Text from '@go1d/go1d/build/components/Text'
import Link from "@go1d/go1d/build/components/Link";
import View from "@go1d/go1d/build/components/View";
import UL from "@go1d/go1d/build/components/UL";
import LI from "@go1d/go1d/build/components/UL/LI";
import LiveEdit from '../components/LiveEdit';
import CodeBlock from '../components/CodeBlock';

const components = {
  h1({ children }) {
    return <Heading
      color="accent"
      semanticElement="h1"
      visualHeadingLevel="Heading 1"
      marginTop={5}
      marginBottom={2}
      >{children}</Heading>;
  },
  h2({ children }) {
    return <Heading
      color="default"
      semanticElement="h2"
      visualHeadingLevel="Heading 2"
      marginTop={5}
      marginBottom={2}
      >{children}</Heading>;
  },
  h3({ children }) {
    return <Heading
      color="default"
      semanticElement="h3"
      visualHeadingLevel="Heading 3"
      marginTop={5}
      marginBottom={2}
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
      marginBottom={2}
      >{children}</Heading>;
  },
  h6({ children }) {
    return <Heading
      color="default"
      semanticElement="h6"
      visualHeadingLevel="Heading 6"
      marginTop={5}
      marginBottom={2}
      >{children}</Heading>;
  },
  p({ children }) {
    return <Text
      color="default"
      element="p"
      marginY={3}
      fontSize={2}
      fontWeight="normal"
      fontFamily="sansSerif"
      lineHeight="paragraph"
      >{children}</Text>;
  },
  a({ href, children }) {
    return (
      <Link href={href}>
        <Text
        color="successLow"
        css={{
          textDecoration: "underline"
        }}
        >{children}</Text>
      </Link>
    )
  },
  ul({children}) {
    return (
      <UL css={{ padding: 0}}>{children}</UL>
    )
  },
  li({ children }) {
    return (
      <LI><Text color="default" lineHeight="paragraph">{children}</Text></LI>
    )
  },
  em({ children }) {
    return (
      <Text element="em" lineHeight="paragraph">{children}</Text>
    )
  },
  strong({ children }) {
    return (
      <Text element="strong" fontWeight="semibold" lineHeight="paragraph">{children}</Text>
    )
  },
  blockquote({ children }) {
    return (
      <View
        backgroundColor="noteHigh"
        padding={5}
        borderLeft={4}
        borderColor="noteMid"
        marginY={5}
      >
        {children}
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
