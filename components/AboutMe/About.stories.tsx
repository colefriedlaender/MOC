import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import About from "./About";
export default {
  title: "Common/About",
  component: About,
} as Meta;

const Template: Story = (args) => <About {...args} />;

export const Primary = Template.bind({});
