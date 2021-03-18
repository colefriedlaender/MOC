import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import BackButton, { BackButtonProps } from "./BackButton";

export default {
  title: "Common/BackButton",
  component: BackButton,
} as Meta;

const Template: Story<BackButtonProps> = (args) => <BackButton {...args} />;

export const Primary = Template.bind({});
