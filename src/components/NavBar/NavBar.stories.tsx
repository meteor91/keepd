import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { NavBar, type NavBarProps } from './NavBar';
import { DeviceTabletIcon } from '../../internal/svg-icons/DeviceTabletIcon';
import { PackageIcon } from '../../internal/svg-icons/PackageIcon';

const meta: Meta<typeof NavBar> = {
    title: 'NavBar',
    component: NavBar,
};

export default meta;

type Story = StoryObj<typeof NavBar>;

export const Basic: Story = {
    render: () => <NavBar items={[
        {
            icon: <DeviceTabletIcon />,
            label: 'item 1',
        },
        {
            icon: <PackageIcon />,
            label: 'item 2',
        },
    ]}/>,
};
