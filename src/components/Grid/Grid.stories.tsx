import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Row } from './Row';
import { Col } from './Col';
import { Button } from '../Button';

const meta: Meta<typeof Row> = {
    title: 'Row',
    component: Row,
};

export default meta;

type Story = StoryObj<typeof Row>;

export const Basic: Story = {
    render: (args) => {
        return (
            <Row>
                <Col span={6}>
                    <div style={{ display: 'flex' }}>
                        <div>
                            <Button label="btn"/>
                        </div>
                        <div>
                            <Button label="btn"/>
                        </div>
                    </div>
                </Col>
            </Row>
        );
    },
};
