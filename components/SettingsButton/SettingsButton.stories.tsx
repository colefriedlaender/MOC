import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import SettingsButton, { SettingsButtonProps } from "./SettingsButton";

export default {
  title: "Common/SettingsButton",
  component: SettingsButton,
} as Meta;

const Template: Story<SettingsButtonProps> = (args) => (
  <SettingsButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  total: "11,300,34",
  returnValue: "2,45",
};
