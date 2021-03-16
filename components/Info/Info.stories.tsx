import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Info, { InfoProps } from "./Info";

export default {
  title: "Common/Info",
  component: Info,
} as Meta;

const Template: Story<InfoProps> = (args) => <Info {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  firstWord: "Yearly",
  otherWords: "Return Rate",
  information: "2,54%",
};
