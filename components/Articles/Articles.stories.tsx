import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Articles, { ArticlesProps } from "./Articles";

export default {
  title: "Common/Articles",
  component: Articles,
} as Meta;

const Template: Story<ArticlesProps> = (args) => <Articles {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  linkNameOne: "www.acctive.digital",
  linkNameTwo: "www.acctive.digital",
  linkNameThree: "www.acctive.digital",
  linkNameFour: "www.acctive.digital",
  linkNameFive: "www.acctive.digital",
};
