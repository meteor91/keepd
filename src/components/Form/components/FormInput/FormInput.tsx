import React from 'react';
import { useFormContext, Controller, type UseControllerProps } from 'react-hook-form';
import { InputField, type InputFieldProps } from '../../../InputField';
import { Col, Row } from '../../../Grid';

export interface FormInputProps extends Omit<InputFieldProps, 'value'> {
    name: string;
    rules?: UseControllerProps['rules'];
}

export const FormInput: React.FC<FormInputProps> = (props) => {
    const {
        name,
        label,
        rules,
        ...rest
    } = props;
    const methods = useFormContext();

    return (
        <Row>
            <Col span={24}>
                <Controller
                    name={name}
                    control={methods.control}
                    rules={rules}
                    render={({ field, fieldState }) => (
                        <InputField
                            label={label}
                            name={name}
                            {...rest}
                            value={field.value}
                            onChange={field.onChange}
                            error={fieldState.invalid}
                            message={fieldState.error?.message}
                        />
                    )}
                />
            </Col>
        </Row>
    );
};
