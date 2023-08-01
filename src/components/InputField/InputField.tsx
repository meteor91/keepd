import React, { useId } from 'react';
import clsx from 'clsx';
import { Input, type InputProps } from '../Input';
import styles from './InputField.module.less';

export interface InputFieldProps extends InputProps {
    label?: string;
    message?: string;
    name?: string;
}

export const InputField: React.FC<InputFieldProps> = (props) => {
    const {
        label,
        message,
        error,
        name,
        ...rest
    } = props;

    const id = useId();
    const inputId = `${name ?? 'input'}-${id}`;

    return (
        <div className={styles.formInput}>
            {label && (
                <label className={styles.label} htmlFor={inputId}>
                    {label}
                </label>
            )}

            <Input
                error={error}
                id={inputId}
                {...rest}
            />

            {message && (
                <div className={clsx(styles.message, error && styles.error)} role="alert">
                    {message}
                </div>
            )}
        </div>
    );
};
