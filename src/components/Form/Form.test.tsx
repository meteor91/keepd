import React from 'react';
import { render, fireEvent, screen, waitForElementToBeRemoved, act } from '@testing-library/react';
import { Form } from './Form';

interface Post {
    title: string;
    content: string;
}

describe('Form', () => {
    it('should submit form data', async () => {

        const handleSubmitMock = jest.fn();

        render(
            <Form<Post>
                onSubmit={handleSubmitMock}
            >
                <Form.Input name="title" label="Title"/>
                <Form.Input name="content" label="Content"/>
                <button type="submit">submit</button>
            </Form>,
        );

        fireEvent.input(screen.getByLabelText(/Title/), {
            target: { value: 'test post' },
        });

        fireEvent.input(screen.getByLabelText(/Content/), {
            target: { value: 'test content' },
        });

        await act(() => fireEvent.submit(screen.getByText(/submit/)));

        expect(handleSubmitMock).toHaveBeenCalledWith(
            {
                title: 'test post',
                content: 'test content',
            },
            expect.anything(),
        );
        expect(handleSubmitMock).toHaveBeenCalledTimes(1);

    });

    it('should display validation error', async () => {

        const requiredField = {
            required: { value: true, message: 'field title required' },
        };

        const handleSubmitMock = jest.fn();

        render(
            <Form<Post>
                onSubmit={handleSubmitMock}
            >
                <Form.Input name="title" label="Title" rules={requiredField}/>
                <Form.Input name="content" label="Content"/>
                <button type="submit">submit</button>
            </Form>,
        );

        fireEvent.submit(screen.getByText(/submit/));

        expect(await screen.findAllByRole('alert')).toHaveLength(1);
        expect(handleSubmitMock).not.toBeCalled();


        fireEvent.change(screen.getByLabelText(/Title/), {
            target: { value: 'test post' },
        });

        fireEvent.submit(screen.getByText(/submit/));

        await waitForElementToBeRemoved(screen.queryByRole('alert'));
        expect(handleSubmitMock).toHaveBeenCalledTimes(1);
    });
});
