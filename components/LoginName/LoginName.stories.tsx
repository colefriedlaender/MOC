import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import LoginName, { LoginProps } from "./LoginName";

export default {
  title: "Common/Login",
  component: LoginName,
} as Meta;

const Template: Story<LoginProps> = (args) => <LoginName {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: "Email Address",
};
