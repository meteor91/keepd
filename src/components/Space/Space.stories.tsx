import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Space } from './Space';
import { Button } from '../Button';

const meta: Meta<typeof Space> = {
    title: 'Space',
    component: Space,
    argTypes: {
        justify: {
            control: { type: 'radio' },
            options: ['start', 'end', 'center', 'space-around', 'space-between', 'space-evenly'],
        },
    },
};

export default meta;

type Story = StoryObj<typeof Space>;

export const Basic: Story = {
    render: (args) => {
        return (
            <Space justify={args.justify}>
                <Button label="btn-1"/>
                <Button label="btn-2"/>
            </Space>
        );
    },
};
