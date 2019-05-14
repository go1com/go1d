import * as React from "react";
import { render } from "react-testing-library";
import PageHeader from "./index";

const mock = jest.fn();

it("renders without crashing without any optional props", () => {
  render(
    <PageHeader title="Test">
      <div>header</div>
    </PageHeader>
  );
});

it("renders without crashing with all props", () => {
  render(
    <PageHeader
      title="Test"
      showMenuButton={true}
      onMenuButtonClick={mock}
      background="dark"
      breadcrumbHref="/test/"
      breadcrumbTitle="why"
    >
      <div>header</div>
    </PageHeader>
  );
});
