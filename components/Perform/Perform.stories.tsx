import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Perform, { PerformProps } from "./Perform";

export default {
  title: "Common/Perform",
  component: Perform,
} as Meta;

const Template: Story<PerformProps> = (args) => <Perform {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  head: "Performance",
  performanceText: "Compared to the MSCI World Equity the Stock performes",
  performanceRate: "2,56",
};
