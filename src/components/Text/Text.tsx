import React from 'react';
import clsx from 'clsx';

import style from './Text.module.less';

interface TextProps {
    children?: React.ReactNode;
    type?: 'error' | 'success';
}
export const Text: React.FC<TextProps> = (props) => {
    const { type, children } = props;
    const classNames = clsx(
        style.text,
        {
            [style.success]: type === 'success',
            [style.error]: type === 'error',
        },
    );
    return (
        <div className={classNames}>
            {children}
        </div>
    );
};
