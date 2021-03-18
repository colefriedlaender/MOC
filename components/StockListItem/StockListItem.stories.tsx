import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import StockListItem, { StockProps } from "./StockListItem";

export default {
  title: "Common/StockListItem",
  component: StockListItem,
} as Meta;

const Template: Story<StockProps> = (args) => <StockListItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  stockName: "APPL INC.",
  stockRate: "2,45",
  amount: "3",
  stockPrice: "100,56",
  total: "400",
};
