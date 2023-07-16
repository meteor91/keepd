import React from 'react';
import clsx from 'clsx';
import { Input, type InputProps } from '../Input';
import styles from './InputField.module.less';

export interface InputFieldProps extends InputProps {
    label?: string;
    message?: string;
}

export const InputField: React.FC<InputFieldProps> = (props) => {
    const {
        label,
        message,
        error,
        ...rest
    } = props;
    return (
        <div className={styles.formInput}>
            {label && (
                <label className={styles.label}>
                    {label}
                </label>
            )}

            <Input
                error={error}
                {...rest}
            />

            {message && (
                <div className={clsx(styles.message, error && styles.error)}>
                    {message}
                </div>
            )}
        </div>
    );
};
