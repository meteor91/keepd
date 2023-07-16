import React from 'react';
import { Col, Row } from '../../../Grid';

export interface FormItemProps {
    children?: React.ReactNode;
}

export const FormItem: React.FC<FormItemProps> = (props) => {
    const {
        children,
    } = props;

    return (
        <Row>
            <Col span={24}>
                {children}
            </Col>
        </Row>
    );
};
