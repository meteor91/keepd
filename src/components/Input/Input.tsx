import React from 'react';
import clsx from 'clsx';
import styles from './Input.module.less';
import { fixControlledValue } from '../../utils/commonUtils';

export interface InputProps {
    value: string;
    placeholder?: string;
    disabled?: boolean;
    error?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    name?: string;
    type?: 'password';
    id?: string;
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
        id,
    } = props;
    return (
        <input
            className={clsx(styles.input, error && styles['input-error'])}
            placeholder={placeholder}
            onChange={onChange}
            value={fixControlledValue(value)}
            disabled={disabled}
            type={type}
            name={name}
            id={id}
        />
    );
};
