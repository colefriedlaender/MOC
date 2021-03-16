import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Performance, { PerformanceProps } from "./Performance";

export default {
  title: "Common/Performance",
  component: Performance,
} as Meta;

const Template: Story<PerformanceProps> = (args) => <Performance {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  head: "Performance",
  performanceText: "Compared to the MSCI World Equity the Stock performes",
  performanceRate: "2,56",
};
