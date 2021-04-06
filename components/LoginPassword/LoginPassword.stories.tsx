import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import LoginPassword, { LoginProps } from "./LoginPassword";

export default {
  title: "Common/Login",
  component: LoginPassword,
} as Meta;

const Template: Story<LoginProps> = (args) => <LoginPassword {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: "Password",
};
