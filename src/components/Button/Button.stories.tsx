import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
    /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
    title: 'Button',
    component: Button,
    argTypes: {
        size: {
            control: { type: 'radio' },
            options: ['sm', 'md', 'lg'],
        },
        variant: {
            control: { type: 'radio' },
            options: ['primary', 'secondary'],
        },
        label: {
            control: 'text',
        },
        disabled: { control: 'boolean' },
    },
    args: {
        label: 'Button',
        size: 'md',
        variant: 'primary',
        disabled: false,
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Basic: Story = {
    render: (args) => <Button {...args} />,
};
