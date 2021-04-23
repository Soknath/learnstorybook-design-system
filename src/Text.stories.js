import React from "react";

import { Text } from "./Text";

export default {
  title: "Design System/Text",
  component: Text,
};

export const Sizes = (args) => (
  <div>
    <Text {...args} />
  </div>
);
Sizes.args = {
  size: "small",
  isLink: false
};


export const Standard = (args) => <Text {...args} />;
Standard.args = {
  size: "large",
  isLink: false
};

export const Large = (args) => (
  <div>
    <Text isLink size="large" />
  </div>
);
