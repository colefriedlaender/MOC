import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import SubHeadline, { SubHeaderProps } from "./SubHeadline";

export default {
  title: "Common/Subheadline",
  component: SubHeadline,
} as Meta;

const Template: Story<SubHeaderProps> = (args) => <SubHeadline {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  date: "14.03.2020",
};
