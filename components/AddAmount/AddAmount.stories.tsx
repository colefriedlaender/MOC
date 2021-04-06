import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import AddAmount, { AddProps } from "./AddAmount";

export default {
  title: "Common/AddAmount",
  component: AddAmount,
} as Meta;

const Template: Story<AddProps> = (args) => <AddAmount {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  headline: "Amount",
};
