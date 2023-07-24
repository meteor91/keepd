import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Layout } from './Layout';
import { NavBar } from '../NavBar';
import { DeviceTabletIcon } from '../../internal/svg-icons/DeviceTabletIcon';
import { PackageIcon } from '../../internal/svg-icons/PackageIcon';

const meta: Meta<typeof Layout> = {
    title: 'Layout',
    component: Layout,
};

export default meta;
type Story = StoryObj<typeof Layout>;

export const Basic: Story = {
    render: () => (
        <Layout>
            <Layout.Sidebar>
                <NavBar items={items}/>
            </Layout.Sidebar>
            <Layout.Content>
                some content
            </Layout.Content>
        </Layout>
    ),
};

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
