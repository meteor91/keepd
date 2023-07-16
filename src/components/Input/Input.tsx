import React from 'react';
import clsx from 'clsx';
import styles from './Input.module.less';

export interface InputProps {
    value: string;
    placeholder?: string;
    disabled?: boolean;
    error?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    name?: string;
    type?: 'password';
}

export const Input: React.FC<InputProps> = (props) => {
    const {
        value,
        placeholder,
        disabled,
        error,
        onChange,
        type,
        name,
    } = props;
    return (
        <input
            className={clsx(styles.input, error && styles['input-error'])}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            disabled={disabled}
            type={type}
            name={name}
        />
    );
};
