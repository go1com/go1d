import * as React from "react";
import { cleanup, render } from "react-testing-library";
import { Pill, Text, View } from "../../index";
import EditFocusModeHeader from "./index";

import IconCheck from "../Icons/Check";
import IconEdit from "../Icons/Edit";
import IconEye from "../Icons/Eye";
import IconTrash from "../Icons/Trash";

afterEach(cleanup);

it("renders without crashing with all props", () => {
  render(<EditFocusModeHeader returnHref="#test" title="How to Sell" />);
});

it("renders without crashing with all props", () => {
  render(
    <EditFocusModeHeader
      returnHref="#test"
      title="How to Sell"
      subtitle={
        <View flexDirection="row" alignItems="center">
          <View marginRight={4}>
            <Text
              textTransform="uppercase"
              fontWeight="semibold"
              fontSize={1}
              color="subtle"
            >
              Interactive
            </Text>
          </View>
          <View marginRight={4}>
            <Pill
              color="accent"
              fontSize={1}
              fontWeight="semibold"
              paddingX={3}
              paddingY={1}
            >
              Published
            </Pill>
          </View>
          <View marginRight={4} flexDirection="row" alignItems="center">
            <IconCheck size={1} color="accent" marginRight={2} />
            <Text fontSize={1}>Saved</Text>
          </View>
        </View>
      }
      headerSuffixItems={[
        {
          title: "Done",
          href: "#testing",
          icon: IconCheck,
        },
        {
          title: "Visibility and Access",
          href: "#testing",
          icon: IconEye,
          iconColor: "muted",
        },
        {
          title: "MenuItem1",
          href: "#testing",
          icon: IconEdit,
        },
        {
          title: "DeleteMenuItem",
          href: "#testing",
          icon: IconTrash,
          color: "danger",
        },
      ]}
    />
  );
});
