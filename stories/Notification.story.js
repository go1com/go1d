import React from "react";
import {
  NotificationContainer,
  NotificationManager,
  Button,
  Text,
  Link,
} from "../src";

export default {
  title: "Athletic/Notification",
  parameters: {
    design: [
      {
        name: 'Guidelines',
        type: 'link',
        url: 'https://www.figma.com/file/BxQA6qbzRwjSA2AXWnO0f9/Components?node-id=5987%3A2516',
        label: 'See Notification designs in Figma',
      },
    ],
  }
};

export const Base = args => (
  <React.Fragment>
    <Button
      color="success"
      onClick={() =>
        NotificationManager.success({
          message: (
            <Text>
              <Text fontWeight="semibold">Success!</Text> This is a message{" "}
              <Link href="https://foo.com">read more</Link>.
            </Text>
          ),
          options: {
            lifetime: 3000,
            isOpen: true,
          },
        })
      }
    >
      Push Notification
    </Button>
    <Button
      color="warning"
      onClick={() =>
        NotificationManager.warning({
          message: (
            <Text>
              <Text fontWeight="semibold">Warning!</Text> This is a message{" "}
              <Link href="https://foo.com">read more</Link>.
            </Text>
          ),
          options: {
            lifetime: 3000,
            isOpen: true,
          },
        })
      }
    >
      Push Notification
    </Button>
    <Button
      color="danger"
      onClick={() =>
        NotificationManager.danger({
          message: (
            <Text>
              <Text fontWeight="semibold">Danger!</Text> This is a message{" "}
              <Link href="https://foo.com">read more</Link>.
            </Text>
          ),
          options: {
            lifetime: 3000,
            isOpen: true,
          },
        })
      }
    >
      Push Notification
    </Button>
    <NotificationContainer />
  </React.Fragment>
);
