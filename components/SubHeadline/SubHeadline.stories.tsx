import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import SubHeadline, { SubHeadlineProps } from "./SubHeadline";

export default {
  title: "Common/SubHeadline",
  component: SubHeadline,
} as Meta;

const Template: Story<SubHeadlineProps> = (args) => <SubHeadline {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  date: "14.03.2020",
};
