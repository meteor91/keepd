import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import { Button } from './Button';

describe('Button', () => {
    it('should render correctly', () => {
        const { container } = render(<Button label="test" />);
        expect(container.firstChild).toMatchSnapshot();
    });

    it('should render correctly disabled state', () => {
        const { container } = render(<Button label="test" disabled />);
        expect(container.firstChild).toMatchSnapshot();
    });

    it('should call onClick only once when clicked', () => {
        const onClickMock = jest.fn();
        render(<Button label="test" onClick={onClickMock}/>);
        const button = screen.getByText('test');

        fireEvent.click(button);

        expect(onClickMock).toHaveBeenCalledTimes(1);
    });
});
