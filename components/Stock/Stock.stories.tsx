import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Stock, { StockProps } from "./Stock";

export default {
  title: "Common/Stock",
  component: Stock,
} as Meta;

const Template: Story<StockProps> = (args) => <Stock {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  stockName: "APPL INC.",
  stockRate: "2,45",
  amount: "3",
  stockPrice: "100,56",
  total: "400",
};
