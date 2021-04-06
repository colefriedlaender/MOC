import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import AddPrice from "../AddPrice/AddPrice";

export default {
  title: "Common/AddPrice",
  component: AddPrice,
} as Meta;

const Template: Story = (args) => <AddPrice {...args} />;

export const Primary = Template.bind({});
