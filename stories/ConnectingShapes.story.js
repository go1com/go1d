import React from "react";
import { ConnectingShapes } from "../src";
import { ButtonFilled, Link } from "../src";
import View from "../src/components/View/";
import Text from "../src/components/Text/";
import Heading from "../src/components/Heading";
import Carousel from "../src/components/Carousel";

export default {
  title: "Athletic/ConnectingShapes",
  component: ConnectingShapes,
  parameters: {
    design: [
      {
        name: 'Guidelines',
        type: 'link',
        url: 'https://www.figma.com/file/BxQA6qbzRwjSA2AXWnO0f9/Components?node-id=3105%3A14386',
        label: 'We need your help! Please add a page in Figma using the template and update this link.',
      },
    ],
  }
};

export const Main = (args, { globals: { accent } }) => (
  <View
    css={{backgroundColor: accent}}
    padding={5}
  >
    <ConnectingShapes
      content={["Transformational", "Learning"]}
      colorBorderShape="complementary"
      colorShape="complementary"
      colorText="accent"
      {...args}
    />
  </View>
);
Main.storyName = "Main";
Main.argTypes = {
  content: { defaultValue: ["Transformational", "Learning"] },
  colorBorderShape: { defaultValue: "complementary" },
  colorShape: { defaultValue: "complementary" },
  colorText: { defaultValue: "accent" },
};

export const RichContent = (args, { globals: { accent } }) => (
  <View
    css={{backgroundColor: accent}}
    padding={5}
  >
    <ConnectingShapes
      content={[<Heading semanticElement="h1" visualHeadingLevel="Heading 1" color="accent"><Link href="#testing">Link</Link></Heading>, "Two words", <ButtonFilled {...args} color="accent">Call to action</ButtonFilled>]}
      colorBorderShape="complementary"
      colorShape="complementary"
      colorText="accent"
    />
  </View>
);
RichContent.storyName = "Rich content";

export const Outline = (args, { globals: { accent } }) => (
  <View
    backgroundColor="dangerHigh"
    padding={5}
  >
    <ConnectingShapes
      content={["Transformational", "Learning"]}
      colorBorderShape="dangerMid"
      colorShape="dangerHigh"
      colorText="accent"
      {...args}
    />
  </View>
);
Outline.storyName = "Outline style";
Outline.argTypes = {
  content: { defaultValue: ["Transformational", "Learning"] },
  colorBorderShape: { defaultValue: "dangerMid" },
  colorShape: { defaultValue: "dangerHigh" },
  colorText: { defaultValue: "accent" },
};

export const JSXElement = () => {
  const questionsList = [
    {
      value: "Myself",
      image: 'https://res.cloudinary.com/go1/image/upload/v1616662622/public/selfserve-app/Capa-15.png',
      title: "Myself",
      description: "Discover new topics, develop new skills, and track your progress.",
    },
    {
      value: "My team",
      image: 'https://res.cloudinary.com/go1/image/upload/v1616662622/public/selfserve-app/Capa-3.png',
      title: "My team",
      description: "Develop your people, remain compliant, and track their progress.",
    },
    {
      value: "My organization",
      image: 'https://res.cloudinary.com/go1/image/upload/v1616662622/public/selfserve-app/Capa-7.png',
      title: "My organization",
      description: "Upskill your full workforce. Remain compliant. Report centrally.",
    },
  ];
  const [selectedQuestion, setQuestion] = React.useState(questionsList[0]);

  const handleSlideChange = (currentSlide) => {
    setQuestion(questionsList[currentSlide]);
  };

  const customControls = ({ scrollToIndex }) => {
    const handleClick = (index) => () => {
      scrollToIndex(index);
      setQuestion(questionsList[index]);
    };

    return (
      <View flexDirection="row" marginY={5} alignItems="center" justifyContent="space-between" paddingX={5}>
        {questionsList.map((q, index) => (
          <Text
            key={q.title}
            onClick={handleClick(index)}
            fontWeight="semibold"
            fontSize={3}
            color={q.value === selectedQuestion.value ? 'successLow' : 'default'}
            css={{ textAlign: 'center', cursor: "pointer" }}
          >
            {q.mobileTitle || q.title}
          </Text>
        ))}
      </View>
    );
  };

  const content = [
      <ConnectingShapes
        content={[
          <View element="img" alt="" src="https://res.cloudinary.com/go1/image/upload/v1616662622/public/selfserve-app/Capa-15.png" />,
          <View textAlign="center" alignItems="center" flexGrow={1} justifyContent="space-between">
            <Text color="default" marginBottom={3} fontSize={3} fontWeight="medium">
              Myself
            </Text>
            <Text color="subtle" fontSize={1} css={{ maxWidth: "100%" }}>
              Discover new topics, develop new skills, and track your progress.
            </Text>
            <ButtonFilled marginTop={5} color="accent">Choose</ButtonFilled>
          </View>
        ]}
        colorShape="background"
        colorBorderShape="faded"
        borderShape={1}
        containerProps={{
          paddingY: [4, 5],
          width: [1, '224', '224'],
          minHeight: 218,
          justifyContent: "center",
        }}
        connectorProps={{
          space: 6,
          size: 2,
        }}
      />,
    <ConnectingShapes
      content={[
        <View element="img" alt="" src="https://res.cloudinary.com/go1/image/upload/v1616662622/public/selfserve-app/Capa-3.png" />,
        <View textAlign="center" alignItems="center" flexGrow={1} justifyContent="space-between">
          <Text color="default" fontSize={3} fontWeight="medium">
            My team
          </Text>
          <Text color="subtle" fontSize={1} css={{ maxWidth: "100%" }}>
            Develop your people, remain compliant, and track their progress.
          </Text>
          <ButtonFilled marginTop={5} color="accent">Choose</ButtonFilled>
        </View>
      ]}
      colorShape="background"
      colorBorderShape="faded"
      borderShape={1}
      containerProps={{
        paddingY: [4, 5],
        width: [1, '224', '224'],
        minHeight: 218,
        justifyContent: "center",
      }}
      connectorProps={{
        space: 6,
        size: 2,
      }}
    />,
    <ConnectingShapes
      content={[
        <View element="img" alt="" src="https://res.cloudinary.com/go1/image/upload/v1616662622/public/selfserve-app/Capa-7.png" />,
        <View textAlign="center" alignItems="center" flexGrow={1} justifyContent="space-between">
          <Text color="default" marginBottom={3} fontSize={3} fontWeight="medium">
            My organization
          </Text>
          <Text color="subtle" fontSize={1} css={{ maxWidth: "100%" }}>
            Upskill your full workforce. Remain compliant. Report centrally.
          </Text>
          <ButtonFilled marginTop={5} color="accent">Choose</ButtonFilled>
        </View>
      ]}
      colorShape="background"
      colorBorderShape="faded"
      borderShape={1}
      containerProps={{
        paddingY: [4, 5],
        width: [1, '224', '224'],
        minHeight: 218,
        justifyContent: "center",
      }}
      connectorProps={{
        space: 6,
        size: 2,
      }}
    />
  ];

  return (
    <>
      <View display={['none', 'flex', 'flex']} flexDirection="row" flexWrap="wrap" justifyContent="space-around">
        {content}
      </View>
      <Carousel
        display={['flex', 'none', 'none']}
        width={1}
        showControls={false}
        customControlsRenderer={customControls}
        onSlideChange={handleSlideChange}
      >
        {content}
      </Carousel>
    </>
  )
};
JSXElement.storyName = "JSXElement use with carousel on mobile view (let check on mobile view)";
