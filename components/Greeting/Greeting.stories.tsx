import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Greeting, { Name } from "./Greeting";

export default {
  title: "Common/Greeting",
  component: Greeting,
} as Meta;

const Template: Story<Name> = (args) => <Greeting {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: "Cole Friedlaender",
};
