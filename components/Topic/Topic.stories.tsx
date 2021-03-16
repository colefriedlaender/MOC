import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Topic, { TopicProps } from "./Topic";

export default {
  title: "Common/Topic",
  component: Topic,
} as Meta;

const Template: Story<TopicProps> = (args) => <Topic {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  topic: "Overview",
};
