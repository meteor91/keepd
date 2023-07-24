import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { NavBar, type NavBarProps } from './NavBar';
import { DeviceTabletIcon } from '../../internal/svg-icons/DeviceTabletIcon';
import { PackageIcon } from '../../internal/svg-icons/PackageIcon';

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
    },
    {
        icon: <PackageIcon />,
        label: 'item 2',
    },
];

export const Basic: Story = {
    render: (args) => (
        <NavBar bordered={args.bordered} items={items} />
    ),
};
