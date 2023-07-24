import React from 'react';
import { render } from '@testing-library/react';

import { Layout } from './Layout';

describe('Layout', () => {
    it('should render correctly', () => {
        const { container } = render(
            <Layout>
                <Layout.Sidebar>sidebar</Layout.Sidebar>
                <Layout.Content>content</Layout.Content>
            </Layout>,
        );
        expect(container.firstChild).toMatchSnapshot();
    });
});
