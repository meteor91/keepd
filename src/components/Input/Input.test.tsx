import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Input } from './Input';

describe('Input', () => {
    it('should render correct', () => {
        const onChangeMock = jest.fn();

        const { container } = render(
            <Input
                onChange={onChangeMock}
                value = 'Test'
                placeholder= 'Enter text'
                error={true}
            />,
        );

        expect(container.firstChild).toMatchSnapshot();
    });

    it('should invoke onChange when change event fired', () => {
        const onChangeMock = jest.fn();

        render(
            <Input
                onChange={onChangeMock}
                value='test'
            />,
        );

        fireEvent.change(screen.getByRole('textbox'), { target: { value: 'hello' } });

        expect(onChangeMock).toHaveBeenCalledTimes(1);
    });

    it('should be disabled when disabled prop is true', () => {
        render(
            <Input
                disabled={true}
                value='test'
            />,
        );

        expect(screen.getByRole('textbox')).toBeDisabled();
    });
});
