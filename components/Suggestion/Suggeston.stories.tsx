import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Suggestion, { SuggestionProps } from "./Suggestion";

export default {
  title: "Common/Suggestion",
  component: Suggestion,
} as Meta;

const Template: Story<SuggestionProps> = (args) => <Suggestion {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: "Bio-Rad Laboratories, Inc.",
  price: 130.54,
};
