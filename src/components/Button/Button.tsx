import React from 'react';
import clsx from 'clsx';

import style from './Button.module.less';

export interface ButtonProps {
    label: string;
    disabled?: boolean;
    onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
    variant?: 'primary' | 'secondary';
    type?: 'button' | 'submit' | 'reset';
    size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = (props) => {
    const {
        label,
        variant,
        disabled,
        onClick,
        type,
        size = 'md',
    } = props;

    const classNames = clsx({
        [style['btn-sm']]: size === 'sm',
        [style.btn]: size === 'md',
        [style['btn-lg']]: size === 'lg',
        [style['btn-secondary']]: variant === 'secondary',
    });

    return (
        <button
            onClick={onClick}
            className={classNames}
            disabled={disabled}
            type={type}
        >
            {label}
        </button>
    );
};
