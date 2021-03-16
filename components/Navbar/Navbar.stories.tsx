import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Navbar from "./Navbar";

export default {
  title: "Common/Navbar",
  component: Navbar,
} as Meta;

const Template: Story = () => <Navbar />;

export const Primary = Template.bind({});
