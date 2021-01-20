import React from "react";
import { AuthorSelector } from "../src";

export default {
  title: "Original Go1d/AuthorSelector",
};

export const BasicAuthorSelector = () => (
  <AuthorSelector
    createable={true}
    options={[
      "hi@hi.com",
      "hi7@hi.com",
      "hasdasdi@hi.com",
      "hasdasdasi@hi.com",
      "aasdasdhi@hi.com",
      "hzxczxci@hi.com",
      "hzxczxci@hi.com",
      "h2323i@hi.com",
      "hasdsadi@hi.com",
      "hasdasdi@hi.com",
      "hzczxci@hi.com",
      "hiasdasd@hi.com",
      "hi34343@hi.com",
      "hi45354@hi.com",
      "hi345@hi.com",
      "hi2@hi.com",
      "hi3@hi.com",
      "h5@hi.com",
      "bye@bye.com",
    ]}
    mapEmailToAuthor={(email) => ({
      firstName: email.split("@")[0],
      lastName: "lastName",
      mail: email,
    })}
  />
);
