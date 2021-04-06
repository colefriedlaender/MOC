import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import AddPrice, { AddPriceProps } from "../AddPrice/AddPrice";

export default {
  title: "Common/AddPrice",
  component: AddPrice,
} as Meta;

const Template: Story<AddPriceProps> = (args) => <AddPrice {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  value: "Amount",
  onChange: alert("Hallo"),
};
