import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Articals, { ArticalsProps } from "./Articls";

export default {
  title: "Common/Articals",
  component: Articals,
} as Meta;

const Template: Story<ArticalsProps> = (args) => <Articals {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  linkNameOne: "www.acctive.digital",
  linkNameTwo: "www.acctive.digital",
  linkNameThree: "www.acctive.digital",
  linkNameFour: "www.acctive.digital",
  linkNameFive: "www.acctive.digital",
};
