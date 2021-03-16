import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Information, { InformationProps } from "./Information";

export default {
  title: "Common/Information",
  component: Information,
} as Meta;

const Template: Story<InformationProps> = (args) => <Information {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  firstWord: "Yearly",
  secondWord: "Return Rate",
  information: "2,54%",
};
