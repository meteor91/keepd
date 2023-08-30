import React from 'react';
import { render } from '@testing-library/react';

import { Layout } from './Layout';

describe('Layout', () => {
    it('should render correctly', () => {
        const { container } = render(
            <Layout>
                <Layout.Sidebar>sidebar</Layout.Sidebar>
                <Layout direction="vertical">
                    <Layout.Header>Header</Layout.Header>
                    <Layout.Content>content</Layout.Content>
                </Layout>
            </Layout>,
        );
        expect(container.firstChild).toMatchSnapshot();
    });
});
