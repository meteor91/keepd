import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { NavBar } from './NavBar';
import { DeviceTabletIcon, PackageIcon } from '../../icons';

const meta: Meta<typeof NavBar> = {
    title: 'NavBar',
    component: NavBar,
    argTypes: {
        bordered: { control: 'boolean' },
    },
    args: {
        bordered: true,
    },
};

export default meta;

type Story = StoryObj<typeof NavBar>;

const items = [
    {
        icon: <DeviceTabletIcon />,
        label: 'item 1',
        key: 1,
    },
    {
        icon: <PackageIcon />,
        label: 'item 2',
        key: 2,
    },
];

export const Basic: Story = {
    render: (args) => (
        <NavBar bordered={args.bordered} items={items} />
    ),
};
