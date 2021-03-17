import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Balance, { BalanceProps } from "./Balance";

export default {
  title: "Common/Balance",
  component: Balance,
} as Meta;

const Template: Story<BalanceProps> = (args) => <Balance {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  total: "11,300,34",
  returnValue: "2,45",
};
