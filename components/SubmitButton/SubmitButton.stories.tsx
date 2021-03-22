import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import SubmitButton, { SubmitButtonProps } from "./SubmitButton";

export default {
  title: "Common/SubmitButton",
  component: SubmitButton,
} as Meta;

const Template: Story<SubmitButtonProps> = (args) => <SubmitButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  content: "Reset Password",
};
