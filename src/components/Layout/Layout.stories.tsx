import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Layout } from './Layout';
import { NavBar } from '../NavBar';
import { DeviceTabletIcon, PackageIcon } from '../../icons';
import { Button } from '../Button';

const meta: Meta<typeof Layout> = {
    title: 'Layout',
    component: Layout,
};

export default meta;
type Story = StoryObj<typeof Layout>;

const { Sidebar, Header, Content } = Layout;
export const Basic: Story = {
    render: () => (
        <Layout>
            <Sidebar>
                <NavBar items={items}/>
            </Sidebar>
            <Layout direction="vertical">
                <Header>
                    <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
                        <Button label="logout" variant="secondary"/>
                    </div>
                </Header>
                <Content>
                    {/* some content */}
                </Content>
            </Layout>
        </Layout>
    ),
};

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
