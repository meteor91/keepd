import React from 'react';
import { render } from '@testing-library/react';

import { Space } from './Space';

describe('Space', () => {
    it('should render correctly', () => {
        const { container } = render(
            <Space justify="end">
                <div>test 1</div>
                <div>test 2</div>
            </Space>,
        );

        expect(container.firstChild).toMatchSnapshot();
    });
});