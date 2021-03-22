import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import SettingsButton from "./SettingsButton";

export default {
  title: "Common/SettingsButton",
  component: SettingsButton,
} as Meta;

const Template: Story = (args) => <SettingsButton {...args} />;

export const Primary = Template.bind({});
