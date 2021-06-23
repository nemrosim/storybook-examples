import React from "react";
import { Meta, Story } from "@storybook/react";
import { Button, ButtonProps, Container } from "@material-ui/core";

export default {
    component: Button,
    title: 'Material/Button-tsx',
    argTypes: {
        disabled: {type: 'boolean'},
        disableElevation: {type: 'boolean'},
        disableFocusRipple: {type: 'boolean'},
        fullWidth: {type: 'boolean'},
        href: {type: 'string'},
        variant: {
            options: ['contained', 'outlined', 'text'],
            control: {
                type: 'inline-radio'
            }
        },
        color: {
            options: ['default', 'inherit', 'primary', 'secondary'],
            control: {
                type: 'select'
            }
        }
    }
} as Meta;

const Template: Story<ButtonProps> = (args) => {
    return (
        <Container>
            <Button {...args} >Hello world</Button>
        </Container>
    );
};

/**
 * Hello from the docs
 */
export const SomeNameYouLike = Template.bind({});
SomeNameYouLike.args = {
    variant: "contained",
    color: "primary",
};
