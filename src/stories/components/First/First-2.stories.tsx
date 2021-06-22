import React from "react";
import { Meta, Story } from "@storybook/react";

const First = () => {
    return <div>Hello world</div>
}

export default {
    component: First,
    title: 'Hello/World/Components/First-2',
} as Meta;

const Template: Story = (args) => <First {...args} />;

export const SomeNameYouLike = Template.bind({});
export const AnotherNameYouLike = Template.bind({});
export const SomeOtherNameYouLike = Template.bind({});
