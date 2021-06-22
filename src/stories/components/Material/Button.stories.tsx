import React from "react";
import { Meta, Story } from "@storybook/react";
import { Button, ButtonProps, Container } from "@material-ui/core";

export default {
    component: Button,
    title: 'Material/Button',
} as Meta;

const Template: Story<ButtonProps> = (args) => {
    return (
        <Container>
            <Button {...args} >Hello world</Button>
        </Container>
    );
};

export const SomeNameYouLike = Template.bind({});
SomeNameYouLike.args = {
    variant: "contained",
    color: "primary",
};
