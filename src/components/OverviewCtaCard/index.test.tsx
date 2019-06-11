import * as React from "react";
import { cleanup, render } from "react-testing-library";
import Button from "../Button";
import ButtonFilled from "../ButtonFilled";
import Text from "../Text";
import OverviewCtaCard from "./index";

afterEach(cleanup);

it("renders without crashing without any optional props", () => {
  render(<OverviewCtaCard />);
});

it("renders without crashing with all available props", () => {
  render(
    <OverviewCtaCard
      backgroundImage="example.jpg"
      likes={100}
      dislikes={20}
      enrolled={1000}
      ctaButton={<ButtonFilled>Test</ButtonFilled>}
      metaData={<div>Foo</div>}
    >
      <div>Test content</div>
    </OverviewCtaCard>
  );
});

it("renders without crashing with all available props", () => {
  render(
    <OverviewCtaCard
      backgroundImage="example.jpg"
      likes={100}
      dislikes={20}
      enrolled={1000}
      ctaAlt={
        <React.Fragment>
          <Text fontSize={3} fontWeight="semibold">
            Included in GO1 Premium
          </Text>
          <Text fontWeight="semibold" color="subtle">
            Starting from $12 per user for teams
          </Text>
          <Button
            marginBottom={4}
            paddingTop={0}
            iconName="ChevronRight"
            flexDirection="row-reverse"
            justifyContent="flex-end"
            paddingLeft={0}
            color="accent"
            href="google.com"
          >
            Learn more
          </Button>
          <ButtonFilled>Try it free</ButtonFilled>
        </React.Fragment>
      }
      ctaButton={<ButtonFilled>Test</ButtonFilled>}
      metaData={<div>Foo</div>}
    >
      <div>Test content</div>
    </OverviewCtaCard>
  );
});
