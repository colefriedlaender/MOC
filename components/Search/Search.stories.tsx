import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Search, { SearchProps } from "./Search";

export default {
  title: "Common/Search",
  component: Search,
} as Meta;

const Template: Story<SearchProps> = (args) => <Search {...args} />;

export const Primary = Template.bind({});
