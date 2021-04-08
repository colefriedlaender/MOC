import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import LoginEmail, { LoginProps } from "./LoginEmail";

export default {
  title: "Common/Login",
  component: LoginEmail,
} as Meta;

const Template: Story<LoginProps> = (args) => <LoginEmail {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: "Email Address",
};
