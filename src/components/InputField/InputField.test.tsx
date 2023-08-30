import React from 'react';
import { render } from '@testing-library/react';
import { InputField } from './InputField';

describe('InputField', () => {
    it('should render correct', () => {
        const { container } = render(
            <InputField
                value="test"
                label="test field"
                message="test message"
            />,
        );

        expect(container.firstChild).toMatchSnapshot();
    });
});