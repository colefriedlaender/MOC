import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Artical, { ArticalProps } from "./Artical";

export default {
  title: "Common/Artical",
  component: Artical,
} as Meta;

const Template: Story<ArticalProps> = (args) => <Artical {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  linkNameOne: "www.acctive.digital",
  linkNameTwo: "www.acctive.digital",
  linkNameThree: "www.acctive.digital",
  linkNameFour: "www.acctive.digital",
  linkNameFive: "www.acctive.digital",
};
